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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

watch(
  () => route.fullPath,
  () => {
    nextTick(() => {
      scrollToTop();
    });
  }
);
</script>

<style scoped>

</style>
