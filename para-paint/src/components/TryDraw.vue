<script setup>
import { ref } from "vue";
import VueDrawingCanvas from "vue-drawing-canvas";
import imageBg from "@/assets/testImgBg.png";
import compare from "@/components/compareImage.js";

const image = ref(null);

function compareNow() {
    console.log(imageBg);
    console.log(image.value);
    compare(imageBg, image.value, function (result) {
        console.log(result);
    });
}
// compare(imageBg, image, function (result) {
//     console.log(result);
// });
</script>

<template>
    <vue-drawing-canvas
        ref="VueCanvasDrawing"
        line-join="round"
        :background-image="imageBg"
        v-model:image="image"
    />
    <!-- <div class="output">
        <p>Output:</p>
        <img :src="image" style="border: solid 1px #000000" />
    </div> -->
    <button @click="compareNow">compareNow</button>
</template>
