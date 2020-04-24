import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "Log In",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/profile",
    component: () => import("../views/Profile.vue"),
    children: [
      {
        path: "",
        name: "Profile",
        component: () => import("@/components/Profile/Profile.vue")
        // beforeEnter(to, from, next) {
        //   if (store.getters.isLoggedIn) {
        //     next("/");
        //   } else {
        //     next();
        //   }
        // }
      },
      {
        path: "create",
        name: "CreateProfile",
        component: () => import("@/components/Profile/CreateProfile.vue")
        // beforeEnter(to, from, next) {
        //   if (from.path != "/register" || !store.getters.isLoggedIn) {
        //     next("/");
        //   } else {
        //     next();
        //   }
        // }
      },
      {
        path: "edit",
        name: "EditProfile",
        component: () => import("@/components/Profile/EditProfile.vue")
        // beforeEnter(to, from, next) {
        //   if (store.getters.isLoggedIn) {
        //     next();
        //   } else {
        //     next("/");
        //   }
        // }
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue")
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
