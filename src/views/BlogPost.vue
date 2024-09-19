<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <button @click="volverAlBlog" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors mb-6">
      &larr; Volver al blog
    </button>
    <div v-if="post" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img :src="getImageUrl(post.imagen)" :alt="post.titulo" class="w-full h-64 object-cover">
      <div class="p-6">
        <h1 class="text-4xl font-bold mb-4">{{ post.titulo }}</h1>
        <p class="text-gray-600 mb-6">Fecha: {{ post.fecha }} | Autor: {{ post.autor }}</p>
        <div class="prose max-w-none text-justify">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Introducción</h2>
            <p>{{ post.contenido.introduccion }}</p>
          </section>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Importancia</h2>
            <p>{{ post.contenido.importancia }}</p>
          </section>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Materiales</h2>
            <ul class="list-disc pl-6">
              <li v-for="material in post.contenido.materiales" :key="material" class="mb-2">{{ material }}</li>
            </ul>
          </section>
          
          <section v-if="post.contenido.preparacionEspacio" class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Preparación del Espacio</h2>
            <ol class="list-decimal pl-6">
              <li v-for="paso in post.contenido.preparacionEspacio" :key="paso" class="mb-2">{{ paso }}</li>
            </ol>
          </section>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Pasos</h2>
            <div v-for="(paso, index) in post.contenido.pasos" :key="paso.titulo" class="mb-6">
              <h3 class="text-xl font-medium mb-2">{{ index + 1 }}. {{ paso.titulo }}</h3>
              <p>{{ paso.descripcion }}</p>
            </div>
          </section>
          
          <section v-if="post.contenido.tiposFiguras" class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Tipos de Figuras</h2>
            <div v-for="figura in post.contenido.tiposFiguras" :key="figura.tipo" class="mb-4">
              <h3 class="text-xl font-medium mb-2">{{ figura.tipo }}</h3>
              <p>{{ figura.descripcion }}</p>
            </div>
          </section>

          <section v-if="post.contenido.ideasDecoracion" class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Ideas de Decoración</h2>
            <p>{{ post.contenido.ideasDecoracion }}</p>
          </section>
        </div>
      </div>
    </div>
    <p v-else class="text-center text-xl">Cargando artículo...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { gruposDeBlogs } from '@/data/blogdata.js';

export default {
  name: 'BlogPost',
  setup() {
    const post = ref(null);
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      const postId = parseInt(route.params.id);
      const tutoriales = gruposDeBlogs.find(grupo => grupo.nombre === 'Tutoriales');
      post.value = tutoriales.posts.find(p => p.id === postId);
      if (!post.value) {
        router.push({ name: 'Blog' });
      }
    });

    const volverAlBlog = () => {
      router.push({ name: 'Blog' });
    };

    const getImageUrl = (imagePath) => {
      if (imagePath.startsWith('http') || imagePath.startsWith('https')) {
        return imagePath;
      }
      // Asumiendo que las imágenes están en la carpeta 'public'
      return `/${imagePath}`;
    };

    return {
      post,
      volverAlBlog,
      getImageUrl
    };
  }
};
</script>

<style scoped>
/* Estilos específicos para la vista del artículo del blog */
.prose h2 {
  @apply text-2xl font-semibold mb-4 mt-8;
}
.prose h3 {
  @apply text-xl font-medium mb-2 mt-6;
}
.prose p {
  @apply mb-4 text-justify;
}
.prose ul, .prose ol {
  @apply mb-4 pl-6;
}
.prose li {
  @apply mb-2;
}
</style>
