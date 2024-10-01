<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 bg-azulBebe bg-opacity-75">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView, useRoute } from 'vue-router';
import { watch, nextTick } from 'vue';

const route = useRoute();

// Función para actualizar el título y las metatags
const updateMetaTags = () => {
  const { title, description } = route.meta;

  // Actualiza el título de la página
  if (title) {
    document.title = title;
  }

  // Actualiza las metatags
  const metaTags = document.querySelectorAll('meta[name]');
  metaTags.forEach((tag) => {
    tag.parentNode.removeChild(tag);
  });

  if (description) {
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);
  }
};

// Observa los cambios en la ruta
watch(
  () => route.fullPath,
  () => {
    nextTick(() => {
      updateMetaTags(); // Llama a la función para actualizar metatags
      scrollToTop(); // Desplaza hacia arriba
    });
  }
);

// Función para desplazarse hacia arriba
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
