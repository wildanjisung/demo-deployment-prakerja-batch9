import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultView from '@/layouts/DefaultView.vue'
import SettingView from '../views/SettingView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import PokemonView from '../views/PokemonView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:id',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/setting',
    component: DefaultView,
    children:[
      {
        path: '', // /setting
        name: 'setting',
        component: SettingView,
      },
      {
        path: 'privacy/:id', // /setting/privacy
        name: 'privacy',
        component: PrivacyView,
      },
    ]
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
