# Instructions projet — Application Agréments DGRC (DSFR)

## Règle absolue : DSFR uniquement

**Pour toute modification ou création dans ce projet, utiliser STRICTEMENT les composants du DSFR.** Aucun CSS custom, aucun composant maison ne doit remplacer un composant existant du DSFR.

---

## Stack technique

- HTML/CSS/JS vanilla
- DSFR v1.14.3 (`@gouvfr/dsfr`)
- Pas de framework JS (vanilla uniquement)
- CSS/JS du DSFR chargés depuis `node_modules/@gouvfr/dsfr/dist/`

## Structure du projet

```
├── index.html                  # Page démo principale
├── pages/                      # Pages du site
│   ├── operateur/              # Parcours opérateur (dépôt demande)
│   └── tableau-de-bord.html    # Page démo existante
├── assets/                     # Ressources custom
├── docs/                       # Documentation DSFR complète
│   ├── fondations/             # Typo, couleurs, grille, espacement, icônes...
│   ├── composants/             # 45+ composants documentés
│   ├── utilitaires/            # Classes d'affichage et espacement
│   ├── modeles/                # Templates de pages (erreur, connexion)
│   ├── cahier-des-charges-application-metier.md
│   └── parcours-ui-agrement.md # Parcours UI détaillés (3 parcours)
├── node_modules/@gouvfr/dsfr/  # Package DSFR
├── package.json
└── CLAUDE.md                   # Ce fichier
```

---

## Règles DSFR — À respecter systématiquement

### Fondamentaux

1. **Composants DSFR exclusivement** : Ne JAMAIS créer de composant custom si un composant DSFR existe
2. **Polices autorisées** : Marianne (sans-serif) et Spectral (serif) UNIQUEMENT
3. **Fond blanc par défaut** : Le fond de page doit être blanc par défaut
4. **Dark mode requis** : Supporter le mode sombre via tokens DSFR
5. **Accessibilité RGAA** : Tous les composants doivent respecter le RGAA
6. **Pas de CSS custom pour les composants** : Utiliser uniquement les classes `fr-*`

### Convention de nommage CSS

- Préfixe : `fr-`
- Méthodologie : BEM (Block-Element-Modifier)
- Pattern : `fr-block__element--modifier`

### Structure HTML obligatoire

- `<!doctype html>` avec `<html lang="fr" data-fr-scheme="system">`
- Meta viewport obligatoire
- Charger `dsfr.min.css` ET `utility/utility.min.css`
- Scripts DSFR en fin de `<body>` (module + nomodule)

### Composants obligatoires sur chaque page

1. Skiplinks (`fr-skiplinks`) en premier dans le body
2. Header (`fr-header`) avec bloc-marque République Française
3. Main (`role="main"`)
4. Footer (`fr-footer`) avec liens légaux obligatoires

### Grille

- Toujours respecter : `fr-container > fr-grid-row > fr-col-*`
- 12 colonnes maximum
- Gouttières via `fr-grid-row--gutters`
- Breakpoints : XS(0), SM(576), MD(768), LG(992), XL(1248)

### Formulaires

- Disposition en une seule colonne
- Labels au-dessus des inputs
- Champs obligatoires par défaut, optionnels marqués "(optionnel)"
- Messages d'erreur dans `fr-messages-group` avec `aria-live="polite"`

---

## Référence rapide des composants DSFR

| Composant | Préfixe CSS | Doc |
|-----------|-------------|-----|
| Accordéon | `fr-accordion` | docs/composants/accordeon.md |
| Alerte | `fr-alert` | docs/composants/alerte.md |
| Badge | `fr-badge` | docs/composants/badge.md |
| Bandeau info (Notice) | `fr-notice` | docs/composants/notice.md |
| Barre de recherche | `fr-search-bar` | docs/composants/recherche.md |
| Bloc-marque (Logo) | `fr-logo` | docs/composants/logo.md |
| Bouton | `fr-btn` | docs/composants/bouton.md |
| Bouton FranceConnect | `fr-connect` | docs/composants/franceconnect.md |
| Bouton radio | `fr-radio-group` | docs/composants/radio.md |
| Carte | `fr-card` | docs/composants/carte.md |
| Case à cocher | `fr-checkbox-group` | docs/composants/checkbox.md |
| Champ de saisie | `fr-input-group` | docs/composants/input.md |
| Callout | `fr-callout` | docs/composants/callout.md |
| Consentement cookies | `fr-consent-banner` | docs/composants/consentement.md |
| Contrôle segmenté | `fr-segmented` | docs/composants/segmented.md |
| En-tête (Header) | `fr-header` | docs/composants/header.md |
| Fil d'Ariane | `fr-breadcrumb` | docs/composants/breadcrumb.md |
| Formulaire | `fr-fieldset` | docs/composants/formulaire.md |
| Highlight | `fr-highlight` | docs/composants/highlight.md |
| Lien | `fr-link` | docs/composants/lien.md |
| Modale | `fr-modal` | docs/composants/modale.md |
| Mot de passe | `fr-password` | docs/composants/password.md |
| Navigation | `fr-nav` | docs/composants/navigation.md |
| Onglet (Tab) | `fr-tabs` | docs/composants/onglet.md |
| Pagination | `fr-pagination` | docs/composants/pagination.md |
| Pied de page (Footer) | `fr-footer` | docs/composants/footer.md |
| Select | `fr-select-group` | docs/composants/select.md |
| Sidemenu | `fr-sidemenu` | docs/composants/sidemenu.md |
| Skiplinks | `fr-skiplinks` | docs/composants/skiplinks.md |
| Stepper | `fr-stepper` | docs/composants/stepper.md |
| Tableau | `fr-table` | docs/composants/tableau.md |
| Tag | `fr-tag` | docs/composants/tag.md |
| Tuile | `fr-tile` | docs/composants/tuile.md |
| Upload | `fr-upload-group` | docs/composants/upload.md |

### Composants en Beta (ne pas utiliser en production)

- En-tête connectée, Combobox, Dropdown, Tabnav, Composition

### Composant déprécié

- Téléchargement (`fr-download`) → Utiliser Card, Link ou Tile en variante download

---

## Documentation disponible

- **Fondations** (`docs/fondations/`) : typographie, couleurs, grille, espacement, icônes, pictogrammes, élévation, médias
- **Composants** (`docs/composants/`) : 45+ fichiers avec structure HTML exacte et classes CSS
- **Utilitaires** (`docs/utilitaires/`) : classes d'affichage (`fr-hidden`, `fr-sr-only`), espacement (`fr-m*`, `fr-p*`)
- **Modèles** (`docs/modeles/`) : templates de pages (erreur, connexion)
- **Cahier des charges** (`docs/cahier-des-charges-application-metier.md`) : spécifications complètes de l'application
- **Parcours UI** (`docs/parcours-ui-agrement.md`) : 3 parcours détaillés (opérateur, instructeur, chef de bureau)
