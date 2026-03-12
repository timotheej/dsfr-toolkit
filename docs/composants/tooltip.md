# Infobulle (Tooltip)

Popup contextuel fournissant des informations supplémentaires au survol ou au clic.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-tooltip` | Élément tooltip (le popup) |
| `fr-placement` | Wrapper de positionnement (auto-calcul par JS) |
| `fr-btn--tooltip` | Bouton déclencheur (icône "i" d'information) |
| `fr-placement--top` | Forcer le positionnement en haut |
| `fr-placement--bottom` | Forcer le positionnement en bas |
| `fr-placement--left` | Forcer le positionnement à gauche |
| `fr-placement--right` | Forcer le positionnement à droite |

## Tooltip au survol (sur un lien)

Apparaît au survol et au focus clavier.

```html
<a class="fr-link" aria-describedby="tooltip-1" href="#">Texte du lien</a>
<span class="fr-tooltip fr-placement" id="tooltip-1" role="tooltip" aria-hidden="true">
  Contenu de l'infobulle
</span>
```

## Tooltip au clic (bouton d'aide)

Bouton avec icône "i". Le tooltip reste affiché jusqu'au clic suivant ou `Escape`.

```html
<button class="fr-btn--tooltip fr-btn" type="button"
        aria-describedby="tooltip-2">
  Information contextuelle
</button>
<span class="fr-tooltip fr-placement" id="tooltip-2" role="tooltip" aria-hidden="true">
  Contenu de l'infobulle
</span>
```

## Tooltip sur un bouton (au survol)

```html
<button class="fr-btn" type="button" aria-describedby="tooltip-3">
  Label du bouton
</button>
<span class="fr-tooltip fr-placement" id="tooltip-3" role="tooltip" aria-hidden="true">
  Description de l'action
</span>
```

## Positionnement forcé

Sans classe de positionnement, le JS calcule automatiquement la meilleure position. Pour forcer :

```html
<button class="fr-btn--tooltip fr-btn" type="button"
        aria-describedby="tooltip-top">Aide</button>
<span class="fr-tooltip fr-placement fr-placement--top" id="tooltip-top" role="tooltip" aria-hidden="true">
  Infobulle au-dessus
</span>
```

Remplacer `fr-placement--top` par `--bottom`, `--left` ou `--right` selon le besoin.

## Comportement JavaScript

Le DSFR JS gère automatiquement :
- **Auto-positionnement** : calcule la position optimale selon le viewport
- **Survol** : affiche sur `mouseenter` / `focusin`, masque sur `mouseleave` / `focusout`
- **Clic** (`fr-btn--tooltip`) : toggle au clic, ferme au clic extérieur ou `Escape`
- **ARIA** : `aria-hidden` est togglé automatiquement
- **Singleton** : un seul tooltip visible à la fois

## Accessibilité

| Attribut | Élément | Rôle |
|----------|---------|------|
| `role="tooltip"` | `<span>` tooltip | Obligatoire |
| `aria-describedby` | Élément déclencheur | Référence l'`id` du tooltip |
| `aria-hidden="true"` | `<span>` tooltip | Masqué par défaut, togglé par JS |
| `id` | `<span>` tooltip | ID unique lié à `aria-describedby` |

Navigation clavier :
- `Tab` : affiche le tooltip au focus du déclencheur
- `Escape` : ferme le tooltip
- Le tooltip doit apparaître au focus clavier, pas seulement au survol

## Règles d'utilisation

- Le contenu doit être **non essentiel** (information supplémentaire uniquement)
- **Pas de contenu interactif** dans le tooltip (pas de liens, boutons, images)
- Garder le texte court et concis
- Ne pas répéter l'information déjà visible sur la page
- Préférer des alternatives (callout, alerte, accordéon) pour les sites mobile-first
- Ne pas placer trop de tooltips sur une même page
