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
  Courses
} from './../components/courses.js';

import {
  Cooking
} from './../components/cooking.js';

import {
  Pets
} from './../components/pets.js';

import {
  Resume
} from './../components/resume.js';

import {
  Gallery
} from '../components/gallery.js';

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
      path: '/courses',
      component: Courses,
      name: "Courses Page"
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
    },
    {
      path: '/resume',
      component: Resume,
      name: "Resume Page"
    },
    {
      path: '/gallery',
      component: Gallery,
      name: "Gallery Page"
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