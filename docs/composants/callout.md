# Mise en avant (Callout)

Bloc mis en évidence pour attirer l'attention sur du contenu important.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-callout` | Conteneur principal |
| `fr-callout__title` | Titre |
| `fr-callout__text` | Texte |
| `fr-icon-[nom]` | Icône avant le titre |
| `fr-callout--[couleur]` | Couleur d'accent |

## Structure HTML

```html
<div class="fr-callout fr-icon-information-line">
  <h3 class="fr-callout__title">Titre de la mise en avant</h3>
  <p class="fr-callout__text">
    Contenu de la mise en avant avec des informations importantes pour l'utilisateur.
  </p>
  <button class="fr-btn" type="button">Action</button>
</div>
```

## Sans icône

```html
<div class="fr-callout">
  <h3 class="fr-callout__title">Titre</h3>
  <p class="fr-callout__text">Contenu de la mise en avant.</p>
</div>
```

## Avec couleur d'accent

```html
<div class="fr-callout fr-callout--green-emeraude fr-icon-leaf-line">
  <h3 class="fr-callout__title">Environnement</h3>
  <p class="fr-callout__text">Information écologique importante.</p>
</div>
```

## Sans bouton

```html
<div class="fr-callout fr-icon-alert-line">
  <h3 class="fr-callout__title">Attention</h3>
  <p class="fr-callout__text">Information simple sans action associée.</p>
</div>
```
