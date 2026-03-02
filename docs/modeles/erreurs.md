# Pages d'erreur

## Structure type (404)

```html
<main role="main" id="content">
  <div class="fr-container">
    <div class="fr-my-7w fr-mt-md-12w fr-mb-md-10w">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-grid-row--center">
        <div class="fr-col-12 fr-col-md-6">
          <h1 class="fr-h1">Page non trouvée</h1>
          <p class="fr-text--sm fr-mb-3w">Erreur 404</p>
          <p class="fr-text--lead fr-mb-3w">
            La page que vous cherchez est introuvable.
            Excusez-nous pour la gêne occasionnée.
          </p>
          <p class="fr-text--sm fr-mb-5w">
            Si vous avez tapé l'adresse web dans le navigateur, vérifiez qu'elle est correcte.
            La page n'est peut-être plus disponible.
          </p>
          <ul class="fr-btns-group fr-btns-group--inline-md">
            <li>
              <a class="fr-btn" href="/">Page d'accueil</a>
            </li>
            <li>
              <a class="fr-btn fr-btn--secondary" href="/contact">Contactez-nous</a>
            </li>
          </ul>
        </div>
        <div class="fr-col-12 fr-col-md-3 fr-col-offset-md-1">
          <svg class="fr-artwork" aria-hidden="true"
               viewBox="0 0 160 200" width="160" height="200">
            <!-- Pictogramme erreur -->
          </svg>
        </div>
      </div>
    </div>
  </div>
</main>
```

## Variantes

- **404** : Page non trouvée
- **500** : Erreur inattendue
- **503** : Service indisponible
