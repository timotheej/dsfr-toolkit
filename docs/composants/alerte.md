# Alerte

Bannière informative communiquant un retour important (succès, erreur, avertissement, info).

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-alert` | Conteneur de base |
| `fr-alert--info` | Information (bleu) |
| `fr-alert--warning` | Avertissement (jaune) |
| `fr-alert--error` | Erreur (rouge) |
| `fr-alert--success` | Succès (vert) |
| `fr-alert--sm` | Petite alerte |
| `fr-alert__title` | Titre |
| `fr-btn--close` | Bouton de fermeture |

## Structure HTML

```html
<div class="fr-alert fr-alert--info">
  <h3 class="fr-alert__title">Titre de l'alerte</h3>
  <p>Description de l'alerte avec des informations complémentaires.</p>
  <button type="button" class="fr-btn--close fr-btn"
          title="Masquer le message">Masquer le message</button>
</div>
```

## Petite alerte (sans description)

```html
<div class="fr-alert fr-alert--success fr-alert--sm">
  <p>Opération réussie</p>
</div>
```

## Variantes

- `--info`, `--warning`, `--error`, `--success`
- `--sm` pour les alertes compactes
- Avec ou sans bouton de fermeture
- Avec ou sans description
