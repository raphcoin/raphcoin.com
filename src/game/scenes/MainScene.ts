import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: "MainScene"
    });
  }

  create() {
    this.input.keyboard.on("keydown", this.onKeydown.bind(this));

    this.addTiles();

    // Todo: Fix camera position
    this.cameras.main.setPosition(200, 0);
    // this.cameras.main.setSize(2000, 2000);
    this.cameras.main.setBounds(0, 0, window.innerWidth, window.innerHeight);
    this.cameras.main.setZoom(0.2);
    this.cameras.main.setBackgroundColor("#d8d8d8");

    this.scale.on("resize", gameSize => {
      const width = gameSize.width;
      const height = gameSize.height;

      this.cameras.resize(width, height);
      console.log(width, height);
    });

    window.addEventListener(
      "resize",
      _event => {
        this.scale.resize(window.innerWidth, window.innerHeight);
      },
      false
    );
  }

  addTiles() {
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

        let tile = this.add.sprite(
          centerX + tx,
          centerY + ty - 600,
          id === 0 ? "clean_terrain" : `mine-${id}`,
          id
        );
        tile.depth = centerY + ty;
      }
    }
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
