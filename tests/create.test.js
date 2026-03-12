const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const { validateProjectName } = require('../lib/create');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  \x1b[32m✓\x1b[0m ${message}`);
    passed++;
  } else {
    console.error(`  \x1b[31m✗\x1b[0m ${message}`);
    failed++;
  }
}

// ─── Validation du nom de projet ───

console.log('');
console.log('\x1b[34m▸ Validation du nom de projet\x1b[0m');

assert(validateProjectName('mon-projet') === null, 'accepte "mon-projet"');
assert(validateProjectName('projet123') === null, 'accepte "projet123"');
assert(validateProjectName('a.b_c-d') === null, 'accepte "a.b_c-d"');
assert(validateProjectName('3dproject') === null, 'accepte "3dproject"');

assert(validateProjectName('') !== null, 'rejette chaîne vide');
assert(validateProjectName('   ') !== null, 'rejette espaces seuls');
assert(validateProjectName('Mon Projet') !== null, 'rejette espaces');
assert(validateProjectName('MonProjet') !== null, 'rejette majuscules');
assert(validateProjectName('-projet') !== null, 'rejette tiret en début');
assert(validateProjectName('.projet') !== null, 'rejette point en début');
assert(validateProjectName('projet@test') !== null, 'rejette caractères spéciaux');
assert(validateProjectName('a'.repeat(215)) !== null, 'rejette nom trop long');

// ─── CLI --version ───

console.log('');
console.log('\x1b[34m▸ CLI --version\x1b[0m');

const cliPath = path.resolve(__dirname, '..', 'bin', 'cli.js');
const pkgPath = path.resolve(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const versionOutput = execSync(`node "${cliPath}" --version`, { encoding: 'utf8' }).trim();
assert(versionOutput === pkg.version, `--version affiche "${versionOutput}" (attendu: "${pkg.version}")`);

const versionShort = execSync(`node "${cliPath}" -v`, { encoding: 'utf8' }).trim();
assert(versionShort === pkg.version, `-v affiche "${versionShort}"`);

// ─── CLI --help ───

console.log('');
console.log('\x1b[34m▸ CLI --help\x1b[0m');

const helpOutput = execSync(`node "${cliPath}" --help`, { encoding: 'utf8' });
assert(helpOutput.includes('create'), '--help mentionne la commande create');
assert(helpOutput.includes('update'), '--help mentionne la commande update');
assert(helpOutput.includes('--version'), '--help mentionne --version');

const helpShort = execSync(`node "${cliPath}" -h`, { encoding: 'utf8' });
assert(helpShort.includes('create'), '-h fonctionne aussi');

// ─── CLI sans arguments ───

console.log('');
console.log('\x1b[34m▸ CLI sans arguments\x1b[0m');

const noArgsOutput = execSync(`node "${cliPath}"`, { encoding: 'utf8' });
assert(noArgsOutput.includes('create'), 'affiche l\'aide sans arguments');

// ─── CLI commande inconnue ───

console.log('');
console.log('\x1b[34m▸ CLI commande inconnue\x1b[0m');

try {
  execSync(`node "${cliPath}" foobar`, { encoding: 'utf8', stdio: 'pipe' });
  assert(false, 'devrait échouer avec une commande inconnue');
} catch (err) {
  assert(err.stderr.includes('inconnue'), 'affiche erreur "commande inconnue"');
}

// ─── CLI create sans nom ───

console.log('');
console.log('\x1b[34m▸ CLI create sans nom\x1b[0m');

try {
  execSync(`node "${cliPath}" create`, { encoding: 'utf8', stdio: 'pipe' });
  assert(false, 'devrait échouer sans nom de projet');
} catch (err) {
  assert(err.stderr.includes('nom du projet'), 'affiche erreur nom requis');
}

// ─── CLI create avec nom invalide ───

console.log('');
console.log('\x1b[34m▸ CLI create avec nom invalide\x1b[0m');

try {
  execSync(`node "${cliPath}" create "Mon Projet"`, { encoding: 'utf8', stdio: 'pipe' });
  assert(false, 'devrait échouer avec un nom invalide');
} catch (err) {
  assert(err.stderr.includes('espaces'), 'affiche erreur sur les espaces');
}

// ─── Scaffolding complet ───

console.log('');
console.log('\x1b[34m▸ Scaffolding complet (sans npm install)\x1b[0m');

// Créer un projet de test dans un dossier temporaire
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dsfr-test-'));
const testProjectName = 'test-scaffold';
const testProjectPath = path.join(tmpDir, testProjectName);

try {
  execSync(`node "${cliPath}" create ${testProjectName}`, {
    cwd: tmpDir,
    encoding: 'utf8',
    stdio: 'pipe',
    env: { ...process.env, DSFR_SKIP_INSTALL: '1' },
  });
} catch (err) {
  // npm install peut échouer dans le contexte de test, on vérifie juste les fichiers
}

// Vérifier la structure
assert(fs.existsSync(testProjectPath), 'dossier projet créé');
assert(fs.existsSync(path.join(testProjectPath, 'package.json')), 'package.json existe');
assert(fs.existsSync(path.join(testProjectPath, 'index.html')), 'index.html existe');
assert(fs.existsSync(path.join(testProjectPath, 'CLAUDE.md')), 'CLAUDE.md existe');
assert(fs.existsSync(path.join(testProjectPath, 'PROJET.md')), 'PROJET.md existe');
assert(fs.existsSync(path.join(testProjectPath, '.gitignore')), '.gitignore existe');
assert(fs.existsSync(path.join(testProjectPath, 'pages')), 'dossier pages/ existe');
assert(fs.existsSync(path.join(testProjectPath, 'assets', 'css')), 'dossier assets/css/ existe');
assert(fs.existsSync(path.join(testProjectPath, 'assets', 'js')), 'dossier assets/js/ existe');
assert(fs.existsSync(path.join(testProjectPath, 'assets', 'img')), 'dossier assets/img/ existe');
assert(fs.existsSync(path.join(testProjectPath, 'specs', 'README.md')), 'specs/README.md existe');

// Vérifier le remplacement de {{PROJECT_NAME}}
const claudeMd = fs.readFileSync(path.join(testProjectPath, 'CLAUDE.md'), 'utf8');
assert(claudeMd.includes(testProjectName), 'CLAUDE.md contient le nom du projet');
assert(!claudeMd.includes('{{PROJECT_NAME}}'), 'CLAUDE.md ne contient plus de placeholder');

const projetMd = fs.readFileSync(path.join(testProjectPath, 'PROJET.md'), 'utf8');
assert(projetMd.includes(testProjectName), 'PROJET.md contient le nom du projet');

const indexHtml = fs.readFileSync(path.join(testProjectPath, 'index.html'), 'utf8');
assert(indexHtml.includes(testProjectName), 'index.html contient le nom du projet');
assert(indexHtml.includes('data-fr-scheme="system"'), 'index.html a le dark mode');
assert(indexHtml.includes('fr-skiplinks'), 'index.html a les skiplinks');
assert(indexHtml.includes('fr-header'), 'index.html a le header DSFR');
assert(indexHtml.includes('fr-footer'), 'index.html a le footer DSFR');

// Vérifier le package.json généré
const generatedPkg = JSON.parse(fs.readFileSync(path.join(testProjectPath, 'package.json'), 'utf8'));
assert(generatedPkg.name === testProjectName, 'package.json a le bon nom');
assert(generatedPkg.private === true, 'package.json est privé');
assert(generatedPkg.scripts && generatedPkg.scripts.dev, 'package.json a le script dev');
assert(generatedPkg.dependencies['@gouvfr/dsfr'], 'package.json a @gouvfr/dsfr');
assert(generatedPkg.dependencies['@timotheej/dsfr-toolkit'], 'package.json a @timotheej/dsfr-toolkit');

// Vérifier que le CLAUDE.md contient les sections du workflow
assert(claudeMd.includes('PHASE 0'), 'CLAUDE.md contient Phase 0 (initialisation)');
assert(claudeMd.includes('PHASE 1'), 'CLAUDE.md contient Phase 1 (analyse)');
assert(claudeMd.includes('PHASE 2'), 'CLAUDE.md contient Phase 2 (wireframe)');
assert(claudeMd.includes('PHASE 3'), 'CLAUDE.md contient Phase 3 (composants)');
assert(claudeMd.includes('PHASE 4'), 'CLAUDE.md contient Phase 4 (build)');
assert(claudeMd.includes('PHASE 5'), 'CLAUDE.md contient Phase 5 (review)');

// Nettoyage
fs.rmSync(tmpDir, { recursive: true, force: true });

// ─── Dossier existant ───

console.log('');
console.log('\x1b[34m▸ Rejet si dossier existe déjà\x1b[0m');

const tmpDir2 = fs.mkdtempSync(path.join(os.tmpdir(), 'dsfr-test-'));
fs.mkdirSync(path.join(tmpDir2, 'existing-project'));

try {
  execSync(`node "${cliPath}" create existing-project`, {
    cwd: tmpDir2,
    encoding: 'utf8',
    stdio: 'pipe',
  });
  assert(false, 'devrait échouer si le dossier existe');
} catch (err) {
  assert(err.stderr.includes('existe déjà'), 'affiche erreur dossier existant');
}

fs.rmSync(tmpDir2, { recursive: true, force: true });

// ─── Résultats ───

console.log('');
console.log('═══════════════════════════════════════════');
if (failed === 0) {
  console.log(`\x1b[32m  ${passed} tests passés, 0 échoués\x1b[0m`);
} else {
  console.log(`\x1b[31m  ${passed} passés, ${failed} échoués\x1b[0m`);
}
console.log('═══════════════════════════════════════════');
console.log('');

process.exit(failed > 0 ? 1 : 0);
