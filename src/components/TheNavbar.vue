<template>
    <div class="h_100">
        <!--
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
        -->
        <!--navigation area starts-->

        <header class="nav-area navbar-fixed-top">
            <div class="container">
                <div class="row">
                    <!--main menu starts-->

                    <div class="col-md-12">
                        <div class="main-menu">
                            <div class="navbar navbar-cus">
                                <div class="navbar-header">
                                    <router-link to="/" exact>
                                        <a class="navbar-brand">Nour-Eddine</a>
                                    </router-link>
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                                <div class="navbar-collapse collapse">
                                    <nav>
                                        <ul class="nav navbar-nav navbar-right">
                                            <router-link tag="li" active-class="active" to="/" exact>
                                                <a class="smooth-menu">Home</a>
                                            </router-link>
                                            <router-link tag="li" active-class="active" to="/about">
                                                <a class="smooth-menu">About</a>
                                            </router-link>
                                            <router-link tag="li" active-class="active" to="/resume">
                                                <a class="smooth-menu">Resume</a>
                                            </router-link>
                                            <router-link tag="li" active-class="active" to="/services">
                                                <a class="smooth-menu">Services</a>
                                            </router-link>
                                            <router-link tag="li" active-class="active" to="/portfolio">
                                                <a class="smooth-menu">Portfolio</a>
                                            </router-link>
                                            <router-link tag="li" active-class="active" to="/testimonial">
                                                <a class="smooth-menu">Testimonial</a>
                                            </router-link>
                                            <router-link tag="li" active-class="active" to="/contact">
                                                <a class="smooth-menu">Contact</a>
                                            </router-link>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--main menu ends-->
                </div>
            </div>
        </header>

        <!--navigation area ends-->

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'TheNavbar',

        mounted() {

            console.log('%cTheNavbar', 'background: #222; color: #bada55; padding: 4px;');

            // menu background color change while scroll

            $(window).on('scroll', function () {
                var menu_area = $('.nav-area');
                if ($(window).scrollTop() > 200) {
                    menu_area.addClass('sticky_navigation');
                } else {
                    menu_area.removeClass('sticky_navigation');
                }
            });

            // menu hides after click (mobile menu)

            $(document).on('click', '.navbar-collapse.in', function (e) {
                if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                    $(this).collapse('hide');
                }
            });

            // scrollspy js (bootstrap plugin)

            $('body').scrollspy({
                target: '.navbar-collapse',
                offset: 195
            });
        }
    }
</script>
