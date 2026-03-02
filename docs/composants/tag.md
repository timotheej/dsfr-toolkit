# Tag

Label de mot-clé pour catégoriser du contenu.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-tag` | Élément principal |
| `fr-tag--sm` | Petite taille |
| `fr-tag--dismiss` | Supprimable |
| `fr-tag--icon-left` | Icône à gauche |
| `fr-tag--[couleur]` | Couleur d'accent |
| `fr-tags-group` | Groupe de tags |

## Types de tags

### Non cliquable

```html
<p class="fr-tag">Label</p>
```

### Cliquable (lien)

```html
<a href="#" class="fr-tag">Label cliquable</a>
```

### Sélectionnable (toggle)

```html
<button type="button" class="fr-tag" aria-pressed="false">
  Label sélectionnable
</button>
```

### Supprimable

```html
<button class="fr-tag fr-tag--dismiss" type="button"
        aria-label="Retirer le filtre Label">Label</button>
```

## Groupe de tags

```html
<ul class="fr-tags-group">
  <li><p class="fr-tag">Tag 1</p></li>
  <li><a href="#" class="fr-tag">Tag 2</a></li>
  <li><button class="fr-tag" type="button" aria-pressed="false">Tag 3</button></li>
</ul>
```

## Avec icône

```html
<p class="fr-tag fr-icon-arrow-right-line fr-tag--icon-left">Tag avec icône</p>
```

## Avec couleur d'accent

```html
<p class="fr-tag fr-tag--green-emeraude">Environnement</p>
<p class="fr-tag fr-tag--yellow-moutarde">Économie</p>
```
