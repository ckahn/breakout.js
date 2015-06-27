(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Paddle = Breakout.Paddle = function (options) {
    this.position = options.position
    this.width = options.width;
    this.height = options.height;
    this.game = options.game;
  };

  Paddle.prototype.draw = function (ctx) {
    var paddleImage = new Image();
    paddleImage.src = 'images/Bats/bat_black.png';
    ctx.drawImage(
      paddleImage,
      25,
      179,
      454,
      102,
      this.position[0],
      this.position[1],
      this.width,
      this.height
    );
    // ctx.fillStyle = "#505050";
    // ctx.fillRect(
    //   this.position[0],
    //   this.position[1],
    //   this.width,
    //   this.height
    // );
  };
})();
