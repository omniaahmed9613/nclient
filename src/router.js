import VueRouter from "vue-router";
import login from "./components/login.vue";
import register from "./components/register.vue";
import confirmation from "./components/confirmation.vue";
import PreciousMetals from './components/PreciousMetals.vue';
import userDashboard from "./components/UserDashboard.vue";
import api from "./api";
import Toasted from "vue-toasted";
import Vue from "vue";
import Currency from './components/Currency.vue';
import NotifyApp from "./components/NotifyApp.vue";
import UserHome from "./components/UserHome.vue";
Vue.use(Toasted, { duration: 2000 });
const beforeEnterCheck = (to, from, next) => {
  api
    .checktoken()
    .then(() => {
      next();
    })
    .catch(() => {
      Vue.toasted.error("Please login to continue");
      next("/");
    });
};
const beforeEnterLogin = async(to, from, next) => {
  api
    .checktoken()
    .then(() => {
      next("/home");
    })
    .catch(() => {
      localStorage.removeItem('user-info');
      next();
    });
};
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: userDashboard,
      beforeEnter: beforeEnterCheck,
      children: [
        {
          path: "main",
          name: "main",
          component: NotifyApp,
          
        },
        {
          path: "",
          name:"",
          component: UserHome,
         
        },
        {
          path: "metals",
          name: "metals",
          component:PreciousMetals ,
          
        },
        {
          path:"currency",
          name:"currency",
          component:Currency,
        }


       
      ]
    },
    { path: "/confirmation", component: confirmation },
    { path: "/register", component: register },
    { path: "/", component: login, beforeEnter: beforeEnterLogin },
    { path: "/login", component: login, beforeEnter: beforeEnterLogin }
  ]
});

export default router;
