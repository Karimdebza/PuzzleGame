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
    }
    getPlayer1() {
        return this.player1;
    }
    getPlayer2() {
        return this.player2;
    }
}
