# Bouton FranceConnect

Bouton d'authentification officiel FranceConnect.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-connect-group` | Conteneur |
| `fr-connect` | Bouton principal |
| `fr-connect__login` | Texte "S'identifier avec" |
| `fr-connect__brand` | Texte "FranceConnect" |
| `fr-connect--plus` | Variante FranceConnect+ |

## Structure HTML

```html
<div class="fr-connect-group">
  <button class="fr-connect" type="button">
    <span class="fr-connect__login">S'identifier avec</span>
    <span class="fr-connect__brand">FranceConnect</span>
  </button>
  <p>
    <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener"
       title="Qu'est-ce que FranceConnect ? - nouvelle fenêtre">
      Qu'est-ce que FranceConnect ?
    </a>
  </p>
</div>
```

## FranceConnect+

```html
<div class="fr-connect-group">
  <button class="fr-connect fr-connect--plus" type="button">
    <span class="fr-connect__login">S'identifier avec</span>
    <span class="fr-connect__brand">FranceConnect</span>
  </button>
</div>
```
