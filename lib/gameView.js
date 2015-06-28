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
        if (gameView.game.gameOver) {
          gameView.stop();
          gameView.ctx.font = 'bold 64px "new courier", monospace';
          var content = 'GAME OVER';
          var text = gameView.ctx.measureText(content);
          gameView.ctx.fillText(
            content, 
            gameView.ctx.canvas.width/2 - text.width/2,
            gameView.ctx.canvas.height/2
          );
        }
      }, 1000 / Breakout.Game.FPS
    );
  };
  
  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
