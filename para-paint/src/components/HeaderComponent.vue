<script setup>
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home-page.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About-page.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login-page.vue"),
    },
    // {
    //     path: "/draw",
    //     component: () => import("../views/Draw-page.vue"),
    // },
    // {
    //     path: "/:pathMatch(.*)*",
    //     component: () => import("../views/404-page.vue"),
    // },
];
</script>

<template>
    <header class="header">
        <router-link class="header__link" :to="routes[0].path">
            <h1 class="header__title">ParaPaint</h1>
        </router-link>
        <nav class="header__nav">
            <router-link
                v-for="route in routes"
                :key="route.path"
                class="header__link"
                :to="route.path"
            >
                {{ route.name }}
            </router-link>
        </nav>
    </header>
</template>

<style lang="scss">
.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    background-color: rgb(62, 131, 214);
}

.header__title {
    margin: 0;
    // remove router-link css
    text-decoration: none;
    color: #fff;
}

.header__nav {
    padding: 1rem;
    padding-right: 2rem;
    display: flex;
}

.header__link {
    padding: 1rem;
    padding-left: 2rem;
    color: #fff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}
</style>
