import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/shopping',
      name: 'shopping',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Shopping.vue'),
      meta: { requiresAuth: true }
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
	},
    {
      path: '/signout',
      name: 'signout',
      component: () => import('./views/Signout.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to,from,next) => {
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    let currentUser = firebase.auth().currentUser
    if (requiresAuth) {
        if (!currentUser) {
            next({
                path: '/signin',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
	}
})

export default router;
