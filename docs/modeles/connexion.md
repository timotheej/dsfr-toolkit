# Page de connexion

## Structure type

```html
<main role="main" id="content">
  <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">

        <h1 class="fr-h3">Connexion</h1>

        <!-- FranceConnect -->
        <div class="fr-connect-group">
          <button class="fr-connect" type="button">
            <span class="fr-connect__login">S'identifier avec</span>
            <span class="fr-connect__brand">FranceConnect</span>
          </button>
          <p>
            <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener">
              Qu'est-ce que FranceConnect ?
            </a>
          </p>
        </div>

        <!-- Séparateur -->
        <p class="fr-hr-or">ou</p>

        <!-- Formulaire de connexion -->
        <form action="#" method="post">
          <fieldset class="fr-fieldset" aria-labelledby="login-legend">
            <legend class="fr-fieldset__legend" id="login-legend">
              Se connecter avec son compte
            </legend>
            <div class="fr-fieldset__element">
              <div class="fr-input-group">
                <label class="fr-label" for="login-email">
                  Adresse électronique
                </label>
                <input class="fr-input" type="email" id="login-email"
                       autocomplete="email">
              </div>
            </div>
            <div class="fr-fieldset__element">
              <div class="fr-password">
                <label class="fr-label" for="login-password">Mot de passe</label>
                <div class="fr-input-wrap">
                  <input class="fr-password__input fr-input" type="password"
                         id="login-password" autocomplete="current-password">
                </div>
                <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
                  <input id="show-pwd" type="checkbox">
                  <label class="fr-label" for="show-pwd">Afficher</label>
                </div>
                <p class="fr-mt-1v">
                  <a href="/mot-de-passe-oublie" class="fr-link">
                    Mot de passe oublié ?
                  </a>
                </p>
              </div>
            </div>
          </fieldset>

          <ul class="fr-btns-group">
            <li>
              <button class="fr-btn" type="submit">Se connecter</button>
            </li>
          </ul>
        </form>

        <hr class="fr-mt-3w">
        <h2 class="fr-h5 fr-mt-3w">Vous n'avez pas de compte ?</h2>
        <ul class="fr-btns-group">
          <li>
            <a class="fr-btn fr-btn--secondary" href="/inscription">
              Créer un compte
            </a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</main>
```
