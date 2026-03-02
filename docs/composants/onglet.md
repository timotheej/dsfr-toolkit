# Onglet (Tab)

Interface à onglets pour organiser du contenu en sections.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-tabs` | Conteneur principal |
| `fr-tabs__list` | Liste d'onglets (`role="tablist"`) |
| `fr-tabs__tab` | Bouton d'onglet |
| `fr-tabs__panel` | Panneau de contenu |
| `fr-tabs__panel--selected` | Panneau actif |
| `fr-tabs--viewport-width` | Pleine largeur mobile |

## Structure HTML

```html
<div class="fr-tabs">
  <ul class="fr-tabs__list" role="tablist" aria-label="Système d'onglets">
    <li role="presentation">
      <button type="button" id="tab-1" class="fr-tabs__tab"
              tabindex="0" role="tab" aria-selected="true"
              aria-controls="panel-1">Onglet 1</button>
    </li>
    <li role="presentation">
      <button type="button" id="tab-2" class="fr-tabs__tab"
              tabindex="-1" role="tab" aria-selected="false"
              aria-controls="panel-2">Onglet 2</button>
    </li>
    <li role="presentation">
      <button type="button" id="tab-3" class="fr-tabs__tab"
              tabindex="-1" role="tab" aria-selected="false"
              aria-controls="panel-3">Onglet 3</button>
    </li>
  </ul>
  <div id="panel-1" class="fr-tabs__panel fr-tabs__panel--selected"
       role="tabpanel" aria-labelledby="tab-1" tabindex="0">
    <p>Contenu du premier onglet</p>
  </div>
  <div id="panel-2" class="fr-tabs__panel"
       role="tabpanel" aria-labelledby="tab-2" tabindex="0">
    <p>Contenu du deuxième onglet</p>
  </div>
  <div id="panel-3" class="fr-tabs__panel"
       role="tabpanel" aria-labelledby="tab-3" tabindex="0">
    <p>Contenu du troisième onglet</p>
  </div>
</div>
```

Recommandation : moins de 5 onglets.
