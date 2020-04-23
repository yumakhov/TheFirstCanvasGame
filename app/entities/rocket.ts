import { IDrawService } from '../services/draw/draw-service';
import * as Common from '../entities/common';

export interface IRocket {
    draw(): void;
    destroy(): void;
    isDestroyed: boolean;
}

export class Rocket implements IRocket {
    private speed: number;
    private startPosition: Common.IPoint;
    private position: Common.IPoint;
    public isDestroyed: boolean;
    private drawService: IDrawService;

    constructor(startPosition: Common.IPoint, drawService: IDrawService) {
        this.speed = 5;
        this.startPosition = new Common.Point(startPosition.x, startPosition.y);
        this.position = new Common.Point(startPosition.x, startPosition.y);
        this.isDestroyed = false;
        this.drawService = drawService;

        let interval = setInterval(() => {
            if(this.position.y < 0) {
                clearInterval(interval);
            }

            requestAnimationFrame(() => this.moveUp());
        }, 1000/60)
    }
    destroy(): void {
        this.isDestroyed = true;
    }

    draw(): void {
        if (this.isDestroyed){
            return;
        }
        this.drawService.fillCircle(this.position.x, this.position.y, 10, 'blue');
        if (this.startPosition.y - this.position.y > 200){
            this.isDestroyed = true;
            console.log("Rocket destroyed. Position y=" + this.position.y);
        }
    }

    private moveUp() {
        this.position.y -= this.speed;
    }
}