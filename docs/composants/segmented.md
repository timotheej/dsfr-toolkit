# Contrôle segmenté (Segmented Control)

Options mutuellement exclusives affichées dans une barre horizontale segmentée.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-segmented` | Conteneur `<fieldset>` |
| `fr-segmented__legend` | Légende |
| `fr-segmented__elements` | Conteneur segments |
| `fr-segmented__element` | Segment individuel |
| `fr-segmented--sm` | Petit |
| `fr-segmented--no-legend` | Légende masquée |

## Structure HTML

```html
<fieldset class="fr-segmented">
  <legend class="fr-segmented__legend">Label du contrôle</legend>
  <div class="fr-segmented__elements">
    <div class="fr-segmented__element">
      <input type="radio" id="seg-1" name="segmented" value="1" checked>
      <label class="fr-label" for="seg-1">Option 1</label>
    </div>
    <div class="fr-segmented__element">
      <input type="radio" id="seg-2" name="segmented" value="2">
      <label class="fr-label" for="seg-2">Option 2</label>
    </div>
    <div class="fr-segmented__element">
      <input type="radio" id="seg-3" name="segmented" value="3">
      <label class="fr-label" for="seg-3">Option 3</label>
    </div>
  </div>
</fieldset>
```
