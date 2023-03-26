<script setup>
import VueDrawingCanvas from "vue-drawing-canvas";
import { ref, onMounted, watch } from "vue";

// import ski from "@/assets/skieur_opacity.png";
// import skiOriginal from "@/assets/skieur.png";
import ski from "@/assets/thales_opacity.png";
import skiOriginal from "@/assets/thales.png";
import compare from "@/components/compareImage.js";

const image = ref(null);
const lineJoin = ref("round");
const bestScore = ref(0);
const Score = ref(0);

watch(image, () => {
    compare(skiOriginal, image.value, (result) => {
        if (result > 0) Score.value = result;
    });
});

onMounted(() => {
    compare(skiOriginal, skiOriginal, function (result) {
        bestScore.value = result;
    });
});
</script>

<template>
    <div>
        <p>Precision : {{ Math.round((Score / bestScore) * 10000) / 100 }}%</p>
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
        <div class="try_draw" style="position: relative">
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
