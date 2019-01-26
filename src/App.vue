<template>
	<div id="app">
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

	export default {

		components: {

			TheNavbar
		},

		mounted() {

			var loaderElm = this.$refs.loader;

			$(loaderElm).fadeToggle();
		}
	}
</script>

<style lang="scss">
@import './assets/styles/index.scss';
</style>
