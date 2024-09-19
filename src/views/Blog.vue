<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center">BLOG</h1>
    <div class="border-b-2 border-gray-300 mb-8"></div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="grupo in gruposDeBlogs" :key="grupo.nombre">
        <h2 class="text-2xl font-semibold mb-4">{{ grupo.nombre.toUpperCase() }}</h2>
        <div class="space-y-6">
          <div v-for="post in grupo.posts" :key="post.id" 
               class="border-2 border-gray-300 rounded-lg overflow-hidden"
               :class="{ 'h-auto': grupo.nombre === 'Tutoriales', 'h-auto': grupo.nombre === 'Curiosidades' }">
            <template v-if="grupo.nombre === 'Tutoriales'">
              <img :src="post.imagen" :alt="post.titulo" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">{{ post.titulo }}</h3>
                <p class="text-gray-600">{{ post.extracto }}</p>
                <router-link :to="{ name: 'BlogPost', params: { id: post.id } }" class="text-blue-500 hover:underline mt-2 inline-block">
                  Leer más
                </router-link>
              </div>
            </template>
            <template v-else>
              <div class="p-4">
                <div @click="toggleCuriosidad(post)" class="cursor-pointer flex items-center">
                  <span class="text-2xl mr-2">{{ post.expanded ? '-' : '+' }}</span>
                  <h3 class="text-xl font-semibold">{{ post.titulo }}</h3>
                </div>
                <div v-if="post.expanded" class="mt-2">
                  <p class="text-gray-600">{{ post.extracto }}</p>
                  <p class="mt-2">{{ post.contenido }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { gruposDeBlogs } from '@/data/blogdata.js';

export default {
  name: 'Blog',
  setup() {
    const blogData = ref(gruposDeBlogs.map(grupo => ({
      ...grupo,
      posts: grupo.posts.map(post => ({
        ...post,
        expanded: false
      }))
    })));

    const toggleCuriosidad = (post) => {
      post.expanded = !post.expanded;
    };

    return {
      gruposDeBlogs: blogData,
      toggleCuriosidad
    };
  }
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
