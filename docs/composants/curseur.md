# Curseur (Range / Slider)

Sélecteur de valeur numérique dans une plage définie. Pour les valeurs imprécises avec feedback visuel en temps réel.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-range-group` | Conteneur principal |
| `fr-range` | Wrapper du slider |
| `fr-range__output` | Affichage de la valeur courante |
| `fr-range__min` / `fr-range__max` | Labels min/max sous la piste |
| `fr-range__prefix` | Préfixe avant la valeur (ex: €) |
| `fr-range__suffix` | Suffixe après la valeur (ex: kg) |
| `fr-range--sm` | Petite taille |
| `fr-range--step` | Avec crans/graduations |
| `fr-range--double` | Double curseur (sélection d'intervalle) |
| `fr-range-group--error` | État erreur |
| `fr-range-group--valid` | État valide |
| `fr-range-group--disabled` | État désactivé |

## Curseur simple

```html
<div class="fr-range-group">
  <label class="fr-label" id="range-label">
    Label du curseur
    <span class="fr-hint-text">Description optionnelle</span>
  </label>
  <div class="fr-range">
    <span class="fr-range__output">50</span>
    <input type="range" id="range-1" name="range-1"
           value="50" min="0" max="100"
           aria-labelledby="range-label"
           aria-describedby="range-messages">
    <span class="fr-range__min" aria-hidden="true">0</span>
    <span class="fr-range__max" aria-hidden="true">100</span>
  </div>
  <div class="fr-messages-group" id="range-messages" aria-live="polite"></div>
</div>
```

## Avec graduations (step)

```html
<div class="fr-range-group">
  <label class="fr-label" id="range-step-label">
    Volume
    <span class="fr-hint-text">Ajustez le volume</span>
  </label>
  <div class="fr-range fr-range--step">
    <span class="fr-range__output">5</span>
    <input type="range" id="range-step" name="range-step"
           value="5" min="0" max="10" step="1"
           aria-labelledby="range-step-label"
           aria-describedby="range-step-messages">
    <span class="fr-range__min" aria-hidden="true">0</span>
    <span class="fr-range__max" aria-hidden="true">10</span>
  </div>
  <div class="fr-messages-group" id="range-step-messages" aria-live="polite"></div>
</div>
```

## Avec préfixe et suffixe

```html
<div class="fr-range-group">
  <label class="fr-label" id="range-prix-label">Budget</label>
  <div class="fr-range">
    <span class="fr-range__output">
      <span class="fr-range__prefix">€</span>
      500
      <span class="fr-range__suffix">EUR</span>
    </span>
    <input type="range" id="range-prix" name="range-prix"
           value="500" min="0" max="1000"
           data-fr-prefix="€" data-fr-suffix="EUR"
           aria-labelledby="range-prix-label"
           aria-describedby="range-prix-messages">
    <span class="fr-range__min" aria-hidden="true">0</span>
    <span class="fr-range__max" aria-hidden="true">1000</span>
  </div>
  <div class="fr-messages-group" id="range-prix-messages" aria-live="polite"></div>
</div>
```

## Double curseur (sélection d'intervalle)

Deux `<input type="range">` pour sélectionner un min et un max.

```html
<div class="fr-range-group">
  <label class="fr-label" id="range-double-label">
    Fourchette de prix
    <span class="fr-hint-text">Sélectionnez un intervalle</span>
  </label>
  <div class="fr-range fr-range--double">
    <span class="fr-range__output">200</span>
    <span class="fr-range__output">800</span>
    <input type="range" id="range-double-min" name="range-double-min"
           value="200" min="0" max="1000"
           aria-labelledby="range-double-label"
           aria-describedby="range-double-messages"
           aria-label="Valeur minimum">
    <input type="range" id="range-double-max" name="range-double-max"
           value="800" min="0" max="1000"
           aria-labelledby="range-double-label"
           aria-describedby="range-double-messages"
           aria-label="Valeur maximum">
    <span class="fr-range__min" aria-hidden="true">0</span>
    <span class="fr-range__max" aria-hidden="true">1000</span>
  </div>
  <div class="fr-messages-group" id="range-double-messages" aria-live="polite"></div>
</div>
```

## État erreur

```html
<div class="fr-range-group fr-range-group--error">
  <label class="fr-label" id="range-error-label">Curseur en erreur</label>
  <div class="fr-range">
    <span class="fr-range__output">150</span>
    <input type="range" id="range-error" name="range-error"
           value="150" min="0" max="100"
           aria-labelledby="range-error-label"
           aria-describedby="range-error-messages"
           aria-invalid="true">
    <span class="fr-range__min" aria-hidden="true">0</span>
    <span class="fr-range__max" aria-hidden="true">100</span>
  </div>
  <div class="fr-messages-group" id="range-error-messages" aria-live="polite">
    <p class="fr-message fr-message--error">La valeur doit être comprise entre 0 et 100</p>
  </div>
</div>
```

## État désactivé

```html
<div class="fr-range-group fr-range-group--disabled">
  <label class="fr-label" id="range-disabled-label">Curseur désactivé</label>
  <div class="fr-range">
    <span class="fr-range__output">50</span>
    <input type="range" id="range-disabled" name="range-disabled"
           value="50" min="0" max="100" disabled
           aria-labelledby="range-disabled-label">
    <span class="fr-range__min" aria-hidden="true">0</span>
    <span class="fr-range__max" aria-hidden="true">100</span>
  </div>
</div>
```

## Comportement JavaScript

Le DSFR JS gère automatiquement :
- **Synchronisation `output`** : met à jour `fr-range__output` en temps réel
- **Remplissage piste** : colore la piste jusqu'à la position du curseur
- **Double curseur** : empêche le min de dépasser le max et vice versa
- **Préfixe/suffixe** : lit `data-fr-prefix` et `data-fr-suffix` pour l'affichage

## Accessibilité

| Attribut | Élément | Rôle |
|----------|---------|------|
| `aria-labelledby` | `<input>` | Référence le `<label>` |
| `aria-describedby` | `<input>` | Référence les messages |
| `aria-live="polite"` | `fr-messages-group` | Annonce les changements |
| `aria-hidden="true"` | `fr-range__min/max` | Décoratif, pas lu par lecteur d'écran |
| `aria-invalid="true"` | `<input>` en erreur | Indique un champ invalide |
| `aria-label` | Chaque `<input>` en double | Distingue "minimum" et "maximum" |

Navigation clavier : flèches gauche/droite pour déplacer, `Home`/`End` pour min/max.

## Règles d'utilisation

- Utiliser pour les **valeurs imprécises** avec feedback visuel (volume, budget, etc.)
- NE PAS utiliser pour des valeurs précises → utiliser un input texte
- NE PAS utiliser comme indicateur de progression → utiliser le stepper
- NE PAS utiliser pour un petit nombre d'options → utiliser des radios
