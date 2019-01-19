<template>
	<div>
		<!--slider area starts-->
		<div id="home"></div>
		<div class="banner-area" id="slider-area">
			<div id="particles-js"></div>
			<div class="banner-table">
				<div class="banner-table-cell">
					<div class="welcome-text">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<h2>Nour-Eddine ECH-CHEBABY</h2>
									<div class="text-affect"></div>
									<p class="banner-btn"><a href="#contact">Contact Now</a></p>
									<div class="clearfix"></div>
									<div class="mouse-icon hidden-sm hidden-xs">
										<div class="wheel"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--slider area ends-->
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'home',

	mounted() {
        console.log('Home');
        console.log($.fn.jquery);
    }
}
</script>
