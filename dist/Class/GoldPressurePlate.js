import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class GoldPressurePlate extends Point {
    constructor(data) {
        super(data.x, data.y, Shape.DAIMOND, 'gold');
    }
    touched(player) {
        if (player.getX() === this.x && player.getY() === this.y) {
            return true;
        }
        return false;
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
