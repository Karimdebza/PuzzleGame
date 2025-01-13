import { Display } from "./Display.js";
import { GoldPressurePlate } from "./GoldPressurePlate.js";
import { Player } from "./Player.js";
import { Wall } from "./Wall.js";
function get_rand(max) {
    return Math.floor(Math.random() * max);
}
export class Game {
    constructor(width, height, scale) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.level = 1;
        this.player1 = new Player({ x: 0, y: 0 });
        this.player2 = new Player({ x: 0, y: 0 });
        this.pressurePlate = [];
        this.walls = [];
    }
    test() {
        this.startGame().then(() => {
            this.display.draw(this);
            this.setupDisplacements();
        });
    }
    getPlayer1() {
        return this.player1;
    }
    getPlayer2() {
        return this.player2;
    }
    getGoldPressurePlate() {
        return this.pressurePlate;
    }
    getWall() {
        return this.walls;
    }
    isValidPosition(x, y, otherPlayer) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }
        if (this.isCollidedWithWalls(x, y)) {
            return false;
        }
        if (this.isGoldPressurePlate(x, y)) {
            return true;
        }
        return (x !== otherPlayer.getX() || y !== otherPlayer.getY());
    }
    checkPlayersOnGoldPlate() {
        const plate = this.pressurePlate.find(plate => plate.getX() === this.player1.getX() &&
            plate.getX() === this.player2.getX() &&
            plate.getY() === this.player1.getY() &&
            plate.getY() === this.player2.getY());
        return plate !== undefined;
    }
    checkAndResetIfNeeded() {
        if (this.checkPlayersOnGoldPlate()) {
            this.resetGame();
        }
    }
    resetGame() {
        this.level += 1;
        if (this.levels[`level${this.level}`]) {
            this.loadLevel(this.level);
        }
        else {
            this.level = 1;
            this.loadLevel(this.level);
        }
        this.display.refreshScore();
    }
    setupDisplacements() {
        document.addEventListener("keydown", (event) => {
            let key = event.key.toLowerCase();
            if (event.key == "ArrowUp" || event.key === "ArrowDown" ||
                event.key === "ArrowLeft" || event.key === "ArrowRight") {
                this.movePlayer1(event.key);
            }
            else if (key === "z" || key === "s" || key === "q" || key === "d") {
                this.movePlayer2(key);
            }
            this.display.clear();
            this.display.draw(this);
        });
    }
    movePlayer1(key) {
        let newX = this.player1.getX();
        let newY = this.player1.getY();
        switch (key) {
            case "ArrowUp":
                newY -= 1;
                break;
            case "ArrowDown":
                newY += 1;
                break;
            case "ArrowLeft":
                newX -= 1;
                break;
            case "ArrowRight":
                newX += 1;
                break;
        }
        if (this.isValidPosition(newX, newY, this.player2)) {
            this.player1.setPosition(newX, newY);
            this.checkAndResetIfNeeded();
        }
    }
    isGoldPressurePlate(x, y) {
        return this.pressurePlate.some(plate => plate.getX() === x && plate.getY() === y);
    }
    isCollidedWithWalls(x, y) {
        return this.walls.some(wall => wall.getX() === x && wall.getY() === y);
    }
    movePlayer2(key) {
        let newX = this.player2.getX();
        let newY = this.player2.getY();
        switch (key) {
            case "z":
                newY -= 1;
                break;
            case "s":
                newY += 1;
                break;
            case "q":
                newX -= 1;
                break;
            case "d":
                newX += 1;
                break;
            default:
                break;
        }
        if (this.isValidPosition(newX, newY, this.player1)) {
            this.player2.setPosition(newX, newY);
            this.checkAndResetIfNeeded();
        }
    }
    async loadLevels() {
        try {
            const response = await fetch('./data.json');
            this.levels = await response.json();
        }
        catch (error) {
            console.error("Erreur lors du chargement des niveaux:", error);
        }
    }
    loadLevel(levelNumber) {
        const currentLevel = this.levels[`level${levelNumber}`];
        this.walls = currentLevel.walls.map(wallData => new Wall(wallData));
        this.pressurePlate = currentLevel.goldPlates.map(plateData => new GoldPressurePlate(plateData));
        this.display.refreshScore();
        this.player1 = new Player(currentLevel.players.player1);
        this.player2 = new Player(currentLevel.players.player2);
        this.display.clear();
        this.display.draw(this);
    }
    async startGame() {
        await this.loadLevels();
        this.loadLevel(1);
    }
}
