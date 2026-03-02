# Couleurs

## Couleurs primaires

| Couleur | Token | Hex |
|---------|-------|-----|
| Bleu France | `$blue-france-main-525` | #000091 |
| Rouge Marianne | `$red-marianne-main-472` | #e1000f |

## Couleurs neutres (Gris)

Tokens de `$grey-0` (noir) à `$grey-1000` (blanc), avec paliers clés : 50, 75, 100, 125, 200, 425, 625, 850, 925, 950, 975.

## Couleurs système (Feedback)

| Catégorie | Token principal | Usage |
|-----------|----------------|-------|
| Info | `$info-main-525` | Messages informatifs |
| Success | `$success-main-525` | États de succès |
| Warning | `$warning-main-525` | Avertissements |
| Error | `$error-main-525` | Erreurs |

## Couleurs illustratives (17 couleurs d'accent)

| Nom | Token |
|-----|-------|
| Tilleul verveine | `green-tilleul-verveine` |
| Bourgeon | `green-bourgeon` |
| Émeraude | `green-emeraude` |
| Menthe | `green-menthe` |
| Archipel | `green-archipel` |
| Écume | `blue-ecume` |
| Cumulus | `blue-cumulus` |
| Glycine | `purple-glycine` |
| Macaron | `pink-macaron` |
| Tuile | `pink-tuile` |
| Tournesol | `yellow-tournesol` |
| Moutarde | `yellow-moutarde` |
| Terre battue | `orange-terre-battue` |
| Café crème | `brown-cafe-creme` |
| Caramel | `brown-caramel` |
| Opéra | `brown-opera` |
| Gris galet | `beige-gris-galet` |

## Tokens de décision (contextuels)

Format : `$contexte-usage-variante-couleur`

### Tokens de fond (Background)

| Token | Usage |
|-------|-------|
| `--background-default-grey` | Fond par défaut |
| `--background-alt-grey` | Fond alterné |
| `--background-contrast-grey` | Fond contrasté |
| `--background-elevated-grey` | Fond élevé |
| `--background-action-high-blue-france` | Boutons primaires |
| `--background-action-low-blue-france` | Actions discrètes |
| `--background-disabled-grey` | État désactivé |
| `--background-flat-error` | Fond erreur |
| `--background-flat-warning` | Fond avertissement |
| `--background-flat-success` | Fond succès |
| `--background-flat-info` | Fond information |

### Tokens de texte

| Token | Usage |
|-------|-------|
| `--text-title-grey` | Titres |
| `--text-default-grey` | Texte courant |
| `--text-mention-grey` | Mentions secondaires |
| `--text-label-grey` | Labels de formulaire |
| `--text-action-high-blue-france` | Liens et actions |
| `--text-disabled-grey` | Texte désactivé |
| `--text-default-error` | Texte erreur |
| `--text-default-success` | Texte succès |
| `--text-inverted-grey` | Texte inversé |

### Tokens de bordure

| Token | Usage |
|-------|-------|
| `--border-default-grey` | Bordures par défaut |
| `--border-action-high-blue-france` | Bordures actives/focus |
| `--border-disabled-grey` | Bordures désactivées |
| `--border-plain-error` | Bordures erreur |
| `--border-plain-success` | Bordures succès |

### Tokens illustration (Artwork)

| Token | Couverture | Usage |
|-------|------------|-------|
| `--artwork-major-blue-france` | ~60% | Couleur dominante pictogramme |
| `--artwork-minor-blue-france` | ~30% | Couleur secondaire pictogramme |
| `--artwork-decorative-blue-france` | ~10% | Accent décoratif |

## Classes utilitaires de fond

```html
<div class="fr-background-alt--grey">Fond alterné gris</div>
<div class="fr-background-alt--blue-france">Fond alterné bleu france</div>
<div class="fr-background-contrast--grey">Fond contrasté</div>
```

## Composants accentuables

Les composants suivants supportent les couleurs d'accent :
Badge, Card, Citation (Quote), Callout, Highlight, Table, Tag, Tile.

```html
<div class="fr-callout--green-emeraude">...</div>
<p class="fr-badge--yellow-moutarde">...</p>
```

## Utilisation en CSS

```css
.mon-element {
  color: var(--text-default-grey);
  background-color: var(--background-default-grey);
  border-color: var(--border-default-grey);
}
```
