import Phaser from "phaser";
import MainScene from "~/game/MainScene";

const config = {
  type: Phaser.CANVAS,
  parent: "game_container",
  debug: true,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: null
};

class Game extends Phaser.Game {
  constructor() {
    config.scene = new MainScene();
    super(config);
  }
}

export default Game;
