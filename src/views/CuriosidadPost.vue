<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <button @click="volverAlBlog" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors mb-6">
      &larr; Volver al blog
    </button>
    <article v-if="post" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="p-6">
        <h1 class="text-4xl font-bold mb-4">{{ post.titulo }}</h1>
        <p class="text-gray-600 mb-6">{{ post.fecha }} por {{ post.autor }}</p>
        <div class="prose max-w-none">
          <p class="text-lg font-semibold mb-6">{{ post.extracto }}</p>
          
          <template v-for="(section, key) in post.contenido" :key="key">
            <section class="mb-8">
              <h2 v-if="section.titulo" class="text-2xl font-semibold mb-4">{{ section.titulo }}</h2>
              <div v-if="section.contenido" v-html="formatMarkdown(section.contenido)"></div>
              
              <template v-if="section.razones">
                <ul v-if="Array.isArray(section.razones)" class="list-disc pl-5 mb-4">
                  <li v-for="(razon, index) in section.razones" :key="index" class="mb-2" v-html="formatMarkdown(razon)"></li>
                </ul>
                <template v-else>
                  <div v-for="(razon, razonKey) in section.razones" :key="razonKey" class="mb-4">
                    <h3 v-if="razon.subtitulo" class="text-xl font-semibold mb-2">{{ razon.subtitulo }}</h3>
                    <p v-html="formatMarkdown(razon.contenido)"></p>
                  </div>
                </template>
              </template>
              
              <template v-if="key === 'comoHacer'">
                <h3 class="text-xl font-semibold mb-3">Materiales necesarios:</h3>
                <ul class="list-disc pl-5 mb-4">
                  <li v-for="(material, index) in section.materiales" :key="index" class="mb-2">{{ material }}</li>
                </ul>
                <h3 class="text-xl font-semibold mb-3">Pasos a seguir:</h3>
                <ol class="list-decimal pl-5 mb-4">
                  <li v-for="(paso, index) in section.pasos" :key="index" class="mb-2">{{ paso }}</li>
                </ol>
              </template>
            </section>
          </template>
          
          <section v-if="post.conclusiones" class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Conclusiones</h2>
            <p>{{ post.conclusiones }}</p>
          </section>
        </div>
      </div>
    </article>
    <p v-else class="text-center text-xl">Cargando artículo...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { gruposDeBlogs } from '@/data/blogdata.js';
import { marked } from 'marked';

export default {
  name: 'CuriosidadPost',
  setup() {
    const post = ref(null);
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      const postId = parseInt(route.params.id);
      const curiosidades = gruposDeBlogs.find(grupo => grupo.nombre === 'Curiosidades');
      post.value = curiosidades.posts.find(p => p.id === postId);
      if (!post.value) {
        router.push({ name: 'Blog' });
      }
    });

    const formatMarkdown = (content) => {
      if (typeof content === 'string') {
        return marked(content);
      } else if (typeof content === 'object') {
        return JSON.stringify(content);
      }
      return '';
    };

    const volverAlBlog = () => {
      router.push({ name: 'Blog' });
    };

    return {
      post,
      formatMarkdown,
      volverAlBlog
    };
  }
};
</script>

<style scoped>
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
  @apply mb-4 pl-6 list-disc;
}
.prose li {
  @apply mb-2 text-justify;
}
.prose strong {
  @apply font-semibold;
}
</style>
