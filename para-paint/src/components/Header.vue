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
        <h1 class="header__title">ParaPaint</h1>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
    background-color: rgb(62, 131, 214);
}

.header__title {
    margin: 0;
}

.header__nav {
    display: flex;
}

.header__link {
    margin-left: 1rem;
    color: #fff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}
</style>
