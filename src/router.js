import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Option from './components/Lista-Opciones'
import Inventario from './views/Inventario'
import Ventas from './views/Ventas'
import Boletas from './views/Boletas'
import DBS from './services/DBService.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Option
    },
    {
      path: '/Inventario',
      name: 'List',
      component: Inventario
    },
    {
      path: '/Ventas',
      name: 'Tabla Venta',
      component: Ventas
    },
    {
      path: '/Boletas',
      name: 'Registro de Boletas',
      component: Boletas
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})