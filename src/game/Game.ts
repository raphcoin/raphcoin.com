import Phaser from "phaser";
import MainScene from "~/game/MainScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: "game_container",
  width: window.innerWidth,
  height: window.innerHeight
};

class Game extends Phaser.Game {
  constructor() {
    config.scene = new MainScene(config);
    super(config);
  }
}

export default Game;
