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
  
      <!-- Opciones de contacto -->
      <div class="text-center mt-8">
        <h3 class="text-xl font-semibold mb-4">Opciones para finalizar tu pedido:</h3>
        
        <!-- Botón de WhatsApp -->
        <button @click="handleWhatsAppClick" class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 mb-4">
          {{ isMobile() ? 'Finalizar pedido por WhatsApp' : 'Solicitar contacto por WhatsApp' }}
        </button>

        <!-- Alternativas de contacto -->
        <div class="mt-4">
          <p class="mb-2">Si prefieres otras opciones de contacto:</p>
          <p><strong>Teléfono:</strong> <a href="tel:+34664377198" class="text-blue-600 hover:underline">+34 664 377 198</a></p>
        </div>

        <!-- Instrucciones adicionales -->
        <p class="mt-4 text-sm text-gray-600" v-if="!isMobile()">
          Si tienes problemas con WhatsApp Web, puedes guardar nuestro número en tus contactos 
          y abrir WhatsApp en tu dispositivo móvil para continuar con tu pedido.
        </p>
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
      },
      isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      },
      generateMessage() {
        if (!this.productoSeleccionado) return '';
        
        const baseMessage = `Hola, me gustaría hacer un pedido para el producto: ${this.productoSeleccionado.nombre}. Precio: ${this.productoSeleccionado.precioBase}€.`;
        
        if (this.isMobile()) {
          return `${baseMessage} ¿Podemos proceder con la compra?`;
        } else {
          return `${baseMessage} Estoy usando la versión de escritorio de WhatsApp. ¿Podrían contactarme para finalizar el pedido?`;
        }
      },
      handleWhatsAppClick() {
        const message = this.generateMessage();
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '34664377198';
        
        if (this.isMobile()) {
          // En móvil, abre directamente la app de WhatsApp
          window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        } else {
          // En escritorio, intenta abrir WhatsApp Web
          const webWhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
          const newWindow = window.open(webWhatsAppUrl, '_blank');
          
          if (newWindow) {
            // Si la ventana se abrió, asumimos que WhatsApp Web se está cargando
            newWindow.focus();
          } else {
            // Si la ventana no se abrió, mostramos la alerta
            alert('No se pudo abrir WhatsApp Web. Por favor, asegúrate de que las ventanas emergentes están permitidas o utiliza las alternativas de contacto proporcionadas.');
          }
        }
      }
    },
    computed: {
      whatsappLink() {
        const message = this.generateMessage();
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '34664377198';
        
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      }
    }
  }
  </script>