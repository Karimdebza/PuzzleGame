# PuzzleGame

<img width="505" height="613" alt="image" src="https://github.com/user-attachments/assets/12b0c3eb-d424-416d-a7bc-8d3120a6cde6" />

# 🧩 PuzzleGame

> Jeu de puzzle 2D coopératif — projet de cours réalisé en 2025


## À propos

Projet réalisé seul dans le cadre d'un cours de programmation orientée objet en TypeScript. L'objectif était de construire un jeu de puzzle 2D jouable à deux sur le même clavier, avec des mécaniques progressives introduites niveau par niveau.

**Chantier en cours** — le projet évolue encore. Les niveaux 1 à 4 sont jouables. Le multijoueur en ligne (niveau 5) est en cours de conception.

## Gameplay

Deux joueurs doivent collaborer pour atteindre la **plaque dorée** simultanément et passer au niveau suivant.

| Joueur | Contrôles |
|--------|-----------|
| Joueur 1 | ← → ↑ ↓ (flèches) |
| Joueur 2 | Z Q S D |

### Mécaniques

- **Murs** — bloquent le passage
- **Plaques de pression** — s'activent quand un joueur se tient dessus
- **Portes** — liées aux plaques, s'ouvrent et se referment en temps réel
- **Plaque dorée** — objectif final, les deux joueurs doivent y être simultanément

## Stack technique

- **TypeScript** — logique de jeu orientée objet
- **Canvas API** — rendu 2D
- **ES Modules** — architecture modulaire
- **JSON** — définition des niveaux (murs, portes, plaques, positions)

## Lancer le projet

```bash
# Cloner le repo
git clone https://github.com/Karimdebza/PuzzleGame.git
cd PuzzleGame

# Compiler le TypeScript
npm install -g typescript
tsc

# Ouvrir index.html avec Live Server (VS Code)
# ou servir localement :
npx serve .
```

## Architecture

```
PuzzleGame/
├── Class/
│   ├── Game.ts            # Logique principale, gestion des niveaux
│   ├── Player.ts          # Déplacement et position des joueurs
│   ├── Wall.ts            # Obstacles
│   ├── Door.ts            # Portes liées aux plaques
│   ├── PressurePlate.ts   # Plaques de pression
│   ├── GoldPressurePlate.ts # Plaque de fin de niveau
│   └── Display.ts         # Rendu Canvas
├── Enums/
│   ├── Direction.ts
│   └── Shape.ts
├── Levels/                # Niveaux définis en SVG
│   ├── lv0.svg → lv5.svg
├── data.json              # Données des niveaux
├── PuzzleGame.ts          # Point d'entrée
└── index.html
```

## Roadmap

- [x] Déplacement 2 joueurs
- [x] Gestion des murs
- [x] Plaques de pression + portes
- [x] 6 niveaux jouables
- [ ] Écran d'accueil et menu
- [ ] Animations de transition
- [ ] Sons (Web Audio API)
- [ ] Multijoueur en ligne (WebSocket)
- [ ] Mobile (touch controls)

---

Réalisé par [Karim Debza](https://github.com/Karimdebza) — 2025
