import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home-page.vue";
import About from "../views/About-page.vue";
import Login from "../views/Login-page.vue";
import Result from "../views/Result-page.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/result",
        name: "result",
        component: Result,
    },
    // {
    //     path: "/draw",
    //     name: "draw",
    //     component: Draw,
    // },
    // {
    //     path: "/Score",
    //     name: "Score",
    //     component: Score,
    // },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
