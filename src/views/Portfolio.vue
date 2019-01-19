<template>
	<div id="portfolio" class="portfolio-area section-padding">
        <div class="container">
            <div class="row">
                <div class="section-header">
                    <h2>My Works</h2>
                    <p class="line1"></p>
                    <p class="line2"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInLeft" data-wow-delay="0.2s">
                        <a class="view img" href="<%= require('./assets/images/portfolio/fundbid.jpg') %>">  
                            <img src="<%= require('./assets/images/portfolio/small/fundbid.png') %>" alt="portfolio image">
                            
                        </a>

                        <div class="gallery-text">
                            <h2>Laravel</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInDown" data-wow-delay="0.4s">
                        <a class="view img" href="<%= require('./assets/images/portfolio/doctori.jpg') %>">
                            
                            <img src="<%= require('./assets/images/portfolio/small/doctori.png') %>" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Symfony</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInRight" data-wow-delay="0.6s">
                        <a class="view img" href="<%= require('./assets/images/portfolio/tripdiem.jpg') %>"> 
                            <img src="<%= require('./assets/images/portfolio/small/tripdiem.png') %>" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Javascript</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInLeft" data-wow-delay="0.8s">
                        <a class="view img" href="<%= require('./assets/images/portfolio/fooz.jpg') %>"> 
                            <img src="<%= require('./assets/images/portfolio/small/fooz.png') %>" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Android</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInDown" data-wow-delay="1s">
                        <a class="view img" href="<%= require('./assets/images/portfolio/small/5.png') %>"> <!--edit image here-->
                            <img src="<%= require('./assets/images/portfolio/small/5.png') %>" alt="portfolio image"> <!--edit image here-->
                        </a>

                        <div class="gallery-text">
                            <h2>Poster Design</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInRight" data-wow-delay="1.2s">
                        <a class="view img" href="<%= require('./assets/images/portfolio/small/6.png') %>"> <!--edit image here-->
                            <img src="<%= require('./assets/images/portfolio/small/6.png') %>" alt="portfolio image"> <!--edit image here-->
                        </a>

                        <div class="gallery-text">
                            <h2>brochure</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {}
</script>