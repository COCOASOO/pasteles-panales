<template>
  <div class="ComoLoHacemos">
    <div class="py-20">
      <div class="container mx-auto px-4 max-w-7xl">
        <h1 class="text-5xl font-bold text-center mb-16 font-baby">Proceso del pedido</h1>
        
        <div class="grid md:grid-cols-3 gap-12">
          <div v-for="(step, index) in steps" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-4">{{ index + 1 }}. {{ step.title }}</h3>
            <p class="text-lg text-justify">{{ step.description }}</p>
          </div>
        </div>

        <div class="mt-16 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-r-lg">
          <h2 class="text-2xl font-semibold mb-4">Comunicación y Envíos</h2>
          <p class="mb-4 text-justify">Toda la comunicación se realiza a través de WhatsApp para tu comodidad. Allí podremos discutir los detalles de tu pedido y resolver cualquier duda que tengas.</p>
          <p class="mb-4 text-justify">Si necesitas que te enviemos el producto, coordinaremos el envío a través de Wallapop después de confirmar tu pedido por WhatsApp. Esto nos permite ofrecerte opciones de envío seguras y rastreables.</p>
          <p class="text-justify">Recuerda que estamos aquí para ayudarte en cada paso del proceso. No dudes en contactarnos si tienes alguna pregunta sobre cómo realizamos los pedidos o los envíos.</p>
        </div>

        <div class="mt-8 bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-6 rounded-r-lg">
          <p class="text-sm text-justify">
            <strong>Aviso importante:</strong> Este servicio es proporcionado por un particular y no por una empresa. Todos los pedidos y transacciones se realizan de manera individual y personalizada.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComoLoHacemos',
  data() {
    return {
      steps: [
        {
          title: "Recibimos tu pedido",
          description: "Nos comunicas tus necesidades y preferencias a través de WhatsApp. Tomamos nota de todos los detalles para asegurarnos de entender exactamente lo que deseas."
        },
        {
          title: "Preparamos tu pedido",
          description: "Con la información proporcionada, preparamos cuidadosamente tu pedido. Nos aseguramos de que cada detalle cumpla con tus especificaciones y nuestros estándares de calidad."
        },
        {
          title: "Entregamos tu pedido",
          description: "Una vez listo, coordinamos la entrega de tu pedido. Si es necesario un envío, lo gestionamos a través de Wallapop para garantizar un proceso seguro y rastreable."
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Puedes agregar estilos específicos aquí si es necesario */
</style>
