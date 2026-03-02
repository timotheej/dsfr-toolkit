# Classes d'affichage

## Visibilité

| Classe | Effet |
|--------|-------|
| `fr-hidden` | Complètement masqué (display + lecteurs) |
| `fr-hidden-sm` | Masqué à partir de SM |
| `fr-hidden-md` | Masqué à partir de MD |
| `fr-hidden-lg` | Masqué à partir de LG |
| `fr-hidden-xl` | Masqué à partir de XL |
| `fr-unhidden-sm` | Ré-affiche à partir de SM |
| `fr-unhidden-md` | Ré-affiche à partir de MD |
| `fr-unhidden-lg` | Ré-affiche à partir de LG |
| `fr-unhidden-xl` | Ré-affiche à partir de XL |

## Accessibilité

| Classe | Effet |
|--------|-------|
| `fr-sr-only` | Masqué visuellement, accessible aux lecteurs d'écran |
| `fr-sr-only-sm` | SR-only à partir de SM |
| `fr-sr-only-md` | SR-only à partir de MD |
| `fr-sr-only-lg` | SR-only à partir de LG |

## Exemples

```html
<!-- Visible mobile, masqué desktop -->
<div class="fr-hidden-lg">Contenu mobile uniquement</div>

<!-- Masqué par défaut, visible à partir de MD -->
<div class="fr-hidden fr-unhidden-md">Contenu desktop uniquement</div>

<!-- Label accessible uniquement -->
<span class="fr-sr-only">Description pour lecteurs d'écran</span>
```
