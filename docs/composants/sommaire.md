# Sommaire (Summary / Table of Contents)

Navigation interne avec ancres vers les sections de la page.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-summary` | Conteneur `<nav>` |
| `fr-summary__title` | Titre |
| `fr-summary__link` | Liens ancres |

## Structure HTML

```html
<nav class="fr-summary" role="navigation" aria-labelledby="summary-title">
  <h2 class="fr-summary__title" id="summary-title">Sommaire</h2>
  <ol>
    <li>
      <a class="fr-summary__link" href="#section-1">Première section</a>
    </li>
    <li>
      <a class="fr-summary__link" href="#section-2">Deuxième section</a>
      <ol>
        <li>
          <a class="fr-summary__link" href="#section-2-1">Sous-section</a>
        </li>
      </ol>
    </li>
    <li>
      <a class="fr-summary__link" href="#section-3">Troisième section</a>
    </li>
  </ol>
</nav>
```

Supporte les listes imbriquées pour une navigation multi-niveaux. Pas de JavaScript requis.
