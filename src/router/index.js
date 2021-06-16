import { createRouter, createWebHashHistory } from 'vue-router'
// Views
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Advisors from '../views/Advisors.vue';
// Components for Headers and footers
import Myfooter from '../components/Myfooter.vue';
import Myheader from '../components/Myheader.vue';
import Hamburger from '../components/Hamburger.vue';
import Homeader from '../components/Homeader.vue';
import Homeburger from '../components/Homeburger.vue';
// Paises (countries) is the vue component where the APIs are implemented.
import Paises from '../components/Paises.vue';
// API sub-components
import AdOne from '../components/AdOne.vue';
import AdTwo from '../components/AdTwo.vue';
import AdThree from '../components/AdThree.vue';
import AdFour from '../components/AdFour.vue';
import AdFive from  '../components/AdFive.vue';
import AdSix from '../components/AdSix.vue';
import AdSeven from '../components/AdSeven.vue';
import AdEight from '../components/AdEight.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/advisors',
    name: 'Advisors',
    component: Advisors
  },
  {
    path: '/footer',
    name: 'Myfooter',
    component: Myfooter
  },
  {
    path: '/myheader',
    name: 'Myheader',
    component: Myheader
  },
  {
    path: '/hamburger',
    name: 'Hamburger',
    component: Hamburger
  },
  {
    path: '/homeader',
    name: 'Homeader',
    component: Homeader
  },
  {
    path: '/homeburger',
    name: 'Homeburger',
    component: Homeburger
  },
  {
    path: '/paises',
    name: 'Paises',
    component: Paises
  },
  {
    path: '/adone',
    name: 'AdOne',
    component: AdOne
  },
  {
    path: '/adtwo',
    name: 'AdTwo',
    component: AdTwo
  },
  {
    path: '/adthree',
    name: 'AdThree',
    component: AdThree
  },
  {
    path: '/adfour',
    name: 'AdFour',
    component: AdFour
  },
  {
    path: '/adfive',
    name: 'AdFive',
    component: AdFive
  },
  {
    path: '/adsix',
    name: 'AdSix',
    component: AdSix
  },
  {
    path: '/adseven',
    name: 'AdSeven',
    component: AdSeven
  },
  {
    path: '/adeight',
    name: 'AdEight',
    component: AdEight
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
