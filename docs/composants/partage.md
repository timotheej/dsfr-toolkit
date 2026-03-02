# Partage (Share)

Boutons de partage sur les réseaux sociaux.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-share` | Conteneur principal |
| `fr-share__title` | Titre section |

### Boutons de partage

`fr-btn--facebook`, `fr-btn--twitter-x`, `fr-btn--linkedin`, `fr-btn--mail`, `fr-btn--copy`

## Structure HTML

```html
<div class="fr-share">
  <p class="fr-share__title">Partager la page</p>
  <ul class="fr-btns-group">
    <li>
      <a class="fr-btn--facebook fr-btn" title="Partager sur Facebook"
         href="https://www.facebook.com/sharer/sharer.php?u=URL"
         target="_blank" rel="noopener">Facebook</a>
    </li>
    <li>
      <a class="fr-btn--twitter-x fr-btn" title="Partager sur X"
         href="https://x.com/intent/tweet?url=URL"
         target="_blank" rel="noopener">X (Twitter)</a>
    </li>
    <li>
      <a class="fr-btn--linkedin fr-btn" title="Partager sur LinkedIn"
         href="https://www.linkedin.com/shareArticle?url=URL"
         target="_blank" rel="noopener">LinkedIn</a>
    </li>
    <li>
      <a class="fr-btn--mail fr-btn" title="Partager par email"
         href="mailto:?subject=Titre&body=URL">Email</a>
    </li>
    <li>
      <button class="fr-btn--copy fr-btn" title="Copier le lien"
              data-fr-copy="URL">Copier le lien</button>
    </li>
  </ul>
</div>
```
