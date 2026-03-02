# Indicateur d'étapes (Stepper)

Indicateur de progression pour processus multi-étapes.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-stepper` | Conteneur principal |
| `fr-stepper__title` | Titre étape courante |
| `fr-stepper__state` | Compteur d'étapes |
| `fr-stepper__steps` | Barre de progression |
| `fr-stepper__details` | Info prochaine étape |

## Structure HTML

```html
<div class="fr-stepper">
  <h2 class="fr-stepper__title">
    Titre de l'étape en cours
    <span class="fr-stepper__state">Étape 2 sur 4</span>
  </h2>
  <div class="fr-stepper__steps" data-fr-current-step="2" data-fr-steps="4"></div>
  <p class="fr-stepper__details">
    <span class="fr-text--bold">Prochaine étape :</span> Titre de l'étape suivante
  </p>
</div>
```

La progression est contrôlée par les attributs `data-fr-current-step` et `data-fr-steps`. Pas de JavaScript requis.
