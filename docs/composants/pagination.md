# Pagination

Contrôles de navigation pour parcourir du contenu paginé.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-pagination` | Conteneur `<nav>` |
| `fr-pagination__list` | Liste |
| `fr-pagination__link` | Lien page |
| `fr-pagination__link--first` | Première page |
| `fr-pagination__link--last` | Dernière page |
| `fr-pagination__link--prev` | Page précédente |
| `fr-pagination__link--next` | Page suivante |

## Structure HTML

```html
<nav role="navigation" class="fr-pagination" aria-label="Pagination">
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
```
