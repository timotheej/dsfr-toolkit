# Ajout de fichier (Upload)

Champ d'upload de fichier.

## Classes CSS

| Classe | Rôle |
|--------|------|
| `fr-upload-group` | Wrapper principal |
| `fr-upload` | Input fichier |
| `fr-label` | Label |
| `fr-hint-text` | Instructions |
| `fr-upload-group--error` | État erreur |
| `fr-upload-group--disabled` | État désactivé |

## Structure HTML

```html
<div class="fr-upload-group">
  <label class="fr-label" for="file-upload">
    Ajouter un fichier
    <span class="fr-hint-text">Taille maximale : 5 Mo. Formats supportés : jpg, png, pdf</span>
  </label>
  <input class="fr-upload" type="file" id="file-upload" name="file-upload"
         aria-describedby="file-upload-messages">
  <div class="fr-messages-group" id="file-upload-messages" aria-live="polite"></div>
</div>
```

## Upload multiple

```html
<div class="fr-upload-group">
  <label class="fr-label" for="files-upload">
    Ajouter des fichiers
    <span class="fr-hint-text">Formats : jpg, png, pdf. 5 Mo max par fichier.</span>
  </label>
  <input class="fr-upload" type="file" id="files-upload" multiple
         accept=".jpg,.png,.pdf">
</div>
```
