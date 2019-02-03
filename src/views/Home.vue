<template>
	<div class="h_100">
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
									<vue-typed-js :strings="['Back-end Developer.', 'Front-end Enthusiastic', 'Freelancer.']" :typeSpeed="90" :loop="true">
										<div class="typing text-affect"></div>
									</vue-typed-js>
									<router-link to="/contact" tag="p" class="banner-btn">
										<a>Contact Now</a>
                                    </router-link>
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
        console.log('%cHome', 'background: #222; color: #bada55; padding: 4px;');
    }
}
</script>
