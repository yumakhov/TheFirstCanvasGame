import { Player, IPlayer } from '../entities/player';
import { Rocket, IRocket } from '../entities/rocket';
import { Target, ITarget } from '../entities/target';
import { Point } from '../entities/common';
import { IDrawService } from './draw/draw-service';
import {KeyboardButtons, IKeyboardEventsController} from './keyboard-events-controller';
import CollisionService from './collision-service'

export default class GameManager {

    private player: IPlayer;
    private targets: Array<ITarget>;
    private rockets: Array<IRocket>;

    private drawService: IDrawService;
    private keyboardEventsController: IKeyboardEventsController;

    constructor(drawService: IDrawService, keyboardEventsController: IKeyboardEventsController){
        this.drawService = drawService;
        this.keyboardEventsController = keyboardEventsController;
        this.targets = new Array<ITarget>();
        this.rockets = new Array<IRocket>();
    }

    start(): void {
        this.player = new Player(this.drawService);

        const tactInterval = 1000 / 60;    
        let i = 0;
        var intervalId = setInterval(() => {
            let isGameOver = !this.player.isAlive();
            if (isGameOver) {
                clearInterval(intervalId);           
                this.drawService.clear();
                this.rockets = [];
                this.targets = [];

                let shouldStartAgain = confirm('GAME OVER. Do you want to start again?');
                if (shouldStartAgain) {
                    this.start();
                }

                return; 
            }

            //Targets generation --->>>
            i++;
            if (i % 100 === 0) {
                let randomNumber = Math.random();
                this.targets.push(new Target(new Point(137*randomNumber + i % 187, 0), this.drawService));
            }
            //<<<--- Targets generation

            window.requestAnimationFrame(()=>{            
                
                this.drawService.clear();
                
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.left)){
                    this.player.moveLeft();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.right)){
                    this.player.moveRight();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.up)){
                    //don't allow to move up
                    //this.player.moveUp();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.down)){
                    //don't allow to move down
                    //this.player.moveDown();
                }
                if (this.keyboardEventsController.IsPressed(KeyboardButtons.space)){
                    let rocket = this.player.fire();
                    if (rocket) {
                        this.rockets.push(rocket);
                    }
                }
    
                this.player.draw();

                this.targets = this.targets.filter(entity => entity.isAlive());
                for (const target of this.targets) {
                    target.draw();

                    if (CollisionService.intersects(this.player, target)){
                        this.player.onTargetCollision();
                    }

                    for (const rocket of this.rockets) {
                        if (CollisionService.intersects(rocket, target)){
                            target.onRocketCollision();
                            rocket.onTargetCollision();
                        }
                    }
                }

                this.rockets = this.rockets.filter(rocket => !rocket.isDestroyed);                
                for (const rocket of this.rockets) {
                    rocket.draw();
                }
            });        
        }, tactInterval)
    }
}