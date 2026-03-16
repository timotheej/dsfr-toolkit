# @timotheej/dsfr-toolkit

Toolkit pour scaffolder des projets **DSFR React** (Systeme de Design de l'Etat) prets a l'emploi avec **Claude Code**.

Les designers creent un projet en une commande, promptent Claude, et buildent des ecrans DSFR conformes sans ecrire de code.

## Stack technique

Les projets generes utilisent :

- **React 18** + **TypeScript**
- **Vite** (dev server + build)
- **@codegouvfr/react-dsfr** (wrapper React officiel du DSFR)
- **React Router 6** (navigation SPA, layout partage)

## Prerequis

- **Node.js** >= 18
- **npm**
- **Claude Code** (`npm install -g @anthropic-ai/claude-code`)

## Installation et usage

```bash
npx @timotheej/dsfr-toolkit create mon-projet
cd mon-projet
npm run dev
```

Le projet est pret. Vite demarre sur `http://localhost:5173`.

## Utiliser Claude Code

Ouvrez Claude Code dans le dossier du projet :

```bash
claude
```

### Premiere utilisation — Contexte projet

Decrivez simplement votre projet. Claude remplira automatiquement le fichier `PROJET.md` :

```
> On travaille pour le ministere de la Sante sur un portail
  de suivi des agrements sanitaires
```

Claude vous posera des questions (utilisateurs cibles, parcours, pages a creer) puis remplira `PROJET.md`.

### Creer des ecrans

Une fois le contexte rempli, demandez simplement :

```
> Cree-moi la page de connexion
> Ajoute un tableau de bord avec les demandes en cours
> Fais-moi un formulaire de depot en 3 etapes
```

Claude suit automatiquement un workflow en 6 phases :

0. **Initialisation** — Remplit le contexte projet (PROJET.md)
1. **Analyse** — Lit le contexte projet et les specs
2. **Wireframe** — Propose une maquette textuelle (attend votre validation)
3. **Composants** — Identifie les composants react-dsfr et lit leur documentation
4. **Build** — Genere le composant React + route + navigation
5. **Review** — Verifie la conformite DSFR, l'accessibilite RGAA et le dark mode

### Nourrir le contexte

Vous pouvez enrichir le contexte a tout moment :

- **`PROJET.md`** — Informations client, objectifs, parcours utilisateur
- **`specs/`** — Cahier des charges, wireframes, parcours detailles (format `.md`)

Claude lit automatiquement ces fichiers avant chaque creation d'ecran.

## Structure du projet genere

```
mon-projet/
├── index.html              # Point d'entree Vite
├── src/
│   ├── main.tsx            # Initialisation React + DSFR
│   ├── App.tsx             # Routes React Router
│   ├── Layout.tsx          # Header + Footer DSFR partages
│   └── pages/              # Ecrans crees par Claude
│       └── Accueil.tsx     # Page d'accueil
├── specs/                  # Specifications fonctionnelles
├── PROJET.md               # Contexte metier (rempli par Claude)
├── CLAUDE.md               # Regles et workflow pour Claude
├── node_modules/
│   ├── @codegouvfr/react-dsfr/    # Composants React DSFR
│   └── @timotheej/dsfr-toolkit/
│       └── docs/           # Documentation DSFR (45+ composants)
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Mise a jour

```bash
cd mon-projet
npx dsfr-toolkit update
```

Cela met a jour :
- **`@codegouvfr/react-dsfr`** — Composants React DSFR
- **`@timotheej/dsfr-toolkit`** — Documentation des composants DSFR
- **`CLAUDE.md`** — Workflow agent (l'ancien est sauvegarde en `.bak`)

Les fichiers de votre projet (`PROJET.md`, `src/pages/`) ne sont jamais touches.

## Commandes CLI

| Commande | Description |
|----------|-------------|
| `dsfr-toolkit create <nom>` | Creer un nouveau projet DSFR React |
| `dsfr-toolkit update` | Mettre a jour les dependances du projet courant |
| `dsfr-toolkit --version` | Afficher la version du toolkit |
| `dsfr-toolkit --help` | Afficher l'aide |

## Developpement du toolkit

```bash
git clone <repo>
cd dsfr-toolkit
npm link
npx dsfr-toolkit create test-projet   # Tester le scaffolding
node tests/create.test.js             # Lancer les tests
```

## Licence

ISC
