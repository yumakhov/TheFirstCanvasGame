import { IDrawService } from '../services/draw/draw-service';
import * as Common from '../entities/common';

export interface IRocket {
    draw(): void;
}

export class Rocket implements IRocket {
    private speed: number;
    private position: Common.IPoint;
    private drawService: IDrawService;

    constructor(startPosition: Common.IPoint, drawService: IDrawService) {
        this.speed = 10;
        this.position = startPosition;
        this.drawService = drawService;

        let interval = setInterval(() => {
            if(this.position.y < 0) {
                clearInterval(interval);
            }

            requestAnimationFrame(() => this.moveUp());
        }, 1000/60)
    }

    draw(): void {
        this.drawService.fillCircle(this.position.x, this.position.y, 10, 'blue');
    }

    private moveUp() {
        this.position.y -= this.speed;
    }
}