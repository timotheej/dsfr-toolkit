# Citation (Quote)

Bloc de citation stylisé pour contenu éditorial.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-quote` | Conteneur `<figure>` |
| `fr-quote--column` | Disposition en colonne |
| `fr-quote--[couleur]` | Couleur d'accent |
| `fr-quote__author` | Nom auteur |
| `fr-quote__source` | Liste sources |
| `fr-quote__image` | Image auteur/source |

## Structure HTML

```html
<figure class="fr-quote">
  <blockquote cite="https://source-url.fr">
    <p>Le texte de la citation va ici.</p>
  </blockquote>
  <figcaption>
    <p class="fr-quote__author">Nom de l'auteur</p>
    <ul class="fr-quote__source">
      <li><cite>Titre de l'ouvrage</cite></li>
      <li>Détail supplémentaire</li>
    </ul>
  </figcaption>
</figure>
```

## Avec couleur d'accent

```html
<figure class="fr-quote fr-quote--green-emeraude">
  <blockquote>
    <p>Citation avec accent vert.</p>
  </blockquote>
  <figcaption>
    <p class="fr-quote__author">Auteur</p>
  </figcaption>
</figure>
```
