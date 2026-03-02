# Sélecteur de langues (Translate)

Menu déroulant de sélection de langue.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-translate` | Conteneur principal |
| `fr-translate__btn` | Bouton déclencheur |
| `fr-translate__menu` | Menu déroulant |
| `fr-translate__language` | Lien de langue |

## Structure HTML

```html
<div class="fr-translate fr-nav">
  <div class="fr-nav__item">
    <button aria-controls="translate-menu" aria-expanded="false"
            title="Sélectionner une langue" type="button"
            class="fr-translate__btn fr-btn fr-btn--tertiary">
      FR<span class="fr-hidden-lg"> - Français</span>
    </button>
    <div class="fr-collapse fr-translate__menu fr-menu" id="translate-menu">
      <ul class="fr-menu__list">
        <li>
          <a class="fr-translate__language fr-nav__link"
             hreflang="fr" lang="fr" href="/fr/" aria-current="true">
            FR - Français
          </a>
        </li>
        <li>
          <a class="fr-translate__language fr-nav__link"
             hreflang="en" lang="en" href="/en/">
            EN - English
          </a>
        </li>
        <li>
          <a class="fr-translate__language fr-nav__link"
             hreflang="de" lang="de" href="/de/">
            DE - Deutsch
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
```
