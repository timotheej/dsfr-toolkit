# Bandeau d'information importante (Notice)

Bannière proéminente pour annonces urgentes affichée en haut de page.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-notice` | Conteneur principal |
| `fr-notice--info` | Information |
| `fr-notice--warning` | Avertissement |
| `fr-notice--alert` | Alerte |
| `fr-notice--weather-orange` | Alerte météo orange |
| `fr-notice--weather-red` | Alerte météo rouge |
| `fr-notice--weather-purple` | Alerte météo violette |
| `fr-notice__body` | Contenu |
| `fr-notice__title` | Titre (obligatoire) |
| `fr-notice__desc` | Description (optionnel) |

## Structure HTML

```html
<div class="fr-notice fr-notice--info">
  <div class="fr-container">
    <div class="fr-notice__body">
      <p>
        <span class="fr-notice__title">Information importante</span>
        <span class="fr-notice__desc">Description complémentaire</span>
      </p>
      <button class="fr-btn--close fr-btn" type="button"
              title="Masquer le message">Masquer</button>
    </div>
  </div>
</div>
```

## Variantes

- `--info`, `--warning`, `--alert`
- Alertes météo : `--weather-orange`, `--weather-red`, `--weather-purple`
- Alertes d'urgence : `--attack`, `--witness`, `--cyberattack`
- Avec ou sans bouton de fermeture
