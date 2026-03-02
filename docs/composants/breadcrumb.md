# Fil d'Ariane (Breadcrumb)

Navigation montrant la position de l'utilisateur dans la hiérarchie du site.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-breadcrumb` | Conteneur `<nav>` |
| `fr-breadcrumb__button` | Bouton toggle mobile |
| `fr-breadcrumb__list` | Liste ordonnée |
| `fr-breadcrumb__link` | Liens individuels |
| `fr-collapse` | Conteneur repliable (mobile) |

## Structure HTML

```html
<nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
  <button class="fr-breadcrumb__button" aria-expanded="false"
          aria-controls="breadcrumb-1">Voir le fil d'Ariane</button>
  <div class="fr-collapse" id="breadcrumb-1">
    <ol class="fr-breadcrumb__list">
      <li>
        <a class="fr-breadcrumb__link" href="/">Accueil</a>
      </li>
      <li>
        <a class="fr-breadcrumb__link" href="/rubrique">Rubrique</a>
      </li>
      <li>
        <a class="fr-breadcrumb__link" href="/rubrique/sous-rubrique">Sous-rubrique</a>
      </li>
      <li>
        <a class="fr-breadcrumb__link" aria-current="page">Page actuelle</a>
      </li>
    </ol>
  </div>
</nav>
```

La page courante est marquée avec `aria-current="page"` et n'a pas de `href`.
