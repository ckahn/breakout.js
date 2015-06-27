(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Paddle = Breakout.Paddle = function (options) {
    this.position = options.position
    this.width = options.width;
    this.height = options.height;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'images/Bats/bat_black.png';
  };

  Paddle.prototype.draw = function (ctx) {
    ctx.drawImage(
      this.image,
      25,
      179,
      454,
      102,
      this.position[0],
      this.position[1],
      this.width,
      this.height
    );
  };
})();
