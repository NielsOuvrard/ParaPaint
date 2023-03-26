<script setup>
import VueDrawingCanvas from "vue-drawing-canvas";
import { ref, onMounted, watch, getCurrentInstance } from "vue";

// import ski from "@/assets/skieur_opacity.png";
// import skiOriginal from "@/assets/skieur.png";
import ski from "@/assets/thales_opacity.png";
import skiOriginal from "@/assets/thales.png";
import compare from "@/components/compareImage.js";
import { useCredentialsStore } from "../stores/credentialsStore.js";
const store = useCredentialsStore();
const image = ref(null);
const lineJoin = ref("round");
const bestScore = ref(0);
const Score = ref(0);

const remainingTime = ref(5);
const clientFinished = ref(0);

const instance = getCurrentInstance();


function endTimer() {
    console.log('DrawPage >> endTimer >> data = too long');
    // Emit to server when finished
    store.pngPlayer = image; // Save with pinia
    Score.value = Math.round((Score.value / bestScore.value) * 10000) / 100;
    store.scorePlayer = Score.value; // Save with pinia
    instance.appContext.config.globalProperties.$socket.emit('player-finished', image, Score.value);
}

watch(image, () => {
    compare(skiOriginal, image.value, (result) => {
        if (result > 0) Score.value = result;
    });
});

onMounted(() => {
    // When other player finished
    instance.appContext.config.globalProperties.$socket.on('client-finished', (png, score) => {
        console.log('DrawPage >> client-finished >> data too long');
        store.pngClient = png._value; // Save with pinia
        store.scoreClient = score; // Save with pinia
        clientFinished.value = 1;
    });

    compare(skiOriginal, skiOriginal, function (result) {
        bestScore.value = result;
    });

    const interval = setInterval(() => {
        remainingTime.value--;

        if (remainingTime.value === 0) {
          clearInterval(interval);
          endTimer();
        }
      }, 1000);
});

async function sendDataToServer(pseudo, score) {
    var formData = new FormData();

    formData.append("pseudo", pseudo);
    formData.append("score", score);
    formData.append("enemy_pseudo", "Stella");
    formData.append("enemy_score", 0);

    // let value = await fetch("http://82.66.173.132/?api=parapaint", {
    //     method: "POST",
    //     body: formData,
    // });
    // // let value = axios.get("http://82.66.173.132/?api=parapaint");
    let value = null;
    try {
        value = await fetch("http://82.66.173.132/?api=parapaint", {
            method: "POST",
            body: formData,
        });
        console.log("Data sent successfully:", value.data);
    } catch (error) {
        console.error("Error sending data:", error);
    }

    console.log(value);
    return value;

    // const url = "http://82.66.173.132/api=parapaint";
    // const data = {
    //     data: [
    //         {
    //             pseudo: pseudo,
    //             score: score,
    //         },
    //     ],
    // };

    // try {
    //     const response = await axios.post(url, data);
    //     console.log("Data sent successfully:", response.data);
    // } catch (error) {
    //     console.error("Error sending data:", error);
    // }
}

const routes = [
    {
        path: "/result",
        name: "Result",
        component: () => import("../views/Result-page.vue"),
    },
];
</script>

<template>
    <div>
        <h2 v-if="remainingTime != 0">Time remaining: {{ remainingTime }} seconds</h2>
        <div v-else>
            <h2>Time's up!!</h2>
            <div v-if="clientFinished != 0">
                <router-link :to="routes[0].path">
                    <h1>Access result</h1>
                </router-link>
            </div>
            <p v-else>Waiting for other player to finish...</p>

        </div>
        <p v-if="remainingTime != 0">Precision : {{ Math.round((Score / bestScore) * 10000) / 100 }}%</p>
        <p v-else>Precision : {{ Score }}%</p>
        <button type="button" @click.prevent="$refs.VueCanvasDrawing.undo()">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-counterclockwise"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                />
                <path
                    d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
                />
            </svg>
            Undo
        </button>
        <button type="button" @click="sendDataToServer('Stolas', Score)">
            Send
        </button>
        <div v-if="remainingTime != 0" class="try_draw" style="position: relative">
            <vue-drawing-canvas
                ref="VueCanvasDrawing"
                v-model:image="image"
                :width="1067"
                :height="600"
                :line-join="lineJoin"
                saveAs="png"
                :background-image="ski"
                :lineWidth="25"
            />
        </div>
    </div>
</template>

<style lang="scss">
.header {
    width: 100%;
    background-color: rgb(62, 131, 214);
    border-bottom: 2px solid;
    border-color: rgb(215, 213, 213);
}
.header_h1 {
    color: rgb(255, 255, 255);
    font-size: larger;
    font-weight: bolder;
    text-align: left;
    padding: 16px;
    padding-left: 32px;
}
.try_draw {
    width: 1200px;
    height: 600px;
    border: 4px solid;
    border-color: rgb(215, 213, 213);
}
.randomBgImage {
    width: 1200px;
    height: 600px;
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 204px;
}
.footer {
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: rgb(62, 131, 214);
    color: rgb(255, 255, 255);
    font-size: medium;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
