<template>
  <div>
    <div class="gr">
      <MyMenu />
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RouterView } from "vue-router";
import MyMenu from "@/components/MyMenu.vue";

export default Vue.extend({
  components: { RouterView, MyMenu },
});
</script>

<style scoped>
.gr {
  display: grid;
  grid-template-columns: 100px 1fr;
}
</style>
