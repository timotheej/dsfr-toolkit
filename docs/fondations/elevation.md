# Ombres et élévation

## Système à 4 niveaux

La majorité de l'interface doit rester "plate". L'élévation est réservée à des interactions spécifiques.

| Niveau | Token | Ombre (clair) | Composants |
|--------|-------|---------------|------------|
| **Base** | (défaut) | Aucune | Éléments standard |
| **Surélevé** (raised) | `$raised` | `0 2px 6px 0 rgba(0,0,18,16%)` | Cartes, en-tête |
| **Superposé** (overlap) | `$overlap` | `0 4px 12px 0 rgba(0,0,18,16%)` | Navigation, sélecteur de langue |
| **Détaché** (lifted) | `$lifted` | `0 6px 18px 0 rgba(0,0,18,16%)` | Modales, dialogues |

## Ombres en mode sombre

En mode sombre, l'opacité passe de 16% à 32%.

| Niveau | Ombre (sombre) |
|--------|---------------|
| Surélevé | `0 2px 6px 0 rgba(0,0,18,32%)` |
| Superposé | `0 4px 12px 0 rgba(0,0,18,32%)` |
| Détaché | `0 6px 18px 0 rgba(0,0,18,32%)` |

## Tokens de fond par niveau

| Token | Description |
|-------|-------------|
| `--background-elevated-grey` | Fond élevé standard |
| `--background-alt-raised-grey` | Fond alterné surélevé |
| `--background-alt-overlap-grey` | Fond alterné superposé |
| `--background-contrast-raised-grey` | Fond contrasté surélevé |
| `--background-contrast-overlap-grey` | Fond contrasté superposé |
| `--background-lifted-grey` | Fond détaché |
