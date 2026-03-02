# Infobulle (Tooltip)

Popup contextuel fournissant des informations supplémentaires au survol ou au clic.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-tooltip` | Élément tooltip |
| `fr-placement` | Wrapper de positionnement |
| `fr-btn--tooltip` | Bouton déclencheur |

## Tooltip au survol (sur un lien)

```html
<a class="fr-link" aria-describedby="tooltip-1" href="#">Texte du lien</a>
<span class="fr-tooltip fr-placement" id="tooltip-1" role="tooltip">
  Contenu de l'infobulle
</span>
```

## Tooltip au clic (sur un bouton)

```html
<button class="fr-btn--tooltip fr-btn" type="button"
        aria-describedby="tooltip-2">
  Information contextuelle
</button>
<span class="fr-tooltip fr-placement" id="tooltip-2" role="tooltip">
  Contenu de l'infobulle
</span>
```
