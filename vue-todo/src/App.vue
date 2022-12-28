<template>
  <div>
    <div class="gr">
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

export default Vue.extend({
  components: { RouterView, MyMenu },
});
</script>

<style scoped>
.gr {
  display: grid;
  grid-template-columns: 100px 1fr;
  height: 80vh;
  padding: 10vh 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
