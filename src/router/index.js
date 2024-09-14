import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Inicio.vue'
import Productos from '../views/PaginaProductos.vue'
import ComoLoHacemos from '../views/ComoLoHacemos.vue'
import Contacto from '../views/Contacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productos',
      name: 'paginaProductos',
      component: Productos
    },

    {
      path: '/como-lo-hacemos',
      name: 'comoLoHacemos',
      component: ComoLoHacemos
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    }
  ]
})

export default router
