# Case à cocher (Checkbox)

Sélection multiple permettant de cocher une ou plusieurs options.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-checkbox-group` | Conteneur |
| `fr-checkbox-group--sm` | Petit |
| `fr-checkbox-group--error` | État erreur |
| `fr-checkbox-group--valid` | État valide |
| `fr-label` | Label |
| `fr-hint-text` | Description |
| `fr-fieldset` | Groupe |

## Structure HTML

```html
<div class="fr-checkbox-group">
  <input id="checkbox-1" type="checkbox" aria-describedby="checkbox-1-messages">
  <label class="fr-label" for="checkbox-1">
    Label de la case
    <span class="fr-hint-text">Description optionnelle</span>
  </label>
  <div class="fr-messages-group" id="checkbox-1-messages" aria-live="polite"></div>
</div>
```

## Groupe de cases

```html
<fieldset class="fr-fieldset" aria-labelledby="checkboxes-legend">
  <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
    Sélectionnez vos choix
  </legend>
  <div class="fr-fieldset__element">
    <div class="fr-checkbox-group">
      <input id="cb-1" type="checkbox" name="choices" value="1">
      <label class="fr-label" for="cb-1">Choix 1</label>
    </div>
  </div>
  <div class="fr-fieldset__element">
    <div class="fr-checkbox-group">
      <input id="cb-2" type="checkbox" name="choices" value="2">
      <label class="fr-label" for="cb-2">Choix 2</label>
    </div>
  </div>
</fieldset>
```

## Petite variante

```html
<div class="fr-checkbox-group fr-checkbox-group--sm">
  <input id="cb-sm" type="checkbox">
  <label class="fr-label" for="cb-sm">Label petit</label>
</div>
```
