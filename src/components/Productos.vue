<template>
  <div class="min-h-screen p-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8 flex justify-center sm:justify-end">
        <div class="flex flex-col space-y-2 w-64">
          <label for="precio-slider" class="font-medium">Precio</label>
          <input 
            type="range" 
            id="precio-slider" 
            v-model="precioMaximo" 
            min="0" 
            :max="precioMaximoDisponible" 
            class="w-full"
          >
          <div class="flex justify-between">
            <span>0€</span>
            <span>{{ precioMaximo }}€ </span>
          </div>
        </div>
      </div>

      <div v-for="grupo in gruposFiltrados" :key="grupo.id" class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ grupo.nombre }}</h2>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div v-for="producto in grupo.productos" :key="producto.id" 
               :class="[ 
                 'bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105',
                 producto.orientacionImagen === 'vertical' ? 'sm:col-span-2 sm:flex flex-col sm:flex-row' : 'flex flex-col'
               ]">
            <div :class="[ 
              producto.orientacionImagen === 'vertical' ? 'sm:w-1/2 w-full' : 'w-full',
              'relative overflow-hidden'
            ]">
              <img :src="getImagenActual(producto)" :alt="producto.nombre" 
                   :class="[ 
                     'w-full h-full object-cover',
                     producto.orientacionImagen === 'vertical' ? 'aspect-[3/4]' : 'aspect-square'
                   ]">
              <div v-if="producto.imagenes && producto.imagenes.length > 1" class="absolute inset-y-0 left-0 flex items-center">
                <button @click="cambiarImagen(producto.id, -1)" class="bg-black bg-opacity-50 text-white p-2 rounded-r">
                  &lt;
                </button>
              </div>
              <div v-if="producto.imagenes && producto.imagenes.length > 1" class="absolute inset-y-0 right-0 flex items-center">
                <button @click="cambiarImagen(producto.id, 1)" class="bg-black bg-opacity-50 text-white p-2 rounded-l">
                  &gt;
                </button>
              </div>
            </div>
            <div :class="[ 
              producto.orientacionImagen === 'vertical' ? 'sm:w-1/2 w-full' : 'w-full',
              'p-4 flex flex-col flex-grow'
            ]">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ producto.nombre }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2 flex-grow">{{ producto.descripcion }}</p>
              <div class="mt-auto">
                <p class="text-lg font-bold mb-4 text-gray-800">Precio: {{ producto.precioBase }}€</p>
                <div class="flex justify-between">
                  <button @click="mostrarDetalles(producto)" 
                          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Ver detalles
                  </button>
                  <button @click="comprarProducto(producto.id)" 
                          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para mostrar detalles -->
    <div v-if="productoSeleccionado" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div :class="[ 
        'bg-white rounded-lg p-6',
        productoSeleccionado.orientacionImagen === 'vertical' ? 'max-w-4xl w-full' : 'max-w-2xl w-full'
      ]">
        <div :class="[ 
          productoSeleccionado.orientacionImagen === 'vertical' ? 'sm:flex flex-col sm:flex-row' : 'flex flex-col'
        ]">
          <div :class="[ 
            productoSeleccionado.orientacionImagen === 'vertical' ? 'sm:w-1/2 w-full sm:pr-4' : 'w-full mb-4',
            'relative overflow-hidden'
          ]">
            <img :src="getImagenActual(productoSeleccionado)" 
                 :alt="productoSeleccionado.nombre" 
                 :class="[ 
                   'w-full h-full object-cover rounded',
                   productoSeleccionado.orientacionImagen === 'vertical' ? 'aspect-[3/4]' : 'aspect-square'
                 ]">
          </div>
          <div :class="[ 
            productoSeleccionado.orientacionImagen === 'vertical' ? 'sm:w-1/2 w-full sm:pl-4' : 'w-full'
          ]">
            <h2 class="text-2xl font-bold mb-2">{{ productoSeleccionado.nombre }}</h2>
            <p class="text-gray-600 mb-2 line-clamp-3">{{ productoSeleccionado.descripcion }}</p>
            <p class="text-lg font-bold mb-2">
              {{ productoSeleccionado.opciones && productoSeleccionado.opciones.length > 0 ? 'Precio base' : 'Precio' }}: 
              {{ productoSeleccionado.precioBase }}€
            </p>
            <template v-if="productoSeleccionado.opciones && productoSeleccionado.opciones.length > 0">
              <h3 class="font-medium mb-1">Opciones disponibles:</h3>
              <ul class="list-disc list-inside mb-2 max-h-24 overflow-y-auto">
                <li v-for="opcion in productoSeleccionado.opciones" :key="opcion.id">
                  {{ opcion.nombre }} (valor adicional: {{ opcion.precio }}€)
                </li>
              </ul>
            </template>
            <button @click="cerrarDetalles" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-2">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { gruposDeProductos } from '@/data/productos.js';

export default {
  name: 'Productos',
  setup() {
    const router = useRouter();
    const precioMaximo = ref(100); // Valor máximo inicial
    const productoSeleccionado = ref(null);
    const imagenActual = reactive({});

    // Inicializar imagenActual para cada producto
    gruposDeProductos.forEach(grupo => {
      grupo.productos.forEach(producto => {
        imagenActual[producto.id] = 0;
      });
    });

    const precioMaximoDisponible = computed(() => {
      return Math.max(...gruposDeProductos.flatMap(grupo => 
        grupo.productos.map(producto => producto.precioBase)
      ));
    });

    const gruposFiltrados = computed(() => {
      return gruposDeProductos.map(grupo => ({
        ...grupo,
        productos: grupo.productos.filter(producto => producto.precioBase <= precioMaximo.value)
      })).filter(grupo => grupo.productos.length > 0);
    });

    const mostrarDetalles = (producto) => {
      productoSeleccionado.value = producto;
    };

    const cerrarDetalles = () => {
      productoSeleccionado.value = null;
    };

    const comprarProducto = (productoId) => {
      router.push({
        name: 'ProcesoPago',
        params: { productoId: productoId.toString() }
      });
    };

    const getImagenActual = (producto) => {
      if (producto.imagenes && producto.imagenes.length > 0) {
        return producto.imagenes[imagenActual[producto.id] || 0];
      }
      return ''; // o una imagen por defecto
    };

    const cambiarImagen = (productoId, direccion) => {
      const producto = gruposDeProductos.flatMap(g => g.productos).find(p => p.id === productoId);
      if (producto && producto.imagenes) {
        imagenActual[productoId] = (imagenActual[productoId] + direccion + producto.imagenes.length) % producto.imagenes.length;
      }
    };

    return {
      precioMaximo,
      precioMaximoDisponible,
      gruposFiltrados,
      productoSeleccionado,
      mostrarDetalles,
      cerrarDetalles,
      comprarProducto,
      imagenActual,
      cambiarImagen,
      getImagenActual,
    };
  }
}
</script>
