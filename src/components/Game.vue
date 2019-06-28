<template>
  <div id="game_container"></div>
</template>

<script>
import Game from "~/game/Game";

export default {
  data() {
    return {
      game: null
    };
  },
  mounted() {
    this.game = new Game();
  }
};
</script>

<style scoped>
#game {
  padding: 10px;
}
</style>
