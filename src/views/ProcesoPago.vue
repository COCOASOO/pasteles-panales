<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Proceso de Pedido</h1>
      
      <!-- Aviso importante -->
      <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
        <p class="font-bold">Importante:</p>
        <p>Esta web no incluye una pasarela de pago en línea. El proceso de pedido se gestionará a través de WhatsApp. Si es necesario realizar un envío, este se coordinará posteriormente a través de Wallapop.</p>
      </div>

      <!-- Pasos explicativos -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Cómo realizar tu pedido:</h2>
        <ol class="list-decimal list-inside">
          <li class="mb-2">Revisa los detalles de tu producto seleccionado</li>
          <li class="mb-2">Haz clic en el botón de WhatsApp para iniciar tu pedido</li>
          <li class="mb-2">Confirma los detalles y acuerda el pago con nuestro equipo por WhatsApp</li>
          <li class="mb-2">Si necesitas envío, te guiaremos para gestionarlo a través de Wallapop</li>
        </ol>
      </div>
        <!-- Información sobre Wallapop -->
        <div class="mt-6 bg-blue-100 p-4 rounded-lg">
          <p class="font-semibold mb-2">Envíos a través de Wallapop:</p>
          <p>Si necesitas que te enviemos el producto, coordinaremos el envío a través de Wallapop después de confirmar tu pedido por WhatsApp.</p>
        </div>
  
      <!-- Detalles del producto -->
      <div v-if="productoSeleccionado" class="bg-white p-6 rounded-lg shadow-md mb-8 mt-10">
        <h2 class="text-2xl font-semibold mb-4">Producto seleccionado:</h2>
        <p><strong>Nombre:</strong> {{ productoSeleccionado.nombre }}</p>
        <p><strong>Precio base:</strong> {{ productoSeleccionado.precioBase }}€</p>
        <p><strong>Descripción:</strong> {{ productoSeleccionado.descripcion }}</p>
        
        <!-- Aquí puedes añadir campos para personalizar el producto si es necesario -->
      </div>
  
      <!-- Opciones de contacto -->
      <div class="text-center mt-8">
        <h3 class="text-xl font-semibold mb-4">Inicia tu pedido por WhatsApp:</h3>
        
        <!-- Botón de WhatsApp -->
        <button @click="handleWhatsAppClick" class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 mb-4">
          {{ isMobile() ? 'Iniciar pedido por WhatsApp' : 'Contactar por WhatsApp' }}
        </button>

        <!-- Instrucciones adicionales -->
        <p class="mt-4 text-sm text-gray-600" v-if="!isMobile()">
          Si tienes problemas con WhatsApp Web, puedes guardar nuestro número en tus contactos 
          y abrir WhatsApp en tu dispositivo móvil para continuar con tu pedido.
        </p>
      </div>

      <div v-if="mensajeEnviado" class="mt-4 text-green-600">
        Se ha abierto WhatsApp. Si no ves la ventana, por favor verifica que no esté minimizada o detrás de otras ventanas.
      </div>

      <!-- Nuevo disclaimer -->
      <div class="mt-8 bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-6 rounded-r-lg">
        <p class="text-sm text-justify">
          <strong>Aviso importante:</strong> Este servicio es proporcionado por un particular y no por una empresa. Todos los pedidos y transacciones se realizan de manera individual y personalizada.
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
        
        return `Hola, estoy interesado en el producto: ${this.productoSeleccionado.nombre}. Precio: ${this.productoSeleccionado.precioBase}€. ¿Podemos proceder con el pedido? Si necesito envío, entiendo que se gestionará por Wallapop.`;
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