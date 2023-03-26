import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$socket = socket;

app.use(router);
app.use(pinia);
app.mount("#app");
