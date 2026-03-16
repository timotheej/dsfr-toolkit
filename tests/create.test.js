const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const { validateProjectName } = require('../lib/create');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  \x1b[32m\u2713\x1b[0m ${message}`);
    passed++;
  } else {
    console.error(`  \x1b[31m\u2717\x1b[0m ${message}`);
    failed++;
  }
}

// --- Validation du nom de projet ---

console.log('');
console.log('\x1b[34m\u25b8 Validation du nom de projet\x1b[0m');

assert(validateProjectName('mon-projet') === null, 'accepte "mon-projet"');
assert(validateProjectName('projet123') === null, 'accepte "projet123"');
assert(validateProjectName('a.b_c-d') === null, 'accepte "a.b_c-d"');
assert(validateProjectName('3dproject') === null, 'accepte "3dproject"');

assert(validateProjectName('') !== null, 'rejette chaine vide');
assert(validateProjectName('   ') !== null, 'rejette espaces seuls');
assert(validateProjectName('Mon Projet') !== null, 'rejette espaces');
assert(validateProjectName('MonProjet') !== null, 'rejette majuscules');
assert(validateProjectName('-projet') !== null, 'rejette tiret en debut');
assert(validateProjectName('.projet') !== null, 'rejette point en debut');
assert(validateProjectName('projet@test') !== null, 'rejette caracteres speciaux');
assert(validateProjectName('a'.repeat(215)) !== null, 'rejette nom trop long');

// --- CLI --version ---

console.log('');
console.log('\x1b[34m\u25b8 CLI --version\x1b[0m');

const cliPath = path.resolve(__dirname, '..', 'bin', 'cli.js');
const pkgPath = path.resolve(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const versionOutput = execSync(`node "${cliPath}" --version`, { encoding: 'utf8' }).trim();
assert(versionOutput === pkg.version, `--version affiche "${versionOutput}" (attendu: "${pkg.version}")`);

const versionShort = execSync(`node "${cliPath}" -v`, { encoding: 'utf8' }).trim();
assert(versionShort === pkg.version, `-v affiche "${versionShort}"`);

// --- CLI --help ---

console.log('');
console.log('\x1b[34m\u25b8 CLI --help\x1b[0m');

const helpOutput = execSync(`node "${cliPath}" --help`, { encoding: 'utf8' });
assert(helpOutput.includes('create'), '--help mentionne la commande create');
assert(helpOutput.includes('update'), '--help mentionne la commande update');
assert(helpOutput.includes('--version'), '--help mentionne --version');

const helpShort = execSync(`node "${cliPath}" -h`, { encoding: 'utf8' });
assert(helpShort.includes('create'), '-h fonctionne aussi');

// --- CLI sans arguments ---

console.log('');
console.log('\x1b[34m\u25b8 CLI sans arguments\x1b[0m');

const noArgsOutput = execSync(`node "${cliPath}"`, { encoding: 'utf8' });
assert(noArgsOutput.includes('create'), 'affiche l\'aide sans arguments');

// --- CLI commande inconnue ---

console.log('');
console.log('\x1b[34m\u25b8 CLI commande inconnue\x1b[0m');

try {
  execSync(`node "${cliPath}" foobar`, { encoding: 'utf8', stdio: 'pipe' });
  assert(false, 'devrait echouer avec une commande inconnue');
} catch (err) {
  assert(err.stderr.includes('inconnue'), 'affiche erreur "commande inconnue"');
}

// --- CLI create sans nom ---

console.log('');
console.log('\x1b[34m\u25b8 CLI create sans nom\x1b[0m');

try {
  execSync(`node "${cliPath}" create`, { encoding: 'utf8', stdio: 'pipe' });
  assert(false, 'devrait echouer sans nom de projet');
} catch (err) {
  assert(err.stderr.includes('nom du projet'), 'affiche erreur nom requis');
}

// --- CLI create avec nom invalide ---

console.log('');
console.log('\x1b[34m\u25b8 CLI create avec nom invalide\x1b[0m');

try {
  execSync(`node "${cliPath}" create "Mon Projet"`, { encoding: 'utf8', stdio: 'pipe' });
  assert(false, 'devrait echouer avec un nom invalide');
} catch (err) {
  assert(err.stderr.includes('espaces'), 'affiche erreur sur les espaces');
}

// --- Scaffolding complet (React SPA) ---

console.log('');
console.log('\x1b[34m\u25b8 Scaffolding complet React SPA (sans npm install)\x1b[0m');

// Creer un projet de test dans un dossier temporaire
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
  // npm install peut echouer dans le contexte de test, on verifie juste les fichiers
}

// Verifier la structure React
assert(fs.existsSync(testProjectPath), 'dossier projet cree');
assert(fs.existsSync(path.join(testProjectPath, 'package.json')), 'package.json existe');
assert(fs.existsSync(path.join(testProjectPath, 'index.html')), 'index.html existe');
assert(fs.existsSync(path.join(testProjectPath, 'CLAUDE.md')), 'CLAUDE.md existe');
assert(fs.existsSync(path.join(testProjectPath, 'PROJET.md')), 'PROJET.md existe');
assert(fs.existsSync(path.join(testProjectPath, '.gitignore')), '.gitignore existe');
assert(fs.existsSync(path.join(testProjectPath, 'vite.config.ts')), 'vite.config.ts existe');
assert(fs.existsSync(path.join(testProjectPath, 'tsconfig.json')), 'tsconfig.json existe');
assert(fs.existsSync(path.join(testProjectPath, 'src', 'main.tsx')), 'src/main.tsx existe');
assert(fs.existsSync(path.join(testProjectPath, 'src', 'App.tsx')), 'src/App.tsx existe');
assert(fs.existsSync(path.join(testProjectPath, 'src', 'Layout.tsx')), 'src/Layout.tsx existe');
assert(fs.existsSync(path.join(testProjectPath, 'src', 'pages', 'Accueil.tsx')), 'src/pages/Accueil.tsx existe');
assert(fs.existsSync(path.join(testProjectPath, 'src', 'vite-env.d.ts')), 'src/vite-env.d.ts existe');
assert(fs.existsSync(path.join(testProjectPath, 'specs', 'README.md')), 'specs/README.md existe');

// Verifier le remplacement de {{PROJECT_NAME}}
const claudeMd = fs.readFileSync(path.join(testProjectPath, 'CLAUDE.md'), 'utf8');
assert(claudeMd.includes(testProjectName), 'CLAUDE.md contient le nom du projet');
assert(!claudeMd.includes('{{PROJECT_NAME}}'), 'CLAUDE.md ne contient plus de placeholder');

const projetMd = fs.readFileSync(path.join(testProjectPath, 'PROJET.md'), 'utf8');
assert(projetMd.includes(testProjectName), 'PROJET.md contient le nom du projet');

// Verifier le contenu des fichiers React
const mainTsx = fs.readFileSync(path.join(testProjectPath, 'src', 'main.tsx'), 'utf8');
assert(mainTsx.includes('startReactDsfr'), 'main.tsx initialise react-dsfr');
assert(mainTsx.includes('BrowserRouter'), 'main.tsx configure BrowserRouter');
assert(mainTsx.includes('defaultColorScheme'), 'main.tsx configure le color scheme');

const layoutTsx = fs.readFileSync(path.join(testProjectPath, 'src', 'Layout.tsx'), 'utf8');
assert(layoutTsx.includes(testProjectName), 'Layout.tsx contient le nom du projet');
assert(!layoutTsx.includes('{{PROJECT_NAME}}'), 'Layout.tsx ne contient plus de placeholder');
assert(layoutTsx.includes('Header'), 'Layout.tsx utilise le Header react-dsfr');
assert(layoutTsx.includes('Footer'), 'Layout.tsx utilise le Footer react-dsfr');
assert(layoutTsx.includes('Outlet'), 'Layout.tsx utilise Outlet pour le routing');

const appTsx = fs.readFileSync(path.join(testProjectPath, 'src', 'App.tsx'), 'utf8');
assert(appTsx.includes('Routes'), 'App.tsx utilise Routes');
assert(appTsx.includes('Layout'), 'App.tsx reference le Layout');
assert(appTsx.includes('Accueil'), 'App.tsx reference la page Accueil');

const accueilTsx = fs.readFileSync(path.join(testProjectPath, 'src', 'pages', 'Accueil.tsx'), 'utf8');
assert(accueilTsx.includes(testProjectName), 'Accueil.tsx contient le nom du projet');
assert(accueilTsx.includes('fr.cx'), 'Accueil.tsx utilise fr.cx()');

const indexHtml = fs.readFileSync(path.join(testProjectPath, 'index.html'), 'utf8');
assert(indexHtml.includes(testProjectName), 'index.html contient le nom du projet');
assert(indexHtml.includes('react-dsfr/main.css'), 'index.html charge le CSS react-dsfr');
assert(indexHtml.includes('src/main.tsx'), 'index.html pointe vers main.tsx');

// Verifier le package.json genere
const generatedPkg = JSON.parse(fs.readFileSync(path.join(testProjectPath, 'package.json'), 'utf8'));
assert(generatedPkg.name === testProjectName, 'package.json a le bon nom');
assert(generatedPkg.private === true, 'package.json est prive');
assert(generatedPkg.type === 'module', 'package.json est type module');
assert(generatedPkg.scripts && generatedPkg.scripts.dev === 'vite', 'package.json script dev = vite');
assert(generatedPkg.scripts.predev && generatedPkg.scripts.predev.includes('react-dsfr'), 'package.json predev utilise react-dsfr');
assert(generatedPkg.dependencies['@codegouvfr/react-dsfr'], 'package.json a @codegouvfr/react-dsfr');
assert(generatedPkg.dependencies['react'], 'package.json a react');
assert(generatedPkg.dependencies['react-dom'], 'package.json a react-dom');
assert(generatedPkg.dependencies['react-router-dom'], 'package.json a react-router-dom');
assert(generatedPkg.dependencies['@timotheej/dsfr-toolkit'], 'package.json a @timotheej/dsfr-toolkit');
assert(generatedPkg.devDependencies['typescript'], 'package.json a typescript en devDep');
assert(generatedPkg.devDependencies['vite'], 'package.json a vite en devDep');
assert(generatedPkg.devDependencies['@vitejs/plugin-react'], 'package.json a @vitejs/plugin-react en devDep');

// Verifier que le CLAUDE.md contient les sections du workflow multi-agents
assert(claudeMd.includes('PHASE 0'), 'CLAUDE.md contient Phase 0 (initialisation)');
assert(claudeMd.includes('PHASE 1'), 'CLAUDE.md contient Phase 1 (UX Research)');
assert(claudeMd.includes('PHASE 2'), 'CLAUDE.md contient Phase 2 (UI Design)');
assert(claudeMd.includes('PHASE 3'), 'CLAUDE.md contient Phase 3 (implementation)');
assert(claudeMd.includes('PHASE 4'), 'CLAUDE.md contient Phase 4 (review)');
assert(claudeMd.includes('react-dsfr'), 'CLAUDE.md mentionne react-dsfr');
assert(claudeMd.includes('React Router'), 'CLAUDE.md mentionne React Router');
assert(claudeMd.includes('multi-agents'), 'CLAUDE.md mentionne architecture multi-agents');
assert(claudeMd.includes('ux-researcher.md'), 'CLAUDE.md reference l\'agent UX');
assert(claudeMd.includes('ui-designer.md'), 'CLAUDE.md reference l\'agent UI');
assert(claudeMd.includes('ui-reviewer.md'), 'CLAUDE.md reference l\'agent Review');

// Nettoyage
fs.rmSync(tmpDir, { recursive: true, force: true });

// --- Agents specialises ---

console.log('');
console.log('\x1b[34m\u25b8 Agents specialises\x1b[0m');

const agentsDir = path.resolve(__dirname, '..', 'agents');
assert(fs.existsSync(agentsDir), 'dossier agents/ existe');
assert(fs.existsSync(path.join(agentsDir, 'ux-researcher.md')), 'agents/ux-researcher.md existe');
assert(fs.existsSync(path.join(agentsDir, 'ui-designer.md')), 'agents/ui-designer.md existe');
assert(fs.existsSync(path.join(agentsDir, 'ui-reviewer.md')), 'agents/ui-reviewer.md existe');

const uxAgent = fs.readFileSync(path.join(agentsDir, 'ux-researcher.md'), 'utf8');
assert(uxAgent.includes('wireframe'), 'agent UX mentionne wireframe');
assert(uxAgent.includes('PROJET.md'), 'agent UX reference PROJET.md');

const uiAgent = fs.readFileSync(path.join(agentsDir, 'ui-designer.md'), 'utf8');
assert(uiAgent.includes('tokens DSFR'), 'agent UI mentionne tokens DSFR');
assert(uiAgent.includes('KPI'), 'agent UI mentionne patterns creatifs (KPI)');
assert(uiAgent.includes('blue-france'), 'agent UI connait la palette DSFR');

const reviewAgent = fs.readFileSync(path.join(agentsDir, 'ui-reviewer.md'), 'utf8');
assert(reviewAgent.includes('screenshot'), 'agent Review mentionne screenshots');
assert(reviewAgent.includes('BLOQUANT'), 'agent Review a une classification de severite');
assert(reviewAgent.includes('dark mode'), 'agent Review verifie le dark mode');

// Verifier que package.json inclut agents/ dans files
const toolkitPkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8'));
assert(toolkitPkg.files.includes('agents/'), 'package.json inclut agents/ dans files');

// --- Dossier existant ---

console.log('');
console.log('\x1b[34m\u25b8 Rejet si dossier existe deja\x1b[0m');

const tmpDir2 = fs.mkdtempSync(path.join(os.tmpdir(), 'dsfr-test-'));
fs.mkdirSync(path.join(tmpDir2, 'existing-project'));

try {
  execSync(`node "${cliPath}" create existing-project`, {
    cwd: tmpDir2,
    encoding: 'utf8',
    stdio: 'pipe',
  });
  assert(false, 'devrait echouer si le dossier existe');
} catch (err) {
  assert(err.stderr.includes('existe'), 'affiche erreur dossier existant');
}

fs.rmSync(tmpDir2, { recursive: true, force: true });

// --- Resultats ---

console.log('');
console.log('\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550');
if (failed === 0) {
  console.log(`\x1b[32m  ${passed} tests passes, 0 echoues\x1b[0m`);
} else {
  console.log(`\x1b[31m  ${passed} passes, ${failed} echoues\x1b[0m`);
}
console.log('\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550');
console.log('');

process.exit(failed > 0 ? 1 : 0);
