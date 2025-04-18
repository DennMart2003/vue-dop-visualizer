import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import About from "@/components/AboutSection.vue";

const routes = [
  { path: "/", component: HomePage }, // Root path is homepage
  { path: "/about", component: About }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
