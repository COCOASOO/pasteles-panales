<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 bg-grisCaliente">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router'
</script>

<style scoped>

</style>
