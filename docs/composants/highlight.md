# Mise en exergue (Highlight)

Bloc simple avec bordure gauche pour mettre en valeur un passage de texte.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-highlight` | Conteneur principal |
| `fr-highlight--[couleur]` | Couleur d'accent |

## Structure HTML

```html
<div class="fr-highlight">
  <p>Ce texte est mis en exergue pour attirer l'attention du lecteur sur un point important.</p>
</div>
```

## Avec taille de texte

```html
<div class="fr-highlight">
  <p class="fr-text--sm">Texte petit mis en exergue.</p>
</div>

<div class="fr-highlight">
  <p class="fr-text--lg">Texte grand mis en exergue.</p>
</div>
```

## Avec couleur d'accent

```html
<div class="fr-highlight fr-highlight--green-emeraude">
  <p>Texte mis en exergue avec accent vert émeraude.</p>
</div>
```

Aucun JavaScript requis.
