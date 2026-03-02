# Champ de saisie (Input)

Champ de formulaire pour la saisie de texte.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-input-group` | Wrapper principal |
| `fr-input` | Élément input |
| `fr-label` | Label |
| `fr-hint-text` | Texte d'aide |
| `fr-input-wrap` | Wrapper input + bouton |
| `fr-input-wrap--addon` | Addon de soumission |
| `fr-input-group--error` | État erreur |
| `fr-input-group--valid` | État valide |
| `fr-input-group--disabled` | État désactivé |
| `fr-messages-group` | Conteneur messages |
| `fr-message--error` | Message erreur |
| `fr-message--valid` | Message valide |

## Structure HTML

```html
<div class="fr-input-group">
  <label class="fr-label" for="input-text">
    Label du champ
    <span class="fr-hint-text">Description optionnelle du champ</span>
  </label>
  <input class="fr-input" type="text" id="input-text" name="input-text"
         aria-describedby="input-text-messages">
  <div class="fr-messages-group" id="input-text-messages" aria-live="polite"></div>
</div>
```

## État erreur

```html
<div class="fr-input-group fr-input-group--error">
  <label class="fr-label" for="input-error">
    Label du champ
  </label>
  <input class="fr-input fr-input--error" type="text" id="input-error"
         aria-describedby="input-error-messages" aria-invalid="true">
  <div class="fr-messages-group" id="input-error-messages" aria-live="polite">
    <p class="fr-message fr-message--error">Message d'erreur</p>
  </div>
</div>
```

## État valide

```html
<div class="fr-input-group fr-input-group--valid">
  <label class="fr-label" for="input-valid">Label</label>
  <input class="fr-input fr-input--valid" type="text" id="input-valid"
         aria-describedby="input-valid-messages">
  <div class="fr-messages-group" id="input-valid-messages" aria-live="polite">
    <p class="fr-message fr-message--valid">Champ valide</p>
  </div>
</div>
```

## Textarea

```html
<div class="fr-input-group">
  <label class="fr-label" for="textarea">Label</label>
  <textarea class="fr-input" id="textarea" name="textarea"></textarea>
</div>
```

## Input avec addon

```html
<div class="fr-input-group">
  <label class="fr-label" for="input-addon">Label</label>
  <div class="fr-input-wrap fr-input-wrap--addon">
    <input class="fr-input" type="text" id="input-addon">
    <button class="fr-btn" type="submit">Envoyer</button>
  </div>
</div>
```
