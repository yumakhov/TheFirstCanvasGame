import * as Common from '../entities/common';
import { IDrawService } from '../services/draw/draw-service';

export interface ITarget{
    draw(): void;
    getPosition(): Common.IPoint
}

export class Target implements ITarget {
    private speed: number;
    private startPosition: Common.IPoint;
    private position: Common.IPoint;
    private drawService: IDrawService;

    constructor(startPosition: Common.IPoint, drawService: IDrawService){
        this.speed = 1;
        this.startPosition = new Common.Point(startPosition.x, startPosition.y);
        this.position = new Common.Point(startPosition.x, startPosition.y);        
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
        this.drawService.drawSquare(this.position.x, this.position.y, 20);
    }

    private moveDown() {
        this.position.y += this.speed;
    }
}