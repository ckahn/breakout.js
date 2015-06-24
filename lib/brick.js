(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Brick = Breakout.Brick = function (options) {
    this.colorIdx = options.colorIdx;
    this.position = options.position;
    this.game = options.game;
    this.width = Breakout.Game.BRICK_WIDTH;
    this.height = Breakout.Game.BRICK_HEIGHT;
  };

  Brick.prototype.draw = function (ctx) {
    ctx.fillStyle = "#505050";
    ctx.fillRect(this.position[0], this.position[1], this.width, this.height);
  };
})();
