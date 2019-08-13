import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import firebase from 'firebase'

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
      path: '/shopping',
      name: 'shopping',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Shopping.vue')
    },
	{
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
	},
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
	}
  ]
})
