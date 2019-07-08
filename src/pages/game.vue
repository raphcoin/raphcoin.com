<template>
  <game />
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
body {
  background: #eeeeee;
  overflow: hidden;
  margin: 0;
  padding: 0;
  /* Todo: Overload scroll */
}

#game_container {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: red;
}
</style>
