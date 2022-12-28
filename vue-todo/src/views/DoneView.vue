<template>
  <div>
    <ul>
      <h1>{{ name }}</h1>
      <TodoList :todoItems="todoItemsDone" :readonly="true" />
    </ul>
  </div>
</template>

<script lang="ts">
import TodoList from "@/components/TodoList.vue";
import { TodoItem } from "@/types";
import Vue from "vue";
import Todo from "@/api/Todo";

export default Vue.extend({
  components: { TodoList },
  computed: {
    todoItemsDone(): TodoItem[] {
      return this.todoItems.filter((item) => item.done);
    },
  },
  data() {
    return {
      name,
      todoItems: [] as TodoItem[],
    };
  },

  mounted() {
    this.todoItems = Todo.fetch();
  },
});
</script>

<style scoped></style>
