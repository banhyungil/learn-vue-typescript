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

  font-size: 20px;
  border-right: 1px solid #dddddd;
}

.active {
  color: #146af0;
}

a {
  color: #2d3137;
}
</style>
