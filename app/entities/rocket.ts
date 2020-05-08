import { IDrawService } from '../services/draw/draw-service';
import * as Common from '../entities/common';

export interface IRocket extends Common.IEntity {
    draw(): void;
    destroy(): void;
    isDestroyed: boolean;
    onTargetCollision(): void;
}

export class Rocket implements IRocket {
    public position: Common.IPoint;
    public width: number;
    public height: number; 
    private speed: number;
    private startPosition: Common.IPoint;   //temp field. remove later
    public isDestroyed: boolean;
    private drawService: IDrawService;

    constructor(startPosition: Common.IPoint, drawService: IDrawService) {
        
        this.startPosition = new Common.Point(startPosition.x, startPosition.y);
        this.position = new Common.Point(startPosition.x, startPosition.y);
        this.width = 20;
        this.height = 20;
        this.speed = 5;
        this.isDestroyed = false;
        this.drawService = drawService;

        // let interval = setInterval(() => {
        //     if(this.position.y < 0) {
        //         clearInterval(interval);
        //     }

        //     requestAnimationFrame(() => this.moveUp());
        // }, 1000/60)
    }
    onTargetCollision(): void {
        this.destroy();
    }
    destroy(): void {
        this.isDestroyed = true;
    }

    draw(): void {
        if (this.isDestroyed){
            return;
        }

        this.drawService.fillCircle(this.position.x, this.position.y, this.width/2, 'blue');
        if (this.startPosition.y - this.position.y > 200){
            this.isDestroyed = true;
        }
        this.moveUp();
    }

    private moveUp() {
        if (this.isDestroyed){
            return;
        }
        
        this.position.y -= this.speed;
    }
}