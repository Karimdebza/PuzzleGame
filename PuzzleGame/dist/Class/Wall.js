import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Wall extends Point {
    constructor(data) {
        super(data.x, data.y, Shape.SQUARE, 'black');
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}
