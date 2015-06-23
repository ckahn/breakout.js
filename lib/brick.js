(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Brick = Breakout.Brick = function (i, x, y, game) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.game = game;
    this.width = Breakout.Game.BRICK_WIDTH;
    this.height = Breakout.Game.BRICK_HEIGHT;
  };

  Brick.prototype.draw = function (ctx) {
    ctx.fillStyle = "#505050";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
})();
