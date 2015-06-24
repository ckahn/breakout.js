(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Paddle = Breakout.Paddle = function (options) {
    this.position = options.position
    this.width = options.width;
    this.height = options.height;
    this.game = options.game;
  };

  Paddle.prototype.draw = function (ctx) {
    ctx.fillStyle = "#505050";
    ctx.fillRect(
      this.position[0],
      this.position[1],
      this.width,
      this.height
    );
  };
})();
