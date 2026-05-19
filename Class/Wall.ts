import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";

export class Wall extends Point {

    constructor(data: WallData) {
        super(data.x, data.y, Shape.SQUARE, 'black');
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