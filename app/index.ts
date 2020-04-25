import DrawService from './services/draw/draw-service';
import KeyboardEventsController from './services/keyboard-events-controller';
import { Player, IPlayer } from './entities/player';
import { Target, ITarget } from './entities/target';
import { Point } from './entities/common';

let App = ((doc, win) => {
    const tactInterval = 1000 / 60;    
    
    function getCanvas(canvasSize: number): HTMLCanvasElement {
        let canvas = <HTMLCanvasElement> doc.getElementById('gameAreaCanvas');
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        return canvas;
    }
    
    let canvasSize = 500;
    const canvas = getCanvas(canvasSize);
    const drawService = new DrawService(canvas);        
    
    const player: IPlayer = new Player(drawService);    
    
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;
    const space = 32;
    let keyboardEventsController = new KeyboardEventsController();
    doc.addEventListener('keydown', (event) => {
        keyboardEventsController.UpdateKeyState(event.keyCode, true);
    });
    doc.addEventListener('keyup', (event) => {
        keyboardEventsController.UpdateKeyState(event.keyCode, false);
    });
    let targets = new Array<ITarget>();
    targets.push(new Target(new Point(20, 0), drawService));
    targets.push(new Target(new Point(80, 0), drawService));
    targets.push(new Target(new Point(120, 0), drawService));
    var intervalId = setInterval(() => {
        if (!player.isAlive()){
           alert("GAME OVER");
           clearInterval(intervalId);
           return; 
        }

        win.requestAnimationFrame(()=>{            
            // drawService.drawCircle(circleX, circleY, 15);
            const squareSize = 50;            

            let getCoordinateValue = (value: number) => {
                if (value <= 0) {
                    return 0;
                }

                if (value + squareSize >= canvasSize){
                    return canvasSize - squareSize;
                }

                return value;
            };
            drawService.clear();
            
            if (keyboardEventsController.IsPressed(left)){
                player.moveLeft();
            }
            if (keyboardEventsController.IsPressed(right)){
                player.moveRight();
            }
            if (keyboardEventsController.IsPressed(up)){
                player.moveUp();
            }
            if (keyboardEventsController.IsPressed(down)){
                player.moveDown();
            }
            if (keyboardEventsController.IsPressed(space)){
                player.fire();
            }

            player.draw();

            for (const target of targets) {
                target.draw();
                if (target.getPosition().y >= player.getPosition().y){
                    player.onTargetCollision();
                }
            }
        });        
    }, tactInterval)


    

    //     // console.log(event);
    //     switch(event.keyCode) {
    //         case right: 
    //             player.moveRight();
    //             break;
    //         case left: 
    //             player.moveLeft();
    //             break;
    //         case up: 
    //             player.moveUp();
    //             break;
    //         case down: 
    //             player.moveDown();
    //             break;
    //         case space: 
    //             player.fire();
    //             break;
    //         default:
    //             return;
    //     }
    // });

    // setInterval(() => {
    //     win.requestAnimationFrame(drawRotatedLine);
    // }, 50)
    // function drawRotatedLine(drawService){ //TODO: add params
    //     drawService.clear();
    //     ctx.translate(225, 225);
    //     ctx.rotate(0.05 * Math.PI); 
    //     ctx.translate(-225, -225);
    //     drawService.drawLine(200, 200, 250, 250);  
    // }
})(document, window)