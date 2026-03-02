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
