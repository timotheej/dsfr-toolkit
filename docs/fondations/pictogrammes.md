# Pictogrammes

## Présentation

Les pictogrammes sont des illustrations SVG décoratives sur une grille 80x80px. Contrairement aux icônes (fonctionnelles), ils communiquent un sens par reconnaissance visuelle immédiate.

## Spécifications

- **Grille** : 80x80px (adaptable en multiples de 8)
- **Épaisseur de trait** : 2px centré, terminaisons et jonctions arrondies
- **Taille minimum** : 40x40px
- **Taille maximum** : 180x180px
- **Ratio** : Toujours 1:1

## Système à trois couches

| Couche | Couverture | Classe CSS | Couleur par défaut |
|--------|------------|------------|-------------------|
| **Major** (dominante) | 60% | `fr-artwork-major` | Bleu France 113 |
| **Minor** (secondaire) | 30% | `fr-artwork-minor` | Rouge Marianne 472 |
| **Decorative** | 10% | `fr-artwork-decorative` | Bleu France 950 |

## Intégration HTML

```html
<svg class="fr-artwork" aria-hidden="true"
     viewBox="0 0 80 80" width="80px" height="80px">
  <use class="fr-artwork-decorative"
       href="dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
  <use class="fr-artwork-minor"
       href="dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
  <use class="fr-artwork-major"
       href="dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
</svg>
```

## Couleur d'accent

```html
<svg class="fr-artwork fr-artwork--green-emeraude" aria-hidden="true"
     viewBox="0 0 80 80" width="80px" height="80px">
  <!-- ... -->
</svg>
```

## Emplacement des fichiers

`node_modules/@gouvfr/dsfr/dist/artwork/pictograms/`

Organisés par catégorie : `buildings/`, `digital/`, `environment/`, `health/`, `system/`, etc.

## Contextes d'utilisation

- Tuiles (`fr-tile__pictogram`)
- Pages d'erreur (404, 500, 503)
- Callouts
- En-têtes de section
