import * as Common from '../entities/common';
import { IDrawService } from '../services/draw/draw-service';

export interface ITarget extends Common.IEntity{
    isAlive(): boolean;
    draw(): void;
    getPosition(): Common.IPoint;
    onRocketCollision(): void;
}


export class Target implements ITarget {    
    public position: Common.IPoint;
    public width: number;
    public height: number; 
    private isDestroyed: boolean;
    private speed: number;
    private drawService: IDrawService;

    constructor(startPosition: Common.IPoint, drawService: IDrawService){
        this.position = new Common.Point(startPosition.x, startPosition.y); 
        this.width = 20;
        this.height = 20;  
        this.isDestroyed = false;
        this.speed = 1;     
        this.drawService = drawService;
    }

    isAlive(): boolean {
        return !this.isDestroyed;
    }

    onRocketCollision(): void {
        this.isDestroyed = true;
    }

    getPosition(): Common.IPoint {
        return this.position;
    }

    draw(): void {
        if (this.isDestroyed) {
            return;
        }

        this.moveDown();
        this.drawService.drawSquare(this.position.x, this.position.y, this.width);
    }

    private moveDown() {
        this.position.y += this.speed;
    }
}