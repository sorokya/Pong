import Config from './config'
import Vector from './vector';
import Util from './util';

export default class Ball {
    constructor() {
        this.reset();
    }
    reset() {
        this.position = new Vector(Config.GAME_WIDTH / 2 - Config.BALL_SIZE / 2,
                                   Config.GAME_HEIGHT / 2 - Config.BALL_SIZE / 2);
        this.angle = 90;
        this.velocity = Config.BALL_BASE_VELOCITY;
    }
    render(ctx, lagOffset) {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, Config.BALL_SIZE, 0, 2 * Math.PI);
        ctx.fill();

        // TODO: use lagOffset
    }
    update() {
        let distanceY = this.velocity * 
            Math.cos(Util.DegToRad(this.angle));
        let distanceX = this.velocity * 
            Math.sin(Util.DegToRad(this.angle));
        this.position.x += distanceX;
        this.position.y += distanceY;
    }
}