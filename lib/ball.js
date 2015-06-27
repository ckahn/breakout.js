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
    if (this.game.elementAt(this.x - this.radius, this.y - this.radius)) {
      console.log('TOP LEFT');
      if (this.vy < 0) {
        this.vy *= -1;
      }
    } else if (this.game.elementAt(this.x + this.radius, this.y - this.radius)) {
      console.log('TOP RIGHT');
      if (this.vy < 0) {
        this.vy *= -1;
      }
    } else if (this.game.elementAt(this.x + this.radius, this.y - this.radius)) {
      console.log('BOTTOM RIGHT');
      this.vy *= -1;
      if (this.vy > 0) {
        this.vy *= -1;
      }
    } else if (this.game.elementAt(this.x + this.radius, this.y - this.radius)) {
      console.log('BOTTOM LEFT');
      if (this.vy > 0) {
        this.vy *= -1;
      }
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
      this.x, this.y, Ball.RADIUS, 0, 2 * Math.PI, true
    );
    ctx.fill();
  };

  Ball.prototype.move = function () {
    this.x += this.vx;
    this.y += this.vy;
  };

  Ball.RADIUS = 8;
  Ball.VELOCITY_X = 4;
  Ball.VELOCITY_Y = 4;
})();
