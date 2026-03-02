# Lien (Link)

Lien stylisé avec icône et téléchargement optionnels.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-link` | Lien de base |
| `fr-link--xs` / `--sm` / `--lg` | Tailles |
| `fr-link--icon-left` | Icône à gauche |
| `fr-link--icon-right` | Icône à droite |
| `fr-link--download` | Lien de téléchargement |
| `fr-link__detail` | Détails fichier |
| `fr-links-group` | Groupe de liens |
| `fr-links-group--inline` | Groupe horizontal |

## Lien simple

```html
<a href="#" class="fr-link">Lien simple</a>
```

## Lien avec icône

```html
<a href="#" class="fr-link fr-icon-arrow-right-line fr-link--icon-right">
  En savoir plus
</a>

<a href="#" class="fr-link fr-icon-external-link-line fr-link--icon-right"
   target="_blank" rel="noopener">
  Lien externe
</a>
```

## Lien de téléchargement

```html
<a download href="document.pdf" class="fr-link fr-link--download">
  Télécharger le document
  <span class="fr-link__detail">PDF - 1,81 Mo</span>
</a>
```

## Groupe de liens

```html
<ul class="fr-links-group">
  <li><a class="fr-link fr-icon-arrow-right-line fr-link--icon-right" href="#">Lien 1</a></li>
  <li><a class="fr-link fr-icon-arrow-right-line fr-link--icon-right" href="#">Lien 2</a></li>
</ul>
```
