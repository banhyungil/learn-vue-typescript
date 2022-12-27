<template>
  <div>
    <ul>
      <TodoListItem
        v-for="todoItem in todoItems"
        :key="todoItem.id"
        :id="todoItem.id"
        :text="todoItem.text"
        :checked="todoItem.done"
        :readonly="readonly"
        @item:remove="onItemRemove"
        @check:toggled="onDoneToggled"
      />
    </ul>
  </div>
</template>

<script lang="ts">
// TodoListItem에 대한 처리를 담당.
import Vue from "vue";
import TodoListItem from "@/components/TodoListItem.vue";
import { TodoItem } from "@/types";
import { PropType } from "vue/types/v3-component-props";

export default Vue.extend({
  props: {
    todoItems: { type: [] as PropType<TodoItem[]>, required: true },
    readonly: { type: Boolean, default: false },
  },
  components: { TodoListItem },

  methods: {
    onItemRemove(id: number) {
      this.$emit("item:remove", id);
    },

    onDoneToggled(id: number) {
      this.$emit("check:toggled", id);
    },
  },
});
</script>

<style scoped></style>
