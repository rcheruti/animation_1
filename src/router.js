import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TimelineSeek from './views/TimelineSeek.vue'
import Spirit from './views/Spirit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home ,
      meta: { label: 'Home' }
    },
    {
      path: '/timeline-seek',
      name: 'timeline-seek',
      component: TimelineSeek ,
      meta: { label: 'Timeline Seek' }
    },
    {
      path: '/spirit',
      name: 'spirit',
      component: Spirit ,
      meta: { label: 'Spirit' }
    }
  ]
})
