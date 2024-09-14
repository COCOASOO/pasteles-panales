<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Proceso de Pago</h1>
      
      <!-- Pasos explicativos -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Cómo realizar tu pedido:</h2>
        <ol class="list-decimal list-inside">
          <li class="mb-2">Revisa los detalles de tu producto seleccionado</li>
          <li class="mb-2">Personaliza tu producto si es necesario</li>
          <li class="mb-2">Haz clic en el botón de WhatsApp para finalizar tu pedido</li>
          <li class="mb-2">Confirma los detalles con nuestro equipo de ventas</li>
        </ol>
      </div>
  
      <!-- Detalles del producto -->
      <div v-if="productoSeleccionado" class="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 class="text-2xl font-semibold mb-4">Producto seleccionado:</h2>
        <p><strong>Nombre:</strong> {{ productoSeleccionado.nombre }}</p>
        <p><strong>Precio base:</strong> {{ productoSeleccionado.precioBase }}€</p>
        <p><strong>Descripción:</strong> {{ productoSeleccionado.descripcion }}</p>
        
        <!-- Aquí puedes añadir campos para personalizar el producto si es necesario -->
      </div>
  
      <!-- Botón de WhatsApp -->
      <div class="text-center">
        <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
          Finalizar pedido por WhatsApp
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import { gruposDeProductos } from '@/data/productos.js'

  export default {
    name: 'ProcesoPago',
    props: {
      productoId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        productoSeleccionado: null
      }
    },
    created() {
      this.buscarProducto();
    },
    methods: {
      buscarProducto() {
        for (const grupo of gruposDeProductos) {
          const producto = grupo.productos.find(p => p.id.toString() === this.productoId);
          if (producto) {
            this.productoSeleccionado = producto;
            break;
          }
        }
      }
    },
    computed: {
      whatsappLink() {
        if (!this.productoSeleccionado) return '';
        
        const message = `Hola, me gustaría hacer un pedido para el producto: ${this.productoSeleccionado.nombre}. Precio: ${this.productoSeleccionado.precioBase}€. ¿Podemos proceder con la compra?`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '34664377198'; // Añade el código de país (34 para España)
        
        // Usa web.whatsapp.com para compatibilidad con escritorio
        return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      }
    }
  }
  </script>