import Phaser from "phaser";

import BootScene from "~/game/scenes/BootScene";
import MainScene from "~/game/scenes/MainScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  scene: [BootScene, MainScene],
  backgroundColor: "#d8d8d8",
  scale: {
    parent: "game_container",
    mode: Phaser.Scale.NONE,
    width: window.innerWidth,
    height: window.innerHeight
  }
};

class Game extends Phaser.Game {
  constructor() {
    super(config);
  }
}

export default Game;
