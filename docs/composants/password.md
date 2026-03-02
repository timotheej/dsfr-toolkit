# Mot de passe (Password)

Champ de mot de passe avec toggle afficher/masquer.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-password` | Conteneur principal |
| `fr-password__input` | Input mot de passe |
| `fr-password__checkbox` | Toggle afficher/masquer |

## Structure HTML

```html
<div class="fr-password">
  <label class="fr-password__label fr-label" for="password-input">
    Mot de passe
    <span class="fr-hint-text">Minimum 8 caractères</span>
  </label>
  <div class="fr-input-wrap">
    <input id="password-input" class="fr-password__input fr-input"
           type="password" autocomplete="new-password"
           aria-describedby="password-messages">
  </div>
  <div class="fr-messages-group" id="password-messages" aria-live="polite"></div>
  <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
    <input id="password-show" type="checkbox" aria-label="Afficher le mot de passe">
    <label class="fr-label" for="password-show">Afficher</label>
  </div>
</div>
```
