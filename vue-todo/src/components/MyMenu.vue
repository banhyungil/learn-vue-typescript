<template>
  <div class="gr-nav">
    <RouterLink active-class="active" to="main">MAIN</RouterLink>
    <RouterLink active-class="active" to="done">DONE</RouterLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RouterLink } from "vue-router";

export default Vue.extend({
  components: { RouterLink },
});
</script>

<style scoped>
.gr-nav {
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;

  background-color: #42b883;
  font-size: 20px;
}

.active {
  color: #35495e;
}

a {
  color: white;
}
</style>
