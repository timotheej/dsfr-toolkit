# Carte (Card)

Aperçu de contenu redirigeant vers une page de détail.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-card` | Conteneur de base |
| `fr-card__body` | Wrapper contenu (obligatoire) |
| `fr-card__content` | Bloc de contenu |
| `fr-card__title` | Titre |
| `fr-card__desc` | Description |
| `fr-card__header` | En-tête (zone image) |
| `fr-card__img` | Conteneur image |
| `fr-card__footer` | Pied / zone d'actions |
| `fr-card__start` | Zone métadonnées début |
| `fr-card__end` | Zone métadonnées fin |
| `fr-card__detail` | Texte de détail |
| `fr-card--sm` / `--lg` | Tailles |
| `fr-card--grey` | Fond gris |
| `fr-card--no-background` | Sans fond |
| `fr-card--no-border` | Sans bordure |
| `fr-card--shadow` | Avec ombre |
| `fr-card--horizontal` | Disposition horizontale |
| `fr-card--horizontal-half` | Horizontal 50/50 |
| `fr-card--horizontal-tier` | Horizontal 1/3-2/3 |
| `fr-card--download` | Variante téléchargement |
| `fr-enlarge-link` | Zone de clic étendue |

## Structure HTML - Carte verticale

```html
<div class="fr-card fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a href="#">Titre de la carte</a>
      </h3>
      <p class="fr-card__desc">Description de la carte avec un résumé du contenu.</p>
      <div class="fr-card__start">
        <ul class="fr-badges-group">
          <li><p class="fr-badge fr-badge--sm fr-badge--green-emeraude">Badge</p></li>
        </ul>
        <p class="fr-card__detail fr-icon-arrow-right-line">Détail</p>
      </div>
    </div>
  </div>
  <div class="fr-card__header">
    <div class="fr-card__img">
      <img class="fr-responsive-img" src="image.jpg" alt="">
    </div>
  </div>
</div>
```

## Carte horizontale

```html
<div class="fr-card fr-card--horizontal fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a href="#">Titre</a>
      </h3>
      <p class="fr-card__desc">Description</p>
    </div>
  </div>
  <div class="fr-card__header">
    <div class="fr-card__img">
      <img class="fr-responsive-img" src="image.jpg" alt="">
    </div>
  </div>
</div>
```

## Carte avec actions

```html
<div class="fr-card fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a href="#">Titre</a>
      </h3>
      <p class="fr-card__desc">Description</p>
    </div>
    <div class="fr-card__footer">
      <ul class="fr-btns-group fr-btns-group--inline-lg">
        <li><a class="fr-btn" href="#">Action</a></li>
      </ul>
    </div>
  </div>
</div>
```
