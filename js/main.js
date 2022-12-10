import {
    Navbar
  } from './components/navbar.js'
  
  import {
    MainTemplate
  } from './templates/main-template.js'

  import {
    About
  } from './templates/about-template.js'

new Vue({
    el: '#app', // This should be the same as your <div id=""> from earlier.
    components: {
      'navbar': Navbar
    },
    router,
    template: MainTemplate
  })

  Vue.use(VueRouter)

  const router = new VueRouter({
    routes: [{
      path: '/about',
      component: About,
      name: "About Us Page"
    }]
  })

