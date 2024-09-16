<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div :class="[
        'bg-white rounded-lg p-6',
        producto.orientacionImagen === 'vertical' ? 'max-w-4xl w-full' : 'max-w-2xl w-full'
      ]">
        <div :class="[
          producto.orientacionImagen === 'vertical' ? 'sm:flex flex-col sm:flex-row' : 'flex flex-col'
        ]">
          <div :class="[
            producto.orientacionImagen === 'vertical' ? 'sm:w-1/2 w-full sm:pr-4' : 'w-full mb-4',
            'relative overflow-hidden'
          ]">
            <img :src="imagenActual"
                 :alt="producto.nombre"
                 :class="[
                   'w-full h-full object-cover rounded',
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
            producto.orientacionImagen === 'vertical' ? 'sm:w-1/2 w-full sm:pl-4' : 'w-full'
          ]">
            <h2 class="text-2xl font-bold mb-2">{{ producto.nombre }}</h2>
            <p class="text-gray-600 mb-2 line-clamp-3">{{ producto.descripcion }}</p>
            <p class="text-lg font-bold mb-2">
              {{ producto.opciones && producto.opciones.length > 0 ? 'Precio base' : 'Precio' }}:
              {{ producto.precioBase }}€
            </p>
            <template v-if="producto.opciones && producto.opciones.length > 0">
              <h3 class="font-medium mb-1">Opciones disponibles:</h3>
              <ul class="list-disc list-inside mb-2 max-h-24 overflow-y-auto">
                <li v-for="opcion in producto.opciones" :key="opcion.id">
                  {{ opcion.nombre }} (valor adicional: {{ opcion.precio }}€)
                </li>
              </ul>
            </template>
            <button @click="$emit('cerrar')" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-2">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'DetallesProductoModal',
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