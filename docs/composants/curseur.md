# Curseur (Range / Slider)

Sélecteur de valeur numérique dans une plage définie.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-range-group` | Conteneur principal |
| `fr-range` | Wrapper range |
| `fr-range__output` | Affichage valeur courante |
| `fr-range__min` / `__max` | Labels min/max |
| `fr-range--sm` | Petit |
| `fr-range--step` | Avec crans |
| `fr-range--double` | Double curseur |
| `fr-range-group--error` | État erreur |
| `fr-range-group--disabled` | État désactivé |

## Structure HTML

```html
<div class="fr-range-group">
  <label class="fr-label" id="range-label">
    Label du curseur
    <span class="fr-hint-text">Description optionnelle</span>
  </label>
  <div class="fr-range">
    <span class="fr-range__output">50</span>
    <input type="range" name="range" value="50" min="0" max="100"
           aria-labelledby="range-label"
           aria-describedby="range-messages">
    <span class="fr-range__min" aria-hidden="true">0</span>
    <span class="fr-range__max" aria-hidden="true">100</span>
  </div>
  <div class="fr-messages-group" id="range-messages" aria-live="polite"></div>
</div>
```
