(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var GameView = Breakout.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.checkEndGame = function () {
    if (this.game.gameOver) {
      this.stop();
      this.showLabel('You lose');
    } else if (this.game.userWins) {
      this.stop();
      this.showLabel('YOU WIN!');
    }
  };

  GameView.prototype.start = function () {
    var gameView = this;
    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
        gameView.showLivesCount();
        if (!gameView.game.started) {
          gameView.showLabel('Click paddle');
        }
        gameView.checkEndGame();
      }, 1000 / Breakout.Game.FPS
    );
  };

  GameView.prototype.showLabel = function (str) {
    var gameView = this;
    gameView.ctx.font = 'bold 64pt "new courier", monospace';
    var content = str;
    var text = gameView.ctx.measureText(content);
    gameView.ctx.fillText(
      content,
      gameView.ctx.canvas.width/2 - text.width/2,
      gameView.ctx.canvas.height/2 - 50
    );
  }

  GameView.prototype.showLivesCount = function () {
    var gameView = this;
    var lives = gameView.game.livesCount;
    gameView.ctx.font = 'bold 12pt "new courier", monospace';
    var content = 'Lives: ' + lives
    gameView.ctx.fillText(content, 5, 15);
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
