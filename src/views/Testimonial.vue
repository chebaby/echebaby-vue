<template>
	<div id="testimonial" class="testimonial-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-header">
                        <h2>What Buyer's Say</h2>
                        <p class="line1"></p>
                        <p class="line2"></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-8 col-md-offset-2">
                    <div id="testimonial-slider" class="owl-carousel">
                        <div class="single-testimonial">
                            <div class="testimonial-content">
                                <p>Matt was a real pleasure to work with and we look forward to working with him again. He’s the kind of designer you can trust with a project from start to finish.</p>
                            </div>
                            <div class="pic">
                                <img :src="images.testimonial_1" alt="testimonial image"> <!--here you can change image-->
                            </div>
                            <div class="testimonial-title">
                                <h3>Pascal Tremblay</h3>
                                <small>Creative Lead, Good Kind</small>
                            </div>
                        </div>

                        <div class="single-testimonial">
                            <div class="testimonial-content">
                                <p>Daniel Fischer is one of the most talented, intelligent, consistent and genuinely good hearted people that I have had the opportunity to work with. <br>Daniel possess an incredibly rare mix of design awareness, development talent and business intelligence. He is my go-to tech resource (Pocket CTO if you will) and quite honestly, has impressed me with positive outcomes on every project that I've had the opportunity to work with him on.</p>
                            </div> <!--copy and paste the best review you have got from buyer inside p tag-->
                            <div class="pic">
                                <img :src="images.testimonial_2" alt="testimonial image"> <!--here you can change image-->
                            </div>
                            <div class="testimonial-title">
                                <h3>Raaid Hossain</h3> <!--you can change the reviewer name here-->
                                <small>VP & Co-Founder, Wiser</small> <!--reviewer's designation-->
                            </div>
                        </div>

                        <div class="single-testimonial">
                            <div class="testimonial-content">
                                <p>Daniel is a great guy to work with. Good spirit, competent, and more than willing to put to long hours in to meet our deadline --- H works with a lot of structure and understanding in a area of web development where this is rare. He's got a eye for design and good coding sense.</p>
                            </div> <!--copy and paste the best review you have got from buyer inside p tag-->
                            <div class="pic">
                                <img :src="images.testimonial_3" alt="testimonial image"> <!--here you can change image-->
                            </div>
                            <div class="testimonial-title">
                                <h3>Benjamin Bryant</h3> <!--you can change the reviewer name here-->
                                <small>Special Projects, Pebble</small> <!--reviewer's designation-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/scripts/owl.carousel';

	export default {

        data() {

            return {

                images: {

                    testimonial_1: require('../assets/images/testimonial/1.png'),
                    testimonial_2: require('../assets/images/testimonial/2.png'),
                    testimonial_3: require('../assets/images/testimonial/3.png')
                }
            }
        },

        mounted() {

            console.log('%cTestimonial', 'background: #222; color: #bada55; padding: 4px;');

            // 

            $("#testimonial-slider").owlCarousel({
                items: 1,

                itemsDesktop: [1000, 1],

                itemsDesktopSmall: [979, 1],

                itemsTablet: [768, 1],

                pagination: true,

                navigation: false,

                slideSpeed: 1000,

                singleItem: false,

                autoplay: true,

                loop: true
            });
        }
    }
</script>