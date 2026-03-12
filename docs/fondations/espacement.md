# Espacement

## Échelle d'espacement

Base : 1v = 4px (0.25rem)

| Token | Rem | Pixels |
|-------|-----|--------|
| `0` | 0 | 0 |
| `0-5v` | 0.125 | 2 |
| `1v` | 0.25 | 4 |
| `1-5v` | 0.375 | 6 |
| `2v` | 0.5 | 8 |
| `3v` | 0.75 | 12 |
| `4v` | 1 | 16 |
| `5v` | 1.25 | 20 |
| `6v` | 1.5 | 24 |
| `7v` | 1.75 | 28 |
| `8v` | 2 | 32 |
| `9v` | 2.25 | 36 |
| `10v` | 2.5 | 40 |
| `12v` | 3 | 48 |
| `16v` | 4 | 64 |
| `20v` | 5 | 80 |
| `24v` | 6 | 96 |
| `28v` | 7 | 112 |
| `32v` | 8 | 128 |

## Convention de nommage

Pattern : `fr-{propriété}{direction}-{breakpoint?}-{valeur}`

### Propriétés

| Préfixe | Propriété |
|---------|-----------|
| `m` | margin |
| `p` | padding |

### Directions

| Suffixe | Direction |
|---------|-----------|
| (aucun) | 4 côtés |
| `t` | top |
| `b` | bottom |
| `l` | left |
| `r` | right |
| `x` | left + right |
| `y` | top + bottom |

### Valeurs spéciales

| Valeur | Effet |
|--------|-------|
| `auto` | margin: auto |
| `n{valeur}` | Marge négative (ex: `n4v` = -16px) |

## Exemples

```html
<!-- Margin bottom 24px -->
<div class="fr-mb-6v">...</div>

<!-- Padding tous les côtés 16px -->
<div class="fr-p-4v">...</div>

<!-- Margin top responsive (4px à partir de MD) -->
<div class="fr-mt-md-1v">...</div>

<!-- Marge négative -16px -->
<div class="fr-m-n4v">...</div>

<!-- Centrage horizontal avec auto -->
<div class="fr-mx-auto">...</div>

<!-- Padding vertical 32px -->
<div class="fr-py-8v">...</div>

<!-- Reset padding -->
<div class="fr-py-0">...</div>

<!-- Espacement avec unité "w" (basée sur la largeur) -->
<div class="fr-my-7w fr-mt-md-12w fr-mb-md-10w">...</div>
```

## Unité W (espacement structurel)

L'unité `w` est utilisée pour les espacements structurels de page (entre sections, blocs majeurs). 1W = 8px = 2v.

| Token W | Token v | Rem | Pixels | Classe exemple |
|---------|---------|-----|--------|----------------|
| `1w` | `2v` | 0.5 | 8 | `fr-mt-1w` |
| `2w` | `4v` | 1 | 16 | `fr-mt-2w` |
| `3w` | `6v` | 1.5 | 24 | `fr-mt-3w` |
| `4w` | `8v` | 2 | 32 | `fr-mt-4w` |
| `5w` | `10v` | 2.5 | 40 | `fr-mt-5w` |
| `6w` | `12v` | 3 | 48 | `fr-mt-6w` |
| `7w` | `14v` | 3.5 | 56 | `fr-mt-7w` |
| `8w` | `16v` | 4 | 64 | `fr-mt-8w` |
| `9w` | `18v` | 4.5 | 72 | `fr-mt-9w` |
| `10w` | `20v` | 5 | 80 | `fr-mt-10w` |
| `12w` | `24v` | 6 | 96 | `fr-mt-12w` |

---

## Règles de composition de page

Ces règles définissent les espacements entre les blocs structurels d'une page. Elles s'appliquent à **tous les écrans** pour garantir une homogénéité visuelle, en particulier entre les pages d'un même parcours.

### Principe général

Plus un élément est structurant dans la hiérarchie de la page, plus l'espacement qui le précède est grand :

| Niveau | Espacement | Valeur | Contexte |
|--------|-----------|--------|----------|
| Micro | **2w** | 16px | Entre un titre et son texte associé (chapô, description) |
| Intra-bloc | **3w** | 24px | Entre le bloc titre+description et la zone de contenu |
| Inter sous-sections | **4w** | 32px | Entre sous-sections d'une même section |
| Inter-sections | **5w** | 40px | Entre sections majeures de la page |
| Pré-footer | **7w** | 56px | Entre le dernier contenu et le pied de page |

