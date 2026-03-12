# @timotheej/dsfr-toolkit — Repo source du package npm

## Ce que c'est

Package npm CLI qui scaffold des projets DSFR pour les designers.
Les designers font `npx @timotheej/dsfr-toolkit create mon-projet` et obtiennent un projet prêt avec Claude Code intégré.

## Structure du repo

```
├── bin/cli.js              # CLI entry point (create, update, --version, --help)
├── lib/create.js           # Logique de scaffolding + validation + update
├── templates/              # Templates copiés dans les projets designer
│   ├── index.html          # Page de base DSFR
│   ├── CLAUDE.md.tpl       # CLAUDE.md du projet (workflow agent 6 phases)
│   ├── PROJET.md.tpl       # Template contexte métier
│   └── gitignore.tpl       # .gitignore
├── docs/                   # Documentation DSFR embarquée dans le package
│   ├── fondations/         # 8 fichiers (typo, couleurs, grille, etc.)
│   ├── composants/         # 45+ composants documentés
│   ├── utilitaires/        # Classes d'affichage et espacement
│   └── modeles/            # Templates de pages (erreur, connexion, formulaire, liste, tableau, contenu)
├── tests/                  # Tests automatisés
│   └── create.test.js      # Tests du scaffolding
├── package.json            # Package npm avec "bin" et "files"
├── README.md               # Documentation d'utilisation
└── CLAUDE.md               # Ce fichier (instructions pour le repo source)
```

## Règles de développement

1. **Ne pas modifier les docs DSFR** sans bumper la version du package
2. **Le fichier le plus critique est `templates/CLAUDE.md.tpl`** — c'est lui qui pilote le workflow agent de Claude Code dans les projets designers
3. Utiliser uniquement les modules Node.js natifs (fs, path, child_process) — zéro dépendance runtime
4. Tester avec `npm link` puis `npx dsfr-toolkit create test-projet`
5. Lancer les tests avec `node tests/create.test.js`
