<template>
  <div class="fr-center">
    <header class="fr-center"><h2>오늘 할 일</h2></header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
      <ul>
        <TodoList
          :todoItems="todoItemsNotDone"
          @item:remove="onItemRemove"
          @check:toggled="onDoneToggled"
        />
      </ul>
    </main>
    <div class="fr-center"><h2>완료목록</h2></div>
    <TodoList
      :todoItems="todoItemsDone"
      @item:remove="onItemRemove"
      @check:toggled="onDoneToggled"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import { TodoItem } from "@/types";
import Todo from "@/api/Todo";
import CollectionUtil from "@/utils/CollectionUtil";

export default Vue.extend({
  components: { TodoInput, TodoList },
  computed: {
    todoItemsNotDone(): TodoItem[] {
      return this.todoItems.filter((item) => !item.done);
    },
    todoItemsDone(): TodoItem[] {
      return this.todoItems.filter((item) => item.done);
    },
  },
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
      const idArr = this.todoItems.map((item) => Number(item.id));
      const maxId = idArr.length == 0 ? 0 : Math.max(...idArr);

      const todoItem: TodoItem = {
        id: maxId + 1,
        text: this.todoText,
        done: false,
      };

      this.todoItems.push(todoItem);
      this.todoItems.sort((a, b) =>
        a.text == b.text ? 0 : a.text < b.text ? -1 : 1
      );
      this.todoItems.sort((a, b) => (a.done == b.done ? 0 : a.done ? 1 : -1));

      Todo.save(this.todoItems);

      this.initTodoText();
    },

    initTodoText() {
      this.todoText = "";
    },

    fetchTodoItems() {
      this.todoItems = Todo.fetch();
    },

    onItemRemove(id: number) {
      CollectionUtil.remove(this.todoItems, (item) => item.id == id);
      Todo.save(this.todoItems);
    },

    onDoneToggled(id: number) {
      const todoItem = this.todoItems.find((item) => item.id == id) as TodoItem;
      todoItem.done = !todoItem.done;
      Todo.save(this.todoItems);
    },
  },

  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
