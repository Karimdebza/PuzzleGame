import { Direction } from "../Enums/Direction.js";
import { Display } from "./Display.js";
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
    }
    test() {
        this.display.draw(this);
        this.displacementP1();
        this.displacementP2();
    }
    getPlayer1() {
        return this.player1;
    }
    getPlayer2() {
        return this.player2;
    }
    displacementP1() {
        document.addEventListener("keydown", (event) => {
            let newX = this.player1.getX();
            let newY = this.player1.getY();
            let dir = null;
            switch (event.key) {
                case "ArrowUp":
                    newY -= 1;
                    dir = Direction.UP;
                    break;
                case "ArrowDown":
                    newY += 1;
                    dir = Direction.DOWN;
                    break;
                case "ArrowLeft":
                    newX -= 1;
                    dir = Direction.LEFT;
                    break;
                case "ArrowRight":
                    newX += 1;
                    dir = Direction.RIGHT;
                    break;
                default:
                    return;
            }
            this.player1.setPosition(newX, newY);
            this.display.clear();
            this.display.draw(this);
        });
    }
    displacementP2() {
        document.addEventListener("keydown", (event) => {
            let newX = this.player2.getX();
            let newY = this.player2.getY();
            let dir = null;
            switch (event.key) {
                case "ArrowUp":
                    newY -= 1;
                    dir = Direction.UP;
                    break;
                case "ArrowDown":
                    newY += 1;
                    dir = Direction.DOWN;
                    break;
                case "ArrowLeft":
                    newX -= 1;
                    dir = Direction.LEFT;
                    break;
                case "ArrowRight":
                    newX += 1;
                    dir = Direction.RIGHT;
                    break;
                default:
                    return;
            }
            this.player2.setPosition(newX, newY);
            this.display.clear();
            this.display.draw(this);
        });
    }
}
