import { IDrawService } from '../services/draw/draw-service';
import { IRocket, Rocket } from '../entities/rocket';
import * as Common from '../entities/common';


export interface IPlayer {
    isAlive(): boolean;
    draw(): void;
    moveUp(): void;
    moveDown(): void;
    moveLeft(): void;
    moveRight(): void;
    fire(): IRocket;
    onTargetCollision(): void;
    getPosition(): Common.IPoint
}

export class Player implements IPlayer {
    
    private isKilled: boolean;
    private size: number;
    private speed: number;
    private timeToRecharge: number;
    private position: Common.IPoint;    
    private drawService: IDrawService;

    constructor(drawService: IDrawService){
        this.isKilled = false;
        this.size = 50;
        this.speed = 3;
        this.timeToRecharge = 0;
        this.position = new Common.Point(100, 300);
        this.drawService = drawService;         
    }
    getPosition(): Common.IPoint {
        return this.position;
    }
    isAlive(): boolean {
        return !this.isKilled;
    }
    onTargetCollision(): void {
        this.isKilled = true;
    }

    draw(): void {
        if (this.timeToRecharge > 0) {
            this.timeToRecharge -= 10;
        }
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

    fire(): IRocket {
        if (this.timeToRecharge > 0){
            return;
        }
        this.timeToRecharge = 100;
        let startPosition = new Common.Point(this.position.x + this.size/2, this.position.y);
        return new Rocket(startPosition, this.drawService);        
    }
}