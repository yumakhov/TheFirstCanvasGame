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
        let canvasSize = 500;   
        this.width = 84;
        this.height = 84;
        this.position = new Common.Point(canvasSize/2 - this.width/2, canvasSize-this.height);
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
        if (!this._playerImg) {
            this._playerImg = this.drawService.drawImageFromFile(this.position, '../assets/img/tank.svg');
        } else {
            this.drawService.drawImage(this.position, this._playerImg);
        }       
    }

    private _playerImg: HTMLImageElement;

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
        
        this.SetTimeToRecharge();
        let startPosition = new Common.Point(this.position.x + this.width/2, this.position.y);
        return new Rocket(startPosition, this.drawService);        
    }

    private SetTimeToRecharge() {
        this.timeToRecharge = 400;
    }
}