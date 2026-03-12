#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const { create, update } = require('../lib/create');

const args = process.argv.slice(2);
const command = args[0];

// --version / -v
if (command === '--version' || command === '-v') {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  console.log(pkg.version);
  process.exit(0);
}

// --help / -h
if (command === '--help' || command === '-h' || !command) {
  console.log('');
  console.log('\x1b[34m@timotheej/dsfr-toolkit\x1b[0m — Toolkit DSFR pour Claude Code');
  console.log('');
  console.log('Commandes :');
  console.log('  \x1b[36mcreate <nom-projet>\x1b[0m    Créer un nouveau projet DSFR');
  console.log('  \x1b[36mupdate\x1b[0m                 Mettre à jour les dépendances du projet courant');
  console.log('');
  console.log('Options :');
  console.log('  \x1b[36m--version, -v\x1b[0m          Afficher la version');
  console.log('  \x1b[36m--help, -h\x1b[0m             Afficher cette aide');
  console.log('');
  console.log('Exemples :');
  console.log('  npx @timotheej/dsfr-toolkit create mon-projet');
  console.log('  cd mon-projet && npx dsfr-toolkit update');
  console.log('');
  process.exit(0);
}

if (command === 'create') {
  const projectName = args[1];
  if (!projectName) {
    console.error('\x1b[31mErreur : nom du projet requis.\x1b[0m');
    console.error('');
    console.error('Usage : npx @timotheej/dsfr-toolkit create mon-projet');
    process.exit(1);
  }
  create(projectName);
} else if (command === 'update') {
  update();
} else {
  console.error(`\x1b[31mCommande inconnue : "${command}"\x1b[0m`);
  console.error('');
  console.error('Utilisez --help pour voir les commandes disponibles.');
  process.exit(1);
}
