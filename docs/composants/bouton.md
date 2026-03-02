# Bouton

Élément interactif déclenchant une action.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-btn` | Bouton primaire |
| `fr-btn--secondary` | Secondaire |
| `fr-btn--tertiary` | Tertiaire |
| `fr-btn--tertiary-no-outline` | Tertiaire sans bordure |
| `fr-btn--sm` | Petit |
| `fr-btn--lg` | Grand |
| `fr-btn--icon-left` | Icône à gauche |
| `fr-btn--icon-right` | Icône à droite |
| `fr-btns-group` | Groupe de boutons |
| `fr-btns-group--inline` | Disposition horizontale |
| `fr-btns-group--inline-md` | Horizontal à partir de MD |
| `fr-btns-group--right` | Alignement droit |
| `fr-btns-group--center` | Alignement centré |
| `fr-btns-group--equisized` | Largeurs égales |
| `fr-btns-group--sm` | Groupe petit |

## Structure HTML

### Bouton primaire

```html
<button class="fr-btn" type="button">Label</button>
```

### Bouton secondaire

```html
<button class="fr-btn fr-btn--secondary" type="button">Secondaire</button>
```

### Bouton tertiaire

```html
<button class="fr-btn fr-btn--tertiary" type="button">Tertiaire</button>
```

### Bouton avec icône

```html
<button class="fr-btn fr-icon-add-circle-line fr-btn--icon-left" type="button">
  Ajouter
</button>
```

### Bouton icône seule

```html
<button class="fr-btn fr-icon-close-line" title="Fermer" type="button">
  <span class="fr-sr-only">Fermer</span>
</button>
```

### Bouton lien

```html
<a href="#" class="fr-btn">Lien bouton</a>
```

## Groupe de boutons

```html
<ul class="fr-btns-group fr-btns-group--inline">
  <li><button class="fr-btn">Primaire</button></li>
  <li><button class="fr-btn fr-btn--secondary">Secondaire</button></li>
</ul>
```

## État désactivé

```html
<button class="fr-btn" disabled>Désactivé</button>
```