### Schéma d'application — Layout Col-12

```
En-tête (fr-header)
│
├── Fil d'Ariane (fr-breadcrumb)
│     padding-top: 2w (16px) depuis le header
│     ↕ 5w (40px)
├── Titre H1 + Chapô
│   ├── H1 (fr-h1)
│   │     ↕ 2w (16px)
│   └── Chapô (fr-text--lead)
│     ↕ 5w (40px)
├── Section
│   ├── H2 (fr-h2)
│   │     ↕ 2w (16px)
│   ├── Description
│   │     ↕ 3w (24px)
│   ├── Zone de contenu (composants, cartes, etc.)
│   │     ↕ 4w (32px)
│   └── Sous-section (row de colonnes)
│       ├── Colonne : H3 ↕2w Description ↕3w Contenu
│       └── Colonne : H3 ↕2w Description ↕3w Contenu
│     ↕ 5w (40px)
├── Section suivante (même structure)
│     ↕ 5w (40px)
├── Retour en haut de page
│     ↕ 7w (56px)
└── Pied de page (fr-footer)
```

### Schéma d'application — Layout Col-3 / Col-9 (avec menu latéral)

La partie contenu (Col-9) suit les **mêmes règles d'espacement** que le layout Col-12. Seule différence :

- Le conteneur est divisé en `fr-col-3` (menu latéral `fr-sidemenu`) + `fr-col-9` (contenu)
- La gouttière entre les deux colonnes est de 3w (24px)

### Règles détaillées

**Titre → texte associé : 2w (16px)**
S'applique systématiquement quel que soit le niveau de titre :
```html
<h1 class="fr-h1">Titre de page</h1>
<p class="fr-text--lead fr-mt-2w">Chapô introductif de la page.</p>
```

```html
<h2 class="fr-h2">Titre de section</h2>
<p class="fr-mt-2w">Description de la section.</p>
```

```html
<h3 class="fr-h3">Titre de sous-section</h3>
<p class="fr-mt-2w">Description de la sous-section.</p>
```

**Bloc titre+description → zone de contenu : 3w (24px)**
```html
<div>
  <h2 class="fr-h2">Nos services</h2>
  <p class="fr-mt-2w">Découvrez l'ensemble des services disponibles.</p>
</div>
<div class="fr-grid-row fr-grid-row--gutters fr-mt-3w">
  <!-- Cartes, tuiles, contenu... -->
</div>
```

**Entre sous-sections d'une même section : 4w (32px)**
```html
<!-- Première sous-section -->
<div>
  <h2 class="fr-h2">Section principale</h2>
  <p class="fr-mt-2w">Description.</p>
  <div class="fr-mt-3w"><!-- contenu --></div>
</div>
<!-- Sous-section en colonnes -->
<div class="fr-grid-row fr-grid-row--gutters fr-mt-4w">
  <div class="fr-col-6"><!-- colonne 1 --></div>
  <div class="fr-col-6"><!-- colonne 2 --></div>
</div>
```

**Entre sections majeures : 5w (40px)**
```html
<section class="fr-mt-5w">
  <h2 class="fr-h2">Première section</h2>
  <!-- ... -->
</section>
<section class="fr-mt-5w">
  <h2 class="fr-h2">Deuxième section</h2>
  <!-- ... -->
</section>
```

**Avant le pied de page : 7w (56px)**
```html
  <div class="fr-mt-5w">
    <a class="fr-link fr-icon-arrow-up-fill fr-link--icon-left" href="#">Haut de page</a>
  </div>
</main>
<!-- Le conteneur main doit avoir un padding-bottom de 7w -->
<footer class="fr-footer fr-mt-7w">
```

### Espacements qui ne changent pas entre layouts

| Règle | Col-12 | Col-3/Col-9 |
|-------|--------|-------------|
| Titre → description | 2w | 2w |
| Description → contenu | 3w | 3w |
| Sous-section → sous-section | 4w | 4w |
| Section → section | 5w | 5w |
| Contenu → footer | 7w | 7w |

### Note sur le responsive

Ces valeurs sont définies pour le **desktop** (breakpoint XL, 1440px). Sur mobile, le DSFR réduit naturellement certains espacements via ses composants. Pour les espacements structurels custom, envisager de réduire d'un cran sur mobile si nécessaire (ex: 5w desktop → 4w mobile).
