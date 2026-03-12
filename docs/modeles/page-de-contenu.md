# Page de contenu

Modèle pour une page de contenu éditorial avec ou sans navigation latérale.

## Composants utilisés

- `fr-breadcrumb` — Fil d'Ariane
- `fr-sidemenu` — Navigation latérale (optionnelle)
- `fr-callout` — Mise en avant d'information
- `fr-highlight` — Texte en évidence
- `fr-accordion` / `fr-accordions-group` — Sections dépliables (FAQ)
- Classes typographiques — `fr-h1`-`fr-h6`, `fr-text--lead`, `fr-text--sm`

## Avec navigation latérale

```html
<main role="main" id="content">
  <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters">

      <!-- Navigation latérale (3 colonnes desktop) -->
      <div class="fr-col-12 fr-col-md-4 fr-col-lg-3">
        <nav class="fr-sidemenu" aria-labelledby="sidemenu-title">
          <div class="fr-sidemenu__inner">
            <button class="fr-sidemenu__btn" aria-controls="sidemenu-wrapper"
                    aria-expanded="false">Dans cette rubrique</button>
            <div class="fr-collapse" id="sidemenu-wrapper">
              <div class="fr-sidemenu__title" id="sidemenu-title">Rubrique</div>
              <ul class="fr-sidemenu__list">
                <li class="fr-sidemenu__item fr-sidemenu__item--active">
                  <a class="fr-sidemenu__link" aria-current="page" href="#">Page active</a>
                </li>
                <li class="fr-sidemenu__item">
                  <a class="fr-sidemenu__link" href="#">Autre page</a>
                </li>
                <li class="fr-sidemenu__item">
                  <a class="fr-sidemenu__link" href="#">Encore une page</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <!-- Contenu principal -->
      <div class="fr-col-12 fr-col-md-8 fr-col-lg-8">

        <!-- Fil d'Ariane -->
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <button class="fr-breadcrumb__button" aria-expanded="false"
                  aria-controls="breadcrumb-1">Voir le fil d'Ariane</button>
          <div class="fr-collapse" id="breadcrumb-1">
            <ol class="fr-breadcrumb__list">
              <li><a class="fr-breadcrumb__link" href="/">Accueil</a></li>
              <li><a class="fr-breadcrumb__link" href="/rubrique">Rubrique</a></li>
              <li><a class="fr-breadcrumb__link" aria-current="page">Page actuelle</a></li>
            </ol>
          </div>
        </nav>

        <h1>Titre de la page</h1>
        <p class="fr-text--lead">Texte d'introduction / chapô.</p>

        <!-- Callout -->
        <div class="fr-callout fr-icon-information-line">
          <h3 class="fr-callout__title">Information importante</h3>
          <p class="fr-callout__text">Contenu de la mise en avant.</p>
        </div>

        <h2>Sous-titre de section</h2>
        <p>Contenu textuel de la page...</p>

        <!-- Highlight -->
        <div class="fr-highlight">
          <p>Citation ou texte mis en évidence.</p>
        </div>

        <!-- Accordéons (FAQ) -->
        <div class="fr-accordions-group fr-mt-4v">
          <section class="fr-accordion">
            <h3 class="fr-accordion__title">
              <button type="button" class="fr-accordion__btn"
                      aria-expanded="false" aria-controls="acc-1">Question 1</button>
            </h3>
            <div id="acc-1" class="fr-collapse">
              <p>Réponse 1</p>
            </div>
          </section>
          <section class="fr-accordion">
            <h3 class="fr-accordion__title">
              <button type="button" class="fr-accordion__btn"
                      aria-expanded="false" aria-controls="acc-2">Question 2</button>
            </h3>
            <div id="acc-2" class="fr-collapse">
              <p>Réponse 2</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  </div>
</main>
```

## Sans navigation latérale

Centrer le contenu avec `fr-grid-row--center` :

```html
<main role="main" id="content">
  <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">

        <!-- Fil d'Ariane -->
        <!-- ... -->

        <h1>Titre de la page</h1>
        <p class="fr-text--lead">Chapô.</p>

        <!-- Contenu... -->

      </div>
    </div>
  </div>
</main>
```

## Mise en page

| Avec sidemenu | Sans sidemenu |
|---|---|
| Sidemenu : `fr-col-12 fr-col-md-4 fr-col-lg-3` | Contenu centré : `fr-col-12 fr-col-md-10 fr-col-lg-8` |
| Contenu : `fr-col-12 fr-col-md-8 fr-col-lg-8` | dans `fr-grid-row--center` |

Pour un sidemenu sticky sur les longues pages, ajouter `fr-sidemenu--sticky`.
