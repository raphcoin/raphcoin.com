import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "game_container",
  debug: true,
  width: 2048,
  height: 2048,
  scene: null
};

var tileWidthHalf;
var tileHeightHalf;

class Scene extends Phaser.Scene {
  preload() {
    this.load.json("map", "map.json");
    this.load.image("mine", "mine.png");
  }

  create() {
    var data = this.cache.json.get("map");

    var tilewidth = data.tilewidth;
    var tileheight = data.tileheight;

    tileWidthHalf = tilewidth / 2;
    tileHeightHalf = tileheight / 2;

    var layer = data.layers[0].data;

    var mapwidth = data.layers[0].width;
    var mapheight = data.layers[0].height;

    var centerX = mapwidth * tileWidthHalf;
    var centerY = mapheight * tileHeightHalf;

    var i = 0;

    for (var y = 0; y < mapheight; y++) {
      for (var x = 0; x < mapwidth; x++) {
        var id = layer[i] - 1;

        var tx = (x - y) * tileWidthHalf;
        var ty = (x + y) * tileHeightHalf;

        var tile = this.add.image(centerX + tx, centerY + ty, "mine", id);

        //tile.depth = centerY + ty;

        i++;
      }
    }

    //this.cameras.main.setBounds(0, 0, 100, 100);
    this.cameras.main.setZoom(0.4);
  }

  update(time, delta) {}
}

class Game extends Phaser.Game {
  constructor() {
    config.scene = new Scene();
    super(config);
  }
}

export default Game;
