import config from "@/config";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: `/buzzer/${config.app.defaultBuzzerId}`,
    },
    {
      path: "/buzzer/:id",
      name: "buzzer",
      component: () => import("@/views/BuzzerView.vue"),
    },
  ],
});

export default router;
