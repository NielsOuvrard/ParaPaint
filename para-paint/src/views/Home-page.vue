<script setup>
import DrawPage from "../components/DrawPage.vue";
import { useCredentialsStore } from "../stores/credentialsStore.js";

const store = useCredentialsStore();
</script>

<template>
    <div class="home">
        <!-- <h1 class="home__title">Home</h1> -->
        <p v-if="store.name" class="home__subtitle">{{ store.name }}</p>
        <DrawPage class="home__draw-page" />
    </div>
</template>

<style scoped lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}

.home__title {
    font-size: 2rem;
}

.home__subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
}

.home__draw-page {
    margin-top: 2rem;
}
</style>
