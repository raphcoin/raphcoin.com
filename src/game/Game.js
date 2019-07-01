import Phaser from "phaser";

const config = {
  type: Phaser.CANVAS,
  parent: "game_container",
  debug: true,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: null
};

class Scene extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.input.keyboard.on("keydown", this.onKeydown.bind(this));

    this.load.json("map", "/assets/map.json");
    this.load.image("mine", "/assets/mine.png");
  }

  create() {
    const data = this.cache.json.get("map");

    const tilewidth = data.tilewidth;
    const tileheight = data.tileheight;

    const tileWidthHalf = tilewidth / 2;
    const tileHeightHalf = tileheight / 2;

    const layer = data.layers[0].data;

    const mapwidth = data.layers[0].width;
    const mapheight = data.layers[0].height;

    const centerX = mapwidth * tileWidthHalf;
    const centerY = mapheight * tileHeightHalf;

    let i = 0;
    for (let y = 0; y < mapheight; y++) {
      for (let x = 0; x < mapwidth; x++) {
        const id = layer[i] - 1;

        let tx = (x - y) * tileWidthHalf;
        let ty = (x + y) * tileHeightHalf;

        let tile = this.add.image(centerX + tx, centerY + ty, "mine", id);

        tile.depth = centerY + ty;

        i++;
      }
    }

    //this.cameras.main.setBounds(0, 0, 100, 100);
    this.cameras.main.setZoom(0.4);
    // this.cameras.main.setSize(1024, 1024);
  }

  onKeydown(event) {
    const key = event.key;
    const cords = {
      x: 0,
      y: 0
    };
    switch (key) {
      case "ArrowLeft":
        cords.x -= 5;
        break;
      case "ArrowRight":
        cords.x += 5;
        break;
      case "ArrowUp":
        cords.y -= 5;
        break;
      case "ArrowDown":
        cords.y += 5;
        break;
    }
    this.cameras.main = { ...this.cameras.main, ...cords };
  }
}

class Game extends Phaser.Game {
  constructor() {
    config.scene = new Scene();
    super(config);
  }

  preload() {
    // Todo: Not working

    console.log("hello");
    // this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    // this.world.setBounds(0, 0, 2000, 2000);
  }
}

export default Game;
