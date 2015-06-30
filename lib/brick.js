(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Brick = Breakout.Brick = function (options) {
    this.color = "#505050";
    this.position = options.position;
    this.game = options.game;
    this.width = Breakout.Game.BRICK_WIDTH;
    this.height = Breakout.Game.BRICK_HEIGHT;
    this.image = new Image();
    this.image.src = 'images/Bricks/brick_blue_small.png';
  };

  Brick.prototype.draw = function (ctx) {
    ctx.drawImage(
      this.image,
      141,
      178,
      232,
      102,
      this.position[0],
      this.position[1],
      this.width,
      this.height
    );
  };
})();
