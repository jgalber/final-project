import { createRouter, createWebHashHistory } from 'vue-router'
// Views
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Destinations from '../views/Destinations.vue';
// Components
import Myfooter from '../components/Myfooter.vue';
import Myheader from '../components/Myheader.vue';
import Hamburger from '../components/Hamburger.vue';


const routes = [
  {
    path: '/home',
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
    path: '/destinations',
    name: 'Destinations',
    component: Destinations
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
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
