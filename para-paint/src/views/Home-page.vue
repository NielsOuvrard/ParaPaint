<script setup>
import DrawPage from "../components/DrawPage.vue";
import { useCredentialsStore } from "../stores/credentialsStore.js";

const store = useCredentialsStore();
</script>

<template>
    <div>
        <h1>Home</h1>
        <p v-if="store.name">
            {{ store.name }}
        </p>
        <p>Welcome to the home page!</p>
    </div>
    <DrawPage />
</template>
