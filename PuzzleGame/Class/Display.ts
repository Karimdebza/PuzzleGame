import {Drawer} from "../Drawer.js";
import { Game } from "./Game.js";
import { GoldPressurePlate } from "./GoldPressurePlate.js";
import { Player } from "./Player.js";
import { Wall } from "./Wall.js";


export class Display {
  private ctx: CanvasRenderingContext2D | null;
  private scale: number;
  private drawer: Drawer;

  constructor(width: number, height: number, scale: number = 10) {
    this.drawer = new Drawer(width, height, scale);
    const canvas = document.createElement("canvas");
    this.ctx = canvas.getContext("2d");

    this.scale = scale;
    canvas.width = width * this.scale;
    canvas.height = height * this.scale;
    
  }

  public refreshScore() {
    let score: HTMLElement | null = document.getElementById("score");
    if (score != null) score.innerHTML = "0";
  }

  public draw(game: Game): void { 
    
    const player1 : Player = game.getPlayer1();
    this.drawer.drawCircle(player1.getX(), player1.getY(),player1.getColor());
  
    const player2 : Player = game.getPlayer2();
    this.drawer.drawCircle(player2.getX(), player2.getY(),player2.getColor());

    const pressurePlates: GoldPressurePlate[] = game.getGoldPressurePlate();
    pressurePlates.forEach(plate => {
        this.drawer.drawDiamond(plate.getX(), plate.getY(), plate.getColor());
    });

    const wall : Wall[] = game.getWall();
    wall.forEach(wall => {
      this.drawer.drawRectangle(wall.getX(), wall.getY(),wall.getColor());
    });
    


  }


  public clear(){
    this.drawer.clear();
  }

}
