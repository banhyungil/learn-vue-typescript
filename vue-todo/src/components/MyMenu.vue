<template>
  <div class="gr-nav">
    <templat v-for="route in routes" :key="route.path">
      <RouterLink active-class="active" :to="route.path">{{
        route.name.toUpperCase()
      }}</RouterLink>
    </templat>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RouterLink } from "vue-router";
import { routes } from "@/routes";

export default Vue.extend({
  components: { RouterLink },
  data() {
    return {
      routes: routes.filter((route) => route.path != "/"),
    };
  },
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
  color: #42b883;
}

a {
  color: #2d3137;
}
</style>
