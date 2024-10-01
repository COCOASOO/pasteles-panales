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
    component: Home,
    meta: {
      title: 'Bienvenido a Pasteles de Pañales',
      description: 'Descubre nuestras creaciones únicas de pasteles de pañales para bebés.'
    }
  },
  {
    path: '/productos',
    name: 'paginaProductos',
    component: Productos,
    meta: {
      title: 'Nuestros Productos',
      description: 'Explora nuestra variedad de pasteles de pañales y regalos para bebés.'
    }
  },
  {
    path: '/proceso-pago/:productoId',
    name: 'ProcesoPago',
    component: ProcesoPago,
    props: true,
    meta: {
      title: 'Proceso de Pedido',
      description: 'Sigue los pasos para realizar tu pedido de pasteles de pañales.'
    },
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
    component: ComoLoHacemos,
    meta: {
      title: '¿Cómo lo Hacemos?',
      description: 'Conoce el proceso detrás de nuestros pasteles de pañales.'
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto,
    meta: {
      title: 'Contacto',
      description: 'Ponte en contacto con nosotros para más información sobre nuestros productos.'
    }
  },
  {
    path: '/productos/:id',
    name: 'DetallesProducto',
    component: DetallesProducto,
    meta: {
      title: 'Detalles del Producto',
      description: 'Obtén más información sobre el producto seleccionado.'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog de Pasteles de Pañales',
      description: 'Explora nuestro blog para obtener ideas y consejos sobre pasteles de pañales.'
    }
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    meta: {
      title: 'Artículo del Blog',
      description: 'Lee nuestro artículo sobre pasteles de pañales y consejos útiles.'
    }
  },
  {
    path: '/blog/curiosidad/:id',
    name: 'CuriosidadPost',
    component: CuriosidadPost,
    meta: {
      title: 'Curiosidades sobre Pasteles de Pañales',
      description: 'Descubre curiosidades y datos interesantes sobre nuestros productos.'
    }
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
