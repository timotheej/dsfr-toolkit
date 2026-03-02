# Gestionnaire de consentement (Consent Banner)

Bannière de consentement cookies pour conformité RGPD/CNIL.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-consent-banner` | Bannière |
| `fr-consent-banner__content` | Contenu |
| `fr-consent-banner__buttons` | Boutons |
| `fr-consent-manager` | Modale gestionnaire |
| `fr-consent-service` | Bloc service individuel |
| `fr-consent-service__title` | Titre service |
| `fr-consent-service__radios` | Radios accepter/refuser |

## Structure HTML (bannière)

```html
<div class="fr-consent-banner">
  <h2 class="fr-h6">À propos des cookies sur ce site</h2>
  <div class="fr-consent-banner__content">
    <p class="fr-text--sm">
      Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience.
    </p>
  </div>
  <ul class="fr-consent-banner__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm">
    <li>
      <button class="fr-btn" type="button"
              data-fr-opened="true" aria-controls="fr-consent-modal">
        Personnaliser
      </button>
    </li>
    <li>
      <button class="fr-btn fr-btn--secondary" data-fr-accept-all="true">
        Tout accepter
      </button>
    </li>
    <li>
      <button class="fr-btn fr-btn--secondary" data-fr-refuse-all="true">
        Tout refuser
      </button>
    </li>
  </ul>
</div>
```
