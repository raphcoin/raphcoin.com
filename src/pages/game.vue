<template>
  <div class="game_container">
    <game />
  </div>
</template>

<script>
import Game from "~/components/Game";

export default {
  components: {
    Game
  }
};
</script>

<style scoped>
* {
  /* Todo: Overload scroll */
  overflow-y: hidden;
}

#game_container {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
