import {Ball} from './ball.js';
import {Block} from './block.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    
        window.addEventListener('risize', this.resize.bind(this), false);
        this.resize();
        
        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 10); //(15)
        this.block = new Block(700, 30, 300, 450);
        this.block_ = new Block(500, 60, 100, 200);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        //(* 2), scale(2, 2) or (* 1), scale(1, 1)
        this.canvas.width = this.stageWidth * 2; 
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);
        this.block_.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block, this.block_);
    }
}

window.onload = () => {
    new App();
};