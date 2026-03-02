# Icônes

## Présentation

Les icônes DSFR sont basées sur la bibliothèque **Remix Icons** avec des ajouts personnalisés.

- **Préfixe** : `fr-icon-` (ancien préfixe `fr-fi-` déprécié)
- **CSS** : `dist/utility/utility.min.css`

## Tailles

| Taille | Classe | Dimensions |
|--------|--------|-----------|
| SM | `fr-icon--sm` | 16x16px (1rem) |
| MD | (défaut) | 24x24px (1.5rem) |
| LG | `fr-icon--lg` | 32x32px (2rem) |

## Utilisation

### Icône décorative seule

```html
<span class="fr-icon-error-fill" aria-hidden="true"></span>
```

### Bouton avec icône à gauche

```html
<button class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left">
  Confirmer
</button>
```

### Bouton avec icône à droite

```html
<button class="fr-btn fr-icon-arrow-right-line fr-btn--icon-right">
  Suivant
</button>
```

### Bouton icône seule (accessible)

```html
<button class="fr-btn fr-icon-close-line" title="Fermer">
  <span class="fr-sr-only">Fermer</span>
</button>
```

### Lien avec icône

```html
<a class="fr-link fr-icon-arrow-right-line fr-link--icon-right" href="#">
  En savoir plus
</a>
```

## Catégories d'icônes

### Flèches (Arrows)
`arrow-left-s-line`, `arrow-right-s-line`, `arrow-up-line`, `arrow-down-line`, `arrow-go-back-line`, `arrow-go-forward-line`, `arrow-left-circle-line`, `arrow-right-circle-line`, `arrow-up-circle-line`, `arrow-down-circle-line`, `expand-left-right-line`, `contract-left-right-line`, `corner-up-right-line`, `corner-down-left-line`, `skip-up-line`, `skip-down-line`

### Bâtiments (Building)
`ancient-gate-line`, `bank-line`, `building-line`, `community-line`, `government-line`, `home-4-line`, `hospital-line`, `hotel-line`, `school-line`, `store-line`, `tent-line`

### Business
`archive-line`, `attachment-line`, `award-line`, `bar-chart-box-line`, `bookmark-line`, `briefcase-line`, `calculator-line`, `calendar-line`, `calendar-event-line`, `cloud-line`, `copyright-line`, `customer-service-line`, `flag-line`, `global-line`, `inbox-line`, `line-chart-line`, `links-line`, `mail-line`, `mail-open-line`, `medal-line`, `megaphone-line`, `pass-valid-line`, `pie-chart-line`, `presentation-line`, `printer-line`, `profil-line`, `send-plane-line`, `service-line`, `shake-hands-line`, `window-line`

### Communication
`chat-2-line`, `chat-3-line`, `chat-check-line`, `chat-delete-line`, `discuss-line`, `feedback-line`, `message-2-line`, `question-answer-line`, `questionnaire-line`, `speak-line`, `video-chat-line`

### Design
`ball-pen-line`, `brush-line`, `contrast-line`, `crop-line`, `drag-move-2-line`, `drop-line`, `edit-line`, `edit-box-line`, `eraser-line`, `grid-line`, `layout-grid-line`, `magic-line`, `paint-brush-line`, `palette-line`, `pen-nib-line`, `pencil-line`, `pencil-ruler-line`, `ruler-line`, `scissors-line`, `sip-line`, `table-line`

### Développement (Development)
`bug-line`, `code-box-line`, `code-s-slash-line`, `cursor-line`, `git-branch-line`, `git-commit-line`, `git-merge-line`, `git-pull-request-line`, `terminal-box-line`, `terminal-line`, `braces-line`, `brackets-line`, `command-line`

### Appareil (Device)
`computer-line`, `cpu-line`, `database-line`, `fingerprint-line`, `hard-drive-2-line`, `keyboard-line`, `phone-line`, `qr-code-line`, `router-line`, `save-line`, `server-line`, `smartphone-line`, `tablet-line`, `tv-line`, `usb-line`, `wifi-line`

