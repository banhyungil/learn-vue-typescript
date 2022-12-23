<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
      <ul>
        <TodoListItem
          v-for="(todoItem, idx) in todoItems"
          :key="idx"
          :id="idx"
          :text="todoItem.text"
          :checked="todoItem.completed"
          :itemKey="idx"
          @item:remove="onItemRemove"
          @check:toggled="onCompletedToggled"
        />
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";
import { TodoItem } from "./types";

const STORAGE_KEY = "vue-todo-ts-v1";
const STORAGE = {
  save(todoItems: TodoItem[]) {
    const serializedValue = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, serializedValue);
  },
  fetch() {
    const todoItems = localStorage.getItem(STORAGE_KEY) ?? "[]";
    return JSON.parse(todoItems);
  },
};

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: "",
      todoItems: [] as TodoItem[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const todoItem: TodoItem = {
        text: this.todoText,
        completed: false,
      };

      this.todoItems.push(todoItem);
      this.todoItems.sort((a, b) =>
        a.text == b.text ? 0 : a.text < b.text ? -1 : 1
      );
      this.todoItems.sort((a, b) =>
        a.completed == b.completed ? 0 : a.completed ? 1 : -1
      );

      STORAGE.save(this.todoItems);

      this.initTodoText();
    },

    initTodoText() {
      this.todoText = "";
    },

    fetchTodoItems() {
      this.todoItems = STORAGE.fetch();
    },

    onItemRemove(itemKey: number) {
      this.todoItems.splice(itemKey, 1);
      STORAGE.save(this.todoItems);
    },

    onCompletedToggled(idx: number) {
      this.todoItems[idx].completed = !this.todoItems[idx].completed;
      STORAGE.save(this.todoItems);
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
