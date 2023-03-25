<template>
    <div class="try_draw" style="position: relative;">
        <div class="randomBgImage">
          <img style="width: 1000px; height : 400px; object-fit: fill;" :src="selectedImage" alt="https://picsum.photos/1200/600">
        </div>
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
          :color="color"
          :background-color="backgroundColor"
          :background-image="backgroundImage"
          :watermark="watermark"
          :initial-image="initialImage"
          saveAs="png"
          :lock="disabled"
          :additional-images="additionalImages"
          :styles="{
            opacity: 0.35,
          }"
          />
    </div>
</template>

<script>
import VueDrawingCanvas from "vue-drawing-canvas";

export default {
    name: "DrawPage",
    components: {
        VueDrawingCanvas,
    },
    data() {
    return {
      x: 0,
      y: 0,
      image: null,
      eraser: false,
      disabled: false,
      fillShape: false,
      line: 5,
      color: "#ff0000 ",
      strokeType: "dash",
      lineCap: "square",
      lineJoin: "miter",
      backgroundImage: null,
      backgroundColor: "#FFFFFF",
      watermark: null,
      additionalImages: [],
      debug: "debug",
      images: [
      'https://zupimages.net/up/23/12/mez6.png',
      'https://zupimages.net/up/23/12/p0pm.png',
    ],
    selectedImage: null
    };
  },
  mounted() {
    this.selectedImage = this.randomItem(this.images)
    if ("vue-drawing-canvas" in window.localStorage) {
      this.initialImage = JSON.parse(
        window.localStorage.getItem("vue-drawing-canvas")
      );
    }
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    getStrokes() {
      window.localStorage.setItem(
        "vue-drawing-canvas",
        JSON.stringify(this.$refs.VueCanvasDrawing.getAllStrokes())
      );
      alert(
        "Strokes saved, reload your browser to see the canvas with previously saved image"
      );
    },
    removeSavedStrokes() {
      window.localStorage.removeItem("vue-drawing-canvas");
      alert("Strokes cleared from local storage");
    },
  },
};

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
    height : 600px;
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
