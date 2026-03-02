# Interrupteur (Toggle)

Switch pour activer/désactiver un paramètre.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-toggle` | Conteneur principal |
| `fr-toggle__input` | Input checkbox |
| `fr-toggle__label` | Label |
| `fr-toggle__list` | Liste de toggles groupés |
| `fr-toggle--border-bottom` | Séparateur |

## Structure HTML

```html
<div class="fr-toggle">
  <input type="checkbox" class="fr-toggle__input" id="toggle-1"
         aria-describedby="toggle-1-hint">
  <label class="fr-toggle__label" for="toggle-1"
         data-fr-checked-label="Activé"
         data-fr-unchecked-label="Désactivé">
    Label de l'interrupteur
  </label>
  <p class="fr-hint-text" id="toggle-1-hint">Description optionnelle</p>
</div>
```

## Groupe de toggles

```html
<fieldset class="fr-fieldset">
  <legend class="fr-fieldset__legend">Paramètres</legend>
  <div class="fr-fieldset__element">
    <div class="fr-toggle fr-toggle--border-bottom">
      <input type="checkbox" class="fr-toggle__input" id="tg-1">
      <label class="fr-toggle__label" for="tg-1"
             data-fr-checked-label="Activé"
             data-fr-unchecked-label="Désactivé">
        Option 1
      </label>
    </div>
  </div>
  <div class="fr-fieldset__element">
    <div class="fr-toggle">
      <input type="checkbox" class="fr-toggle__input" id="tg-2">
      <label class="fr-toggle__label" for="tg-2"
             data-fr-checked-label="Activé"
             data-fr-unchecked-label="Désactivé">
        Option 2
      </label>
    </div>
  </div>
</fieldset>
```
