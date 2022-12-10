import {
  Navbar
} from './../components/navbar.js'

import {
  MainTemplate
} from './../templates/main-template.js'

import {
  AboutTemplate
} from './../templates/about-template.js'

const router = new VueRouter({
  routes: [{
    path: '/about',
    component: AboutTemplate,
    name: "About Page"
  }]
})

new Vue({
  el: '#app', // This should be the same as your <div id=""> from earlier.
  components: {
    'navbar': Navbar
  },
  router,
  template: MainTemplate
})

Vue.use(VueRouter)



