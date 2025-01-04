import { Point } from "./Point.js";
import { Shape } from "../Enums/Shape.js";
export class Player extends Point {
    constructor(x, y) {
        super(x, y, Shape.CIRCLE, 'green');
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
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
