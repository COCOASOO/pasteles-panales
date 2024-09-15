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
               class="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
            <img :src="producto.imagen" :alt="producto.nombre" 
                 :class="[ 
                   'w-full object-cover',
                   producto.orientacionImagen === 'vertical' ? 'h-96' : 'h-72'
                 ]">
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ producto.nombre }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ producto.descripcion }}</p>
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

    <!-- Modal para mostrar detalles -->
    <div v-if="productoSeleccionado" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h2 class="text-2xl font-bold mb-4">{{ productoSeleccionado.nombre }}</h2>
        <img :src="productoSeleccionado.imagen" :alt="productoSeleccionado.nombre" class="w-full h-64 object-cover mb-4 rounded">
        <p class="text-gray-600 mb-4">{{ productoSeleccionado.descripcion }}</p>
        <p class="text-lg font-bold mb-4">Precio base: {{ productoSeleccionado.precioBase }}€</p>
        <h3 class="font-medium mb-2">Opciones disponibles:</h3>
        <ul class="list-disc list-inside mb-4">
          <li v-for="opcion in productoSeleccionado.opciones" :key="opcion.id">
            {{ opcion.nombre }} (valor adicional: {{ opcion.precio }}€)
          </li>
        </ul>
        <button @click="cerrarDetalles" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { gruposDeProductos } from '@/data/productos.js';

export default {
  name: 'Productos',
  setup() {
    const router = useRouter();
    const precioMaximo = ref(100); // Valor máximo inicial
    const productoSeleccionado = ref(null);

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

    return {
      precioMaximo,
      precioMaximoDisponible,
      gruposFiltrados,
      productoSeleccionado,
      mostrarDetalles,
      cerrarDetalles,
      comprarProducto
    };
  }
}
</script>
