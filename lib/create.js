const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function validateProjectName(name) {
  if (!name || name.trim().length === 0) {
    return 'Le nom du projet ne peut pas être vide.';
  }
  if (/\s/.test(name)) {
    return 'Le nom du projet ne peut pas contenir d\'espaces. Utilisez des tirets : mon-projet';
  }
  if (!/^[a-z0-9][a-z0-9._-]*$/.test(name)) {
    return 'Le nom du projet doit commencer par une lettre minuscule ou un chiffre et ne contenir que des minuscules, chiffres, tirets, points ou underscores.';
  }
  if (name.length > 214) {
    return 'Le nom du projet est trop long (max 214 caractères).';
  }
  return null;
}

function update() {
  // Vérifier qu'on est dans un projet scaffoldé
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  if (!fs.existsSync(pkgPath)) {
    console.error('\x1b[31mErreur : pas de package.json dans le dossier courant.\x1b[0m');
    console.error('Placez-vous dans un projet créé avec dsfr-toolkit.');
    process.exit(1);
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const deps = pkg.dependencies || {};
  if (!deps['@timotheej/dsfr-toolkit'] && !deps['@gouvfr/dsfr']) {
    console.error('\x1b[31mErreur : ce projet ne semble pas avoir été créé avec @timotheej/dsfr-toolkit.\x1b[0m');
    process.exit(1);
  }

  console.log('');
  console.log('\x1b[34m▸ Mise à jour des dépendances...\x1b[0m');
  console.log('');

  try {
    execSync('npm update @timotheej/dsfr-toolkit @gouvfr/dsfr', { cwd: process.cwd(), stdio: 'inherit' });
    console.log('');
    console.log('\x1b[32m  ✓ Dépendances mises à jour.\x1b[0m');
    console.log('');
    console.log('  Les fichiers du projet (CLAUDE.md, PROJET.md, pages/) n\'ont pas été touchés.');
    console.log('');
  } catch (err) {
    console.error('');
    console.error('\x1b[31m  ✗ Échec de la mise à jour.\x1b[0m');
    console.error('  Essayez manuellement : npm update');
    process.exit(1);
  }
}

function create(projectName) {
  // 0. Valider le nom du projet
  const validationError = validateProjectName(projectName);
  if (validationError) {
    console.error(`\x1b[31mErreur : ${validationError}\x1b[0m`);
    process.exit(1);
  }

  const projectPath = path.resolve(process.cwd(), projectName);
  const toolkitRoot = path.resolve(__dirname, '..');
  const templatesDir = path.join(toolkitRoot, 'templates');

  // 1. Vérifier que le dossier n'existe pas
  if (fs.existsSync(projectPath)) {
    console.error(`\x1b[31mErreur : le dossier "${projectName}" existe déjà.\x1b[0m`);
    process.exit(1);
  }

  console.log('');
  console.log(`\x1b[34m▸ Création du projet "${projectName}"...\x1b[0m`);
  console.log('');

  // 2. Créer l'arborescence
  const dirs = [
    '',
    'pages',
    'assets/css',
    'assets/js',
    'assets/img',
    'specs',
  ];

  for (const dir of dirs) {
    fs.mkdirSync(path.join(projectPath, dir), { recursive: true });
  }
  console.log('  ✓ Arborescence créée');

  // 3. Générer le package.json du projet
  // Déterminer le chemin du toolkit pour le lien local
  const toolkitPkgPath = path.join(toolkitRoot, 'package.json');
  const toolkitPkg = JSON.parse(fs.readFileSync(toolkitPkgPath, 'utf8'));
  const toolkitVersion = toolkitPkg.version || '1.0.0';

  // Si le toolkit est linké localement (npm link), utiliser file://
  // Sinon utiliser la version npm registry
  const isLinked = !toolkitRoot.includes('node_modules');
  const toolkitDep = isLinked
    ? `file:${toolkitRoot}`
    : `^${toolkitVersion}`;

  const projectPkg = {
    name: projectName,
    version: '1.0.0',
    private: true,
    scripts: {
      dev: "npx browser-sync start --server --port 3000 --files '**/*.html, **/*.css, **/*.js' --no-notify",
      start: "npx browser-sync start --server --port 3000 --files '**/*.html, **/*.css, **/*.js' --no-notify",
    },
    dependencies: {
      '@gouvfr/dsfr': '^1.14.3',
      '@timotheej/dsfr-toolkit': toolkitDep,
    },
  };

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(projectPkg, null, 2) + '\n'
  );
  console.log('  ✓ package.json généré');

  // 4. Copier et personnaliser les templates
  const templates = [
    { src: 'index.html', dest: 'index.html' },
    { src: 'CLAUDE.md.tpl', dest: 'CLAUDE.md' },
    { src: 'PROJET.md.tpl', dest: 'PROJET.md' },
    { src: 'gitignore.tpl', dest: '.gitignore' },
  ];

  for (const tpl of templates) {
    const srcPath = path.join(templatesDir, tpl.src);
    const destPath = path.join(projectPath, tpl.dest);

    let content = fs.readFileSync(srcPath, 'utf8');
    content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
    fs.writeFileSync(destPath, content);
  }
  console.log('  ✓ Templates copiés (index.html, CLAUDE.md, PROJET.md)');

  // 5. Créer un fichier README dans specs/
  fs.writeFileSync(
    path.join(projectPath, 'specs', 'README.md'),
    `# Spécifications — ${projectName}\n\nDéposez ici vos documents de spécifications :\n\n- Cahier des charges (.md)\n- Wireframes textuels (.md)\n- Parcours utilisateur (.md)\n- Maquettes annotées (.md)\n\nClaude lira automatiquement ces fichiers pour comprendre le contexte métier.\n`
  );
  console.log('  ✓ Dossier specs/ initialisé');

  // 6. Installer les dépendances
  console.log('');
  console.log('\x1b[34m▸ Installation des dépendances...\x1b[0m');
  console.log('');

  try {
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
    console.log('');
    console.log('  ✓ Dépendances installées');
  } catch (err) {
    console.warn('');
    console.warn('\x1b[33m  ⚠ npm install a échoué. Lancez-le manuellement :\x1b[0m');
    console.warn(`    cd ${projectName} && npm install`);
  }

  // 7. Initialiser git
  try {
    execSync('git init', { cwd: projectPath, stdio: 'pipe' });
    execSync('git add -A', { cwd: projectPath, stdio: 'pipe' });
    execSync('git commit -m "Initial setup via @timotheej/dsfr-toolkit"', {
      cwd: projectPath,
      stdio: 'pipe',
    });
    console.log('  ✓ Dépôt git initialisé');
  } catch (err) {
    // Git non disponible, pas grave
  }

  // 8. Message de fin
  console.log('');
  console.log('\x1b[32m═══════════════════════════════════════════\x1b[0m');
  console.log(`\x1b[32m  Projet "${projectName}" prêt !\x1b[0m`);
  console.log('\x1b[32m═══════════════════════════════════════════\x1b[0m');
  console.log('');
  console.log('  \x1b[36mPour commencer :\x1b[0m');
  console.log('');
  console.log(`    cd ${projectName}`);
  console.log('    npm run dev');
  console.log('');
  console.log('  \x1b[36mPuis ouvrez Claude Code :\x1b[0m');
  console.log('');
  console.log('    claude');
  console.log('');
  console.log('  \x1b[36mExemples de prompts :\x1b[0m');
  console.log('');
  console.log('    "On travaille pour le ministère de la Santé');
  console.log('     sur un portail de suivi des agréments"');
  console.log('');
  console.log('    "Crée-moi la page de connexion"');
  console.log('');
  console.log('    "Ajoute un tableau de bord avec les');
  console.log('     demandes en cours"');
  console.log('');
  console.log('  Claude remplira PROJET.md automatiquement');
  console.log('  et suivra le workflow DSFR de bout en bout.');
  console.log('');
}

module.exports = { create, update, validateProjectName };
