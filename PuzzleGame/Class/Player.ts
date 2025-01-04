import { Point } from "./Point.js";

import { Shape } from "../Enums/Shape.js";
export class Player extends Point{

    constructor(x:number,y:number){
        super(x,y,Shape.CIRCLE,'green');
        
    }

    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }

    public setX(newX: number): void {
        this.x = newX;
    }

    public setY(newY: number): void {
        this.y = newY;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
 
   
 
    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }



}