import GameManager from './services/game-manager';
import DrawService from './services/draw/draw-service';
import { KeyboardEventsController} from './services/keyboard-events-controller';
import { Player } from './entities/player';

let App = ((doc) => {    
    
    function getCanvas(canvasSize: number): HTMLCanvasElement {
        let canvas = <HTMLCanvasElement> doc.getElementById('gameAreaCanvas');
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        return canvas;
    }
    
    let canvasSize = 500;
    const canvas = getCanvas(canvasSize);
    const drawService = new DrawService(canvas); 

    let keyboardEventsController = new KeyboardEventsController();    
    doc.addEventListener('keydown', (event) => {
        keyboardEventsController.UpdateKeyState(event.keyCode, true);
    });
    doc.addEventListener('keyup', (event) => {
        keyboardEventsController.UpdateKeyState(event.keyCode, false);
    });

    let gameManager = new GameManager(drawService, keyboardEventsController);
    gameManager.start();  
    
})(document)