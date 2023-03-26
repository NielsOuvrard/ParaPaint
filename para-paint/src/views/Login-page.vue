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
            <div v-if="name2 == null || name2 == ''">
                <p>Waiting for another player...</p>
            </div>
            <div v-else>
                <p>Player 2 connected, his name is {{ name2 }}</p>
                <router-link :to="routes[0].path">
                <h1>Play game!</h1>
            </router-link>
            </div>
            <!-- <router-link to="/">Go to Home</router-link> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useCredentialsStore } from "../stores/credentialsStore.js";
const store = useCredentialsStore();

const name = ref("");
const name2 = ref("");

const instance = getCurrentInstance();

function login() {
    store.name = name.value;
    // emit that you just logged in:
    instance.appContext.config.globalProperties.$socket.emit('entered-nickname', name.value);
}
onMounted(() => {
    name.value = store.name;
    // When another client join:
    instance.appContext.config.globalProperties.$socket.on('client-logged', (data) => {
        console.log('Login-page >> client-logged >> data = ', data);
        name2.value = data;  // Save with pinia
        store.name2 = name2.value;
        instance.appContext.config.globalProperties.$socket.emit('ready-to-play', name.value);
    });

    // When first client is ready to play
    instance.appContext.config.globalProperties.$socket.on('client1-ready', (data) => {
        console.log('Login-page >> client1-ready >> data = ', data);
        name2.value = data;  // Save with pinia
        store.name2 = name2.value;
    });
});

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home-page.vue"),
    },
];
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
