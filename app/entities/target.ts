import * as Common from '../entities/common';
import { IDrawService } from '../services/draw/draw-service';

export interface ITarget extends Common.IEntity{
    draw(): void;
    getPosition(): Common.IPoint
}

export class Target implements ITarget {
    public position: Common.IPoint;
    public width: number;
    public height: number; 
    private speed: number;
    private drawService: IDrawService;

    constructor(startPosition: Common.IPoint, drawService: IDrawService){
        this.position = new Common.Point(startPosition.x, startPosition.y); 
        this.width = 20;
        this.height = 20;  
        this.speed = 1;     
        this.drawService = drawService;

        let interval = setInterval(() => {
            if(this.position.y < 0) {
                clearInterval(interval);
            }

            requestAnimationFrame(() => this.moveDown());
        }, 1000/60)
    }
    getPosition(): Common.IPoint {
        return this.position;
    }

    draw(): void {
        this.drawService.drawSquare(this.position.x, this.position.y, this.width);
    }

    private moveDown() {
        this.position.y += this.speed;
    }
}