<template>
  <div class="container mx-auto px-4 py-8">
    <button @click="volverAlBlog" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors mb-4">
      &larr; Volver al blog
    </button>
    <h1 v-if="post" class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <div v-if="post" class="prose max-w-none" v-html="post.content"></div>
    <p v-else>Cargando artículo...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'BlogPost',
  setup() {
    const post = ref(null);
    const route = useRoute();
    const router = useRouter();

    const posts = [
      { id: 1, title: 'Primer Artículo', content: '<p>Contenido completo del primer artículo.</p>' },
      { id: 2, title: 'Segundo Artículo', content: '<p>Contenido completo del segundo artículo.</p>' },
      // Añade más artículos aquí
    ];

    onMounted(() => {
      const postId = parseInt(route.params.id);
      post.value = posts.find(p => p.id === postId);
      if (!post.value) {
        router.push({ name: 'Blog' });
      }
    });

    const volverAlBlog = () => {
      router.push({ name: 'Blog' });
    };

    return {
      post,
      volverAlBlog
    };
  }
};
</script>

<style scoped>
/* Estilos específicos para la vista del artículo del blog */
</style>
