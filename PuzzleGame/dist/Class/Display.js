import { Drawer } from "../Drawer.js";
export class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer(width, height, scale);
        const canvas = document.createElement("canvas");
        this.ctx = canvas.getContext("2d");
        this.scale = scale;
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
    }
    refreshScore() {
        let score = document.getElementById("score");
        if (score != null)
            score.innerHTML = "0";
    }
    draw(game) {
        const player1 = game.getPlayer1();
        this.drawer.drawCircle(player1.getX(), player1.getY(), player1.getColor());
        const player2 = game.getPlayer2();
        this.drawer.drawCircle(player2.getX(), player2.getY(), player2.getColor());
    }
    clear() {
        this.drawer.clear();
    }
}
