import { Shape } from "../Enums/Shape.js";
export abstract class Point {

    protected x : number;
    protected y : number;
    protected shape : Shape;
    protected color : string;

    constructor(x:number,y:number,shape:Shape,color:string){
        this.x =x;
        this.y = y;
        this.shape = shape
        this.color = color
    }


    
    public getX():number{
        return this.x;
    }
    public getY():number{
        return this.y
    }
    public getShape():Shape{
        return  this.shape;
    }
    public getColor():string{
        return this.color;
    }


    public touch(other_point:Point):boolean{
        if(other_point == this) return false;
        return this.x == other_point.getX() && this.y === other_point.getY() ;
    }
}