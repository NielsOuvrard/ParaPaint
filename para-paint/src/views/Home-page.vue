<script setup>
import DrawPage from "../components/DrawPage.vue";

</script>

<template>
    <div class="home">
        <DrawPage class="home__draw-page" />
    </div>
</template>

<style scoped lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0rem;
}

.home__title {
    font-size: 2rem;
}

.home__subtitle {
    margin: 0rem;
    font-size: 1.2rem;
}

.home__draw-page {
    margin-top: 2rem;
}
</style>
