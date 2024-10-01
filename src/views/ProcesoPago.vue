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
      <p>Esta web no incluye una pasarela de pago en línea. El proceso de pedido se gestionará a través de WhatsApp. Si
        es necesario realizar un envío, este se coordinará posteriormente a través de Wallapop.</p>
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
      <p>Si necesitas que te enviemos el producto, coordinaremos el envío a través de Wallapop después de confirmar tu
        pedido por WhatsApp.</p>
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
          <input v-if="pedido.colorPrincipal === 'otro'" v-model="pedido.otroColor" type="text"
            class="mt-2 w-full p-2 border rounded" placeholder="Especifica el color">
        </div>

        <div v-if="productoSeleccionado.opciones && productoSeleccionado.opciones.length" class="mb-4">
          <label class="block mb-2">Opciones adicionales:</label>
          <div v-for="opcion in productoSeleccionado.opciones" :key="opcion.id">
            <label class="inline-flex items-center">
              <!-- Cambia de checkbox a radio para permitir solo una opción -->
              <input type="radio" v-model="pedido.opcionSeleccionada" :value="opcion.id" class="form-radio">
              <span class="ml-2">{{ opcion.nombre }} (+{{ opcion.precio }}€)</span>
            </label>
          </div>
        </div>

        <div class="mb-4">
          <label for="peluche" class="block mb-2">Peluche específico (opcional):</label>
          <input v-model="pedido.peluche" id="peluche" type="url" class="w-full p-2 border rounded"
            placeholder="Introduce el enlace de la tienda del peluche deseado">
          <p class="text-sm text-gray-600 mt-1">
            Nota: Si no eliges un peluche específico, se te ofrecerán diferentes opciones para elegir.
            <!-- Muestra este mensaje solo si hay un enlace válido para el peluche -->
            {{ isValidUrl(pedido.peluche) ? 'El importe del peluche se añadirá al coste total del pedido.' : '' }}
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
        <button @click="handleWhatsAppClick"
          class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 w-full md:w-auto">
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
        Se ha abierto WhatsApp. Si no ves la ventana, por favor verifica que no esté minimizada o detrás de otras
        ventanas.
      </div>

      <div class="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4 rounded-r-lg">
        <p class="text-sm text-justify">
          <strong>Aviso importante:</strong> Este servicio es proporcionado por un particular y no por una empresa.
          Todos los pedidos y transacciones se realizan de manera individual y personalizada.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gruposDeProductos } from '@/data/productos.js'; // Asegúrate de que esta línea esté presente

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
      },
      mensajeEnviado: false
    }
  },
  created() {
    this.buscarProducto();
  },
  methods: {
    // Método para buscar el producto seleccionado
  buscarProducto() {
    for (const grupo of gruposDeProductos) {
      const producto = grupo.productos.find(p => p.id.toString() === this.productoId);
      if (producto) {
        this.productoSeleccionado = producto;
        break;
      }
    }
  },
  // Método para verificar si es un enlace válido
  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  },
    isMobile() {
      // Función mejorada para detectar móviles
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
   // Generar el mensaje de WhatsApp con la información del pedido
  generateMessage() {
    if (!this.productoSeleccionado) return '';

    let mensaje = `¡Hola! Vengo de la página web y me gustaría hacer un pedido personalizado.\n\n`;
    mensaje += `Estoy interesado en el producto: "${this.productoSeleccionado.nombre}" (Precio base: ${this.productoSeleccionado.precioBase}€)\n\n`;
    mensaje += `Detalles de mi pedido:\n`;
    mensaje += `- Nombre del bebé: ${this.pedido.nombreBebe}\n`;
    mensaje += `- Color principal del pastel: ${this.pedido.colorPrincipal === 'otro' ? this.pedido.otroColor : this.pedido.colorPrincipal}\n`;

    const opcionSeleccionada = this.productoSeleccionado.opciones ?
      this.productoSeleccionado.opciones.find(opcion => opcion.id === this.pedido.opcionSeleccionada) : null;

    if (opcionSeleccionada) {
      mensaje += `- Opción adicional seleccionada: ${opcionSeleccionada.nombre} (+${opcionSeleccionada.precio}€)\n`;
    }

    if (this.pedido.peluche && this.isValidUrl(this.pedido.peluche)) {
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
    const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0D%0A');
    const phoneNumber = '34664377198';  // El número de WhatsApp

    // Crear enlace universal de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir el enlace en una nueva ventana
    window.open(whatsappUrl, '_blank');
    this.mensajeEnviado = true;
  },
    volverAtras() {
      this.$router.push('/productos');
    }
  },
  computed: {
  importeTotal() {
    let total = this.productoSeleccionado ? this.productoSeleccionado.precioBase : 0;

    if (this.productoSeleccionado && this.productoSeleccionado.opciones && this.pedido.opcionSeleccionada) {
      const opcionSeleccionada = this.productoSeleccionado.opciones.find(opcion => opcion.id === this.pedido.opcionSeleccionada);
      if (opcionSeleccionada) {
        total += opcionSeleccionada.precio;
      }
    }

    // Añadir coste del peluche si hay un enlace válido
    if (this.pedido.peluche && this.isValidUrl(this.pedido.peluche)) {
      total += 0; // Aquí puedes añadir el precio del peluche si lo deseas
    }

    return total;
  }
}

}
</script>
