(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Game = Breakout.Game = function () {
    this.bricks = [];
    // this.addBricks();
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    // this.allObjects().forEach(function (object) {
    //   object.draw(ctx);
    // });
  };

  Game.BG_COLOR = "#00FFFF";
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.FPS = 5;
})();
