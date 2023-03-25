<template>
    <!-- <vue-drawing-canvas ref="VueCanvasDrawing" /> -->
    <div class="header">
        <div class="header_h1">
            <h1>ParaPaint</h1>
        </div>
    </div>
    <div class="try_draw">
        <TryDraw
            width="1200"
            height="600"
            saveAs="png"
            canvasId="TryDrawCanvas"
        />
        <div></div>
    </div>
    <div class="footer">
        <p>© Niels Ouvrard, Florian Griffon, Lenny Delgado</p>
        <p>Epitech Jam</p>
    </div>
</template>

<script>
import TryDraw from "./TryDraw.vue";

export default {
    name: "DarwPage",
    components: {
        TryDraw,
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
.footer {
    width: 100%;
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
