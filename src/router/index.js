import { createRouter, createWebHistory } from "vue-router";

import UserProfile from "../components/UserProfile";
import ProfileList from "../components/ProfileList";

const routes = [
  {
    path: "/",
    component: ProfileList,
  },
  {
    path: "/user/:id",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
