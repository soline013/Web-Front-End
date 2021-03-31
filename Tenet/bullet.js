export class Bullet {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = this.radius + (Math.random() * (stageWidth - diameter));
        this.y = this.radius + (Math.random() * (stageHeight - diameter));
    }

    draw(ctx, stageWidth, stageHeight, block, block_) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        this.bounceBlock(block);
        this.bounceBlock(block_);

        ctx.fillStyle = `#ffd100`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}