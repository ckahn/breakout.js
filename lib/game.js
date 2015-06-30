(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Game = Breakout.Game = function () {
    this.addBricks();
    this.addBall();
    this.addPaddle();
    // this.gameStarted = false;
    this.gameOver = false;
    this.userWins = false;
  };

  Game.prototype.addBall = function () {
    this.ball = new Breakout.Ball(Game.DIM_X / 2, Game.DIM_Y / 2, this);
  };

  Game.prototype.movePaddle = function (e) {
    // Firefox uses layerX
    var x = e.offsetX || e.layerX;
    var y = e.offsetY || e.layerY;
    if (Game.DIM_X - x < this.paddle.width / 2) {
      this.paddle.position[0] = Game.DIM_X - this.paddle.width;
    } else if (x < this.paddle.width / 2) {
      this.paddle.position[0] = 0;
    } else {
      this.paddle.position[0] = x - this.paddle.width / 2;
    }
  };

  Game.prototype.addBricks = function () {
    this.bricks = [];
    this.brickCount = 0;
    var x = Game.BRICK_X_OFFSET;
    var y = Game.BRICK_Y_OFFSET;

    for (var i = 0; i < Game.NUM_BRICK_ROWS; i++) {
      for (var j = 0; j < Game.NUM_BRICKS_PER_ROW; j++) {
        this.bricks.push(new Breakout.Brick({
          colorIdx: i,
          position: [x, y],
          game: this
        }));
        this.brickCount++;
        x += Game.BRICK_WIDTH + Game.BRICK_SEP;
      }
      y += Game.BRICK_HEIGHT + Game.BRICK_SEP;
      x = Game.BRICK_X_OFFSET;
    }
  };

  Game.prototype.addPaddle = function () {
    this.paddle = new Breakout.Paddle({
      position: [
        Game.DIM_X / 2 - Game.PADDLE_WIDTH / 2,
        Game.DIM_Y - Game.PADDLE_HEIGHT - Game.PADDLE_X_OFFSET
      ],
      width: Game.PADDLE_WIDTH,
      height: Game.PADDLE_HEIGHT,
      game: this
    });
  };

  Game.prototype.allObjects = function () {
    return [].concat(this.bricks, [this.ball], [this.paddle]);
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function (object) {
      if (object) {
        object.draw(ctx);
      }
    });
  };

  Game.prototype.end = function () {
    this.gameOver = true;
  };

  Game.prototype.mouseClick = function (e) {
    console.log('CLICK');
    if (!this.started) {
      this.ball.start();
      this.started = true;
    }
  };

  Game.prototype.elementAt = function (x, y) {
    var foundBrick = null;
    for (var i = 0; i < this.bricks.length; i++) {
      var brick = this.bricks[i];
      if (
           brick &&
           x >= brick.position[0] &&
           x <= brick.position[0] + brick.width &&
           y >= brick.position[1] &&
           y <= brick.position[1] + brick.height
      ) {
        foundBrick = brick;
        break;
      }
    }
    return foundBrick;
  };

  Game.prototype.step = function () {
    this.ball.move();
    this.ball.collides();
  };

  Game.BG_COLOR = "#f0f0f0";
  Game.DIM_X = 800;
  Game.DIM_Y = 500;
  Game.FPS = 60;

  Game.BRICK_X_OFFSET = 10;
  Game.BRICK_Y_OFFSET = 70;

  Game.NUM_BRICK_ROWS = 5;
  Game.NUM_BRICKS_PER_ROW = 6;

  Game.BRICK_HEIGHT = 15;
  Game.BRICK_SEP = 10;
  Game.BRICK_WIDTH =
    (Game.DIM_X - Game.BRICK_X_OFFSET * 2 - Game.BRICK_SEP *
      (Game.NUM_BRICKS_PER_ROW - 1)
    ) / Game.NUM_BRICKS_PER_ROW;

  Game.PADDLE_HEIGHT = 20;
  Game.PADDLE_WIDTH = 75;
  Game.PADDLE_X_OFFSET = 50;
})();
