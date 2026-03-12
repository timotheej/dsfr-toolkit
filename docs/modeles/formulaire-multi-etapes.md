# Formulaire multi-étapes

Modèle de page pour un formulaire découpé en plusieurs étapes avec un stepper.

## Composants utilisés

- `fr-stepper` — Indicateur de progression
- `fr-breadcrumb` — Fil d'Ariane
- `fr-fieldset` + `fr-fieldset__element` — Structure de formulaire
- `fr-input-group` — Champs texte
- `fr-select-group` — Listes déroulantes
- `fr-radio-group` / `fr-checkbox-group` — Choix
- `fr-password` — Mot de passe
- `fr-upload-group` — Upload de fichiers
- `fr-alert` — Résumé d'erreurs
- `fr-messages-group` — Erreurs par champ
- `fr-btns-group` — Boutons de navigation

## Règles de mise en page

- Colonne centrée : `fr-col-12 fr-col-md-10 fr-col-lg-8` dans `fr-grid-row--center`
- Disposition en **une seule colonne**
- 16px entre champs (même groupe), 24px entre groupes
- Labels au-dessus des inputs, alignés à gauche
- Champs obligatoires par défaut ; optionnels marqués "(optionnel)"
- Boutons **alignés à droite** (`fr-btns-group--right`)

## Structure HTML complète

```html
<main role="main" id="content">
  <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">

        <!-- Fil d'Ariane -->
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <button class="fr-breadcrumb__button" aria-expanded="false"
                  aria-controls="breadcrumb-1">Voir le fil d'Ariane</button>
          <div class="fr-collapse" id="breadcrumb-1">
            <ol class="fr-breadcrumb__list">
              <li><a class="fr-breadcrumb__link" href="/">Accueil</a></li>
              <li><a class="fr-breadcrumb__link" aria-current="page">Formulaire</a></li>
            </ol>
          </div>
        </nav>

        <!-- Stepper -->
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

        <!-- Titre -->
        <h1>Titre du formulaire</h1>
        <p class="fr-text--sm fr-mb-4v">
          Sauf mention contraire "(optionnel)" dans le label, tous les champs sont obligatoires.
        </p>

        <!-- Résumé d'erreurs (après soumission échouée) -->
        <div class="fr-alert fr-alert--error fr-mb-4v" role="alert">
          <h3 class="fr-alert__title">Erreurs dans le formulaire</h3>
          <p>Veuillez corriger les erreurs suivantes :</p>
          <ul>
            <li><a href="#nom">Le champ Nom est requis</a></li>
            <li><a href="#email">Le format de l'email est incorrect</a></li>
          </ul>
        </div>

        <!-- Formulaire -->
        <form action="#" method="post">
          <fieldset class="fr-fieldset" aria-labelledby="identity-legend">
            <legend class="fr-fieldset__legend" id="identity-legend">Identité</legend>

            <!-- Radio : Civilité -->
            <div class="fr-fieldset__element">
              <fieldset class="fr-fieldset" role="group" aria-labelledby="civilite-legend">
                <legend class="fr-fieldset__legend" id="civilite-legend">Civilité</legend>
                <div class="fr-fieldset__element fr-fieldset__element--inline">
                  <div class="fr-radio-group">
                    <input type="radio" id="sexe-f" name="sexe" value="F">
                    <label class="fr-label" for="sexe-f">Madame</label>
                  </div>
                </div>
                <div class="fr-fieldset__element fr-fieldset__element--inline">
                  <div class="fr-radio-group">
                    <input type="radio" id="sexe-m" name="sexe" value="M">
                    <label class="fr-label" for="sexe-m">Monsieur</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <!-- Input : Nom -->
            <div class="fr-fieldset__element">
              <div class="fr-input-group">
                <label class="fr-label" for="nom">Nom</label>
                <input class="fr-input" type="text" id="nom" name="nom"
                       autocomplete="family-name"
                       aria-describedby="nom-messages">
                <div class="fr-messages-group" id="nom-messages" aria-live="polite"></div>
              </div>
            </div>

            <!-- Input : Prénom -->
            <div class="fr-fieldset__element">
              <div class="fr-input-group">
                <label class="fr-label" for="prenom">Prénom</label>
                <input class="fr-input" type="text" id="prenom" name="prenom"
                       autocomplete="given-name"
                       aria-describedby="prenom-messages">
                <div class="fr-messages-group" id="prenom-messages" aria-live="polite"></div>
              </div>
            </div>

            <!-- Input : Email -->
            <div class="fr-fieldset__element">
              <div class="fr-input-group">
                <label class="fr-label" for="email">
                  Adresse électronique
                  <span class="fr-hint-text">Format attendu : nom@domaine.fr</span>
                </label>
                <input class="fr-input" type="email" id="email" name="email"
                       autocomplete="email"
                       aria-describedby="email-messages">
                <div class="fr-messages-group" id="email-messages" aria-live="polite"></div>
              </div>
            </div>
          </fieldset>

          <!-- Boutons de navigation -->
          <ul class="fr-btns-group fr-btns-group--inline-lg fr-btns-group--right">
            <li>
              <button class="fr-btn" type="submit">Suivant</button>
            </li>
          </ul>
        </form>

      </div>
    </div>
  </div>
</main>
```

## Navigation entre étapes

```html
<!-- Première étape : seulement "Suivant" -->
<ul class="fr-btns-group fr-btns-group--inline-lg fr-btns-group--right">
  <li><button class="fr-btn" type="submit">Suivant</button></li>
</ul>

<!-- Étapes intermédiaires -->
<ul class="fr-btns-group fr-btns-group--inline-lg fr-btns-group--right">
  <li><button class="fr-btn fr-btn--secondary" type="button">Précédent</button></li>
  <li><button class="fr-btn" type="submit">Suivant</button></li>
</ul>

<!-- Dernière étape : action spécifique -->
<ul class="fr-btns-group fr-btns-group--inline-lg fr-btns-group--right">
  <li><button class="fr-btn fr-btn--secondary" type="button">Précédent</button></li>
  <li><button class="fr-btn" type="submit">Envoyer la demande</button></li>
</ul>
```

## Confirmation finale

Après la dernière étape, afficher une alerte de succès :

```html
<div class="fr-alert fr-alert--success fr-alert--sm" role="alert">
  <p class="fr-alert__title">Votre demande a été envoyée</p>
  <p>Vous recevrez un email de confirmation sous 24h.</p>
</div>
```

## Règles

- Maximum **8 étapes**
- Prévoir une page d'introduction avant l'étape 1 (sans stepper)
- Terminer par une page de confirmation
- Utiliser des labels d'action spécifiques ("Envoyer la réclamation", pas juste "Envoyer")
- Résumé d'erreurs en alerte au-dessus du formulaire + erreurs par champ
