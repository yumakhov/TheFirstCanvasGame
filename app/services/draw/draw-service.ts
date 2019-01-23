export interface IDrawService {
    clear(): void;
    fill(color: string): void;
    drawLine(x1: number, y1: number, x2: number, y2: number): void;
    drawSquare(x: number, y: number, sideSize: number): void;
    drawCircle(x: number, y: number, r: number): void;
    fillCircle(x: number, y: number, r: number, color: string): void;
}

export default class DrawService implements IDrawService {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');        
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    fill(color: string){        
        this.ctx.fillStyle = color
        this.drawRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
    }

    drawLine(x1: number, y1: number, x2: number, y2: number){
        this.ctx.beginPath();
        this.ctx.moveTo(x1,y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawSquare(x: number, y: number, sideSize: number){
        this.drawRect(x, y, sideSize, sideSize);
        this.ctx.stroke();
    }

    private drawRect(x: number, y: number, width: number, height: number): void{
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + width, y);
        this.ctx.lineTo(x + width, y + height);
        this.ctx.lineTo(x, y + height);
        this.ctx.lineTo(x, y);     
        this.ctx.closePath();
    }
    
    drawCircle(x: number, y: number, r: number){
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
    
    fillCircle(x: number, y: number, r: number, color: string){
        this.ctx.beginPath();        
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fillStyle = color;
        let fillRule: CanvasFillRule = 'nonzero'
        this.ctx.fill(fillRule);
    }
}