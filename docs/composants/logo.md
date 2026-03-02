# Bloc-marque (Logo)

Bloc officiel de la République française avec le symbole de Marianne et la devise. **Obligatoire** sur tout site gouvernemental.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-logo` | Élément principal |
| `fr-logo--sm` | Petit |
| `fr-logo--lg` | Grand |

## Structure HTML

```html
<p class="fr-logo">
  République
  <br>Française
</p>
```

Le symbole de Marianne et la devise "Liberté Égalité Fraternité" sont automatiquement ajoutés par CSS.

## Tailles

```html
<!-- Petit -->
<p class="fr-logo fr-logo--sm">République<br>Française</p>

<!-- Moyen (défaut) -->
<p class="fr-logo">République<br>Française</p>

<!-- Grand -->
<p class="fr-logo fr-logo--lg">République<br>Française</p>
```

## Mode deuil

Activé via `data-fr-mourning` sur la balise `<html>`.
