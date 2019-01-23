import DrawService from './services/draw/draw-service';

let App = ((doc, win) => {
    const tactInterval = 1000 / 60;    
    
    function getCanvas(canvasSize: number): HTMLCanvasElement {
        let canvas = <HTMLCanvasElement> doc.getElementById('gameAreaCanvas');
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        return canvas;
    }

    const areaSize = 15;
    const sideSize = 50    
    let canvasSize = areaSize * sideSize;
    const canvas = getCanvas(canvasSize);
    const drawService = new DrawService(canvas);        
    
    let speed = 5;    
    let circleX = 60;  
    let circleY = 60;    
    setInterval(() => {
        win.requestAnimationFrame(()=>{            
            drawService.clear();
            // drawService.drawCircle(circleX, circleY, 15);
            drawService.drawSquare(circleX, circleY, 50);
        });        
    }, tactInterval)

    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;
    doc.addEventListener('keydown', (event) => {
        // console.log(event);
        switch(event.keyCode) {
            case right: 
                circleX += speed;
                break;
            case left: 
                circleX -= speed;
                break;
            case up: 
                circleY -= speed;
                break;
            case down: 
                circleY += speed;
                break;
            default:
                return;
        }
    });

    let counter = 10;
    let interval = setInterval(() => {
        drawService.clear();
        drawService.drawCircle(counter + 20, 30, 15);
        counter++;
        if (counter > 50) {
            clearInterval(interval);
        }
    }, 300)

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