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
                        <a class="view img" :href="fundbid.original">  
                            <img :src="fundbid.small" alt="portfolio image">
                            
                        </a>

                        <div class="gallery-text">
                            <h2>Laravel</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInDown" data-wow-delay="0.4s">
                        <a class="view img" href="@/assets/images/portfolio/doctori.jpg">
                            
                            <img src="../assets/images/portfolio/small/doctori.png" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Symfony</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInRight" data-wow-delay="0.6s">
                        <a class="view img" href="@/assets/images/portfolio/tripdiem.jpg"> 
                            <img src="../assets/images/portfolio/small/tripdiem.png" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Javascript</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInLeft" data-wow-delay="0.8s">
                        <a class="view img" href="@/assets/images/portfolio/fooz.jpg"> 
                            <img src="../assets/images/portfolio/small/fooz.png" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Android</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInDown" data-wow-delay="1s">
                        <a class="view img" href="@/assets/images/portfolio/small/5.png"> <!--edit image here-->
                            <img src="../assets/images/portfolio/small/5.png" alt="portfolio image"> <!--edit image here-->
                        </a>

                        <div class="gallery-text">
                            <h2>Poster Design</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInRight" data-wow-delay="1.2s">
                        <a class="view img" href="@/assets/images/portfolio/6.png">
                            <img src="../assets/images/portfolio/small/6.png" alt="portfolio image">
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
    import '../assets/scripts/jquery.magnific-popup';
	export default {

        data() {

            return {
                fundbid : {
                    original : require('../assets/images/portfolio/fundbid.jpg'),
                    small : require('../assets/images/portfolio/small/fundbid.png')
                }
            }
        },

        mounted() {

            console.log('%cPortfolio', 'background: #222; color: #bada55; padding: 4px;');

            $('.view').magnificPopup({
                type:'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });
        }
    }
</script>