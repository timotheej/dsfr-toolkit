# Lettre d'information et réseaux sociaux (Follow)

Section combinant newsletter et réseaux sociaux, placée au-dessus du footer.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-follow` | Conteneur principal |
| `fr-follow__newsletter` | Section newsletter |
| `fr-follow__social` | Section réseaux sociaux |

### Boutons réseaux sociaux

`fr-btn--facebook`, `fr-btn--twitter-x`, `fr-btn--instagram`, `fr-btn--linkedin`, `fr-btn--youtube`, `fr-btn--mastodon`, `fr-btn--tiktok`, `fr-btn--snapchat`, `fr-btn--telegram`, `fr-btn--threads`, `fr-btn--twitch`, `fr-btn--vimeo`, `fr-btn--dailymotion`, `fr-btn--github`

## Structure HTML

```html
<div class="fr-follow">
  <div class="fr-container">
    <div class="fr-grid-row">
      <div class="fr-col-12 fr-col-md-8">
        <div class="fr-follow__newsletter">
          <h2 class="fr-h5">Abonnez-vous à notre lettre d'information</h2>
          <p>Description de la newsletter.</p>
          <div>
            <div class="fr-input-group">
              <label class="fr-label" for="newsletter-email">
                Votre adresse électronique
              </label>
              <input class="fr-input" type="email" id="newsletter-email">
            </div>
            <button class="fr-btn" type="submit">S'abonner</button>
          </div>
        </div>
      </div>
      <div class="fr-col-12 fr-col-md-4">
        <div class="fr-follow__social">
          <h2 class="fr-h5">Suivez-nous sur les réseaux sociaux</h2>
          <ul class="fr-btns-group">
            <li><a class="fr-btn--facebook fr-btn" href="#" title="Facebook">Facebook</a></li>
            <li><a class="fr-btn--twitter-x fr-btn" href="#" title="X (Twitter)">X</a></li>
            <li><a class="fr-btn--linkedin fr-btn" href="#" title="LinkedIn">LinkedIn</a></li>
            <li><a class="fr-btn--youtube fr-btn" href="#" title="YouTube">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```
