import { Display } from "./Display.js";
import { GoldPressurePlate } from "./GoldPressurePlate.js";
import { Player } from "./Player.js";
function get_rand(max) {
    return Math.floor(Math.random() * max);
}
export class Game {
    constructor(width, height, scale) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.level = 1;
        this.player1 = new Player(get_rand(width), get_rand(height));
        this.player2 = new Player(get_rand(width), get_rand(height));
        this.pressurePlate = new GoldPressurePlate(get_rand(width), get_rand(height));
    }
    test() {
        this.display.draw(this);
        this.setupDisplacements();
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
    isValidPosition(x, y, otherPlayer) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }
        if (this.isGoldPressurePlate(x, y)) {
            return true;
        }
        return (x !== otherPlayer.getX() || y !== otherPlayer.getY());
    }
    checkPlayersOnGoldPlate() {
        return this.pressurePlate.getX() === this.player1.getX() &&
            this.pressurePlate.getX() === this.player2.getX() &&
            this.pressurePlate.getY() === this.player1.getY() &&
            this.pressurePlate.getY() === this.player2.getY();
    }
    checkAndResetIfNeeded() {
        if (this.checkPlayersOnGoldPlate()) {
            this.resetGame();
        }
    }
    resetGame() {
        this.level += 1;
        this.display.refreshScore();
        this.display.clear();
        this.display.draw(this);
        this.player1.setX(get_rand(this.width));
        this.player1.setY(get_rand(this.height));
        this.player2.setX(get_rand(this.width));
        this.player2.setY(get_rand(this.height));
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
        return this.pressurePlate.getX() === x && this.pressurePlate.getY() === y;
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
}
