# Barre de recherche

Champ de recherche avec bouton de soumission.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-search-bar` | Conteneur principal (`role="search"`) |
| `fr-search-bar--lg` | Variante grande |
| `fr-label` | Label |
| `fr-input` | Champ de saisie |
| `fr-btn` | Bouton rechercher |

## Structure HTML

```html
<div class="fr-search-bar" id="search-bar" role="search">
  <label class="fr-label" for="search-input">Rechercher</label>
  <input class="fr-input" placeholder="Rechercher" type="search"
         id="search-input" name="search-input">
  <button class="fr-btn" title="Rechercher">Rechercher</button>
</div>
```

## Variante grande

```html
<div class="fr-search-bar fr-search-bar--lg" role="search">
  <label class="fr-label" for="search-lg">Rechercher</label>
  <input class="fr-input" placeholder="Rechercher" type="search" id="search-lg">
  <button class="fr-btn" title="Rechercher">Rechercher</button>
</div>
```
