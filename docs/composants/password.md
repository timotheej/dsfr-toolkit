# Mot de passe (Password)

Champ de mot de passe avec toggle afficher/masquer et messages de validation.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-password` | Conteneur principal |
| `fr-password__input` | Input mot de passe (combiné avec `fr-input`) |
| `fr-password__checkbox` | Toggle afficher/masquer (combiné avec `fr-checkbox-group fr-checkbox-group--sm`) |
| `fr-input-wrap` | Wrapper autour de l'input |
| `fr-label` | Label du champ |
| `fr-hint-text` | Texte d'aide sous le label |
| `fr-messages-group` | Conteneur des messages de validation |
| `fr-message` | Message par défaut (informatif) |
| `fr-message--error` | Message d'erreur |
| `fr-message--valid` | Message de succès |
| `fr-input--error` | État erreur sur l'input |
| `fr-input--valid` | État valide sur l'input |

## Création de mot de passe (inscription)

Utilise `autocomplete="new-password"` et affiche les règles de sécurité comme messages.

```html
<div class="fr-password">
  <label class="fr-label" for="password-new">
    Mot de passe
    <span class="fr-hint-text">Votre mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre</span>
  </label>
  <div class="fr-input-wrap">
    <input class="fr-password__input fr-input" id="password-new"
           type="password" autocomplete="new-password"
           autocapitalize="off" autocorrect="off"
           aria-required="true"
           aria-describedby="password-new-messages">
  </div>
  <div class="fr-messages-group" id="password-new-messages" aria-live="polite">
    <p class="fr-message" data-fr-valid="valide" data-fr-error="en erreur">8 caractères minimum</p>
    <p class="fr-message" data-fr-valid="valide" data-fr-error="en erreur">1 caractère spécial</p>
    <p class="fr-message" data-fr-valid="valide" data-fr-error="en erreur">1 chiffre minimum</p>
  </div>
  <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
    <input id="password-new-show" type="checkbox" aria-label="Afficher le mot de passe">
    <label class="fr-label" for="password-new-show">Afficher</label>
  </div>
</div>
```

## Connexion (mot de passe existant)

Utilise `autocomplete="current-password"`. Inclut un lien "Mot de passe oublié".

```html
<div class="fr-password">
  <label class="fr-label" for="password-login">Mot de passe</label>
  <div class="fr-input-wrap">
    <input class="fr-password__input fr-input" id="password-login"
           type="password" autocomplete="current-password"
           autocapitalize="off" autocorrect="off"
           aria-required="true"
           aria-describedby="password-login-messages">
  </div>
  <div class="fr-messages-group" id="password-login-messages" aria-live="polite"></div>
  <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
    <input id="password-login-show" type="checkbox" aria-label="Afficher le mot de passe">
    <label class="fr-label" for="password-login-show">Afficher</label>
  </div>
  <p class="fr-mt-1v">
    <a href="/mot-de-passe-oublie" class="fr-link">Mot de passe oublié ?</a>
  </p>
</div>
```

## État erreur (création)

Chaque règle non respectée passe en `fr-message--error`, celles validées en `fr-message--valid`.

```html
<div class="fr-password">
  <label class="fr-label" for="password-err">
    Mot de passe
    <span class="fr-hint-text">Votre mot de passe doit contenir au moins 8 caractères</span>
  </label>
  <div class="fr-input-wrap">
    <input class="fr-password__input fr-input fr-input--error" id="password-err"
           type="password" autocomplete="new-password"
           aria-required="true" aria-invalid="true"
           aria-describedby="password-err-messages">
  </div>
  <div class="fr-messages-group" id="password-err-messages" aria-live="polite">
    <p class="fr-message fr-message--valid">8 caractères minimum</p>
    <p class="fr-message fr-message--error">1 caractère spécial requis</p>
    <p class="fr-message fr-message--error">1 chiffre minimum requis</p>
  </div>
  <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
    <input id="password-err-show" type="checkbox" aria-label="Afficher le mot de passe">
    <label class="fr-label" for="password-err-show">Afficher</label>
  </div>
</div>
```

## État erreur (connexion)

Pour la connexion, ne PAS utiliser d'erreur au niveau du champ. Utiliser une alerte globale pour éviter la divulgation d'identité :

```html
<div class="fr-alert fr-alert--error fr-mb-4v" role="alert">
  <p class="fr-alert__title">Erreur de connexion</p>
  <p>Identifiant ou mot de passe incorrect.</p>
</div>
```

## Comportement JavaScript

Le DSFR JS gère automatiquement :
- **Toggle afficher/masquer** : change le `type` de `password` à `text` quand la checkbox est cochée
- **Détection CapsLock** : affiche un indicateur quand le verrouillage majuscule est actif
- **Suppression des boutons navigateur** : masque les boutons natifs de Safari et Edge

## Accessibilité

| Attribut | Élément | Rôle |
|----------|---------|------|
| `aria-required="true"` | `<input>` | Champ obligatoire |
| `aria-describedby` | `<input>` | Lie l'input aux messages de validation |
| `aria-live="polite"` | `fr-messages-group` | Annonce les changements de messages |
| `aria-label="Afficher le mot de passe"` | Checkbox toggle | Nom accessible du toggle |
| `aria-invalid="true"` | `<input>` en erreur | Indique un champ invalide |
| `autocomplete` | `<input>` | `new-password` ou `current-password` selon le contexte |

## Règles d'utilisation

- Masquer le mot de passe par défaut, fournir un toggle pour l'afficher
- Autoriser le copier/coller dans le champ
- Ne jamais envoyer de mot de passe en clair par email
- Adapter les contraintes de sécurité aux exigences réelles du service
- Éviter les changements de mot de passe forcés périodiquement
