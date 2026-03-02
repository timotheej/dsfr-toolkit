# Tuile (Tile)

Élément de point d'entrée redirigeant vers une page. Plus simple que les cartes, utilisé pour des raccourcis de navigation.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-tile` | Conteneur de base |
| `fr-tile__body` | Wrapper contenu |
| `fr-tile__content` | Contenu interne |
| `fr-tile__header` | En-tête |
| `fr-tile__pictogram` | Zone pictogramme |
| `fr-tile__title` | Titre |
| `fr-tile__desc` | Description |
| `fr-tile__detail` | Texte détail |
| `fr-tile--sm` | Petit |
| `fr-tile--grey` | Fond gris |
| `fr-tile--no-background` | Sans fond |
| `fr-tile--no-border` | Sans bordure |
| `fr-tile--shadow` | Avec ombre |
| `fr-tile--horizontal` | Disposition horizontale |
| `fr-tile--download` | Variante téléchargement |
| `fr-enlarge-link` | Zone de clic étendue |

## Structure HTML - Tuile verticale

```html
<div class="fr-tile fr-enlarge-link">
  <div class="fr-tile__body">
    <div class="fr-tile__content">
      <h3 class="fr-tile__title">
        <a href="#">Titre de la tuile</a>
      </h3>
      <p class="fr-tile__desc">Description de la tuile expliquant le contenu cible.</p>
    </div>
  </div>
  <div class="fr-tile__header">
    <div class="fr-tile__pictogram">
      <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
        <use class="fr-artwork-decorative" href="pictograms/system/information.svg#artwork-decorative"></use>
        <use class="fr-artwork-minor" href="pictograms/system/information.svg#artwork-minor"></use>
        <use class="fr-artwork-major" href="pictograms/system/information.svg#artwork-major"></use>
      </svg>
    </div>
  </div>
</div>
```

## Tuile horizontale

```html
<div class="fr-tile fr-tile--horizontal fr-enlarge-link">
  <div class="fr-tile__body">
    <div class="fr-tile__content">
      <h3 class="fr-tile__title">
        <a href="#">Titre</a>
      </h3>
      <p class="fr-tile__desc">Description</p>
    </div>
  </div>
  <div class="fr-tile__header">
    <div class="fr-tile__pictogram">
      <!-- pictogramme SVG -->
    </div>
  </div>
</div>
```
