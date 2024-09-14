<template>
  <div>
    <div v-for="(grupo, index) in gruposDeProductos" :key="index" class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">{{ grupo.nombre }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="producto in grupo.productos" :key="producto.id" class="flex border rounded-lg shadow-md bg-white overflow-hidden h-full">
          <div class="w-1/3 bg-white">
            <img :src="producto.imagen" :alt="producto.nombre" class="w-full h-full object-cover">
          </div>
          <div class="w-2/3 p-4 flex flex-col">
            <div>
              <h3 class="text-xl font-medium mb-2">{{ producto.nombre }}</h3>
              <p class="text-gray-600 mb-2 line-clamp-2">{{ producto.descripcion }}</p>
              <p class="text-lg font-bold mb-2">Precio: {{ producto.precioBase }}€</p>
            </div>
            <div class="flex-grow">
              <h4 class="font-medium mb-2">Opciones:</h4>
              <ul class="list-disc list-inside mb-4">
                <li v-for="opcion in producto.opciones" :key="opcion.id" class="text-sm">
                  {{ opcion.nombre }} (+{{ opcion.precio }}€)
                </li>
              </ul>
            </div>
            <button @click="mostrarDetalles(producto)" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para mostrar detalles -->
    <div v-if="productoSeleccionado" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h2 class="text-2xl font-bold mb-4">{{ productoSeleccionado.nombre }}</h2>
        <img :src="productoSeleccionado.imagen" :alt="productoSeleccionado.nombre" class="w-full h-64 object-cover mb-4 rounded">
        <p class="text-gray-600 mb-4">{{ productoSeleccionado.descripcion }}</p>
        <p class="text-lg font-bold mb-4">Precio base: {{ productoSeleccionado.precioBase }}€</p>
        <h3 class="font-medium mb-2">El producto incluye:</h3>
        <ul class="list-disc list-inside mb-4">
          <li>Producto base</li>
          <li v-for="opcion in productoSeleccionado.opciones" :key="opcion.id">
            {{ opcion.nombre }} (valor adicional: {{ opcion.precio }}€)
          </li>
        </ul>
        <button @click="cerrarDetalles" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gruposDeProductos } from '@/data/productos.js'

export default {
  name: 'Productos',
  data() {
    return {
      gruposDeProductos,
      productoSeleccionado: null
    }
  },
  methods: {
    mostrarDetalles(producto) {
      this.productoSeleccionado = producto;
    },
    cerrarDetalles() {
      this.productoSeleccionado = null;
    }
  }
}
</script>
