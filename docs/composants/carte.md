# Carte (Card)

Aperçu de contenu redirigeant vers une page de détail.

## Classes CSS

| Classe | Rôle |
|--------|------|
| **Éléments** | |
| `fr-card` | Conteneur de base |
| `fr-card__body` | Wrapper contenu (obligatoire) |
| `fr-card__content` | Bloc de contenu |
| `fr-card__title` | Titre (contient le `<a>` ou `<button>`) |
| `fr-card__desc` | Description |
| `fr-card__header` | En-tête (zone image/vidéo) |
| `fr-card__img` | Conteneur image |
| `fr-card__vid` | Conteneur vidéo (iframe/video) |
| `fr-card__footer` | Pied / zone d'actions |
| `fr-card__start` | Zone métadonnées haut (badges, tags, détail) |
| `fr-card__end` | Zone métadonnées bas |
| `fr-card__detail` | Texte de détail (0.75rem, gris) |
| **Tailles** | |
| `fr-card--sm` | Petite (padding 1.5rem, titre 1.125rem) |
| `fr-card--lg` | Grande (padding 2.5rem, titre 1.375rem) |
| **Apparence** | |
| `fr-card--grey` | Fond gris |
| `fr-card--no-background` | Fond transparent |
| `fr-card--no-border` | Sans bordure |
| `fr-card--shadow` | Avec ombre portée |
| **Disposition** | |
| `fr-card--horizontal` | Horizontale au breakpoint md (40% image / 60% contenu) |
| `fr-card--horizontal-half` | Horizontale 50/50 |
| `fr-card--horizontal-tier` | Horizontale 1/3 image - 2/3 contenu |
| `fr-card--download` | Variante téléchargement |
| **Modificateurs** | |
| `fr-card--no-icon` | Supprime l'icône flèche sur le lien |
| `fr-card--no-arrow` | Supprime l'espace réservé à la flèche |
| `fr-enlarge-link` | Zone de clic étendue (lien) |
| `fr-enlarge-button` | Zone de clic étendue (bouton) |

## Carte verticale avec image

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

## Carte sans image

```html
<div class="fr-card fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a href="#">Titre de la carte</a>
      </h3>
      <p class="fr-card__desc">Description sans image.</p>
    </div>
  </div>
</div>
```

## Carte horizontale (3 variantes)

Toutes les variantes horizontales sont verticales en mobile et horizontales à partir du breakpoint md (768px).

```html
<!-- 40% image / 60% contenu -->
<div class="fr-card fr-card--horizontal fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title"><a href="#">Titre horizontal</a></h3>
      <p class="fr-card__desc">Description en disposition horizontale.</p>
    </div>
  </div>
  <div class="fr-card__header">
    <div class="fr-card__img">
      <img class="fr-responsive-img" src="image.jpg" alt="">
    </div>
  </div>
</div>

<!-- 50% / 50% -->
<div class="fr-card fr-card--horizontal-half fr-enlarge-link">
  <!-- même structure -->
</div>

<!-- 1/3 image / 2/3 contenu -->
<div class="fr-card fr-card--horizontal-tier fr-enlarge-link">
  <!-- même structure -->
</div>
```

## Carte téléchargement

Remplace le composant `fr-download` (déprécié). Devient horizontale au breakpoint md.

```html
<div class="fr-card fr-card--download fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a download href="document.pdf">Titre du document</a>
      </h3>
      <p class="fr-card__desc">Description du fichier à télécharger.</p>
      <div class="fr-card__end">
        <p class="fr-card__detail">PDF - 1.81 Mo</p>
      </div>
    </div>
  </div>
  <div class="fr-card__header">
    <div class="fr-card__img">
      <img class="fr-responsive-img" src="thumbnail.png" alt="">
    </div>
  </div>
</div>
```

## Variantes d'apparence

```html
<!-- Fond gris -->
<div class="fr-card fr-card--grey fr-enlarge-link"><!-- ... --></div>

<!-- Avec ombre -->
<div class="fr-card fr-card--shadow fr-enlarge-link"><!-- ... --></div>

<!-- Ombre + gris -->
<div class="fr-card fr-card--shadow fr-card--grey fr-enlarge-link"><!-- ... --></div>

<!-- Sans bordure ni fond (carte invisible) -->
<div class="fr-card fr-card--no-border fr-card--no-background fr-enlarge-link"><!-- ... --></div>
```

## Badges superposés sur l'image

Placer `fr-badges-group` directement dans `fr-card__header` (frère de `fr-card__img`) pour un overlay en haut à gauche.

```html
<div class="fr-card__header">
  <div class="fr-card__img">
    <img class="fr-responsive-img" src="image.jpg" alt="">
  </div>
  <ul class="fr-badges-group">
    <li><p class="fr-badge fr-badge--sm fr-badge--info">Nouveau</p></li>
  </ul>
</div>
```

## Carte avec actions

```html
<div class="fr-card fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title"><a href="#">Titre</a></h3>
      <p class="fr-card__desc">Description</p>
    </div>
    <div class="fr-card__footer">
      <ul class="fr-btns-group fr-btns-group--inline-lg">
        <li><a class="fr-btn" href="#">Action principale</a></li>
        <li><a class="fr-btn fr-btn--secondary" href="#">Action secondaire</a></li>
      </ul>
    </div>
  </div>
</div>
```

## Grille de cartes responsive

```html
<!-- 3 colonnes desktop, 2 tablette, 1 mobile -->
<div class="fr-grid-row fr-grid-row--gutters">
  <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
    <div class="fr-card fr-enlarge-link"><!-- carte --></div>
  </div>
  <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
    <div class="fr-card fr-enlarge-link"><!-- carte --></div>
  </div>
  <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
    <div class="fr-card fr-enlarge-link"><!-- carte --></div>
  </div>
</div>
```

| Layout | Classes colonnes |
|--------|-----------------|
| 4 colonnes desktop | `fr-col-12 fr-col-md-6 fr-col-lg-3` |
| 3 colonnes desktop | `fr-col-12 fr-col-md-6 fr-col-lg-4` |
| 2 colonnes desktop | `fr-col-12 fr-col-md-6` |

## Accessibilité

- Le titre DOIT contenir un `<a href>` ou `<button>` (élément focalisable)
- `fr-enlarge-link` étend la zone de clic via un pseudo-élément
- Images décoratives : `alt=""` ; images informatives : `alt` descriptif
- NE PAS mettre d'éléments interactifs dans `fr-card__start/end/detail` quand `fr-enlarge-link` est utilisé
- Les boutons d'action dans `fr-card__footer` fonctionnent avec `fr-enlarge-link`
