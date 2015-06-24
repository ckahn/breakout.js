(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Paddle = Breakout.Paddle = function (x, y, width, height, game) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.game = game;
  };

  Paddle.prototype.draw = function (ctx) {
    ctx.fillStyle = "#505050";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
})();
