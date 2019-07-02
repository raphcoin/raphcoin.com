import Phaser from "phaser";

class MainScene extends Phaser.Scene {
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

    for (let i = 0, y = 0; y < mapheight; y++) {
      for (let x = 0; x < mapwidth; x++, i++) {
        const id = layer[i];

        let tx = (x - y) * tileWidthHalf;
        let ty = (x + y) * tileHeightHalf;

        let tile = this.add.image(centerX + tx, centerY + ty - 600, "mine", id);
        tile.depth = centerY + ty;
      }
    }

    // Todo: Fix camera position
    this.cameras.main.setBounds(0, 0, window.innerWidth, window.innerHeight);
    this.cameras.main.setZoom(0.2);
    this.cameras.main.setPosition(200, 0);
  }

  onKeydown(event: KeyboardEvent) {
    const camera = this.cameras.main;
    const key = event.key;

    const STEP = 50;
    switch (key) {
      case "ArrowLeft":
        camera.x -= STEP;
        break;
      case "ArrowRight":
        camera.x += STEP;
        break;
      case "ArrowUp":
        camera.y -= STEP;
        break;
      case "ArrowDown":
        camera.y += STEP;
        break;
    }

    camera.setPosition(camera.x, camera.y);
  }
}

export default MainScene;
