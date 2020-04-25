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
    fire(): void;
    onTargetCollision(): void;
}

export class Player implements IPlayer {
    
    private isKilled: boolean;
    private size: number;
    private speed: number;
    private position: Common.IPoint;    
    private drawService: IDrawService;

    private rockets: IRocket[] = [];

    constructor(drawService: IDrawService){
        this.isKilled = false;
        this.size = 50;
        this.speed = 3;
        this.position = new Common.Point(100, 300);
        this.drawService = drawService;         
    }
    isAlive(): boolean {
        return !this.isKilled;
    }
    onTargetCollision(): void {
        this.isKilled = true;
    }

    draw(): void {   
        if (this.isKilled){
            this.rockets = [];
            return;
        }  

        this.drawService.drawSquare(this.position.x, this.position.y, this.size);
        this.rockets = this.rockets.filter(rocket => !rocket.isDestroyed);
        for (let rocket of this.rockets) {
            rocket.draw();
        }
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

    fire(): void {
        let startPosition = new Common.Point(this.position.x + this.size/2, this.position.y);
        this.rockets.push(new Rocket(startPosition, this.drawService));
    }
}