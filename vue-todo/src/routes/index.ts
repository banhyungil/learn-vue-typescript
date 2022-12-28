import MainView from "@/views/MainView.vue";
import DoneView from "@/views/DoneView.vue";
import TestVIew from "@/views/TestVIew.vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types/router";
import Vue from "vue";

Vue.use(VueRouter);

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
export const routes: RouteConfig[] = [
  { path: "/", redirect: "/main" },
  { path: "/main", name: "main", component: MainView },
  { path: "/done", name: "done", component: DoneView },
  { path: "/test", name: "test", component: TestVIew },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});

export default router;
