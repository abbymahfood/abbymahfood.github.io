import {
  Navbar
} from './../components/navbar.js';

import {
  Sidebar
} from './../components/sidebar.js';

import {
  Footer
} from './../components/footer.js';

import {
  About
} from './../components/about.js';

import {
  Education
} from './../components/education.js';

import {
  Cooking
} from './../components/cooking.js';

import {
  Pets
} from './../components/pets.js';

import {
  MainTemplate
} from './../templates/main-template.js';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: About,
      name: "About Page"
    },
    {
      path: '/education',
      component: Education,
      name: "Education Page"
    },
    {
      path: '/cooking',
      component: Cooking,
      name: "Cooking Page"
    },
    {
      path: '/pets',
      component: Pets,
      name: "Pets Page"
    }
  ]
});

new Vue({
  el: '#app',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar,
    'footerbar': Footer
  },
  router,
  template: MainTemplate
});

Vue.use(VueRouter);