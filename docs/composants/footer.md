# Pied de page (Footer)

Pied de page obligatoire contenant les informations légales, la navigation et le bloc-marque.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-footer` | Conteneur principal |
| `fr-footer__top` | Navigation supérieure (optionnel) |
| `fr-footer__top-cat` | Titres de catégories |
| `fr-footer__top-list` | Listes de navigation |
| `fr-footer__top-link` | Liens de navigation |
| `fr-footer__body` | Corps principal |
| `fr-footer__brand` | Conteneur marque |
| `fr-footer__logo` | Logo |
| `fr-footer__content` | Contenu |
| `fr-footer__content-desc` | Description du site |
| `fr-footer__content-list` | Liens externes |
| `fr-footer__content-link` | Lien externe |
| `fr-footer__partners` | Logos partenaires |
| `fr-footer__bottom` | Section légale |
| `fr-footer__bottom-list` | Liens légaux |
| `fr-footer__bottom-link` | Lien légal |
| `fr-footer__bottom-copy` | Copyright/licence |

## Structure HTML

```html
<footer class="fr-footer" role="contentinfo" id="footer">
  <div class="fr-container">
    <div class="fr-footer__body">
      <div class="fr-footer__brand fr-enlarge-link">
        <p class="fr-logo">
          République
          <br>Française
        </p>
        <a class="fr-footer__brand-link" href="/"
           title="Retour à l'accueil du site - Nom du site">
          Retour à l'accueil
        </a>
      </div>
      <div class="fr-footer__content">
        <p class="fr-footer__content-desc">
          Description du site ou du service.
        </p>
        <ul class="fr-footer__content-list">
          <li class="fr-footer__content-item">
            <a class="fr-footer__content-link" target="_blank"
               rel="noopener" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
          </li>
          <li class="fr-footer__content-item">
            <a class="fr-footer__content-link" target="_blank"
               rel="noopener" href="https://info.gouv.fr">info.gouv.fr</a>
          </li>
          <li class="fr-footer__content-item">
            <a class="fr-footer__content-link" target="_blank"
               rel="noopener" href="https://service-public.fr">service-public.fr</a>
          </li>
          <li class="fr-footer__content-item">
            <a class="fr-footer__content-link" target="_blank"
               rel="noopener" href="https://data.gouv.fr">data.gouv.fr</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="fr-footer__bottom">
      <ul class="fr-footer__bottom-list">
        <li class="fr-footer__bottom-item">
          <a class="fr-footer__bottom-link" href="#">Plan du site</a>
        </li>
        <li class="fr-footer__bottom-item">
          <a class="fr-footer__bottom-link" href="#">Accessibilité : totalement conforme</a>
        </li>
        <li class="fr-footer__bottom-item">
          <a class="fr-footer__bottom-link" href="#">Mentions légales</a>
        </li>
        <li class="fr-footer__bottom-item">
          <a class="fr-footer__bottom-link" href="#">Données personnelles</a>
        </li>
        <li class="fr-footer__bottom-item">
          <a class="fr-footer__bottom-link" href="#">Gestion des cookies</a>
        </li>
      </ul>
      <div class="fr-footer__bottom-copy">
        <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers,
           les contenus de ce site sont proposés sous
           <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
              target="_blank" rel="noopener">licence etalab-2.0</a>
        </p>
      </div>
    </div>
  </div>
</footer>
```
