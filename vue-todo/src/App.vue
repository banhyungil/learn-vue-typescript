<template>
  <div class="gr">
    <TitleBar />
    <div class="gr-body">
      <MyMenu />
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RouterView } from "vue-router";
import MyMenu from "@/components/MyMenu.vue";
import TitleBar from "@/components/TitleBar.vue";

export default Vue.extend({
  components: { RouterView, MyMenu, TitleBar },
});
</script>

<style scoped>
.gr {
  display: grid;
  grid-template-rows: 100px calc(100vh - 100px);
}
.gr-body {
  display: grid;
  grid-template-columns: 100px 1fr;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