### Document
`article-line`, `book-2-line`, `booklet-line`, `clipboard-line`, `draft-line`, `file-line`, `file-add-line`, `file-download-line`, `file-pdf-line`, `file-text-line`, `folder-2-line`, `newspaper-line`, `survey-line`, `todo-line`

### Finance
`bank-card-line`, `gift-line`, `money-euro-box-line`, `money-euro-circle-line`, `secure-payment-line`, `shopping-bag-line`, `shopping-cart-2-line`, `trophy-line`

### Santé (Health)
`capsule-line`, `first-aid-kit-line`, `hand-sanitizer-line`, `health-book-line`, `heart-line`, `heart-pulse-line`, `lungs-line`, `medicine-bottle-line`, `mental-health-line`, `microscope-line`, `stethoscope-line`, `surgical-mask-line`, `syringe-line`, `test-tube-line`, `thermometer-line`, `virus-line`

### Logos
`facebook-circle-fill`, `github-fill`, `google-fill`, `instagram-fill`, `linkedin-box-fill`, `mastodon-fill`, `snapchat-fill`, `telegram-fill`, `tiktok-fill`, `twitch-fill`, `twitter-x-fill`, `vimeo-fill`, `whatsapp-fill`, `youtube-fill`

### Carte (Map)
`anchor-line`, `bike-line`, `bus-line`, `car-line`, `compass-3-line`, `earth-line`, `france-line`, `gas-station-line`, `map-pin-2-line`, `map-pin-user-line`, `passport-line`, `restaurant-line`, `road-map-line`, `sailboat-line`, `ship-2-line`, `suitcase-2-line`, `taxi-line`, `train-line`

### Média
`camera-line`, `equalizer-line`, `film-line`, `gallery-line`, `headphone-line`, `image-line`, `live-line`, `mic-line`, `music-2-line`, `notification-3-line`, `pause-circle-line`, `play-circle-line`, `stop-circle-line`, `volume-down-line`, `volume-mute-line`, `volume-up-line`

### Système
`add-line`, `add-circle-line`, `alarm-warning-line`, `alert-line`, `check-line`, `checkbox-line`, `checkbox-circle-line`, `close-line`, `close-circle-line`, `delete-line`, `download-line`, `error-line`, `error-warning-line`, `external-link-line`, `eye-line`, `eye-off-line`, `filter-line`, `info-line`, `information-line`, `lock-line`, `lock-unlock-line`, `logout-box-r-line`, `menu-line`, `more-line`, `notification-badge-line`, `question-line`, `refresh-line`, `search-line`, `settings-5-line`, `share-line`, `shield-line`, `star-line`, `star-s-line`, `subtract-line`, `success-line`, `theme-fill`, `thumb-down-line`, `thumb-up-line`, `time-line`, `timer-line`, `upload-line`, `warning-line`, `zoom-in-line`, `zoom-out-line`

### Utilisateur (User)
`account-circle-line`, `account-line`, `admin-line`, `group-line`, `parent-line`, `team-line`, `user-line`, `user-add-line`, `user-heart-line`, `user-search-line`, `user-setting-line`, `user-star-line`

### Météo (Weather)
`cloudy-2-line`, `fire-line`, `flood-line`, `heavy-showers-line`, `moon-line`, `snowy-line`, `temp-cold-line`, `tornado-line`, `windy-line`

### Accessibilité / Autre
`accessibility-line`, `ear-off-line`, `leaf-line`, `lightbulb-line`, `plant-line`, `recycle-line`, `scales-3-line`, `seedling-line`, `sign-language-line`, `umbrella-line`, `wheelchair-line`

> **Note** : Chaque icône existe en variante `-fill` et `-line`. Préfixez toujours avec `fr-icon-`.
> Exemple : `fr-icon-heart-fill`, `fr-icon-heart-line`
