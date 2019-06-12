import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL, // eslint-disable-line
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      name: "users",
      component: () => import("./views/Users/Index.vue")
    },
    {
      path: "/users/new",
      name: "new-user",
      component: () => import("./views/Users/New.vue")
    },
    {
      path: "/users/edit/:id",
      name: "edit-user",
      component: () => import("./views/Users/Edit.vue")
    }
  ]
});
