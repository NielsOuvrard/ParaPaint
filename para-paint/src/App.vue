<template>
    <div id="app">
        <header>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <p>&copy; 2023 My Awesome Vue.js App</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>
<!-- <template>
    <DrawPage />
</template>

<script>
import DrawPage from "./components/DrawPage.vue";

export default {
    name: "App",
    components: {
        DrawPage,
    },
};
</script>
-->
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e58;
    // margin-top: 60px;
}
</style>
