# Accordéon

Sections repliables qui affichent/masquent du contenu au clic.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-accordion` | Conteneur |
| `fr-accordion__title` | Wrapper du titre |
| `fr-accordion__btn` | Bouton déclencheur |
| `fr-collapse` | Zone de contenu repliable |
| `fr-accordions-group` | Groupe d'accordéons |

## Structure HTML

```html
<section class="fr-accordion">
  <h3 class="fr-accordion__title">
    <button type="button" class="fr-accordion__btn"
            aria-expanded="false" aria-controls="accordion-1">
      Titre de la section
    </button>
  </h3>
  <div id="accordion-1" class="fr-collapse">
    <p>Contenu de la section</p>
  </div>
</section>
```

## Groupe d'accordéons

```html
<div class="fr-accordions-group">
  <section class="fr-accordion">
    <h3 class="fr-accordion__title">
      <button type="button" class="fr-accordion__btn"
              aria-expanded="false" aria-controls="acc-1">Section 1</button>
    </h3>
    <div id="acc-1" class="fr-collapse">
      <p>Contenu 1</p>
    </div>
  </section>
  <section class="fr-accordion">
    <h3 class="fr-accordion__title">
      <button type="button" class="fr-accordion__btn"
              aria-expanded="false" aria-controls="acc-2">Section 2</button>
    </h3>
    <div id="acc-2" class="fr-collapse">
      <p>Contenu 2</p>
    </div>
  </section>
</div>
```

## Variantes

- Groupe avec un seul ouvert : ajouter `data-fr-group="true"` sur le groupe
- Groupe avec plusieurs ouverts : `data-fr-group="false"`
