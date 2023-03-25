<template>
    <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
    </div>
    <DrawPage />
</template>

<script>
import DrawPage from "../components/DrawPage.vue";

export default {
    name: "Home-page",
    components: {
        DrawPage,
    },
};
</script>
