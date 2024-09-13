<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center my-8 text-gray-800">Nuestros Productos</h1>
    <Productos class="mt-4" />
  </div>
</template>

<script>
import Productos from '@/components/Productos.vue'

export default {
  name: 'App',
  components: {
    Productos
  }
}
</script>

<style scoped>

</style>
