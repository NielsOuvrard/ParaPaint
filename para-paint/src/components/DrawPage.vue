<script setup>
import VueDrawingCanvas from "vue-drawing-canvas";
import { ref, onMounted, watch } from "vue";
// import illu from "@/assets/illu.png";
import ski from "@/assets/skieur_opacity.png";
import skiOriginal from "@/assets/skieur_no_opacity.png";
import compare from "@/components/compareImage.js";

const image = ref(null);
const lineJoin = ref("round");
const bestScore = ref(0);
const Score = ref(0);

watch(image, (newValue) => {
    if (newValue) compareNow();
});

function compareNow() {
    compare(skiOriginal, image.value, function (result) {
        Score.value = result;
    });
}
// const Score = computed(() => ({
//     return compare(skiOriginal, image.value, function (result) {
//         return result;
//     });
// });
// const eraser = ref(false);
// const disabled = ref(false);
// const fillShape = ref(false);
// const line = ref(5);
// const strokeType = ref("dash");
// const lineCap = ref("square");
// const backgroundColor = ref("#FFFFFF");
// const additionalImages = ref([]);
// const images = ref([illu, ski]);
// const selectedImage = ref(null);

// function randomItem(items) {
//     return items[Math.random() % items.length];
// }
// onMounted(() => {
//     selectedImage.value = randomItem(images);
//     console.log(selectedImage.value);
//     // }
// });

onMounted(() => {
    compare(skiOriginal, skiOriginal, function (result) {
        bestScore.value = result;
    });
});
// computed(() => {

// })
// function getStrokes() {
//     window.localStorage.setItem(
//         "vue-drawing-canvas",
//         JSON.stringify(VueDrawingCanvas.getAllStrokes())
//     );
//     alert(
//         "Strokes saved, reload your browser to see the canvas with previously saved image"
//     );
// }
// function removeSavedStrokes() {
//     window.localStorage.removeItem("vue-drawing-canvas");
//     alert("Strokes cleared from local storage");
// }
</script>

<template>
    <p>{{ (Score / bestScore) * 100 }}%</p>
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
    margin-left: auto;
    margin-right: auto;
    margin-top: 64px;
    margin-bottom: 64px;
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
