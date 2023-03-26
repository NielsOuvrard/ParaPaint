<template>
    <div class="try_draw" style="position: relative">
        <vue-drawing-canvas
            ref="VueCanvasDrawing"
            v-model:image="image"
            :width="1200"
            :height="600"
            :stroke-type="strokeType"
            :line-cap="lineCap"
            :line-join="lineJoin"
            :fill-shape="fillShape"
            :eraser="eraser"
            :lineWidth="line"
            :background-color="backgroundColor"
            :watermark="watermark"
            :initial-image="initialImage"
            saveAs="png"
            :lock="disabled"
            :additional-images="additionalImages"
            :background-image="ski"
        />
    </div>
</template>

<script setup>
import VueDrawingCanvas from "vue-drawing-canvas";
import { onMounted, ref } from "vue";
import illu from "@/assets/illu.png";
import ski from "@/assets/skieur_opacity.png";

// const x = ref(0);
// const y = ref(0);
const image = ref(null);
const eraser = ref(false);
const disabled = ref(false);
const fillShape = ref(false);
const line = ref(5);
// const color = ref("#ff0000 ");
const strokeType = ref("dash");
const lineCap = ref("square");
const lineJoin = ref("round");
const backgroundColor = ref("#FFFFFF");
const watermark = ref(null);
const additionalImages = ref([]);
// const debug = ref("debug");
const images = ref([illu, ski]);
const selectedImage = ref(null);

function randomItem(items) {
    return items[Math.random() % items.length];
}
onMounted(() => {
    selectedImage.value = randomItem(images);
    console.log(selectedImage.value);
    // if ("vue-drawing-canvas" in window.localStorage) {
    //     initialImage = JSON.parse(
    //         window.localStorage.getItem("vue-drawing-canvas")
    //     );
    // }
});

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
