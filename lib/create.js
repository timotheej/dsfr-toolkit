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

function copyDirRecursive(srcDir, destDir, replacements) {
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath, replacements);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');
      for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
      }
      fs.writeFileSync(destPath, content);
    }
  }
}

function update() {
  // Verifier qu'on est dans un projet scaffolde
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  if (!fs.existsSync(pkgPath)) {
    console.error('\x1b[31mErreur : pas de package.json dans le dossier courant.\x1b[0m');
    console.error('Placez-vous dans un projet cree avec dsfr-toolkit.');
    process.exit(1);
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const deps = pkg.dependencies || {};
  if (!deps['@timotheej/dsfr-toolkit'] && !deps['@codegouvfr/react-dsfr']) {
    console.error('\x1b[31mErreur : ce projet ne semble pas avoir ete cree avec @timotheej/dsfr-toolkit.\x1b[0m');
    process.exit(1);
  }

  // 1. Mise a jour des dependances npm
  console.log('');
  console.log('\x1b[34m\u25b8 Mise a jour des dependances...\x1b[0m');
  console.log('');

  try {
    execSync('npm update @timotheej/dsfr-toolkit @codegouvfr/react-dsfr', { cwd: process.cwd(), stdio: 'inherit' });
    console.log('');
    console.log('\x1b[32m  \u2713 Dependances mises a jour.\x1b[0m');
  } catch (err) {
    console.error('');
    console.error('\x1b[31m  \u2717 Echec de la mise a jour des dependances.\x1b[0m');
    console.error('  Essayez manuellement : npm update');
    process.exit(1);
  }

  // 2. Mise a jour du CLAUDE.md depuis le nouveau template
  const claudePath = path.resolve(process.cwd(), 'CLAUDE.md');
  const toolkitRoot = path.resolve(__dirname, '..');
  const templatePath = path.join(toolkitRoot, 'templates', 'CLAUDE.md.tpl');

  if (fs.existsSync(claudePath) && fs.existsSync(templatePath)) {
    // Extraire le nom du projet depuis le package.json
    const projectName = pkg.name || 'mon-projet';

    // Backup de l'ancien CLAUDE.md
    const backupPath = path.resolve(process.cwd(), 'CLAUDE.md.bak');
    fs.copyFileSync(claudePath, backupPath);

    // Generer le nouveau depuis le template
    let newContent = fs.readFileSync(templatePath, 'utf8');
    newContent = newContent.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
    fs.writeFileSync(claudePath, newContent);

    console.log('');
    console.log('\x1b[32m  \u2713 CLAUDE.md mis a jour (ancien sauvegarde dans CLAUDE.md.bak)\x1b[0m');
  }

  console.log('');
  console.log('  Les fichiers du projet (PROJET.md, src/pages/) n\'ont pas ete touches.');
  console.log('');
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

  // 1. Verifier que le dossier n'existe pas
  if (fs.existsSync(projectPath)) {
    console.error(`\x1b[31mErreur : le dossier "${projectName}" existe deja.\x1b[0m`);
    process.exit(1);
  }

  console.log('');
  console.log(`\x1b[34m\u25b8 Creation du projet "${projectName}"...\x1b[0m`);
  console.log('');

  // 2. Creer le dossier projet et specs/
  fs.mkdirSync(path.join(projectPath, 'specs'), { recursive: true });
  console.log('  \u2713 Dossier projet cree');

  // 3. Copier le boilerplate React avec substitution
  const boilerplateDir = path.join(templatesDir, 'boilerplate');
  copyDirRecursive(boilerplateDir, projectPath, {
    '{{PROJECT_NAME}}': projectName,
  });
  console.log('  \u2713 Boilerplate React copie');

  // 4. Generer le package.json du projet
  const toolkitPkgPath = path.join(toolkitRoot, 'package.json');
  const toolkitPkg = JSON.parse(fs.readFileSync(toolkitPkgPath, 'utf8'));
  const toolkitVersion = toolkitPkg.version || '2.0.0';

  // Si le toolkit est linke localement (npm link), utiliser file://
  // Sinon utiliser la version npm registry
  const isLinked = !toolkitRoot.includes('node_modules');
  const toolkitDep = isLinked
    ? `file:${toolkitRoot}`
    : `^${toolkitVersion}`;

  const projectPkg = {
    name: projectName,
    version: '1.0.0',
    private: true,
    type: 'module',
    scripts: {
      predev: 'react-dsfr update-icons',
      dev: 'vite',
      prebuild: 'react-dsfr update-icons',
      build: 'tsc && vite build',
      preview: 'vite preview',
    },
    dependencies: {
      'react': '^18.3.1',
      'react-dom': '^18.3.1',
      'react-router-dom': '^6.28.0',
      '@codegouvfr/react-dsfr': '^1.29.0',
      '@timotheej/dsfr-toolkit': toolkitDep,
    },
    devDependencies: {
      '@types/react': '^18.3.12',
      '@types/react-dom': '^18.3.1',
      '@vitejs/plugin-react': '^4.3.4',
      'typescript': '^5.6.3',
      'vite': '^6.0.0',
    },
  };

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(projectPkg, null, 2) + '\n'
  );
  console.log('  \u2713 package.json genere');

  // 5. Copier les templates de niveau racine
  const topTemplates = [
    { src: 'CLAUDE.md.tpl', dest: 'CLAUDE.md' },
    { src: 'PROJET.md.tpl', dest: 'PROJET.md' },
    { src: 'gitignore.tpl', dest: '.gitignore' },
  ];

  for (const tpl of topTemplates) {
    const srcPath = path.join(templatesDir, tpl.src);
    const destPath = path.join(projectPath, tpl.dest);

    let content = fs.readFileSync(srcPath, 'utf8');
    content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
    fs.writeFileSync(destPath, content);
  }
  console.log('  \u2713 Templates copies (CLAUDE.md, PROJET.md)');

  // 6. Creer un fichier README dans specs/
  fs.writeFileSync(
    path.join(projectPath, 'specs', 'README.md'),
    `# Specifications \u2014 ${projectName}\n\nDeposez ici vos documents de specifications :\n\n- Cahier des charges (.md)\n- Wireframes textuels (.md)\n- Parcours utilisateur (.md)\n- Maquettes annotees (.md)\n\nClaude lira automatiquement ces fichiers pour comprendre le contexte metier.\n`
  );
  console.log('  \u2713 Dossier specs/ initialise');

  // 7. Installer les dependances
  console.log('');
  console.log('\x1b[34m\u25b8 Installation des dependances...\x1b[0m');
  console.log('');

  try {
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
    console.log('');
    console.log('  \u2713 Dependances installees');
  } catch (err) {
    console.warn('');
    console.warn('\x1b[33m  \u26a0 npm install a echoue. Lancez-le manuellement :\x1b[0m');
    console.warn(`    cd ${projectName} && npm install`);
  }

  // 8. Initialiser git
  try {
    execSync('git init', { cwd: projectPath, stdio: 'pipe' });
    execSync('git add -A', { cwd: projectPath, stdio: 'pipe' });
    execSync('git commit -m "Initial setup via @timotheej/dsfr-toolkit v2"', {
      cwd: projectPath,
      stdio: 'pipe',
    });
    console.log('  \u2713 Depot git initialise');
  } catch (err) {
    // Git non disponible, pas grave
  }

  // 9. Message de fin
  console.log('');
  console.log('\x1b[32m\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\x1b[0m');
  console.log(`\x1b[32m  Projet "${projectName}" pret !\x1b[0m`);
  console.log('\x1b[32m\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\x1b[0m');
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
  console.log('    "On travaille pour le ministere de la Sante');
  console.log('     sur un portail de suivi des agrements"');
  console.log('');
  console.log('    "Cree-moi la page de connexion"');
  console.log('');
  console.log('    "Ajoute un tableau de bord avec les');
  console.log('     demandes en cours"');
  console.log('');
  console.log('  Le projet React + DSFR demarre sur http://localhost:5173');
  console.log('');
}

module.exports = { create, update, validateProjectName };
