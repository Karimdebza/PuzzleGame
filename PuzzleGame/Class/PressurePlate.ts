import { Shape } from "../Enums/Shape.js";

import { Point } from "./Point.js";

export class PressurePlate  extends Point {
    protected doorId: string;
    protected isPressed: boolean = false;
    constructor(data: PressurePlateData) {
        super(data.x, data.y, Shape.DAIMOND, data.color);
        this.doorId = data.doorId;
    }

    public getDoorId(): string {
        return this.doorId;
    }

    public press(): void {
        this.isPressed = true;
    }

    public release(): void {
        this.isPressed = false;
    }

    public isActive(): boolean {
        return this.isPressed;
    }


    public setX(newX: number): void {
        this.x = newX;
    }

    public setY(newY: number): void {
        this.y = newY;
    }
    public getColor(): string {
        return this.color;
    }
    public setColor(color:string):void {
        this.color = color; 
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
                                                                                              
    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

}