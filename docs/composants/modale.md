# Modale (Modal)

Dialogue superposé pour interactions focalisées nécessitant l'attention de l'utilisateur.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-modal` | Conteneur principal (`<dialog>`) |
| `fr-modal__body` | Corps de la modale |
| `fr-modal__header` | En-tête avec bouton fermer |
| `fr-modal__content` | Zone de contenu |
| `fr-modal__title` | Titre |
| `fr-modal__footer` | Pied avec actions |
| `fr-btn--close` | Bouton fermer |

## Structure HTML

```html
<!-- Bouton déclencheur -->
<button class="fr-btn" aria-controls="modal-1" data-fr-opened="false">
  Ouvrir la modale
</button>

<!-- Modale -->
<dialog id="modal-1" class="fr-modal" aria-labelledby="modal-1-title">
  <div class="fr-container fr-container--fluid fr-container-md">
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
        <div class="fr-modal__body">
          <div class="fr-modal__header">
            <button class="fr-btn--close fr-btn" aria-controls="modal-1"
                    title="Fermer la fenêtre modale">
              Fermer
            </button>
          </div>
          <div class="fr-modal__content">
            <h1 id="modal-1-title" class="fr-modal__title">
              Titre de la modale
            </h1>
            <p>Contenu de la modale.</p>
          </div>
          <div class="fr-modal__footer">
            <ul class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg">
              <li>
                <button class="fr-btn">Confirmer</button>
              </li>
              <li>
                <button class="fr-btn fr-btn--secondary" aria-controls="modal-1">
                  Annuler
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>
```

## Tailles

La taille est contrôlée par les classes de grille :
- **Petite** : `fr-col-md-6 fr-col-lg-4`
- **Moyenne** : `fr-col-md-8 fr-col-lg-6`
- **Grande** : `fr-col-md-10 fr-col-lg-8`
