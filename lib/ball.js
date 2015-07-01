(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Ball = Breakout.Ball = function (x, y, game) {
    this.x = x;
    this.y = y;
    this.vx = Ball.VELOCITY_X;
    this.vy = Ball.VELOCITY_Y;
    this.diameter = Ball.DIAMETER;
    this.game = game;
    this.image = new Image();
    this.image.src = 'images/Balls/ball_blue.png';
  };

  Ball.prototype.bounceOff = function (el) {
    this.vy *= -1;
  };

  Ball.prototype.bounceOffWall = function () {
    if (this.y <= 0) {
      this.vy *= -1;
    } else if (this.x >= Breakout.Game.DIM_X - this.diameter) {
      this.vx *= -1;
    } else if (this.y >= Breakout.Game.DIM_Y) {
      if (this.game.livesCount == 0) {
        this.game.end();
      } else {
        this.game.startOver();
        this.game.livesCount -= 1;
      }
    } else if (this.x <= 0) {
      this.vx *= -1;
    }
  };

  Ball.prototype.bounceOffElements = function () {
    for (var i = 0; i < this.game.bricks.length; i++) {
      if (this.collidesWith(this.game.bricks[i])) {
        this.bounceOff(this.game.bricks[i]);
        this.game.bricks[i] = null;
        this.game.brickCount--;
        if (this.game.brickCount <= 0) {
          this.game.userWins = true;
        }
        break;
      }
    }

    if (this.collidesWith(this.game.paddle)) {
      if (this.vy > 0) {
        this.bounceOff(this.game.paddle);
      }
    }
  };

  Ball.prototype.collidesLeftTop = function (el) {
    return this.x >= el.position[0] &&
      this.x <= el.position[0] + el.width &&
      this.y >= el.position[1] &&
      this.y <= el.position[1] + el.height
  };

  Ball.prototype.collidesLeftBottom = function (el) {
    return this.x >= el.position[0] &&
      this.x <= el.position[0] + el.width &&
      this.y + this.diameter >= el.position[1] &&
      this.y + this.diameter <= el.position[1] + el.height
  };

  Ball.prototype.collidesRightTop = function (el) {
    return this.x + this.diameter >= el.position[0] &&
      this.x + this.diameter <= el.position[0] + el.width &&
      this.y >= el.position[1] &&
      this.y <= el.position[1] + el.height
  };

  Ball.prototype.collidesRightBottom = function (el) {
    return this.x + this.diameter >= el.position[0] &&
      this.x + this.diameter <= el.position[0] + el.width &&
      this.y + this.diameter >= el.position[1] &&
      this.y + this.diameter <= el.position[1] + el.height
  };

  Ball.prototype.collidesWith = function (el) {
    if (!el) {
      return false;
    }
  
    return this.collidesLeftTop(el) || this.collidesRightTop(el) ||
      this.collidesRightBottom(el) || this.collidesLeftBottom(el)
  };

  Ball.prototype.collides = function () {
    this.bounceOffWall();
    this.bounceOffElements();
  };

  Ball.prototype.draw = function (ctx) {
    ctx.drawImage(
      this.image,
      72,
      75,
      367,
      367,
      this.x,
      this.y,
      this.diameter,
      this.diameter
    );
  };

  Ball.prototype.move = function () {
    this.x += this.vx;
    this.y += this.vy;
  };

  Ball.prototype.start = function () {
    this.vx = 6;
    this.vy = 6;
  };

  Ball.DIAMETER = 20;
  Ball.VELOCITY_X = 0;
  Ball.VELOCITY_Y = 0;
})();
