# @timotheej/dsfr-toolkit

Toolkit pour scaffolder des projets **DSFR** (Système de Design de l'État) prêts à l'emploi avec **Claude Code**.

Les designers créent un projet en une commande, promptent Claude, et buildent des écrans DSFR conformes sans écrire de code.

## Prérequis

- **Node.js** >= 18
- **npm**
- **Claude Code** (`npm install -g @anthropic-ai/claude-code`)

## Installation et usage

```bash
npx @timotheej/dsfr-toolkit create mon-projet
cd mon-projet
npm run dev
```

Le projet est prêt. Un serveur live-reload démarre sur `http://localhost:3000`.

## Utiliser Claude Code

Ouvrez Claude Code dans le dossier du projet :

```bash
claude
```

### Première utilisation — Contexte projet

Décrivez simplement votre projet. Claude remplira automatiquement le fichier `PROJET.md` :

```
> On travaille pour le ministère de la Santé sur un portail
  de suivi des agréments sanitaires
```

Claude vous posera des questions (utilisateurs cibles, parcours, pages à créer) puis remplira `PROJET.md`.

### Créer des écrans

Une fois le contexte rempli, demandez simplement :

```
> Crée-moi la page de connexion
> Ajoute un tableau de bord avec les demandes en cours
> Fais-moi un formulaire de dépôt en 3 étapes
```

Claude suit automatiquement un workflow en 5 phases :

1. **Analyse** — Lit le contexte projet et les specs
2. **Wireframe** — Propose une maquette textuelle (attend votre validation)
3. **Composants** — Identifie les composants DSFR et lit leur documentation
4. **Build** — Génère le HTML conforme DSFR
5. **Review** — Vérifie la conformité DSFR, l'accessibilité RGAA et le dark mode

### Nourrir le contexte

Vous pouvez enrichir le contexte à tout moment :

- **`PROJET.md`** — Informations client, objectifs, parcours utilisateur
- **`specs/`** — Cahier des charges, wireframes, parcours détaillés (format `.md`)

Claude lit automatiquement ces fichiers avant chaque création d'écran.

## Structure du projet généré

```
mon-projet/
├── index.html              # Page d'accueil
├── pages/                  # Écrans créés par Claude
├── assets/
│   ├── css/                # CSS custom (si nécessaire)
│   ├── js/                 # JS custom
│   └── img/                # Images, logos
├── specs/                  # Spécifications fonctionnelles
├── PROJET.md               # Contexte métier (rempli par Claude)
├── CLAUDE.md               # Règles et workflow pour Claude
├── node_modules/
│   ├── @gouvfr/dsfr/       # CSS/JS du DSFR
│   └── @timotheej/dsfr-toolkit/
│       └── docs/           # Documentation DSFR (45+ composants)
└── package.json
```

## Mise à jour

```bash
cd mon-projet
npm update
```

Cela met à jour :
- **`@timotheej/dsfr-toolkit`** — Documentation des composants DSFR
- **`@gouvfr/dsfr`** — CSS/JS du DSFR

Les fichiers de votre projet (`CLAUDE.md`, `PROJET.md`, `pages/`) ne sont jamais touchés.

Vous pouvez aussi utiliser la commande intégrée :

```bash
npx dsfr-toolkit update
```

## Commandes CLI

| Commande | Description |
|----------|-------------|
| `dsfr-toolkit create <nom>` | Créer un nouveau projet DSFR |
| `dsfr-toolkit update` | Mettre à jour les dépendances du projet courant |
| `dsfr-toolkit --version` | Afficher la version du toolkit |
| `dsfr-toolkit --help` | Afficher l'aide |

## Développement du toolkit

```bash
git clone <repo>
cd dsfr-toolkit
npm link
npx dsfr-toolkit create test-projet   # Tester le scaffolding
```

## Licence

ISC
