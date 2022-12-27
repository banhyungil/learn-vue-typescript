<template>
  <li>
    <input type="checkbox" :checked="checked" @change="onCheckChanged" />
    <span class="item" :class="{ complete: checked }">{{ text }}</span>
    <button @click="onRemoveClick">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    checked: { type: Boolean, default: false },
  },
  methods: {
    onRemoveClick() {
      this.$emit("item:remove", this.id);
    },

    onCheckChanged(event: Event) {
      this.$emit("check:toggled", this.id);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}

.complete {
  text-decoration: line-through;
}
</style>
