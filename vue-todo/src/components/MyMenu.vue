<template>
  <div class="gr-nav">
    <RouterLink to="main">main</RouterLink>
    <RouterLink to="done">done</RouterLink>
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
  grid-template-columns: 1fr;
  background-color: #42b883;
}
</style>
