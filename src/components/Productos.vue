<template>
  <div class="min-h-screen p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Filtros -->
      <div class="mb-8 bg-white dark:bg-white shadow-md rounded-lg p-6">
        <div class="flex flex-wrap gap-6">
          <!-- Filtro de precio -->
          <div class="flex-1 min-w-[250px]">
            <label for="precio-slider" class="block text-sm font-medium text-gray-700 mb-2">
              Precio máximo: {{ precioMaximo }}€
            </label>
            <input 
              type="range" 
              id="precio-slider" 
              v-model="precioMaximo" 
              min="0" 
              :max="precioMaximoDisponible" 
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            >
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>0€</span>
              <span>{{ precioMaximoDisponible }}€</span>
            </div>
          </div>

          <!-- Ordenación -->
          <div class="flex-1 min-w-[250px]">
            <label for="orden-select" class="block text-sm font-medium text-gray-700 mb-2">Ordenar por</label>
            <select 
              id="orden-select" 
              v-model="ordenSeleccionado" 
              class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Sin ordenar</option>
              <option value="nombre-asc">Nombre (A-Z)</option>
              <option value="nombre-desc">Nombre (Z-A)</option>
              <option value="precio-asc">Precio (menor a mayor)</option>
              <option value="precio-desc">Precio (mayor a menor)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Vista agrupada -->
      <template v-if="!ordenSeleccionado">
        <div v-for="grupo in gruposFiltrados" :key="grupo.id" class="mb-12">
          <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ grupo.nombre }}</h2>
          <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductoCard 
              v-for="producto in grupo.productos" 
              :key="producto.id" 
              :producto="producto"
              @mostrar-detalles="mostrarDetalles"
              @comprar-producto="comprarProducto"
            />
          </div>
        </div>
      </template>

      <!-- Vista de lista -->
      <template v-else>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductoCard 
            v-for="producto in productosFiltrados" 
            :key="producto.id" 
            :producto="producto"
            @mostrar-detalles="mostrarDetalles"
            @comprar-producto="comprarProducto"
          />
        </div>
      </template>
    </div>

    <!-- Modal para mostrar detalles -->
    <DetallesProductoModal 
      v-if="productoSeleccionado" 
      :producto="productoSeleccionado"
      @cerrar="cerrarDetalles"
    />
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { gruposDeProductos } from '@/data/productos.js';
import ProductoCard from './ProductoCard.vue';
import DetallesProductoModal from './DetallesProductoModal.vue';

export default {
  name: 'Productos',
  components: {
    ProductoCard,
    DetallesProductoModal,
  },
  setup() {
    const router = useRouter();
    const precioMaximo = ref(60);
    const productoSeleccionado = ref(null);
    const ordenSeleccionado = ref('');

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

    const productosFiltrados = computed(() => {
      let productos = gruposDeProductos.flatMap(grupo => grupo.productos)
        .filter(producto => producto.precioBase <= precioMaximo.value);

      if (ordenSeleccionado.value) {
        productos.sort((a, b) => {
          switch (ordenSeleccionado.value) {
            case 'nombre-asc':
              return a.nombre.localeCompare(b.nombre);
            case 'nombre-desc':
              return b.nombre.localeCompare(a.nombre);
            case 'precio-asc':
              return a.precioBase - b.precioBase;
            case 'precio-desc':
              return b.precioBase - a.precioBase;
            default:
              return 0;
          }
        });
      }

      return productos;
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
      productosFiltrados,
      productoSeleccionado,
      mostrarDetalles,
      cerrarDetalles,
      comprarProducto,
      ordenSeleccionado,
    };
  }
}
</script>
