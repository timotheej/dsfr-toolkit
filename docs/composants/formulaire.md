# Formulaire

Structuration des champs de formulaire avec disposition et validation cohérentes.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-fieldset` | Wrapper fieldset |
| `fr-fieldset__legend` | Légende |
| `fr-fieldset__element` | Conteneur de champ |
| `fr-fieldset__element--inline` | Disposition horizontale |
| `fr-fieldset__element--postal` | Largeur code postal (240px) |
| `fr-fieldset__element--number` | Largeur numéro (80px) |
| `fr-fieldset__element--year` | Largeur année (112px) |
| `fr-fieldset--error` | État erreur |
| `fr-fieldset--success` | État succès |
| `fr-messages-group` | Conteneur messages |
| `fr-message--error` | Message erreur |
| `fr-message--warning` | Message avertissement |
| `fr-message--info` | Message info |
| `fr-message--valid` | Message succès |

## Structure HTML

```html
<form action="#" method="post">
  <fieldset class="fr-fieldset" aria-labelledby="legend-1">
    <legend class="fr-fieldset__legend" id="legend-1">
      Informations personnelles
    </legend>
    <div class="fr-fieldset__element">
      <div class="fr-input-group">
        <label class="fr-label" for="nom">Nom</label>
        <input class="fr-input" type="text" id="nom" name="nom">
      </div>
    </div>
    <div class="fr-fieldset__element">
      <div class="fr-input-group">
        <label class="fr-label" for="prenom">Prénom</label>
        <input class="fr-input" type="text" id="prenom" name="prenom">
      </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline">
      <div class="fr-input-group">
        <label class="fr-label" for="cp">Code postal</label>
        <input class="fr-input" type="text" id="cp" name="cp"
               inputmode="numeric" maxlength="5">
      </div>
    </div>
  </fieldset>

  <ul class="fr-btns-group fr-btns-group--inline-lg">
    <li>
      <button class="fr-btn" type="submit">Envoyer</button>
    </li>
    <li>
      <button class="fr-btn fr-btn--secondary" type="reset">Annuler</button>
    </li>
  </ul>
</form>
```

## Règles de disposition

- Disposition en une seule colonne recommandée
- Espacement : 16px entre champs, 24px entre groupes
- Labels au-dessus des inputs, alignés à gauche
- Champs obligatoires par défaut ; optionnels marqués "(optionnel)"
- Mention au-dessus du formulaire : "Sauf mention contraire '(optionnel)' dans le label, tous les champs sont obligatoires"
- Boutons alignés à gauche (standard) ou à droite (multi-étapes)
