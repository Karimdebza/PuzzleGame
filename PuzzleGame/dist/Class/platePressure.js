import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class PressurePlate extends Point {
    constructor(data) {
        super(data.x, data.y, Shape.DAIMOND, "gray");
        this.isPressed = false;
        this.doorId = data.doorId;
    }
    getDoorId() {
        return this.doorId;
    }
    press() {
        this.isPressed = true;
    }
    release() {
        this.isPressed = false;
    }
    isActive() {
        return this.isPressed;
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}
