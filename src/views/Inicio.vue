<template>
  <!-- border-2 border-color-blue -->
  <div class="container-expanded mx-auto bg-grisCaliente">
    <Bienvenido />
    <Explicacion />
    <ProductosLanding />
  </div>
  <div class="container mx-auto">
    
  </div>
</template>

<script>
// Importamos el componente TitleSection
import Bienvenido from '@/components/Bienvenido.vue';
import ProductosLanding from '@/components/ProductosLanding.vue';
import Explicacion from '@/components/Explicacion.vue';

export default {
  name: "Home",
  components: {
    Bienvenido,
    ProductosLanding,
    Explicacion,
  },
};
</script>

<style scoped></style>
