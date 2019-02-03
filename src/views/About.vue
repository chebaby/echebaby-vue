<template>
    <!--about area starts-->

    <div id="about" class="about-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-5 col-md-5">
                    <div class="about-left wow fadeInDown" data-wow-delay="0.4s">
                        <img :src="photo" alt="profile image">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7 col-md-7">
                    <div class="about-right wow fadeInDown" data-wow-delay="0.8s">
                        <h1>
                            I'm <span class="text-primary">Nour-Eddine ECH-CHEBABY</span> <br>
                            <span class="spelling">Pronounced : /ṇɔrdɪṇ/ /ʃɪbabɪ/</span> <br>
                            and I'm a Full stack Developer
                        </h1>
                        <p>I design and code beautifully simple things, and I love what I do.</p>
                        <hr>
                        <p>I will build your business online, whether a store, a service, a promotion, a non-profit, or an entirely online enterprise.</p>
                        <p>I use industry standard open source technology to keep your costs down and avoid vendor lock-in.</p>
                        <hr>
                        <div class="socials">
                            <ul>
                                <li><a href="https://twitter.com/__chebaby" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/chebaby" target="_blank"><i class="fa fa-github"></i></a></li>
                                <li><a href="https://stackoverflow.com/users/4325011/chebaby" target="_blank"><i class="fa fa-stack-overflow"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--about area ends-->
</template>

<script>
    
    export default {

        data() {

            return {

                photo: require('../assets/images/about/sketchy_me.png')
            }
        }
    }
</script>
