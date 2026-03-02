# Grille et points de rupture

## Points de rupture (Breakpoints)

| Nom | Min-width | Token |
|-----|-----------|-------|
| XS | 0px | (défaut) |
| SM | 576px | `$bp-sm` |
| MD | 768px | `$bp-md` |
| LG | 992px | `$bp-lg` |
| XL | 1248px | `$bp-xl` |

## Conteneur

| Classe | Comportement |
|--------|-------------|
| `fr-container` | Conteneur centré avec marges externes |
| `fr-container--fluid` | Pleine largeur, sans marges externes |

## Structure obligatoire

```
fr-container > fr-grid-row > fr-col-*
```

## Lignes (Row)

| Classe | Effet |
|--------|-------|
| `fr-grid-row` | Conteneur flex |
| `fr-grid-row--gutters` | Gouttières (16px XS-LG, 24px XL) |
| `fr-grid-row--left` | Alignement horizontal gauche |
| `fr-grid-row--center` | Alignement horizontal centré |
| `fr-grid-row--right` | Alignement horizontal droit |
| `fr-grid-row--top` | Alignement vertical haut |
| `fr-grid-row--middle` | Alignement vertical centré |
| `fr-grid-row--bottom` | Alignement vertical bas |

## Colonnes

| Classe | Comportement |
|--------|-------------|
| `fr-col` | Largeur automatique (division égale) |
| `fr-col-{n}` | Largeur fixe n/12 (1 à 12) |
| `fr-col-sm-{n}` | Responsive à SM |
| `fr-col-md-{n}` | Responsive à MD |
| `fr-col-lg-{n}` | Responsive à LG |
| `fr-col-xl-{n}` | Responsive à XL |

## Offsets

| Classe | Effet |
|--------|-------|
| `fr-col-offset-{n}` | Décalage de n colonnes à gauche |
| `fr-col-offset-{n}--right` | Décalage de n colonnes à droite |
| `fr-col-offset-{bp}-{n}` | Décalage responsive |

## Exemple complet

```html
<div class="fr-container">
  <div class="fr-grid-row fr-grid-row--gutters">
    <!-- 12 cols mobile, 6 cols tablette, 4 cols desktop -->
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
      <p>Colonne 1</p>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
      <p>Colonne 2</p>
    </div>
    <div class="fr-col-12 fr-col-md-12 fr-col-lg-4">
      <p>Colonne 3</p>
    </div>
  </div>
</div>
```

## Exemple avec offset

```html
<div class="fr-container">
  <div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-12 fr-col-md-8 fr-col-offset-md-2">
      <p>Contenu centré sur 8 colonnes</p>
    </div>
  </div>
</div>
```
