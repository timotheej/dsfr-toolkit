# Typographie

## Polices

| Police | Graisses | Fallback | Usage |
|--------|----------|----------|-------|
| **Marianne** | Light, Regular, Medium, Bold + italiques | Arial | Texte principal UI |
| **Spectral** | Regular, Extra-Bold | Georgia | Texte éditorial/serif |

**Base :** 1rem = 16px

## Titres (h1-h6)

| Niveau | Classe | Desktop | Mobile |
|--------|--------|---------|--------|
| H1 | `fr-h1` | 40px / 48px lh | 32px / 40px lh |
| H2 | `fr-h2` | 32px / 40px lh | 28px / 36px lh |
| H3 | `fr-h3` | 28px / 36px lh | 24px / 32px lh |
| H4 | `fr-h4` | 24px / 32px lh | 22px / 28px lh |
| H5 | `fr-h5` | 22px / 28px lh | 20px / 28px lh |
| H6 | `fr-h6` | 20px / 28px lh | 18px / 24px lh |

Les classes `fr-h1` à `fr-h6` peuvent être appliquées à n'importe quel niveau de titre pour dissocier le visuel du sémantique.

```html
<h2 class="fr-h4">Visuellement h4, sémantiquement h2</h2>
```

## Titres d'affichage (Display)

Pour les sections héro/landing :

| Classe | Desktop | Mobile |
|--------|---------|--------|
| `fr-display--xl` | 80px / 88px lh | 72px / 80px lh |
| `fr-display--lg` | 72px / 80px lh | 64px / 72px lh |
| `fr-display--md` | 64px / 72px lh | 56px / 64px lh |
| `fr-display--sm` | 56px / 64px lh | 48px / 56px lh |
| `fr-display--xs` | 48px / 56px lh | 40px / 48px lh |

## Texte courant

| Classe | Taille | Interligne | Usage |
|--------|--------|------------|-------|
| `fr-text--lead` | 20px | 32px | Introduction/chapô |
| `fr-text--lg` | 18px | 28px | Contenu éditorial |
| `fr-text` | 16px | 24px | Texte par défaut |
| `fr-text--sm` | 14px | 24px | Détails composants |
| `fr-text--xs` | 12px | 20px | Mentions/légendes |

## Modificateurs typographiques

| Classe | Effet |
|--------|-------|
| `fr-text--alt` | Passe en police Spectral (serif) |
| `fr-text--bold` | Graisse bold |
| `fr-text--heavy` | Graisse extra-bold |
| `fr-text--regular` | Graisse regular |
| `fr-text--light` | Graisse light |

## Exemples

```html
<h1 class="fr-display--lg">Titre héro</h1>
<p class="fr-text--lead">Paragraphe d'introduction.</p>
<p class="fr-text">Texte courant standard.</p>
<p class="fr-text--sm">Texte détail plus petit.</p>
<p class="fr-text--alt fr-text--lg">Texte en Spectral, taille large.</p>
```

## Règles

- Longueur de ligne optimale : 45-75 caractères, max 8 colonnes de grille
- Couleur titre sur fond clair : G800
- Couleur texte courant sur fond clair : G700
- Couleur sur fond sombre : blanc ou G200
