import DrawService from './services/draw/draw-service';

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
    
    let speed = 5;    
    let circleX = 60;  
    let circleY = 60;    
    setInterval(() => {
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
            circleX = getCoordinateValue(circleX);
            circleY = getCoordinateValue(circleY);
            drawService.drawSquare(circleX, circleY, squareSize);
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