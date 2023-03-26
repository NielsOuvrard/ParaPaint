<template>
    <h1 class="result__title">Well played !</h1>
    <div>
        <div class="result">
            <p>{{ store.name }}</p>
            <p>{{ store.scorePlayer }}%</p>
        </div>
        <img :src="store.pngPlayer" style="border: solid 1px #000000" />
    </div>
    <div>
        <div class="result">
            <p>{{ store.name2 }}</p>
            <p>{{ store.scoreClient }}%</p>
        </div>
        <img :src="store.pngClient" style="border: solid 1px #000000" />
    </div>
    <div class="result">

    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCredentialsStore } from "../stores/credentialsStore.js";
const store = useCredentialsStore();

onMounted(() => {
    console.log("Result-page >>");

});
</script>

<style scoped lang="scss">
.result {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.result__title {
    font-size: 2rem;
}
</style>