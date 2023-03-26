import { defineStore } from "pinia";

export const useRouterStore = defineStore("Router", {
    state: () => ({
        count: 0,
        routes: [
            {
                path: "/",
                name: "home",
                // component: Home,
            },
            {
                path: "/about",
                name: "about",
                // component: About,
            },
            {
                path: "/result",
                name: "result",
                // component: About,
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
                // component: Login,
            },
        ],
    }),
    getters: {
        // all names of routes
        listNamesRoutes: (state) => state.routes.map((route) => route.name),
    },
    setters: {
        setCount: (state, count) => (state.count = count),
    },
});
