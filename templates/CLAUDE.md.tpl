# Instructions projet — {{PROJECT_NAME}} (DSFR)

## RÈGLE ABSOLUE : DSFR uniquement

**Pour toute modification ou création dans ce projet, utiliser STRICTEMENT les composants du DSFR.** Aucun CSS custom, aucun composant maison ne doit remplacer un composant existant du DSFR.

---

## Stack technique

- HTML/CSS/JS vanilla
- DSFR v1.14.3 (`@gouvfr/dsfr`)
- Pas de framework JS (vanilla uniquement)
- CSS/JS du DSFR chargés depuis `node_modules/@gouvfr/dsfr/dist/`

## Structure du projet

```
├── index.html                  # Page d'accueil
├── pages/                      # Pages/écrans du site
├── assets/                     # Ressources
│   ├── css/                    # CSS custom (si nécessaire)
│   ├── js/                     # JS custom
│   └── img/                    # Images, logos opérateur
├── specs/                      # Spécifications fonctionnelles
├── PROJET.md                   # Contexte métier du projet
├── CLAUDE.md                   # Ce fichier
└── node_modules/
    ├── @gouvfr/dsfr/           # Package DSFR (CSS/JS)
    └── @timotheej/dsfr-toolkit/     # Toolkit (documentation)
        └── docs/               # Doc DSFR complète
```

---

## WORKFLOW AUTOMATIQUE — À suivre pour TOUTE demande

Quand l'utilisateur te demande de créer ou modifier un écran, suis **automatiquement** ces phases dans l'ordre. Ne saute aucune phase. N'attends pas qu'on te dise de lire les fichiers — fais-le systématiquement.

---

### PHASE 0 — INITIALISATION DU PROJET (si PROJET.md est vide)

Si le fichier `PROJET.md` n'est pas encore rempli (contient encore les placeholders), **lance un interview structuré** :

1. Demande à l'utilisateur de décrire le projet en quelques phrases (client, objectif, utilisateurs)
2. Pose des questions de clarification si nécessaire :
   - Qui sont les utilisateurs cibles ?
   - Quels sont les parcours principaux ?
   - Y a-t-il des contraintes spécifiques (logo opérateur, charte, etc.) ?
3. **Remplis toi-même le fichier `PROJET.md`** avec les informations collectées
4. Propose la liste des pages/écrans à créer
5. Demande validation avant de continuer

Cette phase ne se joue qu'une seule fois, au tout début du projet.

---

### PHASE 1 — ANALYSE DU BESOIN (automatique)

À chaque demande de création/modification d'écran :

1. **Lis `PROJET.md`** pour comprendre le contexte métier
2. **Lis les fichiers dans `specs/`** s'ils existent (cahier des charges, wireframes, parcours)
3. **Lis les pages existantes dans `pages/`** pour assurer la cohérence
4. Croise ces informations avec la demande de l'utilisateur
5. Si la demande est ambiguë, **pose des questions** avant de continuer :
   - Quel contenu afficher ?
   - Quelles actions l'utilisateur peut-il réaliser ?
   - Quel est l'état précédent et suivant dans le parcours ?

---

### PHASE 2 — WIREFRAME TEXTUEL (attendre validation)

Avant de coder, propose un **wireframe textuel** de la page :

```
┌─────────────────────────────────────────┐
│  HEADER (bloc-marque + nom service)     │
├─────────────────────────────────────────┤
│  BREADCRUMB : Accueil > Rubrique > Page │
├─────────────────────────────────────────┤
│                                         │
│  TITRE DE LA PAGE (h1)                  │
│  Texte introductif                      │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │  CARTE 1 │ │  CARTE 2 │ │ CARTE 3 │ │
│  └──────────┘ └──────────┘ └─────────┘ │
│                                         │
│  [Bouton primaire] [Bouton secondaire]  │
│                                         │
├─────────────────────────────────────────┤
│  FOOTER                                │
└─────────────────────────────────────────┘
```

Pour chaque zone, indique :
- Le composant DSFR qui sera utilisé
- Le contenu prévu
- Les interactions (si applicable)

**Attends la validation de l'utilisateur avant de passer à la phase suivante.**

---

### PHASE 3 — CIBLAGE DES COMPOSANTS DSFR (automatique)

Une fois le wireframe validé :

