# Indicateur d'étapes (Stepper)

Indicateur de progression pour processus multi-étapes. Maximum 8 étapes, minimum 2.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-stepper` | Conteneur principal |
| `fr-stepper__title` | Titre de l'étape courante (heading `h2`-`h6`) |
| `fr-stepper__state` | Compteur "Étape X sur Y" (dans le titre) |
| `fr-stepper__steps` | Barre de progression visuelle (div vide) |
| `fr-stepper__details` | Info prochaine étape (masqué auto sur la dernière étape) |

## Attributs data

| Attribut | Élément | Valeurs | Rôle |
|----------|---------|---------|------|
| `data-fr-current-step` | `fr-stepper__steps` | `"1"` à `"8"` | Étape courante (contrôle le remplissage bleu) |
| `data-fr-steps` | `fr-stepper__steps` | `"2"` à `"8"` | Nombre total d'étapes |

## Étape 1 sur 3

```html
<div class="fr-stepper">
  <h2 class="fr-stepper__title">
    Informations personnelles
    <span class="fr-stepper__state">Étape 1 sur 3</span>
  </h2>
  <div class="fr-stepper__steps" data-fr-current-step="1" data-fr-steps="3"></div>
  <p class="fr-stepper__details">
    <span class="fr-text--bold">Étape suivante :</span> Coordonnées
  </p>
</div>
```

## Étape intermédiaire (2 sur 4)

```html
<div class="fr-stepper">
  <h2 class="fr-stepper__title">
    Coordonnées
    <span class="fr-stepper__state">Étape 2 sur 4</span>
  </h2>
  <div class="fr-stepper__steps" data-fr-current-step="2" data-fr-steps="4"></div>
  <p class="fr-stepper__details">
    <span class="fr-text--bold">Étape suivante :</span> Documents justificatifs
  </p>
</div>
```

## Dernière étape (détails masqués automatiquement)

Quand `data-fr-current-step` = `data-fr-steps`, le CSS masque automatiquement `fr-stepper__details`.

```html
<div class="fr-stepper">
  <h2 class="fr-stepper__title">
    Confirmation
    <span class="fr-stepper__state">Étape 4 sur 4</span>
  </h2>
  <div class="fr-stepper__steps" data-fr-current-step="4" data-fr-steps="4"></div>
  <p class="fr-stepper__details">
    <span class="fr-text--bold">Étape suivante :</span>
  </p>
</div>
```

## Progression par JavaScript

Le stepper est purement CSS. Pour changer d'étape, mettre à jour le DOM manuellement :

```javascript
const stepper = document.querySelector('.fr-stepper');
const stepsBar = stepper.querySelector('.fr-stepper__steps');
const state = stepper.querySelector('.fr-stepper__state');
const title = stepper.querySelector('.fr-stepper__title');
const details = stepper.querySelector('.fr-stepper__details');

// Passer à l'étape 2
stepsBar.setAttribute('data-fr-current-step', '2');
state.textContent = 'Étape 2 sur 4';
title.childNodes[0].textContent = 'Coordonnées\n        ';
details.innerHTML = '<span class="fr-text--bold">Étape suivante :</span> Documents justificatifs';
```

## Boutons de navigation multi-étapes

```html
<!-- Première étape : seulement "Suivant" -->
<ul class="fr-btns-group fr-btns-group--inline-lg fr-btns-group--right">
  <li><button class="fr-btn" type="submit">Suivant</button></li>
</ul>

<!-- Étapes intermédiaires : "Précédent" + "Suivant" -->
<ul class="fr-btns-group fr-btns-group--inline-lg fr-btns-group--right">
  <li><button class="fr-btn fr-btn--secondary" type="button">Précédent</button></li>
  <li><button class="fr-btn" type="submit">Suivant</button></li>
</ul>

<!-- Dernière étape : "Précédent" + action spécifique -->
<ul class="fr-btns-group fr-btns-group--inline-lg fr-btns-group--right">
  <li><button class="fr-btn fr-btn--secondary" type="button">Précédent</button></li>
  <li><button class="fr-btn" type="submit">Envoyer la demande</button></li>
</ul>
```

## Accessibilité

- Le titre de l'étape doit être dans un heading (`<h2>` à `<h6>`) adapté à la hiérarchie de la page
- La barre de progression est purement décorative, aucun attribut ARIA nécessaire
- Le compteur "Étape X sur Y" dans `fr-stepper__state` fournit l'information sémantique
- Pas d'interactions clavier spécifiques (composant non interactif)

## Règles d'utilisation

- Ne pas répéter le numéro d'étape dans le titre (le compteur le fait déjà)
- Le composant n'est PAS personnalisable (pas de variantes de couleur ou de taille)
- Prévoir une page d'introduction avant l'étape 1 (sans stepper)
- Terminer par une page de confirmation
- Boutons alignés à droite (`fr-btns-group--right`) dans les formulaires multi-étapes
