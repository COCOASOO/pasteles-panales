<template>
  <div class="min-h-screen bg-azulBebe bg-opacity-75 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-full w-full object-cover md:w-96" src="/guita.png" alt="Imagen de contacto">
        </div>
        <div class="p-8">
          <h1 class="text-4xl font-bold text-gray-800 mb-6">Contacto</h1>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Quiénes Somos</h2>
            <p class="text-gray-600 leading-relaxed">
              Somos una empresa innovadora especializada en desarrollo web y móvil. Nuestra misión es crear soluciones digitales que transformen negocios y mejoren la vida de las personas. 
              Nos esforzamos por la excelencia técnica, la creatividad y la satisfacción del cliente en cada proyecto que emprendemos.
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Enlaces de Contacto</h2>
            <div class="flex flex-wrap gap-4">
              <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" 
                 class="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-300">
                <span class="mr-2 text-xl">{{ link.emoji }}</span>
                {{ link.name }}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/tu-empresa', emoji: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/tu_empresa', emoji: '🐦' },
  { name: 'Instagram', url: 'https://instagram.com/tu_empresa', emoji: '📷' },
  { name: 'GitHub', url: 'https://github.com/tu-empresa', emoji: '💻' },
];
</script>

<style scoped>
/* No se necesitan estilos adicionales ya que estamos usando Tailwind CSS */
</style>
