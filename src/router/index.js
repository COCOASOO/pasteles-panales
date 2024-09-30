import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Inicio.vue'
import Productos from '../views/PaginaProductos.vue'
import ComoLoHacemos from '../views/ComoLoHacemos.vue'
import Contacto from '../views/Contacto.vue'
import ProcesoPago from '../views/ProcesoPago.vue'
import DetallesProducto from '@/views/DetallesProducto.vue'
import Blog from '@/views/Blog.vue'
import BlogPost from '@/views/BlogPost.vue'
import CuriosidadPost from '../views/CuriosidadPost.vue'

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
      if (from.name !== 'paginaProductos' && from.name !== 'DetallesProducto') {
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
  },
  {
    path: '/productos/:id',  // Cambiado de '/producto/:id' a '/productos/:id'
    name: 'DetallesProducto',
    component: DetallesProducto
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/blog/curiosidad/:id',
    name: 'CuriosidadPost',
    component: CuriosidadPost
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
