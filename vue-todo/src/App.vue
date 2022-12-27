<template>
  <div>
    <RouterView />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RouterView, RouterLink } from "vue-router";

export default Vue.extend({
  components: { RouterView },
});
</script>

<style scoped></style>
