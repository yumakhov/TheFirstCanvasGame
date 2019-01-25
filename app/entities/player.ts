import { IDrawService } from '../services/draw/draw-service';
import * as CommonModels from '../entities/common';


export interface IPlayer {
    draw(): void;
    moveUp(): void;
    moveDown(): void;
    moveLeft(): void;
    moveRight(): void;
}

export class Player implements IPlayer {
    private size: number;
    private speed: number;
    private position: CommonModels.IPoint;    
    private drawService: IDrawService;

    constructor(drawService: IDrawService){
        this.size = 50;
        this.speed = 2;
        this.position = new CommonModels.Point(100, 100);
        this.drawService = drawService;         
    }

    draw(): void {        
        this.drawService.drawSquare(this.position.x, this.position.y, this.size);
    }

    moveUp(){
        this.position.y -= this.speed;
    }

    moveDown(){
        this.position.y += this.speed;
    }

    moveLeft(){
        this.position.x -= this.speed;
    }

    moveRight(){
        this.position.x += this.speed;
    }

}