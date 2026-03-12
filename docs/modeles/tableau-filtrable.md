# Tableau filtrable avec pagination

Modèle pour un tableau de données avec recherche, filtres et pagination.

## Composants utilisés

- `fr-search-bar` — Barre de recherche
- `fr-select-group` — Filtres par colonne
- `fr-tags-group` — Filtres actifs (tags supprimables)
- `fr-table` — Tableau de données
- `fr-badge` — Statuts dans les cellules
- `fr-checkbox-group` — Sélection de lignes
- `fr-btns-group` — Actions dans les cellules
- `fr-pagination` — Pagination

## Structure HTML complète

```html
<div class="fr-container">

  <h2>Titre de la section</h2>

  <!-- Recherche + Filtres -->
  <div class="fr-grid-row fr-grid-row--gutters fr-mb-4v">
    <div class="fr-col-12 fr-col-md-6">
      <div class="fr-search-bar" role="search">
        <label class="fr-label" for="table-search">Rechercher</label>
        <input class="fr-input" placeholder="Rechercher" type="search" id="table-search">
        <button class="fr-btn" title="Rechercher">Rechercher</button>
      </div>
    </div>
    <div class="fr-col-12 fr-col-md-3">
      <div class="fr-select-group">
        <label class="fr-label" for="filter-status">Statut</label>
        <select class="fr-select" id="filter-status">
          <option value="">Tous</option>
          <option value="en-cours">En cours</option>
          <option value="termine">Terminé</option>
          <option value="rejete">Rejeté</option>
        </select>
      </div>
    </div>
    <div class="fr-col-12 fr-col-md-3">
      <div class="fr-select-group">
        <label class="fr-label" for="filter-type">Type</label>
        <select class="fr-select" id="filter-type">
          <option value="">Tous</option>
          <option value="type-a">Type A</option>
          <option value="type-b">Type B</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Filtres actifs (tags supprimables) -->
  <div class="fr-mb-4v">
    <ul class="fr-tags-group">
      <li>
        <button class="fr-tag fr-tag--dismiss" type="button"
                aria-label="Retirer le filtre En cours">En cours</button>
      </li>
    </ul>
  </div>

  <!-- Tableau -->
  <div class="fr-table">
    <div class="fr-table__wrapper">
      <div class="fr-table__container">
        <div class="fr-table__content">
          <table>
            <caption>Liste des demandes</caption>
            <thead>
              <tr>
                <th class="fr-cell--fixed" role="columnheader">
                  <div class="fr-checkbox-group fr-checkbox-group--sm">
                    <input data-fr-row-select="true" id="select-all" type="checkbox">
                    <label class="fr-label" for="select-all">
                      <span class="fr-sr-only">Tout sélectionner</span>
                    </label>
                  </div>
                </th>
                <th scope="col">Référence</th>
                <th scope="col">Opérateur</th>
                <th scope="col">Date</th>
                <th scope="col">Statut</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="fr-cell--fixed" scope="row">
                  <div class="fr-checkbox-group fr-checkbox-group--sm">
                    <input data-fr-row-select="true" id="cb-row-1" type="checkbox">
                    <label class="fr-label" for="cb-row-1">
                      <span class="fr-sr-only">Sélectionner la ligne 1</span>
                    </label>
                  </div>
                </th>
                <td>AGR-2024-001</td>
                <td>Société Exemple</td>
                <td>15/01/2024</td>
                <td>
                  <p class="fr-badge fr-badge--sm fr-badge--info">En cours</p>
                </td>
                <td>
                  <ul class="fr-btns-group fr-btns-group--sm fr-btns-group--inline">
                    <li><a class="fr-btn fr-btn--secondary fr-btn--sm" href="#">Voir</a></li>
                    <li><a class="fr-btn fr-btn--tertiary fr-btn--sm" href="#">Modifier</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th class="fr-cell--fixed" scope="row">
                  <div class="fr-checkbox-group fr-checkbox-group--sm">
                    <input data-fr-row-select="true" id="cb-row-2" type="checkbox">
                    <label class="fr-label" for="cb-row-2">
                      <span class="fr-sr-only">Sélectionner la ligne 2</span>
                    </label>
                  </div>
                </th>
                <td>AGR-2024-002</td>
                <td>Autre Société</td>
                <td>22/02/2024</td>
                <td>
                  <p class="fr-badge fr-badge--sm fr-badge--success">Terminé</p>
                </td>
                <td>
                  <ul class="fr-btns-group fr-btns-group--sm fr-btns-group--inline">
                    <li><a class="fr-btn fr-btn--secondary fr-btn--sm" href="#">Voir</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <nav role="navigation" class="fr-pagination fr-mt-4v" aria-label="Pagination">
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
```

## Règles du tableau

- `<caption>` obligatoire sur chaque tableau
- Nombres alignés à droite (`fr-cell--right`), texte à gauche (défaut)
- `fr-table--bordered` pour les tableaux complexes
- `fr-table--sm` pour la densité compacte (dashboards)
- `fr-cell--fixed` pour les colonnes sticky au scroll horizontal
- Sélection de lignes : `data-fr-row-select="true"` sur les checkboxes
- Cellules vides : utiliser "N/A"
