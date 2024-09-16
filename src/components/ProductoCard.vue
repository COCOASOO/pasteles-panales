<template>
    <div :class="[
      'bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105',
      producto.orientacionImagen === 'vertical' ? 'sm:col-span-2 sm:flex flex-col sm:flex-row' : 'flex flex-col'
    ]">
      <div :class="[
        producto.orientacionImagen === 'vertical' ? 'sm:w-1/2 w-full' : 'w-full',
        'relative overflow-hidden'
      ]">
        <img :src="imagenActual" :alt="producto.nombre"
             :class="[
               'w-full h-full object-cover',
               producto.orientacionImagen === 'vertical' ? 'aspect-[3/4]' : 'aspect-square'
             ]">
        <div v-if="producto.imagenes && producto.imagenes.length > 1" class="absolute inset-y-0 left-0 flex items-center">
          <button @click="cambiarImagen(-1)" class="bg-black bg-opacity-50 text-white p-2 rounded-r">
            &lt;
          </button>
        </div>
        <div v-if="producto.imagenes && producto.imagenes.length > 1" class="absolute inset-y-0 right-0 flex items-center">
          <button @click="cambiarImagen(1)" class="bg-black bg-opacity-50 text-white p-2 rounded-l">
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
            <button @click="$emit('mostrar-detalles', producto)"
                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Ver detalles
            </button>
            <button @click="$emit('comprar-producto', producto.id)"
                    class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'ProductoCard',
    props: {
      producto: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const imagenIndex = ref(0);
  
      const imagenActual = computed(() => {
        if (props.producto.imagenes && props.producto.imagenes.length > 0) {
          return props.producto.imagenes[imagenIndex.value];
        }
        return ''; // o una imagen por defecto
      });
  
      const cambiarImagen = (direccion) => {
        if (props.producto.imagenes) {
          imagenIndex.value = (imagenIndex.value + direccion + props.producto.imagenes.length) % props.producto.imagenes.length;
        }
      };
  
      return {
        imagenActual,
        cambiarImagen
      };
    }
  }
  </script>