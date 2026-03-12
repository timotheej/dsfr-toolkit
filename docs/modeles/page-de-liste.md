# Page de liste

Modèle pour une page affichant une collection d'éléments avec recherche, filtres et pagination.

## Composants utilisés

- `fr-breadcrumb` — Fil d'Ariane
- `fr-search-bar` — Barre de recherche
- `fr-tags-group` — Filtres (tags sélectionnables/supprimables)
- `fr-select-group` — Tri
- `fr-card` — Cartes de résultats
- `fr-badge` — Indicateurs de statut sur les cartes
- `fr-pagination` — Pagination

## Structure HTML complète

```html
<main role="main" id="content">
  <div class="fr-container">

    <!-- Fil d'Ariane -->
    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <button class="fr-breadcrumb__button" aria-expanded="false"
              aria-controls="breadcrumb-1">Voir le fil d'Ariane</button>
      <div class="fr-collapse" id="breadcrumb-1">
        <ol class="fr-breadcrumb__list">
          <li><a class="fr-breadcrumb__link" href="/">Accueil</a></li>
          <li><a class="fr-breadcrumb__link" aria-current="page">Liste</a></li>
        </ol>
      </div>
    </nav>

    <h1>Titre de la page</h1>
    <p class="fr-text--lead fr-mb-4v">Description de la liste.</p>

    <!-- Recherche -->
    <div class="fr-search-bar fr-search-bar--lg fr-mb-4v" role="search">
      <label class="fr-label" for="search-input">Rechercher</label>
      <input class="fr-input" placeholder="Rechercher" type="search" id="search-input">
      <button class="fr-btn" title="Rechercher">Rechercher</button>
    </div>

    <!-- Filtres (tags sélectionnables) -->
    <div class="fr-mb-4v">
      <ul class="fr-tags-group">
        <li><button type="button" class="fr-tag" aria-pressed="true">Tous</button></li>
        <li><button type="button" class="fr-tag" aria-pressed="false">Catégorie A</button></li>
        <li><button type="button" class="fr-tag" aria-pressed="false">Catégorie B</button></li>
        <li><button type="button" class="fr-tag" aria-pressed="false">Catégorie C</button></li>
      </ul>
    </div>

    <!-- Filtres actifs (tags supprimables) -->
    <div class="fr-mb-4v">
      <ul class="fr-tags-group">
        <li>
          <button class="fr-tag fr-tag--dismiss" type="button"
                  aria-label="Retirer le filtre Catégorie A">Catégorie A</button>
        </li>
      </ul>
    </div>

    <!-- Compteur + Tri -->
    <div class="fr-grid-row fr-grid-row--middle fr-mb-4v">
      <div class="fr-col">
        <p class="fr-text--bold">24 résultats</p>
      </div>
      <div class="fr-col-auto">
        <div class="fr-select-group">
          <label class="fr-label" for="sort-select">Trier par</label>
          <select class="fr-select" id="sort-select">
            <option value="date-desc">Plus récents</option>
            <option value="date-asc">Plus anciens</option>
            <option value="alpha">Ordre alphabétique</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Grille de cartes -->
    <div class="fr-grid-row fr-grid-row--gutters">
      <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">
          <div class="fr-card__body">
            <div class="fr-card__content">
              <h3 class="fr-card__title">
                <a href="#">Titre de la carte 1</a>
              </h3>
              <p class="fr-card__desc">Description de la carte.</p>
              <div class="fr-card__start">
                <ul class="fr-badges-group">
                  <li><p class="fr-badge fr-badge--sm fr-badge--success">Publié</p></li>
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
      </div>
      <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">
          <!-- même structure -->
        </div>
      </div>
      <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">
          <!-- même structure -->
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <nav role="navigation" class="fr-pagination fr-mt-6v" aria-label="Pagination">
      <ul class="fr-pagination__list">
        <li>
          <a class="fr-pagination__link fr-pagination__link--first" href="#"
             title="Première page">Première page</a>
        </li>
        <li>
          <a class="fr-pagination__link fr-pagination__link--prev" href="#"
             title="Page précédente">Page précédente</a>
        </li>
        <li>
          <a class="fr-pagination__link" aria-current="page" title="Page 1">1</a>
        </li>
        <li>
          <a class="fr-pagination__link" href="#" title="Page 2">2</a>
        </li>
        <li>
          <a class="fr-pagination__link" href="#" title="Page 3">3</a>
        </li>
        <li>
          <a class="fr-pagination__link fr-pagination__link--next" href="#"
             title="Page suivante">Page suivante</a>
        </li>
        <li>
          <a class="fr-pagination__link fr-pagination__link--last" href="#"
             title="Dernière page">Dernière page</a>
        </li>
      </ul>
    </nav>

  </div>
</main>
```

## Variantes de grille

| Layout | Classes colonnes |
|--------|-----------------|
| 4 colonnes desktop | `fr-col-12 fr-col-md-6 fr-col-lg-3` |
| 3 colonnes desktop | `fr-col-12 fr-col-md-6 fr-col-lg-4` |
| 2 colonnes desktop | `fr-col-12 fr-col-md-6` |

## Largeur de colonne par type de page

| Type de page | Largeur du contenu |
|---|---|
| Liste pleine largeur | `fr-container` complet avec grille de cartes |
| Dashboard / Tableau | `fr-container` complet |
| Formulaire | `fr-col-12 fr-col-md-10 fr-col-lg-8` centré |
| Connexion | `fr-col-12 fr-col-md-8 fr-col-lg-6` centré |
| Contenu avec sidemenu | Sidemenu `fr-col-md-4 fr-col-lg-3` + Contenu `fr-col-md-8 fr-col-lg-8` |
