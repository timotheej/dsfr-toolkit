# Documentation DSFR - Système de Design de l'État

**Version:** 1.14.3
**Site officiel:** [systeme-de-design.gouv.fr](https://www.systeme-de-design.gouv.fr/)
**GitHub:** [GouvernementFR/dsfr](https://github.com/GouvernementFR/dsfr)

## Structure de la documentation

### Fondations
- [Typographie](fondations/typographie.md)
- [Couleurs](fondations/couleurs.md)
- [Grille et points de rupture](fondations/grille.md)
- [Espacement](fondations/espacement.md)
- [Icônes](fondations/icones.md)
- [Pictogrammes](fondations/pictogrammes.md)
- [Ombres et élévation](fondations/elevation.md)
- [Médias](fondations/medias.md)

### Composants
- [Accordéon](composants/accordeon.md)
- [Alerte](composants/alerte.md)
- [Badge](composants/badge.md)
- [Bandeau d'information (Notice)](composants/notice.md)
- [Barre de recherche](composants/recherche.md)
- [Bloc-marque (Logo)](composants/logo.md)
- [Bouton](composants/bouton.md)
- [Bouton FranceConnect](composants/franceconnect.md)
- [Bouton radio](composants/radio.md)
- [Carte](composants/carte.md)
- [Case à cocher](composants/checkbox.md)
- [Champ de saisie](composants/input.md)
- [Citation](composants/citation.md)
- [Contenu médias](composants/contenu-medias.md)
- [Contrôle segmenté](composants/segmented.md)
- [Curseur (Range)](composants/curseur.md)
- [En-tête (Header)](composants/header.md)
- [Fil d'Ariane](composants/breadcrumb.md)
- [Formulaire](composants/formulaire.md)
- [Gestionnaire de consentement](composants/consentement.md)
- [Indicateur d'étapes](composants/stepper.md)
- [Infobulle (Tooltip)](composants/tooltip.md)
- [Interrupteur (Toggle)](composants/toggle.md)
- [Lettre d'information (Follow)](composants/follow.md)
- [Lien](composants/lien.md)
- [Liens d'évitement (Skiplinks)](composants/skiplinks.md)
- [Liste déroulante (Select)](composants/select.md)
- [Menu latéral (Sidemenu)](composants/sidemenu.md)
- [Mise en avant (Callout)](composants/callout.md)
- [Mise en exergue (Highlight)](composants/highlight.md)
- [Modale](composants/modale.md)
- [Mot de passe](composants/password.md)
- [Navigation principale](composants/navigation.md)
- [Onglet (Tab)](composants/onglet.md)
- [Pagination](composants/pagination.md)
- [Paramètres d'affichage](composants/display.md)
- [Partage (Share)](composants/partage.md)
- [Pied de page (Footer)](composants/footer.md)
- [Sélecteur de langues](composants/translate.md)
- [Sommaire](composants/sommaire.md)
- [Tableau (Table)](composants/tableau.md)
- [Tag](composants/tag.md)
- [Téléchargement (Upload)](composants/upload.md)
- [Transcription](composants/transcription.md)
- [Tuile](composants/tuile.md)

### Utilitaires
- [Classes d'affichage](utilitaires/affichage.md)
- [Classes d'espacement](utilitaires/espacement.md)

### Modèles de pages
- [Pages d'erreur](modeles/erreurs.md)
- [Page de connexion](modeles/connexion.md)

## Installation

```bash
npm install @gouvfr/dsfr@1.14.3
```

## Boilerplate HTML

```html
<!doctype html>
<html lang="fr" data-fr-scheme="system">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#000091">
  <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png">
  <link rel="icon" href="favicon/favicon.svg" type="image/svg+xml">
  <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon">
  <link rel="manifest" href="favicon/manifest.webmanifest" crossorigin="use-credentials">
  <link rel="stylesheet" href="node_modules/@gouvfr/dsfr/dist/dsfr.min.css">
  <link rel="stylesheet" href="node_modules/@gouvfr/dsfr/dist/utility/utility.min.css">
  <title>Mon site DSFR</title>
</head>
<body>
  <!-- Contenu ici -->
  <script type="module" src="node_modules/@gouvfr/dsfr/dist/dsfr.module.min.js"></script>
  <script nomodule src="node_modules/@gouvfr/dsfr/dist/dsfr.nomodule.min.js"></script>
</body>
</html>
```

## Règles fondamentales

1. **Utiliser exclusivement les composants DSFR** - Aucun composant custom ne doit remplacer un composant existant du DSFR
2. **Typographies autorisées** : Marianne (sans-serif) et Spectral (serif) uniquement
3. **Méthodologie BEM** : Toutes les classes suivent le pattern `fr-block__element--modifier`
4. **Accessibilité RGAA** : Tous les composants respectent le RGAA
5. **Dark mode** : Supporté nativement via `data-fr-scheme` sur `<html>`
