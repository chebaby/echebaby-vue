<template>
	<div id="app" class="h_100">
		<!--preloader starts-->
		<div ref="loader" class="loader_bg">
			<div class="loader"></div>
		</div>
		<!--preloader ends-->

		<TheNavbar />
	</div>
</template>

<script>
	import TheNavbar from './components/TheNavbar.vue';
	import WOW from 'wowjs';

	export default {

		components: {

			TheNavbar
		},

		mounted() {

			console.log('%cApp', 'background: #222; color: #bada55; padding: 4px;');

			var loaderElm = this.$refs.loader;

			$(loaderElm).fadeToggle();


			new WOW.WOW().init();
		}
	}
</script>

<style lang="scss">
@import './assets/styles/index.scss';
</style>
