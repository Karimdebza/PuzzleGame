import { Direction } from "../Enums/Direction.js";
import { Display } from "./Display.js";
import { Door } from "./Door.js";
import { GoldPressurePlate } from "./GoldPressurePlate.js";
import { PressurePlate } from "./PressurePlate.js";


import { Player } from "./Player.js";
import { Wall } from "./Wall.js";
function get_rand(max: number): number {
    return Math.floor(Math.random() * max);
}


export class Game {

    private width: number;
    private height: number;
    private display: Display;
    protected player1: Player;
    protected walls: Wall[];
    protected door: Door[];
    protected pressurePlate: PressurePlate[];
    protected levels:any;
    protected player2: Player;
    protected pressurePlateGold : GoldPressurePlate[];
    protected level: number;

    constructor(width: number, height: number, scale: number) {
        this.width = width;
        this.height = height;
        this.level = 1;
        this.display = new Display(width, height, scale);
       
        this.player1 = new Player({x: 0, y: 0});
        this.player2 = new Player({x: 0, y: 0});
        this.pressurePlateGold = [];
        this.walls = [];
        this.pressurePlate = [];
        this.door = [] ;
        this.display.refreshScore(this.level);
    }

    public test(){
        this.startGame().then(() => {
            this.display.draw(this);
            this.setupDisplacements();
        });
       

    }

    public getPlayer1():Player {
        return this.player1;
    }

    
    public getPlayer2():Player {
        return this.player2;
    }
    public getGoldPressurePlate(): GoldPressurePlate[]{
        return this.pressurePlateGold;
    }
    public getWall():Wall[]{
        return this.walls;
    }
    public getPressurePlate():PressurePlate[]{
       return this.pressurePlate;
    }
    public getDoor():Door[]{
        return this.door;
    }

    private isValidPosition(x:number, y:number,otherPlayer:Player){
      
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
        return false;
    }
    
   
    if (this.isCollidedWithWalls(x, y)) {
        return false;
    }

   
    if (this.isCollidedWithClosedDoors(x, y)) {
        return false;
    }


    if (this.isGoldPressurePlate(x, y)) {
        return true;
    }
    if (this.isPressurePlate(x,y)) {
        return true;
    }
        

        return (x !== otherPlayer.getX() || y !== otherPlayer.getY());
    }

    private isCollidedWithClosedDoors(x: number, y: number): boolean {
        return this.door.some(door => 
            !door.isOpened() && 
            door.getX() === x && 
            door.getY() === y
        );
    }
    private isPressurePlate(x: number, y: number): boolean {
        return this.pressurePlate.some(plate => 
            plate.getX() === x && 
            plate.getY() === y
        );
     }
    private checkPlayersOnGoldPlate():boolean {
        const plate = this.pressurePlateGold.find(plate => 
            plate.getX() === this.player1.getX() && 
            plate.getX() === this.player2.getX() && 
            plate.getY() === this.player1.getY() && 
            plate.getY() === this.player2.getY()
        );
        
        return plate !== undefined;
    }

    private checkAndResetIfNeeded():void{
        if(this.checkPlayersOnGoldPlate()){
            this.resetGame();
        }
    }

    private resetGame():void{
        this.level += 1;  // Incrémente le niveau
    this.display.refreshScore(this.level);  // Met à jour l'affichage du niveau
    this.loadLevel(this.level);  // Charge les données du nouveau niveau
    this.display.clear();
    this.display.draw(this);

        
        
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
            if(this.isValidPosition(newX,newY, this.player2)){
            this.player1.setPosition(newX, newY);
            this.checkAndResetIfNeeded();
            this.activatePlatePressure();
            }



}

private isGoldPressurePlate(x:number,y:number){
    return this.pressurePlateGold.some(plate => plate.getX() === x && plate.getY() === y); 
}

private isCollidedWithWalls(x:number, y:number){

    return this.walls.some(wall => wall.getX() === x && wall.getY() === y);

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
    if(this.isValidPosition(newX,newY, this.player1)){
        this.player2.setPosition(newX, newY);
        this.checkAndResetIfNeeded();
        this.activatePlatePressure();
        }
}


private async loadLevels() {
    try {
        const response = await fetch('./data.json'); 
        this.levels = await response.json();
    } catch (error) {
        console.error("Erreur lors du chargement des niveaux:", error);
    }
}

private loadLevel (levelNumber:number){
    const currentLevel = this.levels[`level${levelNumber}`] as LevelData;
        
   
    this.walls = currentLevel.walls.map(wallData => 
        new Wall(wallData)
    );

    
    this.pressurePlateGold = currentLevel.goldPlates.map(plateData => 
        new GoldPressurePlate(plateData)
    );

    this.door = currentLevel.door.map(doorData => 
        new Door(doorData)
    );

    
    this.pressurePlate = currentLevel.pressurePlate.map(plateData => 
        new PressurePlate(plateData)
    );
 
    
    this.player1 = new Player(currentLevel.players.player1);
    this.player2 = new Player(currentLevel.players.player2);

    this.display.clear();
    this.display.draw(this);
}


 private async startGame() {
    await this.loadLevels();  
    this.loadLevel(1);        
}

 private activatePlatePressure():void{
    for (const plate of this.pressurePlate) {
        //je passe mes plate a la methode de verification si ya un player dessus 
        const isPlayerOnPlate = this.isPlayerOnPressurePlate(plate);
        //je verifie si je le jouer et dessus et et la plate n'est pas deja actif 
        if(isPlayerOnPlate && !plate.isActive()){
            plate.press();
            this.openDoor(plate.getDoorId());
        }else if(!isPlayerOnPlate && plate.isActive()){
            plate.release();
            this.closeDoor(plate.getDoorId());
        }
    }
}
private isPlayerOnPressurePlate(plate: PressurePlate): boolean {
    return (
        (this.player1.getX() === plate.getX() && this.player1.getY() === plate.getY()) ||
        (this.player2.getX() === plate.getX() && this.player2.getY() === plate.getY())
    );
}

private openDoor(doorId:string):void{
    const door  = this.door.find(d => d.getId() === doorId);
    if(door) door.open();
}

private closeDoor(doorId: string): void {
    const door = this.door.find(d => d.getId() === doorId);
    if (door) door.close();
}
}