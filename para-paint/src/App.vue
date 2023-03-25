<script setup>
import myHeader from "./components/HeaderComponent.vue";
import myFooter from "./components/FooterComponent.vue";
</script>

<template>
    <div id="app">
        <myHeader />
        <main>
            <router-view></router-view>
        </main>
        <myFooter />
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
