<template>
    <footer class="footer">
        <p class="footer__left">
            © Niels Ouvrard, Florian Griffon, Lenny Delgado
        </p>
        <p class="footer__right">Epitech Jam</p>
    </footer>
</template>

<style lang="scss">
.footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: rgb(62, 131, 214);
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;

    &__left {
        margin: 0;
        padding-left: 1rem;
    }

    &__right {
        margin: 0;
        padding-right: 3rem;
    }
}
</style>
