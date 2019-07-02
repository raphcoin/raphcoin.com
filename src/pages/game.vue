<template>
  <div class="game_container">
    <game />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Game from "~/components/Game.vue";

export default Vue.extend({
  components: {
    Game
  }
});
</script>

<style scoped>
/* Todo: Overload scroll */

#game_container {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
