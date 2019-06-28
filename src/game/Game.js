import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "game_container",
  debug: true,
  width: 512,
  height: 512,
  scene: {
    preload: preload,
    create: create
  }
};

function preload() {
  this.load.image("logo", "logo.png");
}

function create() {
  this.add.image(0, 0, "logo").setOrigin(0, 0).set;
}

class Game extends Phaser.Game {
  constructor() {
    super(config);

    // this.start();
  }
}

export default Game;
