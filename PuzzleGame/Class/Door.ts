import { Shape } from "../Enums/Shape.js";

import { Point } from "./Point.js";

export class Door  extends Point {

    protected isOpen: boolean;
    protected id: string;

    constructor(data: DoorData) {
        super(data.x, data.y, Shape.SQUARE, data.color);
        this.isOpen = data.isOpen;
        this.id = data.id
    }

    public getId(): string {
        return this.id;
    }

    public open(): void {
        this.isOpen = true;
    }

    public isOpened(): boolean {
        return this.isOpen;
    }

    public close(): void {
        this.isOpen = false;
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