<script setup>
import myHeader from "./components/Header.vue";
</script>

<template>
    <div id="app">
        <myHeader />
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
</style>
