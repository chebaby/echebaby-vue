<template>
    <div id="app">
        <!--preloader starts
        <div class="loader_bg"><div class="loader"></div></div>
        preloader ends-->

        <TheNavbar />
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {

    components: {

        TheNavbar
    }
}
</script>

<style lang="scss">
@import './assets/styles/index.scss';
</style>
