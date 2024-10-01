<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-5xl font-bold text-center my-8 text-gray-800 font-baby">Nuestros Productos</h1>
    <Productos class="mt-4" />
  </div>
</template>

<script>
import Productos from '@/components/Productos.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'

export default {
  name: 'Productos',
  components: {
    Productos,
    WhatsAppButton
  }
}
</script>

<style scoped>

</style>
