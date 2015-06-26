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
    ctx.fillStyle = "#F00";
    ctx.beginPath();
    ctx.arc(
      this.x, this.y, Ball.DIAMETER, 0, 2 * Math.PI, true
    );
    ctx.fill();
  };

  Ball.prototype.move = function () {
    this.x += Ball.X_VELOCITY;
    this.y += Ball.Y_VELOCITY;
  };

  Ball.prototype.respondToHits = function () {
    this.respondToWallHit();
  };

  Ball.prototype.respondToWallHit = function () {
    console.log('[' + this.x + ', ' + this.y + ']');
    if (this.y <= 0 + Ball.DIAMETER) {
      Ball.Y_VELOCITY *= -1;
    } else if (this.x >= Breakout.Game.DIM_X - Ball.DIAMETER) {
      Ball.X_VELOCITY *= -1;
    } else if (this.y >= Breakout.Game.DIM_Y - Ball.DIAMETER) {
      Ball.Y_VELOCITY *= -1;
    } else if (this.x <= 0 + Ball.DIAMETER) {
      Ball.X_VELOCITY *= -1;
    }
  };

  Ball.DIAMETER = 8;
  Ball.X_VELOCITY = 2;
  Ball.Y_VELOCITY = 2;
})();
