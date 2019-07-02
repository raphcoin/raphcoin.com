<template>
  <div id="game_container"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Game from "~/game/Game";

export default Vue.extend({
  data(): {
    game?: Game;
  } {
    return {};
  },
  mounted() {
    this.game = new Game();
  }
});
</script>