1. **Identifie chaque composant DSFR** nécessaire dans la table de référence ci-dessous
2. **Lis la documentation de chaque composant** pour connaître la structure HTML exacte :
   - Ouvre le fichier `.md` correspondant dans `node_modules/@timotheej/dsfr-toolkit/docs/`
   - Note les classes CSS, les attributs ARIA, les variantes
3. Choisis les variantes adaptées au contexte (taille, couleur d'accent, état)

---

### PHASE 4 — BUILD (génération du code)

Crée le fichier HTML dans `pages/` en respectant ces règles :

1. **Structure obligatoire** de chaque page :
   - `<!doctype html>` avec `<html lang="fr" data-fr-scheme="system">`
   - Meta viewport
   - Chargement de `dsfr.min.css` + `utility.min.css`
   - Skiplinks (`fr-skiplinks`) en premier dans le body
   - Header (`fr-header`) avec bloc-marque République Française
   - Fil d'Ariane (`fr-breadcrumb`)
   - Main (`role="main"`)
   - Footer (`fr-footer`) avec liens légaux
   - Scripts DSFR en fin de body (module + nomodule)

2. **Chemins CSS/JS** :
   ```html
   <link rel="stylesheet" href="../node_modules/@gouvfr/dsfr/dist/dsfr.min.css">
   <link rel="stylesheet" href="../node_modules/@gouvfr/dsfr/dist/utility/utility.min.css">
   <script type="module" src="../node_modules/@gouvfr/dsfr/dist/dsfr.module.min.js"></script>
   <script nomodule src="../node_modules/@gouvfr/dsfr/dist/dsfr.nomodule.min.js"></script>
   ```
   Note : pour les pages dans `pages/`, les chemins sont préfixés par `../`

3. **Grille** : toujours `fr-container > fr-grid-row > fr-col-*`

4. **Formulaires** :
   - Une seule colonne
   - Labels au-dessus des inputs
   - Champs obligatoires par défaut, optionnels marqués "(optionnel)"
   - Messages d'erreur dans `fr-messages-group` avec `aria-live="polite"`

---

### PHASE 5 — SELF-REVIEW (automatique)

Après avoir généré le code, vérifie **automatiquement** :

1. **Conformité DSFR** :
   - [ ] Toutes les classes utilisent le préfixe `fr-`
   - [ ] Aucun CSS custom ne remplace un composant DSFR
   - [ ] La grille respecte `fr-container > fr-grid-row > fr-col-*`
   - [ ] Les polices sont Marianne/Spectral uniquement

2. **Accessibilité RGAA** :
   - [ ] Skiplinks présents
   - [ ] Attributs `aria-*` corrects
   - [ ] Labels associés aux inputs
   - [ ] Images décoratives avec `alt=""` ou `aria-hidden="true"`
   - [ ] Hiérarchie des titres logique (h1 > h2 > h3...)
   - [ ] `lang="fr"` sur la balise `<html>`

3. **Dark mode** :
   - [ ] `data-fr-scheme="system"` sur `<html>`
   - [ ] Pas de couleurs en dur — utiliser les tokens DSFR

4. **Structure** :
   - [ ] Header avec bloc-marque présent
   - [ ] Footer avec liens légaux présent
   - [ ] `role="main"` sur le main

Si un point n'est pas conforme, **corrige immédiatement** avant de présenter le résultat.
Enfin, **propose les prochaines pages/écrans** à créer selon le contexte du projet.

---

## Règles DSFR — Référence rapide

### Convention de nommage CSS

- Préfixe : `fr-`
- Méthodologie : BEM (Block-Element-Modifier)
- Pattern : `fr-block__element--modifier`

### Breakpoints

| Nom | Min-width | Suffixe |
|-----|-----------|---------|
| XS | 0px | (défaut) |
| SM | 576px | `-sm` |
| MD | 768px | `-md` |
| LG | 992px | `-lg` |
| XL | 1248px | `-xl` |

---

## Documentation DSFR complète

**Lis ces fichiers quand tu dois utiliser un composant.** Ils contiennent la structure HTML exacte, les classes CSS et les variantes.

### Fondations

| Sujet | Fichier |
|-------|---------|
| Typographie | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/typographie.md` |
| Couleurs | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/couleurs.md` |
| Grille et breakpoints | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/grille.md` |
| Espacement | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/espacement.md` |
| Icônes | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/icones.md` |
| Pictogrammes | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/pictogrammes.md` |
| Élévation/ombres | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/elevation.md` |
| Médias | `node_modules/@timotheej/dsfr-toolkit/docs/fondations/medias.md` |

### Composants

| Composant | Préfixe CSS | Documentation |
|-----------|-------------|---------------|
| Accordéon | `fr-accordion` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/accordeon.md` |
| Alerte | `fr-alert` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/alerte.md` |
| Badge | `fr-badge` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/badge.md` |
| Bandeau info | `fr-notice` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/notice.md` |
| Recherche | `fr-search-bar` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/recherche.md` |
| Logo | `fr-logo` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/logo.md` |
| Bouton | `fr-btn` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/bouton.md` |
| FranceConnect | `fr-connect` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/franceconnect.md` |
| Radio | `fr-radio-group` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/radio.md` |
| Carte | `fr-card` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/carte.md` |
| Checkbox | `fr-checkbox-group` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/checkbox.md` |
| Input | `fr-input-group` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/input.md` |
| Callout | `fr-callout` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/callout.md` |
| Citation | `fr-quote` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/citation.md` |
| Consentement | `fr-consent-banner` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/consentement.md` |
| Contenu médias | `fr-content-media` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/contenu-medias.md` |
| Segmenté | `fr-segmented` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/segmented.md` |
| Curseur | `fr-range` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/curseur.md` |
| Header | `fr-header` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/header.md` |
| Breadcrumb | `fr-breadcrumb` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/breadcrumb.md` |
| Formulaire | `fr-fieldset` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/formulaire.md` |
| Highlight | `fr-highlight` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/highlight.md` |
| Lien | `fr-link` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/lien.md` |
| Modale | `fr-modal` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/modale.md` |
| Mot de passe | `fr-password` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/password.md` |
| Navigation | `fr-nav` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/navigation.md` |
| Onglet | `fr-tabs` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/onglet.md` |
| Pagination | `fr-pagination` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/pagination.md` |
| Affichage | `fr-display` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/display.md` |
| Partage | `fr-share` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/partage.md` |
| Footer | `fr-footer` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/footer.md` |
| Langues | `fr-translate` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/translate.md` |
| Select | `fr-select-group` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/select.md` |
| Sidemenu | `fr-sidemenu` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/sidemenu.md` |
| Skiplinks | `fr-skiplinks` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/skiplinks.md` |
| Sommaire | `fr-summary` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/sommaire.md` |
| Stepper | `fr-stepper` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/stepper.md` |
| Tableau | `fr-table` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/tableau.md` |
| Tag | `fr-tag` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/tag.md` |
| Toggle | `fr-toggle` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/toggle.md` |
| Tooltip | `fr-tooltip` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/tooltip.md` |
| Transcription | `fr-transcription` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/transcription.md` |
| Tuile | `fr-tile` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/tuile.md` |
| Upload | `fr-upload-group` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/upload.md` |
| Follow | `fr-follow` | `node_modules/@timotheej/dsfr-toolkit/docs/composants/follow.md` |

### Utilitaires

| Sujet | Fichier |
|-------|---------|
| Classes d'affichage | `node_modules/@timotheej/dsfr-toolkit/docs/utilitaires/affichage.md` |
| Classes d'espacement | `node_modules/@timotheej/dsfr-toolkit/docs/utilitaires/espacement.md` |

### Modèles de pages

| Modèle | Fichier |
|--------|---------|
| Pages d'erreur | `node_modules/@timotheej/dsfr-toolkit/docs/modeles/erreurs.md` |
| Page de connexion | `node_modules/@timotheej/dsfr-toolkit/docs/modeles/connexion.md` |
| Formulaire multi-étapes | `node_modules/@timotheej/dsfr-toolkit/docs/modeles/formulaire-multi-etapes.md` |
| Tableau filtrable | `node_modules/@timotheej/dsfr-toolkit/docs/modeles/tableau-filtrable.md` |
| Page de liste | `node_modules/@timotheej/dsfr-toolkit/docs/modeles/page-de-liste.md` |
| Page de contenu | `node_modules/@timotheej/dsfr-toolkit/docs/modeles/page-de-contenu.md` |

---

## Composants Beta (ne pas utiliser en production)

En-tête connectée, Combobox, Dropdown, Tabnav, Composition

## Composant déprécié

Téléchargement (`fr-download`) → Utiliser Card, Link ou Tile en variante download
