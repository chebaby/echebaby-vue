<template>
	<div>
		<!--invitation area starts-->
		<div class="invitation-area section-padding">
			<div class="container">
				<div class="row">
					<div class="single-invite text-center">
						<h2>do you have any project need to be done?</h2>
						<p>Interested in collaborating or investing? <br> I’m always open to discussing product design work or partnership opportunities.</p>
						<p>Let's make something special.</p>
						<a href="#contact" class="my-btn-3">Get started</a>
					</div>
				</div>
			</div>
		</div>
		<!--invitation area ends-->

		<!--contact area starts-->
		<div id="contact" class="contact-area section-padding">
			<div class="container">
				<div class="row">
					<div class="section-header">
						<h2>contact me</h2>
						<p class="line1"></p>
						<p class="line2"></p>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12 col-lg-12">

						<div class="top-contact">

							<div class="row">
								<div class="col-sm-4 col-md-4">
									<div class="top-contact-text wow fadeInDown" data-wow-delay="0.2s">

										<div class="contact-icon">
											<ul>
												<li><a href="#"><i class="fa fa-map-marker"></i></a></li>
											</ul>
										</div>

										<h2>Address / Street</h2>
										<p>Office N ° 6 2nd floor, building Amal Anzi avenue Hassan 1er, city Almassira 80000, Agadir - Morocco</p>
									</div>
								</div>
								<div class="col-sm-4 col-md-4">
									<div class="top-contact-text wow fadeInDown" data-wow-delay="0.4s">
										<div class="contact-icon">
											<ul>
												<li><a href="#"><i class="fa fa-phone"></i></a></li>
											</ul>
										</div>

										<h2>Contact Number</h2>
										<p>+212 - 601 - 548 - 257</p>
									</div>
								</div>
								<div class="col-sm-4 col-md-4">
									<div class="top-contact-text wow fadeInDown" data-wow-delay="0.6s">
										<div class="contact-icon">
											<ul>
												<li><a href="#"><i class="fa fa-envelope"></i></a></li>
											</ul>
										</div>

										<h2>Email</h2>
										<p>ech.chebaby@gmail.com</p>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-contact-form">

						<form id="contact-form" method="post" action="contact.php">

							<div class="messages"></div> <!--you can change the message in contact.php file -->

							<div class="controls">

								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<input id="form_name" type="text" name="name" class="form-control" placeholder="Enter your full name *" required="required" data-error="Fullname is required.">
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input id="form_email" type="email" name="email" class="form-control" placeholder="Enter your email *" required="required" data-error="Valid email is required.">
											<div class="help-block with-errors"></div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<textarea id="form_message" name="message" class="form-control" placeholder="Your Message *" rows="4" required="required" data-error="Leave a message for me"></textarea>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-12">
										<button class="btn btn-send" value="">Send message</button>
									</div>
								</div>
							</div>

						</form>

					</div>


				</div>
			</div>

		</div>
		<!--contact area ends-->

		<!--Footer Area Starts-->

		<div class="footer-area">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
						<p>Made with <span style="font-size:100%;color:red;">&hearts;</span>
							<a href="https://www.codester.com/user/MouriTheme/" target="_blank">Nour-Eddine ECH-CHEBABY</a></p>
						</div>
					</div>
				</div>
			</div>

			<!--Footer Area Ends-->
		</div>
	</template>

	<script>
		export default {}
	</script>