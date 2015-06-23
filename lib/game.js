(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Game = Breakout.Game = function () {
    this.bricks = [];
    // this.addBricks();
  };

  Game.BG_COLOR = "#00FFFF";
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.FPS = 32;
})();
