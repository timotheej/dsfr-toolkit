# @timotheej/dsfr-toolkit — Repo source du package npm

## Ce que c'est

Package npm CLI qui scaffold des projets DSFR React pour les designers.
Les designers font `npx @timotheej/dsfr-toolkit create mon-projet` et obtiennent un projet React + Vite + TypeScript + react-dsfr pret avec Claude Code integre.

## Structure du repo

```
├── bin/cli.js              # CLI entry point (create, update, --version, --help)
├── lib/create.js           # Logique de scaffolding + validation + update
├── agents/                 # Prompts des agents specialises (publies dans le package npm)
│   ├── ux-researcher.md    # Agent UX : analyse besoin, wireframe, rationale
│   ├── ui-designer.md      # Agent UI : spec visuelle creative dans le cadre DSFR
│   └── ui-reviewer.md      # Agent QA : recette UI via MCP Chrome DevTools
├── templates/              # Templates copies dans les projets designer
│   ├── boilerplate/        # Boilerplate React complet (index.html, src/*.tsx, vite.config.ts, tsconfig.json)
│   ├── CLAUDE.md.tpl       # CLAUDE.md du projet (orchestrateur multi-agents)
│   ├── PROJET.md.tpl       # Template contexte metier
│   └── gitignore.tpl       # .gitignore
├── docs/                   # Documentation DSFR embarquee dans le package
│   ├── fondations/         # 8 fichiers (typo, couleurs, grille, etc.)
│   ├── composants/         # 45+ composants documentes
│   ├── utilitaires/        # Classes d'affichage et espacement
│   └── modeles/            # Templates de pages (erreur, connexion, formulaire, liste, tableau, contenu)
├── tests/                  # Tests automatises
│   └── create.test.js      # Tests du scaffolding
├── package.json            # Package npm avec "bin" et "files"
├── README.md               # Documentation d'utilisation
└── CLAUDE.md               # Ce fichier (instructions pour le repo source)
```

## Regles de developpement

1. **Ne pas modifier les docs DSFR** sans bumper la version du package
2. **Les fichiers les plus critiques sont `templates/CLAUDE.md.tpl` (orchestrateur) et `agents/` (prompts specialises)** — ils pilotent le workflow multi-agents de Claude Code dans les projets designers
3. Utiliser uniquement les modules Node.js natifs (fs, path, child_process) — zero dependance runtime
4. Tester avec `npm link` puis `npx dsfr-toolkit create test-projet`
5. Lancer les tests avec `node tests/create.test.js`
6. Le boilerplate React est dans `templates/boilerplate/` — tous les fichiers supportent la substitution `{{PROJECT_NAME}}`
7. Les projets generes utilisent React 18 + Vite + TypeScript + @codegouvfr/react-dsfr + React Router 6
