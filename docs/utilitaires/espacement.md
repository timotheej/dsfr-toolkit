# Classes d'espacement (utilitaires)

## Référence rapide

Pattern : `fr-{m|p}{t|b|l|r|x|y}-{breakpoint?}-{valeur}`

## Marges (margin)

```html
fr-m-0          /* margin: 0 */
fr-m-1v         /* margin: 4px */
fr-m-2v         /* margin: 8px */
fr-m-4v         /* margin: 16px */
fr-m-8v         /* margin: 32px */
fr-m-auto       /* margin: auto */
fr-m-n4v        /* margin: -16px (négatif) */

fr-mt-4v        /* margin-top: 16px */
fr-mb-6v        /* margin-bottom: 24px */
fr-ml-2v        /* margin-left: 8px */
fr-mr-3v        /* margin-right: 12px */
fr-mx-auto      /* margin-left + right: auto */
fr-my-8v        /* margin-top + bottom: 32px */
```

## Paddings

```html
fr-p-0          /* padding: 0 */
fr-p-4v         /* padding: 16px */
fr-pt-2v        /* padding-top: 8px */
fr-pb-6v        /* padding-bottom: 24px */
fr-px-4v        /* padding horizontal: 16px */
fr-py-8v        /* padding vertical: 32px */
```

## Responsive

```html
fr-mt-md-4v     /* margin-top: 16px à partir de MD */
fr-pb-lg-8v     /* padding-bottom: 32px à partir de LG */
```

## Échelle complète (unité v)

| Token | Pixels |
|-------|--------|
| `0` | 0 |
| `0-5v` | 2 |
| `1v` | 4 |
| `1-5v` | 6 |
| `2v` | 8 |
| `3v` | 12 |
| `4v` | 16 |
| `5v` | 20 |
| `6v` | 24 |
| `7v` | 28 |
| `8v` | 32 |
| `9v` | 36 |
| `10v` | 40 |
| `12v` | 48 |
| `16v` | 64 |
| `20v` | 80 |
| `24v` | 96 |
| `28v` | 112 |
| `32v` | 128 |

## Unité W (espacement structurel de page)

L'unité `w` (1w = 8px = 2v) est dédiée aux **espacements entre blocs structurels** de la page. Utiliser `w` pour la composition de page, `v` pour les espacements internes aux composants.

| Token W | Équivalent v | Pixels | Usage type |
|---------|-------------|--------|------------|
| `2w` | `4v` | 16 | Titre → description |
| `3w` | `6v` | 24 | Bloc titre+description → zone de contenu |
| `4w` | `8v` | 32 | Entre sous-sections |
| `5w` | `10v` | 40 | Entre sections majeures |
| `7w` | `14v` | 56 | Dernier contenu → footer |

Voir les règles complètes dans `docs/fondations/espacement.md` (section "Règles de composition de page").
