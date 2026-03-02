# Liens d'évitement (Skiplinks)

Liens d'accessibilité en haut de page pour les utilisateurs clavier.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-skiplinks` | Conteneur principal |
| `fr-skiplinks__list` | Liste |
| `fr-link` | Liens individuels |

## Structure HTML

```html
<div class="fr-skiplinks">
  <nav role="navigation" aria-label="Accès rapide" class="fr-container">
    <ul class="fr-skiplinks__list">
      <li><a class="fr-link" href="#content">Contenu</a></li>
      <li><a class="fr-link" href="#header-navigation">Menu</a></li>
      <li><a class="fr-link" href="#footer">Pied de page</a></li>
    </ul>
  </nav>
</div>
```

Placé tout en haut du `<body>`, avant le header.
