import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Inicio.vue'
import Productos from '../views/PaginaProductos.vue'
import ComoLoHacemos from '../views/ComoLoHacemos.vue'
import Contacto from '../views/Contacto.vue'
import ProcesoPago from '../views/ProcesoPago.vue'

const routes = [
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
    path: '/proceso-pago/:productoId',
    name: 'ProcesoPago',
    component: ProcesoPago,
    props: true,
    beforeEnter: (to, from, next) => {
      if (from.name !== 'paginaProductos') {
        next({ name: 'home' });
      } else {
        next();
      }
    }
  },
  {
    path: '/proceso-pago',
    redirect: { name: 'home' }
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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
