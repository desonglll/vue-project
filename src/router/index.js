import Vue from "vue";
import Router from "vue-router";

// import Home from "../components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login",
      component: () => import("@/components/Login.vue"), //路由懒加载
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/components/Login.vue"), //路由懒加载
    },
    {
      path: "/home",
      //   component: Home,
      //   component: () => import("@/components/Home.vue"), //路由懒加载
      component: (resolve) => require(["@/components/Home.vue"], resolve), //异步组件
    },
  ],
  mode: "history",
});
