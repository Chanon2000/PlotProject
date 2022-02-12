import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "@/views/SignUp.vue";
import Profile from "@/views/Profile.vue";
import UserMenu from "@/views/UserMenu.vue";
import listPlots from "@/views/ListPlot.vue";
import CreatePost from "@/views/CreatePost.vue";
import PostShow from "@/views/PostShow.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: SignUp,
    props: true
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/usermenu",
    name: "UserMenu",
    component: UserMenu
  },
  {
    path: "/listplots",
    name: "listPlots",
    component: listPlots
  },
  {
    path: "/CreatePost",
    name: "CreatePost",
    component: CreatePost
  },
  {
    path: "/postshow",
    name: "PostShow",
    component: PostShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
