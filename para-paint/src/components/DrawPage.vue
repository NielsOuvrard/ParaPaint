<script setup>
import TryDraw from "./TryDraw.vue";
</script>

<template>
    <!-- <vue-drawing-canvas ref="VueCanvasDrawing" /> -->

    <div class="try_draw">
        <TryDraw
            width="1200"
            height="600"
            saveAs="png"
            canvasId="TryDrawCanvas"
        />
        <div></div>
    </div>
    <!-- <div class="footer">
        <p>© Niels Ouvrard, Florian Griffon, Lenny Delgado</p>
        <p>Epitech Jam</p>
    </div> -->
</template>

<style scoped lang="scss">
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
.footer {
    // align-items: center;
    // width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-left: 32px;
    padding-right: 32px;
    background-color: rgb(62, 131, 214);
    color: rgb(255, 255, 255);
    font-size: medium;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
