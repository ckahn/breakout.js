(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Ball = Breakout.Ball = function (x, y, game) {
    this.x = x;
    this.y = y;
    this.vx = Ball.VELOCITY_X;
    this.vy = Ball.VELOCITY_Y;
    this.diameter = Ball.DIAMETER;
    this.game = game;
  };

  Ball.prototype.bounceOffWall = function () {
    if (this.y <= 0 + this.diameter) {
      this.vy *= -1;
    } else if (this.x >= Breakout.Game.DIM_X - this.diameter) {
      this.vx *= -1;
    } else if (this.y >= Breakout.Game.DIM_Y - this.diameter) {
      this.vy *= -1;
    } else if (this.x <= 0 + this.diameter) {
      this.vx *= -1;
    }
  };

  Ball.prototype.bounceOffElements = function () {
    if (this.game.elementAt(this.x, this.y)) {
      this.vy *= -1;
    } else if (false) {
      this.vx *= -1;
    } else if (false) {
      this.vy *= -1;
    } else if (false) {
      this.vx *= -1;
    }
  };

  Ball.prototype.collides = function () {
    this.bounceOffWall();
    this.bounceOffElements();
  };

  Ball.prototype.draw = function (ctx) {
    ctx.fillStyle = "#F00";
    ctx.beginPath();
    ctx.arc(
      this.x, this.y, Ball.DIAMETER, 0, 2 * Math.PI, true
    );
    ctx.fill();
  };

  Ball.prototype.move = function () {
    this.x += this.vx;
    this.y += this.vy;
  };

  Ball.DIAMETER = 8;
  Ball.VELOCITY_X = 2;
  Ball.VELOCITY_Y = 2;
})();
