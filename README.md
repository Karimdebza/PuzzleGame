# PuzzleGame

<img width="505" height="613" alt="image" src="https://github.com/user-attachments/assets/12b0c3eb-d424-416d-a7bc-8d3120a6cde6" />

# 🧩 PuzzleGame

# PuzzleGame — 2D Cooperative Puzzle Game in TypeScript

> A 2-player cooperative puzzle game built with TypeScript OOP and Canvas API. Players must synchronize their actions to solve pressure-plate puzzles and unlock doors.

**[Play →](https://karimdebza.github.io/PuzzleGame)**

---

## Overview

PuzzleGame is a browser-based 2D game focused on object-oriented design. Every game element — players, doors, pressure plates, levels — is modeled as a class with clear responsibilities. Levels are defined in JSON, making the game data-driven and easy to extend.

---

## Architecture

The codebase is structured around a strict class hierarchy:

```
Game
├── InputHandler      — keyboard event management
├── Renderer          — Canvas 2D draw loop
├── LevelLoader       — parses JSON level definitions
└── Level
    ├── Player (x2)   — movement, collision, state
    ├── PressurePlate — activation logic
    ├── Door          — opens when all plates activated
    └── TileMap       — grid-based collision layer
```

**Key design decisions:**
- **No game framework** — pure TypeScript + Canvas API, no Phaser or similar
- **Data-driven levels** — each level is a JSON file with tile layout, entity positions, and win conditions
- **Event-driven input** — `InputHandler` decouples keyboard events from player logic
- **Cooperative mechanic** — both players must stand on all pressure plates simultaneously to open doors

---

## Class overview

```typescript
class Player {
  constructor(x: number, y: number, controls: Controls) {}
  update(input: InputState, tiles: TileMap): void {}
  draw(ctx: CanvasRenderingContext2D): void {}
}

class PressurePlate {
  isActivated(players: Player[]): boolean {}
}

class Door {
  update(plates: PressurePlate[]): void {} // opens when all plates active
}

class Game {
  private loop(timestamp: number): void {} // requestAnimationFrame loop
}
```

---

## Tech Stack

| | Technology |
|---|---|
| Language | TypeScript |
| Rendering | Canvas 2D API |
| Build | Vite |
| Deployment | GitHub Pages |

---

## Local setup

```bash
git clone https://github.com/Karimdebza/PuzzleGame.git
cd PuzzleGame/PuzzleGame
npm install
npm run dev
```

---

## Controls

| Player 1 | Player 2 |
|---|---|
| Arrow keys | ZQSD |
---

Réalisé par [Karim Debza](https://github.com/Karimdebza) — 2025
