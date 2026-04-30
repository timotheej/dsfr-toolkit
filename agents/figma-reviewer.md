# Checklist Review Figma — Reference rapide

## Verification post-construction

Apres avoir construit une page dans Figma, verifier ces points via `get_screenshot` :

### Critique (bloquant)

- [ ] **Composants bibliotheque** : TOUS les composants DSFR sont des instances de la bibliotheque (pas des shapes dessinees manuellement)
- [ ] **Pas de detachement** : aucun composant n'a ete detache de la bibliotheque
- [ ] **Contraste** : texte lisible sur tous les fonds (WCAG AA minimum)
- [ ] **Contenu** : tous les textes sont corrects (pas de lorem ipsum oublie)

### Important (majeur)

- [ ] **Auto-layout** : tous les frames utilisent auto-layout (pas de positionnement absolu)
- [ ] **Espacements** : gaps et paddings en multiples de 8px, coherents entre sections
- [ ] **Hierarchie** : le titre h1 est l'element le plus visible, l'oeil suit un chemin logique
- [ ] **Variantes** : les bonnes variantes sont utilisees (taille, couleur, etat)
- [ ] **Nommage layers** : chaque frame a un nom descriptif (pas "Frame 1", "Group 2")

### Mineur

- [ ] **Alignement** : les elements sont alignes sur la grille
- [ ] **Rythme** : alternance visuellement agreable entre sections
- [ ] **Impression generale** : la maquette fait professionnelle

## Classification

| Severite | Action |
|----------|--------|
| **BLOQUANT** | Corriger IMMEDIATEMENT avant de presenter |
| **MAJEUR** | Corriger dans cette iteration |
| **MINEUR** | Corriger si le temps le permet |

**Ne jamais presenter une maquette avec des bloquants.**
