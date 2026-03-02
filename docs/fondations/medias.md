# Médias

## Images responsives

```html
<img src="image.jpg" class="fr-responsive-img" alt="Description" />
```

## Ratios supportés

| Classe | Ratio |
|--------|-------|
| `fr-ratio-32x9` | 32:9 (ultra-large) |
| `fr-ratio-16x9` | 16:9 (recommandé) |
| `fr-ratio-3x2` | 3:2 |
| `fr-ratio-4x3` | 4:3 |
| `fr-ratio-1x1` | 1:1 (carré) |
| `fr-ratio-3x4` | 3:4 (portrait) |
| `fr-ratio-2x3` | 2:3 (portrait) |

## Vidéo responsive

```html
<!-- 16:9 (défaut) -->
<div class="fr-responsive-vid">
  <iframe title="Titre vidéo" src="https://..." allowfullscreen></iframe>
</div>

<!-- 4:3 -->
<div class="fr-responsive-vid fr-responsive-vid--4x3">
  <iframe title="Titre vidéo" src="https://..." allowfullscreen></iframe>
</div>

<!-- 1:1 -->
<div class="fr-responsive-vid fr-responsive-vid--1x1">
  <iframe title="Titre vidéo" src="https://..." allowfullscreen></iframe>
</div>
```

## Contenu média (figure)

```html
<figure role="group" class="fr-content-media">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img" src="image.jpg" alt="Description">
  </div>
  <figcaption class="fr-content-media__caption">
    Légende de l'image
  </figcaption>
</figure>
```

### Tailles

| Classe | Largeur |
|--------|---------|
| `fr-content-media--sm` | 75% (centré) |
| (défaut) | 100% |
| `fr-content-media--lg` | 125% |

## Règles d'accessibilité

- Images décoratives : `alt=""` ou `aria-hidden="true"` pour SVG
- Images informatives : `alt` descriptif (45-75 caractères)
- Vidéos : lecture contrôlée par l'utilisateur, sous-titres, transcription adjacente
