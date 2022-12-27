<template>
  <li>
    <input
      v-if="!readonly"
      type="checkbox"
      :checked="checked"
      @change="onCheckChanged"
    />
    <span class="item" :class="{ done: checked }">{{ text }}</span>
    <button v-if="!readonly" @click="onRemoveClick">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    checked: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
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
  margin-left: 5px;
}

.done {
  text-decoration: line-through;
}
</style>
