const STORAGE_KEY = "vue-todo-ts-v1";
import { TodoItem } from "@/types";

export default {
  save(todoItems: TodoItem[]) {
    const serializedValue = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, serializedValue);
  },
  fetch(): TodoItem[] {
    const todoItems = localStorage.getItem(STORAGE_KEY) ?? "[]";
    return JSON.parse(todoItems);
  },
};
