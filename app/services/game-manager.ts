import { Player, IPlayer } from '../entities/player';
import { Rocket, IRocket } from '../entities/rocket';
import { Target, ITarget } from '../entities/target';
import { Point } from '../entities/common';
import { IDrawService } from './draw/draw-service';
import {KeyboardButtons, IKeyboardEventsController} from './keyboard-events-controller';

export default class GameManager {

    private player: IPlayer;
    private targets: Array<ITarget>;
    private rockets: Array<IRocket>;

    private drawService: IDrawService;
    private keyboardEventsController: IKeyboardEventsController;

    constructor(drawService: IDrawService, keyboardEventsController: IKeyboardEventsController){
        this.drawService = drawService;
        this.keyboardEventsController = keyboardEventsController;
    }
    
    start(): void {
        this.player = new Player(this.drawService); 

        this.targets.push(new Target(new Point(20, 0), this.drawService));
        this.targets.push(new Target(new Point(80, 0), this.drawService));
        this.targets.push(new Target(new Point(120, 0), this.drawService));

        const tactInterval = 1000 / 60;  
        var intervalId = setInterval(() => {
            if (!this.player.isAlive()){
               alert("GAME OVER");
               clearInterval(intervalId);           
               this.drawService.clear();
               return; 
            }
    
            window.requestAnimationFrame(()=>{            
                // drawService.drawCircle(circleX, circleY, 15);
                const squareSize = 50;            
    
                // let getCoordinateValue = (value: number) => {
                //     if (value <= 0) {
                //         return 0;
                //     }
    
                //     if (value + squareSize >= canvasSize){
                //         return canvasSize - squareSize;
                //     }
    
                //     return value;
                // };
                this.drawService.clear();
                
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.left)){
                    this.player.moveLeft();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.right)){
                    this.player.moveRight();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.up)){
                    this.player.moveUp();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.down)){
                    this.player.moveDown();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.space)){
                    this.player.fire();
                }
    
                this.player.draw();
    
                for (const target of this.targets) {
                    target.draw();
                    if (target.getPosition().y >= this.player.getPosition().y){
                        this.player.onTargetCollision();
                    }
                }
            });        
        }, tactInterval)
    }
}