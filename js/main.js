import {
  Navbar
} from './../components/navbar.js'

import {
  Sidebar
} from './../components/sidebar.js'

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
  el: '#app', // This should be the same as your <div id=""> from earlier.
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar
  },
  router,
  template: MainTemplate
})

Vue.use(VueRouter)



