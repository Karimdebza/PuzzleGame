export class Point {
    constructor(x, y, shape, color) {
        this.x = x;
        this.y = y;
        this.shape = shape;
        this.color = color;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getShape() {
        return this.shape;
    }
    getColor() {
        return this.color;
    }
    touch(other_point) {
        if (other_point == this)
            return false;
        return this.x == other_point.getX() && this.y === other_point.getY();
    }
}
