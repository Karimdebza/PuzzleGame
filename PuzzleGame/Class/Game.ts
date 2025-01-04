import { Direction } from "../Enums/Direction.js";
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
        this.displacementP1();
        this.displacementP2();

    }

    public getPlayer1() {
        return this.player1;
    }

    
    public getPlayer2() {
        return this.player2;
    }

    public displacementP1(): void {
        document.addEventListener("keydown", (event) => {
            let newX = this.player1.getX();
            let newY = this.player1.getY();
            let dir: Direction | null = null;
    
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

public displacementP2(): void {
    document.addEventListener("keydown", (event) => {
        let newX = this.player2.getX();
        let newY = this.player2.getY();
        let dir: Direction | null = null;

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