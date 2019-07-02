import Phaser from "phaser";

import BootScene from "~/game/scenes/BootScene";
import MainScene from "~/game/scenes/MainScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: "game_container",
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [BootScene, MainScene]
};

class Game extends Phaser.Game {
  constructor() {
    super(config);
  }
}

export default Game;
