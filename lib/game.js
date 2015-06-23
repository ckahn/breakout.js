(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Game = Breakout.Game = function () {
    this.addBricks();
  };

  Game.prototype.addBricks = function () {
    this.bricks = [];
    var x = Game.BRICK_X_OFFSET;
    var y = Game.BRICK_Y_OFFSET;

    for (var i = 0; i < Game.NUM_BRICK_ROWS; i++) {
      for (var j = 0; j < Game.NUM_BRICKS_PER_ROW; j++) {
        this.bricks.push(new Breakout.Brick(i, x, y, { game: this }));
        x += Game.BRICK_WIDTH + Game.BRICK_SEP;
      }
      y += Game.BRICK_HEIGHT + Game.BRICK_SEP;
      x = Game.BRICK_X_OFFSET;
    }
  };

  Game.prototype.allObjects = function () {
    return [].concat(this.bricks);
  }

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.BG_COLOR = "#f0f0f0";
  Game.DIM_X = 400;
  Game.DIM_Y = 600;
  Game.FPS = 5;

  Game.BRICK_X_OFFSET = 1;
  Game.BRICK_Y_OFFSET = 50;

  Game.NUM_BRICK_ROWS = 10;
  Game.NUM_BRICKS_PER_ROW = 10;

  Game.BRICK_HEIGHT = 10;
  Game.BRICK_SEP = 1;
  Game.BRICK_WIDTH = (Game.DIM_X / Game.NUM_BRICKS_PER_ROW - 2) + Game.BRICK_SEP;
})();
