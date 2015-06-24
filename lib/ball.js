(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Ball = Breakout.Ball = function (x, y, game) {
    this.x = x;
    this.y = y;
    this.game = game;
  };

  Ball.prototype.draw = function (ctx) {
    ctx.fillStyle = "#505050";
    ctx.beginPath();
    ctx.arc(
      this.x, this.y, Ball.DIAMETER, 0, 2 * Math.PI, true
    );
    ctx.fill();
  };

  Ball.prototype.move = function () {
    this.x += Ball.VELOCITY;
    this.y += Ball.VELOCITY;
  };

  Ball.DIAMETER = 8;
  Ball.VELOCITY = 4;
})();
