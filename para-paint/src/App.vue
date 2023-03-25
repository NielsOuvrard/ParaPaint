<script setup>
const routes = [
    {
        path: "/",
        component: () => import("./views/Home-page.vue"),
    },
    {
        path: "/about",
        component: () => import("./views/About-page.vue"),
    },
    {
        path: "/login",
        component: () => import("./views/Login-page.vue"),
    },
    // {
    //     path: "/draw",
    //     component: () => import("./views/Draw-page.vue"),
    // },
    // {
    //     path: "/:pathMatch(.*)*",
    //     component: () => import("./views/404-page.vue"),
    // },
];
</script>

<template>
    <div id="app">
        <header class="header">
            <h1>ParaPaint</h1>
            <div class="header__h1">
                <nav v-for="route in routes" :key="route.path">
                    <router-link :to="route.path">{{ route.path }}</router-link>
                </nav>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <p>&copy; 2023 My Awesome Vue.js App</p>
        </footer>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e58;
    // margin-top: 60px;
}
.header {
    width: 100%;
    background-color: rgb(62, 131, 214);
    border-bottom: 2px solid;
    border-color: rgb(215, 213, 213);
    display: flex;
    .__h1 {
        height: 100%;
        color: rgb(255, 255, 255);
        font-size: larger;
        font-weight: bolder;
        // text-align: left;
        padding: 16px;
        padding-left: 32px;
    }
}
</style>
