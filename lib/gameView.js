(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var GameView = Breakout.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function () {
    var gameView = this;
    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 1000 / Breakout.Game.FPS
    );
  };
  
  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
