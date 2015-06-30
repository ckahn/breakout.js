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
        if (!gameView.game.started) {
          gameView.showLabel('Click paddle');
        }
        if (gameView.game.gameOver) {
          gameView.stop();
          gameView.showLabel('GAME OVER');
        } else if (gameView.game.userWins) {
          gameView.stop();
          gameView.showLabel('YOU WIN!');
        }
      }, 1000 / Breakout.Game.FPS
    );
  };

  GameView.prototype.showLabel = function (str) {
    var gameView = this;
    gameView.ctx.font = 'bold 64px "new courier", monospace';
    var content = str;
    var text = gameView.ctx.measureText(content);
    gameView.ctx.fillText(
      content,
      gameView.ctx.canvas.width/2 - text.width/2,
      gameView.ctx.canvas.height/2 - 50
    );
  }

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
