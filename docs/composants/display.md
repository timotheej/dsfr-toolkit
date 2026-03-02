# Paramètres d'affichage (Display Settings)

Modale permettant le basculement entre mode clair, sombre et préférence système.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-display` | Wrapper paramètres |
| `fr-btn--display` | Bouton d'ouverture |

## Structure HTML

```html
<!-- Bouton (généralement dans le footer) -->
<button class="fr-footer__bottom-link fr-btn--display fr-btn"
        aria-controls="fr-theme-modal" data-fr-opened="false">
  Paramètres d'affichage
</button>

<!-- Modale -->
<dialog id="fr-theme-modal" class="fr-modal" aria-labelledby="fr-theme-modal-title">
  <div class="fr-container fr-container--fluid fr-container-md">
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-modal__body">
          <div class="fr-modal__header">
            <button class="fr-btn--close fr-btn" aria-controls="fr-theme-modal"
                    title="Fermer">Fermer</button>
          </div>
          <div class="fr-modal__content">
            <h1 id="fr-theme-modal-title" class="fr-modal__title">
              Paramètres d'affichage
            </h1>
            <div class="fr-display">
              <fieldset class="fr-fieldset">
                <legend class="fr-fieldset__legend">
                  Choisissez un thème pour personnaliser l'apparence du site.
                </legend>
                <div class="fr-fieldset__element">
                  <div class="fr-radio-group">
                    <input type="radio" id="theme-light" name="theme" value="light">
                    <label class="fr-label" for="theme-light">Thème clair</label>
                  </div>
                </div>
                <div class="fr-fieldset__element">
                  <div class="fr-radio-group">
                    <input type="radio" id="theme-dark" name="theme" value="dark">
                    <label class="fr-label" for="theme-dark">Thème sombre</label>
                  </div>
                </div>
                <div class="fr-fieldset__element">
                  <div class="fr-radio-group">
                    <input type="radio" id="theme-system" name="theme" value="system" checked>
                    <label class="fr-label" for="theme-system">Système</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>
```

Nécessite `data-fr-scheme="system"` sur la balise `<html>`.
