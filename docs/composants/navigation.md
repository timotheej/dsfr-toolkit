# Navigation principale

Menu de navigation horizontal principal, placé dans l'en-tête.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-nav` | Conteneur `<nav>` |
| `fr-nav__list` | Liste de navigation |
| `fr-nav__item` | Élément individuel |
| `fr-nav__link` | Lien de navigation |
| `fr-nav__btn` | Bouton déclencheur (dropdown) |
| `fr-menu` | Menu déroulant |
| `fr-menu__list` | Liste du menu |
| `fr-mega-menu` | Méga menu |
| `fr-mega-menu__leader` | Contexte éditorial |
| `fr-mega-menu__category` | Titre de catégorie |
| `fr-collapse` | Section repliable |

## Navigation simple

```html
<nav class="fr-nav" id="header-navigation" role="navigation"
     aria-label="Menu principal">
  <ul class="fr-nav__list">
    <li class="fr-nav__item">
      <a class="fr-nav__link" href="/" aria-current="page">Accueil</a>
    </li>
    <li class="fr-nav__item">
      <a class="fr-nav__link" href="/page-1">Page 1</a>
    </li>
    <li class="fr-nav__item">
      <a class="fr-nav__link" href="/page-2">Page 2</a>
    </li>
  </ul>
</nav>
```

## Navigation avec menu déroulant

```html
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
  <ul class="fr-nav__list">
    <li class="fr-nav__item">
      <a class="fr-nav__link" href="/" aria-current="page">Accueil</a>
    </li>
    <li class="fr-nav__item">
      <button class="fr-nav__btn" aria-expanded="false"
              aria-controls="menu-rubrique">Rubrique</button>
      <div class="fr-collapse fr-menu" id="menu-rubrique">
        <ul class="fr-menu__list">
          <li><a class="fr-nav__link" href="#">Sous-page 1</a></li>
          <li><a class="fr-nav__link" href="#">Sous-page 2</a></li>
          <li><a class="fr-nav__link" href="#">Sous-page 3</a></li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
```

## Navigation avec méga menu

```html
<li class="fr-nav__item">
  <button class="fr-nav__btn" aria-expanded="false"
          aria-controls="mega-menu-1">Méga rubrique</button>
  <div class="fr-collapse fr-mega-menu" id="mega-menu-1">
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-12 fr-col-lg-8 fr-col-offset-lg-1">
          <div class="fr-mega-menu__leader">
            <h4 class="fr-h4 fr-mb-2v">Titre de catégorie</h4>
            <p class="fr-hidden-lg">Description</p>
            <a class="fr-link fr-icon-arrow-right-line fr-link--icon-right"
               href="#">Voir toute la rubrique</a>
          </div>
        </div>
        <div class="fr-col-12 fr-col-lg-3">
          <h5 class="fr-mega-menu__category">Sous-catégorie</h5>
          <ul class="fr-mega-menu__list">
            <li><a class="fr-nav__link" href="#">Lien 1</a></li>
            <li><a class="fr-nav__link" href="#">Lien 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</li>
```
