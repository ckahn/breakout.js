(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Ball = Breakout.Ball = function (x, y, game) {
    this.x = x;
    this.y = y;
    this.vx = Ball.VELOCITY_X;
    this.vy = Ball.VELOCITY_Y;
    this.radius = Ball.RADIUS;
    this.game = game;
    this.image = new Image();
    this.image.src = 'images/Balls/ball_blue.png';
  };

  Ball.prototype.bounceOff = function (el) {
    this.vy *= -1;
  };

  Ball.prototype.bounceOffWall = function () {
    if (this.y <= 0 + this.diameter) {
      this.vy *= -1;
    } else if (this.x >= Breakout.Game.DIM_X - this.radius) {
      this.vx *= -1;
    } else if (this.y >= Breakout.Game.DIM_Y - this.radius) {
      this.vy *= -1;
    } else if (this.x <= 0 + this.radius) {
      this.vx *= -1;
    }
  };

  Ball.prototype.bounceOffElements = function () {
    for (var i = 0; i < this.game.bricks.length; i++) {
      if (this.collidesWith(this.game.bricks[i])) {
        this.bounceOff(this.game.bricks[i]);
        this.game.bricks[i] = null;
        break;
      }
    }

    if (this.collidesWith(this.game.paddle)) {
      this.bounceOff(this.game.paddle);
    }
  };

  Ball.prototype.collidesWith = function (el) {
    if (
      el &&
      this.x - this.radius >= el.position[0] &&
      this.x - this.radius <= el.position[0] + el.width &&
      this.y - this.radius >= el.position[1] &&
      this.y - this.radius <= el.position[1] + el.height
    ) {
      console.log('LEFT TOP COLLISION');
      return true;
    } else if (
      el &&
      this.x + this.radius >= el.position[0] &&
      this.x + this.radius <= el.position[0] + el.width &&
      this.y - this.radius >= el.position[1] &&
      this.y - this.radius <= el.position[1] + el.height
    ) {
      console.log('RIGHT TOP COLLISION');
      return true;
    } else if (
      el &&
      this.x + this.radius >= el.position[0] &&
      this.x + this.radius <= el.position[0] + el.width &&
      this.y + this.radius >= el.position[1] &&
      this.y + this.radius <= el.position[1] + el.height
    ) {
      console.log('BOTTOM RIGHT COLLISION');
      return true;
    } else if (
      el &&
      this.x - this.radius >= el.position[0] &&
      this.x - this.radius <= el.position[0] + el.width &&
      this.y + this.radius >= el.position[1] &&
      this.y + this.radius <= el.position[1] + el.height
    ) {
      console.log('BOTTOM LEFT COLLISION');
      return true;
    }
  };

  Ball.prototype.collides = function () {
    this.bounceOffWall();
    this.bounceOffElements();
  };

  Ball.prototype.draw = function (ctx) {
    ctx.drawImage(
      this.image,
      72,
      75,
      367,
      367,
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
    // ctx.fillStyle = "#F00";
    // ctx.beginPath();
    // ctx.arc(
    //   this.x, this.y, Ball.RADIUS, 0, 2 * Math.PI, true
    // );
    // ctx.fill();
  };

  Ball.prototype.move = function () {
    this.x += this.vx;
    this.y += this.vy;
  };

  Ball.prototype.start = function () {
    this.vx = 4;
    this.vy = 4;
  };

  Ball.RADIUS = 12;
  Ball.VELOCITY_X = 0;
  Ball.VELOCITY_Y = 0;
})();
