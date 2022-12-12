import { createRouter, createWebHistory } from "vue-router";
import BuzzerView from "../views/BuzzerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/buzzer/:id",
      name: "buzzer",
      component: BuzzerView,
    },
  ],
});

export default router;
