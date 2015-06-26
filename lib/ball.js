(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Ball = Breakout.Ball = function (x, y, game) {
    this.x = x;
    this.y = y;
    this.diameter = Ball.DIAMETER;
    this.game = game;
  };

  Ball.prototype.bounceX = function () {
    Ball.VELOCITY_X *= -1;
  },

  Ball.prototype.bounceY = function () {
    Ball.VELOCITY_Y *= -1;
  },


  Ball.prototype.draw = function (ctx) {
    ctx.fillStyle = "#F00";
    ctx.beginPath();
    ctx.arc(
      this.x, this.y, Ball.DIAMETER, 0, 2 * Math.PI, true
    );
    ctx.fill();
  };

  Ball.prototype.move = function () {
    this.x += Ball.VELOCITY_X;
    this.y += Ball.VELOCITY_Y;
  };

  Ball.DIAMETER = 8;
  Ball.VELOCITY_X = 2;
  Ball.VELOCITY_Y = 2;
})();
