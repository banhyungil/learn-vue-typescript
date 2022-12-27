<template>
  <div>
    <div class="gr">
      <nav class="gr-nav">
        <RouterLink to="main">main</RouterLink>
        <RouterLink to="done">done</RouterLink>
      </nav>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RouterView, RouterLink } from "vue-router";

export default Vue.extend({
  components: { RouterView, RouterLink },
});
</script>

<style scoped>
.gr {
  display: grid;
  grid-template-columns: 100px 1fr;
}
</style>
