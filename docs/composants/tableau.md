# Tableau (Table)

Présentation de données structurées en lignes et colonnes.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-table` | Wrapper principal |
| `fr-table__wrapper` | Premier sous-conteneur |
| `fr-table__container` | Deuxième sous-conteneur |
| `fr-table__content` | Zone contenant `<table>` |
| `fr-table--bordered` | Séparateurs de colonnes |
| `fr-table--multiline` | Retour à la ligne autorisé |
| `fr-table--sm` | Densité compacte |
| `fr-table--lg` | Densité aérée |
| `fr-table--no-scroll` | Désactiver scroll horizontal |
| `fr-table--caption-bottom` | Légende en bas |
| `fr-table--no-caption` | Masquer légende visuellement |
| `fr-cell--fixed` | Colonne fixe au scroll |
| `fr-cell--right` | Alignement droit |
| `fr-cell--center` | Alignement centré |

## Structure HTML

```html
<div class="fr-table">
  <div class="fr-table__wrapper">
    <div class="fr-table__container">
      <div class="fr-table__content">
        <table>
          <caption>Titre du tableau</caption>
          <thead>
            <tr>
              <th scope="col">En-tête 1</th>
              <th scope="col">En-tête 2</th>
              <th scope="col">En-tête 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Donnée 1</td>
              <td>Donnée 2</td>
              <td>Donnée 3</td>
            </tr>
            <tr>
              <td>Donnée 4</td>
              <td>Donnée 5</td>
              <td>Donnée 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
```

## Tableau avec bordures

```html
<div class="fr-table fr-table--bordered">
  <!-- ... -->
</div>
```

## Tableau compact

```html
<div class="fr-table fr-table--sm">
  <!-- ... -->
</div>
```
