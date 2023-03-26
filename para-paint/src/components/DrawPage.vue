<script setup>
import VueDrawingCanvas from "vue-drawing-canvas";
import { ref } from "vue";
// import illu from "@/assets/illu.png";
import ski from "@/assets/skieur_opacity.png";
import compare from "@/components/compareImage.js";

const image = ref(null);
const lineJoin = ref("round");
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

function compareNow() {
    // console.log(ski);
    console.log(image.value);
    compare(ski, image.value, function (result) {
        console.log(result);
    });
}
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
    <div class="try_draw" style="position: relative">
        <vue-drawing-canvas
            ref="VueCanvasDrawing"
            v-model:image="image"
            :width="1200"
            :height="600"
            :line-join="lineJoin"
            saveAs="png"
            :background-image="ski"
        />
    </div>
    <button @click="compareNow">compareNow</button>
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
