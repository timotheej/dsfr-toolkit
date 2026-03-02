# Liste déroulante (Select)

Menu déroulant standard pour choisir une option.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-select-group` | Conteneur |
| `fr-select` | Élément select |
| `fr-label` | Label |
| `fr-hint-text` | Texte d'aide |
| `fr-select-group--error` | État erreur |
| `fr-select-group--valid` | État valide |
| `fr-select-group--disabled` | État désactivé |
| `fr-messages-group` | Messages |

## Structure HTML

```html
<div class="fr-select-group">
  <label class="fr-label" for="select-id">
    Label de la liste
    <span class="fr-hint-text">Description optionnelle</span>
  </label>
  <select class="fr-select" id="select-id" name="select-name">
    <option value="" selected disabled hidden>Sélectionnez une option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <div class="fr-messages-group" id="select-messages" aria-live="polite"></div>
</div>
```

## Avec groupes d'options

```html
<select class="fr-select" id="select-group">
  <option value="" selected disabled hidden>Sélectionnez une option</option>
  <optgroup label="Catégorie A">
    <option value="a1">Option A1</option>
    <option value="a2">Option A2</option>
  </optgroup>
  <optgroup label="Catégorie B">
    <option value="b1">Option B1</option>
    <option value="b2">Option B2</option>
  </optgroup>
</select>
```

## État erreur

```html
<div class="fr-select-group fr-select-group--error">
  <label class="fr-label" for="select-error">Label</label>
  <select class="fr-select fr-select--error" id="select-error" aria-invalid="true"
          aria-describedby="select-error-messages">
    <option value="">Sélectionnez</option>
  </select>
  <div class="fr-messages-group" id="select-error-messages" aria-live="polite">
    <p class="fr-message fr-message--error">Veuillez sélectionner une option</p>
  </div>
</div>
```
