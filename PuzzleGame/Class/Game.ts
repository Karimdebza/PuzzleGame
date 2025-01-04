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
        this.setupDisplacements();
       

    }

    public getPlayer1() {
        return this.player1;
    }

    
    public getPlayer2() {
        return this.player2;
    }

    private isValidPosition(x:number, y:number){
        return x>= 0 && x < this.width &&  y >= 0 && y < this.height;
    }


    public setupDisplacements():void{
        document.addEventListener("keydown", (event) => {
            let key = event.key.toLowerCase();

            if(event.key == "ArrowUp" ||  event.key === "ArrowDown" ||
             event.key === "ArrowLeft" || event.key === "ArrowRight"){
                this.movePlayer1(event.key)
            }else if(key === "z" || key === "s" || key === "q" || key === "d"){
                this.movePlayer2(key);
            }
            
        this.display.clear();
        this.display.draw(this);
        });
    }
    private movePlayer1(key:string): void {
       
            let newX = this.player1.getX();
            let newY = this.player1.getY();
           
    
            switch (key) {
                case "ArrowUp": newY -= 1; break;
                case "ArrowDown": newY += 1; break;
                case "ArrowLeft": newX -= 1; break;
                case "ArrowRight": newX += 1; break;
            }
            if(this.isValidPosition(newX,newY)){
            this.player1.setPosition(newX, newY);
            }



}

private movePlayer2(key:string){
    let newX = this.player2.getX();
    let newY = this.player2.getY();

    switch (key) {
        case "z":
            newY -=1;
            break;
    
        case "s":
            newY +=1;
            break;
        case "q":
            newX -=1;
            break;
        case "d":
            newX +=1;
            break;
        default:
            break;
    }
    if(this.isValidPosition(newX,newY)){
        this.player2.setPosition(newX, newY);
        }
}

}