<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Botón para volver atrás -->
      <button @click="volverAtras" class="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        Volver a productos
      </button>

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
  
      <!-- Detalles del producto y formulario de personalización -->
      <div v-if="productoSeleccionado" class="bg-white p-6 rounded-lg shadow-md mb-8 mt-10">
        <h2 class="text-2xl font-semibold mb-4">Producto seleccionado:</h2>
        <p><strong>Nombre:</strong> {{ productoSeleccionado.nombre }}</p>
        <p><strong>Precio base:</strong> {{ productoSeleccionado.precioBase }}€</p>
        <p><strong>Descripción:</strong> {{ productoSeleccionado.descripcion }}</p>
        
        <h2 class="text-2xl font-semibold mb-4 mt-8">Personaliza tu pedido:</h2>
        <form @submit.prevent="handleWhatsAppClick">
          <div class="mb-4">
            <label for="nombreBebe" class="block mb-2">Nombre del bebé:</label>
            <input v-model="pedido.nombreBebe" id="nombreBebe" type="text" class="w-full p-2 border rounded" required>
          </div>
          
          <div class="mb-4">
            <label for="colorPrincipal" class="block mb-2">Color principal del pastel:</label>
            <select v-model="pedido.colorPrincipal" id="colorPrincipal" class="w-full p-2 border rounded" required>
              <option value="rosa">Rosa</option>
              <option value="azul">Azul</option>
              <option value="verde">Verde</option>
              <option value="otro">Otro</option>
            </select>
            <input v-if="pedido.colorPrincipal === 'otro'" v-model="pedido.otroColor" type="text" class="mt-2 w-full p-2 border rounded" placeholder="Especifica el color">
          </div>
          
          <div v-if="productoSeleccionado.opciones && productoSeleccionado.opciones.length" class="mb-4">
            <label class="block mb-2">Opciones adicionales:</label>
            <div v-for="opcion in productoSeleccionado.opciones" :key="opcion.id">
              <label class="inline-flex items-center">
                <input type="checkbox" v-model="pedido.opcionesSeleccionadas[opcion.id]" class="form-checkbox">
                <span class="ml-2">{{ opcion.nombre }} (+{{ opcion.precio }}€)</span>
              </label>
            </div>
          </div>
          
          <div class="mb-4">
            <label for="peluche" class="block mb-2">Peluche específico (opcional):</label>
            <input v-model="pedido.peluche" id="peluche" type="url" class="w-full p-2 border rounded" placeholder="Introduce el enlace de la tienda del peluche deseado">
            <p class="text-sm text-gray-600 mt-1">
              Nota: Si no eliges un peluche específico, se te ofrecerán diferentes opciones para elegir.
              {{ pedido.peluche ? 'El importe del peluche se añadirá al coste total del pedido.' : '' }}
            </p>
          </div>
          
          <div class="mb-4">
            <label class="block mb-2">¿Necesitas envío? (Solo España)</label>
            <div class="flex items-center">
              <input v-model="pedido.necesitaEnvio" id="envioSi" type="radio" :value="true" class="mr-2">
              <label for="envioSi" class="mr-4">Sí</label>
              <input v-model="pedido.necesitaEnvio" id="envioNo" type="radio" :value="false" class="mr-2">
              <label for="envioNo">No</label>
            </div>
            <p v-if="pedido.necesitaEnvio" class="text-sm text-gray-600 mt-2">
              El envío se realizará a través de Wallapop. Se proporcionarán más detalles por WhatsApp.
            </p>
          </div>
        </form>
      </div>
       <!-- Importe total y botón de enviar pedido -->
       <div class="bg-white p-6 mb-8">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6">
              <div class="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
                <h2 class="text-2xl font-semibold mb-2">Importe total:</h2>
                <p class="text-3xl font-bold">{{ importeTotal }}€</p>
                <p v-if="pedido.peluche" class="text-sm text-gray-600 mt-2">
                  * El importe del peluche se añadirá al total del pedido.
                </p>
              </div>
              <button @click="handleWhatsAppClick" class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 w-full md:w-auto">
                Enviar pedido por WhatsApp
              </button>
            </div>

            <div class="text-sm text-gray-600 mb-4" v-if="!isMobile()">
              <p>
                Si tienes problemas con WhatsApp Web, puedes guardar nuestro número en tus contactos 
                y abrir WhatsApp en tu dispositivo móvil para continuar con tu pedido.
              </p>
            </div>

            <div v-if="mensajeEnviado" class="text-green-600 mb-4">
              Se ha abierto WhatsApp. Si no ves la ventana, por favor verifica que no esté minimizada o detrás de otras ventanas.
            </div>

            <div class="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4 rounded-r-lg">
              <p class="text-sm text-justify">
                <strong>Aviso importante:</strong> Este servicio es proporcionado por un particular y no por una empresa. Todos los pedidos y transacciones se realizan de manera individual y personalizada.
              </p>
            </div>
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
        productoSeleccionado: null,
        pedido: {
          nombreBebe: '',
          colorPrincipal: 'rosa',
          otroColor: '',
          opcionesSeleccionadas: {},
          peluche: '',
          necesitaEnvio: false
        }
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
        
        let mensaje = `¡Hola! Vengo de la página web y me gustaría hacer un pedido personalizado.\n\n`;
        mensaje += `Estoy interesado en el producto: "${this.productoSeleccionado.nombre}" (Precio base: ${this.productoSeleccionado.precioBase}€)\n\n`;
        mensaje += `Detalles de mi pedido:\n`;
        mensaje += `- Nombre del bebé: ${this.pedido.nombreBebe}\n`;
        mensaje += `- Color principal del pastel: ${this.pedido.colorPrincipal === 'otro' ? this.pedido.otroColor : this.pedido.colorPrincipal}\n`;
        
        const opcionesSeleccionadas = this.productoSeleccionado.opciones.filter(opcion => this.pedido.opcionesSeleccionadas[opcion.id]);
        if (opcionesSeleccionadas.length > 0) {
          mensaje += `- Opciones adicionales:\n`;
          opcionesSeleccionadas.forEach(opcion => {
            mensaje += `  * ${opcion.nombre} (+${opcion.precio}€)\n`;
          });
        }
        
        if (this.pedido.peluche) {
          mensaje += `- Peluche específico: Sí (enlace proporcionado)\n`;
        }
        
        mensaje += `- Necesita envío: ${this.pedido.necesitaEnvio ? 'Sí' : 'No'}\n`;
        
        mensaje += `\nImporte total: ${this.importeTotal}€\n`;
        mensaje += `\n¿Podemos proceder con el pedido? ${this.pedido.necesitaEnvio ? 'Entiendo que el envío se gestionará por Wallapop.' : ''} ¡Gracias!`;
        
        return mensaje;
      },
      handleWhatsAppClick() {
        if (!this.pedido.nombreBebe.trim()) {
          alert('Por favor, introduce el nombre del bebé.');
          return;
        }

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
      },
      volverAtras() {
        this.$router.push('/productos') // Navigate to the root route
      }
    },
    computed: {
      whatsappLink() {
        const message = this.generateMessage();
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '34664377198';
        
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      },
      importeTotal() {
        let total = this.productoSeleccionado ? this.productoSeleccionado.precioBase : 0;
        if (this.productoSeleccionado && this.productoSeleccionado.opciones) {
          this.productoSeleccionado.opciones.forEach(opcion => {
            if (this.pedido.opcionesSeleccionadas[opcion.id]) {
              total += opcion.precio;
            }
          });
        }
        return total;
      },
      pelucheFormatted() {
        if (!this.pedido.peluche) return '';
        try {
          const url = new URL(this.pedido.peluche);
          return url.hostname;
        } catch {
          return 'Enlace proporcionado';
        }
      }
    }
  }
  </script>