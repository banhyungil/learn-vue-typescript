<template>
  <div>
    <label for="todo-input">오늘 할 일: </label>
    <input
      id="todo-input"
      type="text"
      :value="item"
      @input="onInput"
      @keyup.enter="onInputEnter"
    />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    item: { type: String, required: true },
  },
  methods: {
    addTodo() {
      this.$emit("add");
    },
    onInputEnter() {
      this.addTodo();
    },
    onInput(event: InputEvent) {
      if (!event.target) return;
      const inputElt = event.target as HTMLInputElement;
      this.$emit("input", inputElt.value);
    },
  },
});
</script>

<style scoped></style>
