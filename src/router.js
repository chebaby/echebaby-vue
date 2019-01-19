import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Resume from './views/Resume.vue'
import Services from './views/Services.vue'
import Portfolio from './views/Portfolio.vue'
import Testimonial from './views/Testimonial.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component: Testimonial
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
