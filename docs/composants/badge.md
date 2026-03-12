# Badge

Petit label non interactif indiquant un statut, un état ou une catégorie.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-badge` | Élément principal |
| `fr-badges-group` | Conteneur `<ul>` pour plusieurs badges |
| **Statuts sémantiques** | |
| `fr-badge--info` | Information (icône info, bleu) |
| `fr-badge--success` | Succès (icône check, vert) |
| `fr-badge--warning` | Avertissement (icône warning, orange) |
| `fr-badge--error` | Erreur (icône erreur, rouge) |
| `fr-badge--new` | Nouveau (icône étoile) |
| **Modificateurs** | |
| `fr-badge--sm` | Petite taille |
| `fr-badge--no-icon` | Supprime l'icône des badges sémantiques |
| **Couleurs d'accent (17)** | |
| `fr-badge--green-tilleul-verveine` | Tilleul verveine |
| `fr-badge--green-bourgeon` | Bourgeon |
| `fr-badge--green-emeraude` | Émeraude |
| `fr-badge--green-menthe` | Menthe |
| `fr-badge--green-archipel` | Archipel |
| `fr-badge--blue-ecume` | Écume |
| `fr-badge--blue-cumulus` | Cumulus |
| `fr-badge--purple-glycine` | Glycine |
| `fr-badge--pink-macaron` | Macaron |
| `fr-badge--pink-tuile` | Tuile |
| `fr-badge--yellow-tournesol` | Tournesol |
| `fr-badge--yellow-moutarde` | Moutarde |
| `fr-badge--orange-terre-battue` | Terre battue |
| `fr-badge--brown-cafe-creme` | Café crème |
| `fr-badge--brown-caramel` | Caramel |
| `fr-badge--brown-opera` | Opéra |
| `fr-badge--beige-gris-galet` | Gris galet |

## Badges sémantiques

```html
<p class="fr-badge fr-badge--info">Information</p>
<p class="fr-badge fr-badge--success">Succès</p>
<p class="fr-badge fr-badge--warning">Avertissement</p>
<p class="fr-badge fr-badge--error">Erreur</p>
<p class="fr-badge fr-badge--new">Nouveau</p>
```

## Badge sans icône

```html
<p class="fr-badge fr-badge--success fr-badge--no-icon">Publié</p>
<p class="fr-badge fr-badge--warning fr-badge--no-icon">En attente</p>
<p class="fr-badge fr-badge--error fr-badge--no-icon">Rejeté</p>
```

## Petite taille

```html
<p class="fr-badge fr-badge--sm">Petit badge</p>
<p class="fr-badge fr-badge--sm fr-badge--success">Petit succès</p>
<p class="fr-badge fr-badge--sm fr-badge--error fr-badge--no-icon">Petit erreur sans icône</p>
```

## Groupe de badges

```html
<ul class="fr-badges-group">
  <li><p class="fr-badge fr-badge--info">Information</p></li>
  <li><p class="fr-badge fr-badge--new">Nouveau</p></li>
  <li><p class="fr-badge fr-badge--sm fr-badge--warning">Urgent</p></li>
</ul>
```

## Couleurs d'accent

Pour la catégorisation (non sémantique) :

```html
<p class="fr-badge fr-badge--yellow-moutarde">Catégorie A</p>
<p class="fr-badge fr-badge--green-emeraude">Environnement</p>
<p class="fr-badge fr-badge--purple-glycine">Culture</p>
<p class="fr-badge fr-badge--blue-ecume">Numérique</p>
```

## Badge dans une carte

```html
<div class="fr-card__start">
  <ul class="fr-badges-group">
    <li><p class="fr-badge fr-badge--sm fr-badge--green-emeraude">Catégorie</p></li>
    <li><p class="fr-badge fr-badge--sm fr-badge--new">Nouveau</p></li>
  </ul>
</div>
```

## Accessibilité

- Utiliser `<p>` (pas `<span>` ni `<div>`) pour les badges standalone
- Les badges sont **non interactifs** : jamais de `<a>` ni `<button>`
- Pour les groupes, utiliser `<ul>/<li>` avec `fr-badges-group`
- La couleur ne doit pas être le seul indicateur : les icônes et le texte complètent l'information
- Aucun attribut ARIA spécifique nécessaire (HTML sémantique suffit)

## Badge vs Tag

- **Badge** = **statut** (publié, erreur, nouveau) → non interactif
- **Tag** = **catégorisation** (mots-clés, filtres) → peut être interactif
- Utiliser le même badge pour le même statut dans tout le site
