import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Door extends Point {
    constructor(data) {
        super(data.x, data.y, Shape.SQUARE, data.color);
        this.isOpen = data.isOpen;
        this.id = data.id;
    }
    getId() {
        return this.id;
    }
    open() {
        this.isOpen = true;
    }
    isOpened() {
        return this.isOpen;
    }
    close() {
        this.isOpen = false;
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
