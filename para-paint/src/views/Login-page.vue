<template>
    <div class="login">
        <h1 class="login__title">Login Page</h1>
        <form v-if="!store.name" class="login__form" @submit.prevent="login">
            <label class="login__label">
                Name:
                <input
                    class="login__input"
                    type="text"
                    id="name"
                    v-model="name"
                    required
                />
            </label>
            <button class="login__button" type="submit">Login</button>
        </form>
        <div v-else>
            <p>Logged in as {{ name }}</p>
            <router-link to="/">Go to Home</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCredentialsStore } from "../stores/credentialsStore.js";
const store = useCredentialsStore();

const name = ref("");

function login() {
    store.name = name.value;
}
onMounted(() => {
    name.value = store.name;
});
</script>

<style scoped lang="scss">
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login__title {
    margin-top: 2rem;
    font-size: 2rem;
}

.login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}

.login__label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.2rem;
}

.login__input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1.2rem;
}

.login__button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #333;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #666;
    }
}
</style>
<!-- <script setup>

const name = "";

function login_funct() {
    // Do some login logic here, e.g. sending the name to a server
    // or validating it against a list of authorized users
    console.log("Logged in as", store);
    console.log("Logged in as", name);
    // store.setName(name);
    // Redirect to the Home page after login
    // this.$router.push("/");
}
</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login_funct">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required />
            <button type="submit">Login</button>
        </form>
        <p>
            OK :
            {{ store }}
        </p>
    </div>
</template> -->
