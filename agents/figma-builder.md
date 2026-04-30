# Methodologie Export React → Figma

## Objectif

Traduire un ecran React construit avec `@codegouvfr/react-dsfr` en maquette Figma
en utilisant les composants de la bibliotheque DSFR connectee.

Le code React fait foi — la maquette Figma doit etre fidele au proto valide.

---

## REGLE ABSOLUE : Composants de la bibliotheque DSFR

Pour CHAQUE composant `react-dsfr` dans le code, instancier le composant equivalent
depuis la bibliotheque DSFR Figma.

### Workflow par composant

```
1. Identifier le composant react-dsfr dans le code (ex: <Button>, <Card>)
2. search_design_system("[nom Figma]")     → trouver le composant DSFR
3. /figma:figma-use                        → OBLIGATOIRE avant use_figma
4. use_figma(...)                          → instancier + configurer les props
```

### INTERDIT

- Dessiner des shapes pour remplacer un composant DSFR existant
- Detacher un composant de la bibliotheque
- Utiliser des couleurs en dur (hex/rgb)

---

## Correspondance react-dsfr → Figma

| Import react-dsfr | Recherche Figma |
|-------------------|----------------|
| `Button` | "Bouton" |
| `ButtonsGroup` | "Groupe de boutons" |
| `Card` | "Carte" |
| `Alert` | "Alerte" |
| `Badge` | "Badge" |
| `Header` | "En-tete" |
| `Footer` | "Pied de page" |
| `Breadcrumb` | "Fil d'Ariane" |
| `CallOut` | "Mise en avant" |
| `Input` | "Champ de saisie" |
| `Select` | "Liste deroulante" |
| `RadioButtons` | "Bouton radio" |
| `Checkbox` | "Case a cocher" |
| `Table` | "Tableau" |
| `Tag` | "Tag" |
| `Tabs` | "Onglets" |
| `Accordion` | "Accordeon" |
| `Pagination` | "Pagination" |
| `Stepper` | "Indicateur d'etapes" |
| `ToggleSwitch` | "Interrupteur" |
| `Tile` | "Tuile" |
| `SideMenu` | "Menu lateral" |
| `Notice` | "Bandeau d'information" |
| `Highlight` | "Mise en exergue" |
| `Upload` | "Ajout de fichier" |

---

## Methode de traduction

### 1. Lire le code React

Analyser le composant page :
- Structure JSX (layout, grille, sections)
- Composants react-dsfr utilises et leurs props
- Composants custom (KPI, timeline, etc.)
- Classes CSS (`fr.cx(...)`) pour les espacements et couleurs

### 2. Creer la structure Figma

- Frame principal : 1440px largeur, auto-layout vertical
- Container : 1200px centre (comme `fr-container`)
- Reproduire la grille (`fr-grid-row` → auto-layout horizontal, `fr-col-*` → proportions)

### 3. Instancier les composants

Pour chaque composant react-dsfr :
- Chercher dans la bibliotheque via `search_design_system`
- Instancier via `use_figma`
- Mapper les props React aux overrides Figma :
  - `children` / `title` → texte
  - `severity` / `priority` → variante
  - `size` → taille
  - `iconId` → icone

### 4. Composants custom

Pour les composants qui n'existent pas dans la bibliotheque DSFR :
- Reproduire avec des frames + auto-layout
- Utiliser les styles de texte et couleur de la bibliotheque DSFR
- Espacements en multiples de 8px

### 5. Verification

- `get_screenshot` du resultat Figma
- Comparer visuellement avec le proto React
- Verifier que tous les composants sont des instances de la bibliotheque

---

## Checklist finale

Avant de terminer, lister chaque element :

| Element | Type | Justification si manuel |
|---------|------|------------------------|
| Header | INSTANCE BIBLIOTHEQUE | — |
| Bouton "Valider" | INSTANCE BIBLIOTHEQUE | — |
| KPI Card | MANUEL | N'existe pas dans la bibliotheque DSFR |
| ... | ... | ... |

Si un element est MANUEL alors qu'un composant DSFR existe → corriger avant de terminer.
