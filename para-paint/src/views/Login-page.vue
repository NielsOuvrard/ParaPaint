<template>
    <div>
        <h1>Login Page</h1>
        <form @submit.prevent="login">
            <label>
                Email:
                <input type="text" id="name" v-model="name" required />
            </label>
            <label>
                Password:
                <input v-model="password" type="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCredentialsStore } from "../stores/credentialsStore.js";
const store = useCredentialsStore();

const name = ref("");
const password = ref("");

function login() {
    store.name = name.value;
    // console.log("Logged in as", store.setName);
    console.log("Logged in as", name.value);
    // store.setName(email.value);
    // Perform login logic here
    // this.$router.push("/");
}
</script>

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
