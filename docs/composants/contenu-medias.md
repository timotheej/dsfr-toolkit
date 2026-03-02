# Contenu médias (Content Media)

Intégration d'images et vidéos avec légendes dans du contenu éditorial.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-content-media` | Conteneur `<figure>` |
| `fr-content-media__img` | Wrapper image |
| `fr-content-media__caption` | Légende |
| `fr-content-media--sm` | Petit (75%, centré) |
| `fr-content-media--lg` | Grand (125%) |

## Image avec légende

```html
<figure role="group" class="fr-content-media">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img" src="image.jpg" alt="Description de l'image">
  </div>
  <figcaption class="fr-content-media__caption">
    Légende de l'image - Crédit photo
  </figcaption>
</figure>
```

## Vidéo avec légende

```html
<figure role="group" class="fr-content-media">
  <div class="fr-content-media__img">
    <div class="fr-responsive-vid">
      <iframe title="Titre de la vidéo" src="https://..." allowfullscreen></iframe>
    </div>
  </div>
  <figcaption class="fr-content-media__caption">
    Légende de la vidéo
  </figcaption>
</figure>
```

## Tailles

```html
<!-- Petit (75%) -->
<figure class="fr-content-media fr-content-media--sm" role="group">...</figure>

<!-- Standard (100%) -->
<figure class="fr-content-media" role="group">...</figure>

<!-- Grand (125%) -->
<figure class="fr-content-media fr-content-media--lg" role="group">...</figure>
```
