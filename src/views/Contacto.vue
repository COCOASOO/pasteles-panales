<template>
  <div class="min-h-screen bg-azulBebe bg-opacity-75 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        
        <div class="p-8">
          <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center font-baby">Contacto</h1>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Quiénes Somos</h2>
            <p class="text-gray-600 leading-relaxed">
              Somos un negocio creativo especializado en la elaboración de pasteles de pañales con diferentes formas y diseños. Nuestra misión es crear regalos únicos y prácticos para padres de recién nacidos, combinando utilidad y belleza en cada creación. 
              Nos esforzamos por ofrecer detalles originales que sorprendan y emocionen en esos momentos tan especiales.
            </p>
          </section>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Contáctanos</h2>
            <div class="flex items-center mb-4">
              <span class="mr-2 text-xl">📞</span>
              <a  class="text-blue-600 hover:text-blue-800 transition duration-300">
                +34 678 846 424
              </a>
            </div>
            <WhatsAppButton :phone-number="phoneNumber" :message="whatsappMessage" />
          </section>
          
          <section>
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Síguenos en Instagram</h2>
            <div class="flex flex-wrap gap-4">
              <a :href="instagramLink.url" target="_blank" 
                 class="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-300">
                <span class="mr-2 text-xl">{{ instagramLink.emoji }}</span>
                {{ instagramLink.name }}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WhatsAppButton from '@/components/WhatsAppButton.vue';

const instagramLink = { name: 'Instagram', url: 'https://www.instagram.com/manuelagragera302/', emoji: '📷' };
const phoneNumber = '34678846424'; // Sin el '+' al principio
const whatsappMessage = 'Hola, me gustaría obtener más información sobre sus pasteles de pañales.';
</script>

<style scoped>
/* No se necesitan estilos adicionales ya que estamos usando Tailwind CSS */
</style>
