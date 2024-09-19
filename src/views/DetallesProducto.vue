<template>
  <div v-if="producto" class="container mx-auto px-4 py-8">
    <div class="mb-4">
      <button 
        @click="volverAProductos" 
        class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
      >
       Volver a productos
      </button>
    </div>
    <div class="flex flex-wrap -mx-4">
      <!-- Galería de imágenes -->
      <div class="w-full md:w-1/2 px-4 mb-8">
        <div class="relative">
          <div class="w-full h-[32rem] overflow-hidden rounded-lg shadow-lg bg-white">
            <img 
              :src="imagenPrincipal" 
              :alt="producto.nombre" 
              class="w-full h-full object-center"
              :class="{
                'object-cover': producto.orientacionImagen === 'horizontal',
                'object-contain': producto.orientacionImagen === 'vertical'
              }"
            >
          </div>
          <div class="flex mt-4 space-x-2 overflow-x-auto">
            <div 
              v-for="(imagen, index) in producto.imagenes" 
              :key="index"
              class="w-20 h-20 flex-shrink-0 overflow-hidden rounded cursor-pointer hover:opacity-75 transition-opacity"
              :class="{ 'border-2 border-blue-500': imagenPrincipal === imagen }"
              @click="imagenPrincipal = imagen"
            >
              <img 
                :src="imagen" 
                :alt="`${producto.nombre} - imagen ${index + 1}`"
                class="w-full h-full object-center"
                :class="{
                  'object-cover': producto.orientacionImagen === 'horizontal',
                  'object-contain': producto.orientacionImagen === 'vertical'
                }"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Detalles del producto -->
      <div class="w-full md:w-1/2 px-4">
        <h1 class="text-3xl font-bold mb-4">{{ producto.nombre }}</h1>
        <p class="text-xl font-semibold mb-4">{{ producto.precioBase }}€</p>
        <div class="prose max-w-none mb-6">{{ producto.descripcion }}</div>
        <div v-if="producto.opciones && producto.opciones.length > 0" class="mb-6">
          <h3 class="text-lg font-semibold mb-2">Opciones adicionales:</h3>
          <ul>
            <li v-for="opcion in producto.opciones" :key="opcion.id">
              {{ opcion.nombre }} - {{ opcion.precio }}€
            </li>
          </ul>
        </div>
        <button 
          @click="comprarProducto" 
          class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Comprar ahora
        </button>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto px-4 py-8 text-center">
    <p class="text-xl">Cargando detalles del producto...</p>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { gruposDeProductos } from '@/data/productos.js';

export default {
  name: 'DetallesProducto',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const producto = ref(null);
    const imagenPrincipal = ref('');

    const cargarProducto = () => {
      const productoId = parseInt(route.params.id);
      producto.value = gruposDeProductos
        .flatMap(grupo => grupo.productos)
        .find(p => p.id === productoId);

      if (!producto.value) {
        router.push({ name: 'NotFound' });
      } else {
        imagenPrincipal.value = producto.value.imagenes[0];
      }
    };

    onMounted(cargarProducto);

    // Observar cambios en la ruta para recargar el producto si cambia el ID
    watch(() => route.params.id, cargarProducto);

    const comprarProducto = () => {
      if (producto.value) {
        router.push({
          name: 'ProcesoPago',
          params: { productoId: producto.value.id.toString() }
        });
      }
    };

    const volverAProductos = () => {
      router.push({ name: 'paginaProductos' });
    };

    return {
      producto,
      imagenPrincipal,
      comprarProducto,
      volverAProductos
    };
  }
}
</script>
