import Vue from "vue";
import Router from "vue-router";
import More from "../views/More.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/more",
      name: "more",
      component: More
    }
  ]
});
