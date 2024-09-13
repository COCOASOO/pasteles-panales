import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import ComoLoHacemos from '../views/ComoLoHacemos.vue'
import ProductoDetalle from '../views/ProductoDetalle.vue'
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
      name: 'productos',
      component: Productos
    },
    {
      path: '/producto/:id',
      name: 'productoDetalle',
      component: ProductoDetalle
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
