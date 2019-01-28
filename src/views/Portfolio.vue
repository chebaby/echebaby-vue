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
                        <a class="view img" :href="doctori.original">
                            
                            <img :src="doctori.small" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Symfony</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInRight" data-wow-delay="0.6s">
                        <a class="view img" :href="tripdiem.original"> 
                            <img :src="tripdiem.small" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Javascript</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInLeft" data-wow-delay="0.8s">
                        <a class="view img" :href="fooz.original"> 
                            <img :src="fooz.small" alt="portfolio image"> 
                        </a>

                        <div class="gallery-text">
                            <h2>Android</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInDown" data-wow-delay="1s">
                        <a class="view img" :href="placeholder.original"> <!--edit image here-->
                            <img :src="placeholder.small" alt="portfolio image"> <!--edit image here-->
                        </a>

                        <div class="gallery-text">
                            <h2>Poster Design</h2>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-4">
                    <div class="gallery-items wow fadeInRight" data-wow-delay="1.2s">
                        <a class="view img" :href="placeholder.original">
                            <img :src="placeholder.small" alt="portfolio image">
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
                },
                doctori : {
                    original : require('../assets/images/portfolio/doctori.jpg'),
                    small : require('../assets/images/portfolio/small/doctori.png')
                },
                tripdiem : {
                    original : require('../assets/images/portfolio/tripdiem.jpg'),
                    small : require('../assets/images/portfolio/small/tripdiem.png')
                },
                fooz : {
                    original : require('../assets/images/portfolio/fooz.jpg'),
                    small : require('../assets/images/portfolio/small/fooz.png')
                },
                placeholder : {
                    original : require('../assets/images/portfolio/1.png'),
                    small : require('../assets/images/portfolio/small/1.png')
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