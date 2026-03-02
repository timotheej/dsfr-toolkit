# Transcription

Bloc extensible pour afficher la transcription textuelle de médias.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-transcription` | Conteneur principal |
| `fr-transcription__btn` | Bouton toggle |
| `fr-transcription__modal` | Modale plein écran |

## Structure HTML

```html
<div class="fr-transcription">
  <button class="fr-transcription__btn" aria-expanded="false"
          aria-controls="transcription-1">
    Transcription
  </button>
  <div class="fr-collapse" id="transcription-1">
    <div class="fr-transcription__footer">
      <div class="fr-transcription__actions-group">
        <button class="fr-btn fr-btn--tertiary fr-btn--sm fr-icon-eye-line fr-btn--icon-left"
                aria-controls="transcription-modal"
                data-fr-opened="false">
          Voir la transcription
        </button>
      </div>
    </div>
  </div>
</div>

<dialog id="transcription-modal" class="fr-modal" aria-labelledby="transcription-modal-title">
  <div class="fr-container fr-container--fluid fr-container-md">
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
        <div class="fr-modal__body">
          <div class="fr-modal__header">
            <button class="fr-btn--close fr-btn" aria-controls="transcription-modal"
                    title="Fermer">Fermer</button>
          </div>
          <div class="fr-modal__content">
            <h1 id="transcription-modal-title" class="fr-modal__title">Transcription</h1>
            <p>Texte de la transcription...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>
```

Toujours placé après le `fr-content-media` associé.
