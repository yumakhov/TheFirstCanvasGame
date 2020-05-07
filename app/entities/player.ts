import { IDrawService } from '../services/draw/draw-service';
import { IRocket, Rocket } from '../entities/rocket';
import * as Common from '../entities/common';


export interface IPlayer extends Common.IEntity {
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
    
    public position: Common.IPoint; 
    public width: number;
    public height: number; 
    private isKilled: boolean;
    private speed: number;
    private timeToRecharge: number;  
    private drawService: IDrawService;

    constructor(drawService: IDrawService){        
        this.position = new Common.Point(100, 300);
        this.width = 50;
        this.height = 50;
        this.isKilled = false;
        this.speed = 3;
        this.timeToRecharge = 0;
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
        this.drawService.drawSquare(this.position.x, this.position.y, this.width);        
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
        let startPosition = new Common.Point(this.position.x + this.width/2, this.position.y);
        return new Rocket(startPosition, this.drawService);        
    }
}