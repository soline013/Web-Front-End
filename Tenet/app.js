import {Bullet} from './bullet.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.tenet();
        window.setTimeout(() => this.changeScreen(), 1000);
        window.setTimeout(() => this.bullet(), 1000);
            
        //window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        //Draw TENET.
        this.tenet();
    }

    tenet() {
        this.ctx.font = '48px serif';
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "Black";  
        this.ctx.fillText('TENET', this.canvas.width/2, this.canvas.height/2);
    }

    changeScreen() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        this.ctx.closePath();
        
        this.ctx.font = '48px serif';
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "White";  
        this.ctx.fillText('TENET', this.canvas.width/2, this.canvas.height/2);
        //this.bullet();
    }

    bullet() {
        this.ctx.beginPath();
        this.ctx.moveTo(100, 100);
        this.ctx.quadraticCurveTo(100, 98, 150, 100);
        this.ctx.quadraticCurveTo(175, 100, 200, 109);
        this.ctx.lineTo(200, 111);
        this.ctx.quadraticCurveTo(175, 120, 150, 120);
        this.ctx.quadraticCurveTo(100, 122, 100, 120);
        this.ctx.quadraticCurveTo(98, 110, 100, 100);
        this.ctx.fillStyle = "White";
        this.ctx.fill();
        this.ctx.closePath();
        
    }
}

window.onload = () => {
    new App();
};

