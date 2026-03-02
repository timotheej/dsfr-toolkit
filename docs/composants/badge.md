# Badge

Petit label indiquant un statut, un état ou une catégorie.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-badge` | Élément principal |
| `fr-badges-group` | Conteneur pour plusieurs badges |
| `fr-badge--info` | Info |
| `fr-badge--warning` | Avertissement |
| `fr-badge--error` | Erreur |
| `fr-badge--success` | Succès |
| `fr-badge--new` | Nouveau |
| `fr-badge--sm` | Petite taille |
| `fr-badge--no-icon` | Sans icône |
| `fr-badge--[couleur]` | Couleur d'accent |

## Structure HTML

```html
<p class="fr-badge fr-badge--success">Publié</p>
```

## Groupe de badges

```html
<ul class="fr-badges-group">
  <li><p class="fr-badge fr-badge--info">Information</p></li>
  <li><p class="fr-badge fr-badge--new">Nouveau</p></li>
  <li><p class="fr-badge fr-badge--sm fr-badge--warning">Urgent</p></li>
</ul>
```

## Avec couleur d'accent

```html
<p class="fr-badge fr-badge--yellow-moutarde">Catégorie A</p>
<p class="fr-badge fr-badge--green-emeraude">Environnement</p>
```
