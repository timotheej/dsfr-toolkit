# Bouton radio

Sélection unique parmi un groupe d'options.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-radio-group` | Conteneur radio |
| `fr-radio-group--sm` | Petite variante |
| `fr-radio-rich` | Radio enrichi avec bordures |
| `fr-radio-rich__pictogram` | Conteneur pictogramme |
| `fr-fieldset` | Groupe de radios |
| `fr-fieldset__legend` | Légende |
| `fr-fieldset__element` | Wrapper individuel |
| `fr-fieldset__element--inline` | Disposition horizontale |

## Structure HTML

```html
<fieldset class="fr-fieldset" aria-labelledby="radio-legend">
  <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
    Sélectionnez une option
  </legend>
  <div class="fr-fieldset__element">
    <div class="fr-radio-group">
      <input type="radio" id="radio-1" name="radio-group" value="1">
      <label class="fr-label" for="radio-1">Option 1</label>
    </div>
  </div>
  <div class="fr-fieldset__element">
    <div class="fr-radio-group">
      <input type="radio" id="radio-2" name="radio-group" value="2">
      <label class="fr-label" for="radio-2">
        Option 2
        <span class="fr-hint-text">Description de l'option</span>
      </label>
    </div>
  </div>
</fieldset>
```

## Radio enrichi

```html
<div class="fr-fieldset__element">
  <div class="fr-radio-rich">
    <input type="radio" id="radio-rich-1" name="radio-rich" value="1">
    <label class="fr-label" for="radio-rich-1">Option enrichie</label>
    <div class="fr-radio-rich__pictogram">
      <svg class="fr-artwork" aria-hidden="true" viewBox="0 0 80 80" width="80px" height="80px">
        <!-- pictogramme SVG -->
      </svg>
    </div>
  </div>
</div>
```

## Disposition inline

```html
<div class="fr-fieldset__element fr-fieldset__element--inline">
  <div class="fr-radio-group">
    <input type="radio" id="radio-inline-1" name="inline" value="1">
    <label class="fr-label" for="radio-inline-1">Oui</label>
  </div>
</div>
```
