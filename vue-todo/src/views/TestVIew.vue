<template>
  <div>
    <input type="text" v-model="text" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      text: "",
    };
  },
});
</script>

<style scoped></style>
