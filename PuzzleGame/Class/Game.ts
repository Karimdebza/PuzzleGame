import { Display } from "./Display.js";


import { Player } from "./Player.js";
function get_rand(max: number): number {
    return Math.floor(Math.random() * max);
}


export class Game {

    private width: number;
    private height: number;
    private display: Display;
    protected player1: Player;
    protected player2: Player;
    protected level: number;

    constructor(width: number, height: number, scale: number) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.level = 1;
        this.player1 = new Player(get_rand(width ), get_rand(height ));
        this.player2 = new Player(get_rand(width ), get_rand(height ));
    }

    public test(){
        this.display.draw(this);
    }

    public getPlayer1() {
        return this.player1;
    }

    
    public getPlayer2() {
        return this.player2;
    }


}