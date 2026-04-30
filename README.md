# @timotheej/dsfr-toolkit

Toolkit pour scaffolder des projets **DSFR** (Systeme de Design de l'Etat) prets a l'emploi avec **Claude Code**.

Les designers creent un projet en une commande, promptent Claude, et buildent des ecrans DSFR conformes sans ecrire de code.

## Quick start

```bash
npx @timotheej/dsfr-toolkit create mon-projet
cd mon-projet
npm run dev
claude
```

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

## Workflow designer

Le toolkit inverse le flux traditionnel du design :

```
Ancien : Figma (maquette) → validation → dev (code) → test
Nouveau : Code (proto fonctionnel) → test en vrai → validation → Figma (export)
```

1. **Creer le projet** : `npx @timotheej/dsfr-toolkit create mon-projet`
2. **Prototyper** : prompter Claude Code → il build les ecrans React DSFR
3. **Tester** : valider dans le navigateur (responsive, dark mode, interactions reelles)
4. **Exporter** (optionnel) : dire a Claude "exporte cette page dans Figma"

### Pourquoi code d'abord ?

- **Rapide** — Claude genere du code React en quelques secondes
- **Testable** — on clique, on navigue, on teste en vrai
- **Exact** — les vrais composants react-dsfr, pas des approximations Figma
- **Dark mode gratuit** — les tokens DSFR gerent tout automatiquement

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

### Creer des ecrans

```
> Cree-moi la page de connexion
> Ajoute un tableau de bord avec les demandes en cours
> Fais-moi un formulaire de depot en 3 etapes
```

Claude suit un workflow en 5 phases : analyse UX → wireframe → spec UI → build React → review.

### Export Figma (optionnel)

Une fois un ecran valide dans le navigateur :

```
> Exporte cette page dans Figma
```

Prerequis :
- MCP Figma configure dans Claude Code
- Bibliotheque DSFR connectee dans votre fichier Figma ("DSFR - Composants" + "DSFR - Fondamentaux")

Claude lit le code React et reconstruit la page dans Figma en utilisant les composants de la bibliotheque DSFR.

### Nourrir le contexte

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

## Commandes CLI

| Commande | Description |
|----------|-------------|
| `dsfr-toolkit create <nom>` | Creer un nouveau projet DSFR |
| `dsfr-toolkit update` | Mettre a jour les dependances du projet courant |
| `dsfr-toolkit --version` | Afficher la version |
| `dsfr-toolkit --help` | Afficher l'aide |

## Licence

ISC
