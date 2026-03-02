# Menu latéral (Sidemenu)

Navigation verticale secondaire dans une section.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-sidemenu` | Conteneur principal |
| `fr-sidemenu__inner` | Wrapper interne |
| `fr-sidemenu__btn` | Bouton toggle mobile |
| `fr-sidemenu__title` | Titre de section |
| `fr-sidemenu__list` | Liste de liens |
| `fr-sidemenu__item` | Élément |
| `fr-sidemenu__item--active` | Élément actif |
| `fr-sidemenu__link` | Lien |
| `fr-sidemenu--sticky` | Position sticky |
| `fr-sidemenu--right` | Aligné à droite |
| `fr-collapse` | Repliable mobile |

## Structure HTML

```html
<nav class="fr-sidemenu" aria-labelledby="sidemenu-title">
  <div class="fr-sidemenu__inner">
    <button class="fr-sidemenu__btn" aria-controls="sidemenu-wrapper"
            aria-expanded="false">
      Dans cette rubrique
    </button>
    <div class="fr-collapse" id="sidemenu-wrapper">
      <div class="fr-sidemenu__title" id="sidemenu-title">Rubrique</div>
      <ul class="fr-sidemenu__list">
        <li class="fr-sidemenu__item fr-sidemenu__item--active">
          <a class="fr-sidemenu__link" aria-current="page" href="#">Page active</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#">Autre page</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#">Encore une page</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
