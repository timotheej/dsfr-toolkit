# En-tête (Header)

En-tête principal du site contenant le bloc-marque, le nom du service, la barre de recherche et la navigation. **Obligatoire** sur tout site gouvernemental.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-header` | Conteneur principal |
| `fr-header__body` | Corps de l'en-tête |
| `fr-header__body-row` | Ligne de disposition |
| `fr-header__brand` | Section marque |
| `fr-header__brand-top` | Zone supérieure marque |
| `fr-header__logo` | Conteneur logo |
| `fr-header__operator` | Logo opérateur |
| `fr-header__service` | Section nom du service |
| `fr-header__service-title` | Titre du service |
| `fr-header__service-tagline` | Description du service |
| `fr-header__tools` | Outils d'accès rapide |
| `fr-header__tools-links` | Liens d'accès rapide |
| `fr-header__search` | Barre de recherche |
| `fr-header__navbar` | Bouton nav mobile |
| `fr-header__menu` | Menu mobile modal |
| `fr-btn--menu` | Bouton menu |

## Structure HTML complète

```html
<header role="banner" class="fr-header">
  <div class="fr-header__body">
    <div class="fr-container">
      <div class="fr-header__body-row">
        <div class="fr-header__brand fr-enlarge-link">
          <div class="fr-header__brand-top">
            <div class="fr-header__logo">
              <p class="fr-logo">
                République
                <br>Française
              </p>
            </div>
            <div class="fr-header__navbar">
              <button class="fr-btn--menu fr-btn"
                      data-fr-opened="false"
                      aria-controls="modal-header"
                      aria-haspopup="menu"
                      id="btn-menu"
                      title="Menu">
                Menu
              </button>
            </div>
          </div>
          <div class="fr-header__service">
            <a href="/" title="Accueil - Nom du site">
              <p class="fr-header__service-title">Nom du site / service</p>
            </a>
            <p class="fr-header__service-tagline">Baseline - description du site</p>
          </div>
        </div>
        <div class="fr-header__tools">
          <div class="fr-header__tools-links">
            <ul class="fr-btns-group">
              <li>
                <a class="fr-btn fr-icon-lock-line" href="/connexion">
                  Se connecter
                </a>
              </li>
            </ul>
          </div>
          <div class="fr-header__search">
            <div class="fr-search-bar" id="header-search" role="search">
              <label class="fr-label" for="search-input">Rechercher</label>
              <input class="fr-input" placeholder="Rechercher" type="search"
                     id="search-input" name="search-input">
              <button class="fr-btn" title="Rechercher">Rechercher</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Menu mobile -->
  <div class="fr-header__menu fr-modal" id="modal-header"
       aria-labelledby="btn-menu">
    <div class="fr-container">
      <button class="fr-btn--close fr-btn" aria-controls="modal-header"
              title="Fermer">Fermer</button>
      <div class="fr-header__menu-links"></div>
      <!-- Navigation principale (optionnel) -->
    </div>
  </div>
</header>
```

## Variantes

- Avec/sans logo opérateur
- Avec/sans barre de recherche
- Avec/sans liens d'accès rapide
- Avec navigation principale intégrée
