import {
  Navbar
} from './../components/navbar.js'

import {
  Sidebar
} from './../components/sidebar.js'

import {
  Footer
} from './../components/footer.js'

import {
  About
} from './../components/about.js'

import {
  MainTemplate
} from './../templates/main-template.js'

const router = new VueRouter({
  routes: [{
    path: '/about',
    component: About,
    name: "About Page"
  }]
})

new Vue({
  el: '#app',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar,
    'footerbar': Footer
  },
  router,
  template: MainTemplate
})

Vue.use(VueRouter)



