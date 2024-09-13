<template>
  <div class="hero min-h-screen bg-base-200" style="background-image: url('banner.png'); background-size: cover; background-position: center;">
    <div class="hero-content text-center">
      <div class="max-w-md md:max-w-2xl lg:max-w-4xl">
        <h1 class="text-4xl md:text-5xl lg:text-5xl font-bold font-baby">Bienvenido a Nuestro Mundo de Pasteles de Pañales</h1>
        <p class="py-6 text-lg md:text-xl lg:text-2xl font-baby">Descubre nuestras creaciones únicas que combinan practicidad y belleza para los más pequeños.</p>
        <router-link to="/productos" class="btn btn-lg font-baby bg-azulOscuro text-white hover:bg-rosaFuerte hover:scale-105 transition-transform duration-300 text-base md:text-lg lg:text-xl">
          <span class="mr-2">🎁</span>
          Ver Catálogo
          <span class="ml-2">👶</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bienvenido'
}
</script>

