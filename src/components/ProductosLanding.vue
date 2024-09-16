<template>
  <section class="featured-products py-16 px-4 sm:px-0">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">Nuestros Pasteles Destacados</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="product in featuredProducts" :key="product.id" 
             class="product-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer"
             v-observe-visibility="onVisibilityChange"
             @click="navigateToProducts">
          <img :src="product.image" :alt="product.name" class="w-full h-60 object-cover">
          <div class="p-3 flex flex-col flex-grow">
            <h3 class="text-lg font-semibold mb-1">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mb-2 flex-grow">{{ product.description }}</p>
            <div class="mt-auto">
              <span class="text-md font-bold text-blue-600">{{ product.price.toFixed(2) }}€</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <router-link to="/productos" class="btn btn-lg bg-azulOscuro text-white hover:bg-rosaFuerte hover:scale-105 transition-transform duration-300 text-xl px-8 py-4">Ver todos los productos</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { products } from '@/data/destacados'
import { ObserveVisibility } from 'vue-observe-visibility'

export default {
  name: 'ProductosLanding',
  directives: {
    ObserveVisibility,
  },
  setup() {
    const featuredProducts = ref([])
    const router = useRouter()

    onMounted(() => {
      featuredProducts.value = products.slice(0, 6)
      console.log('Productos cargados:', featuredProducts.value)
    })

    const onVisibilityChange = (isVisible, entry) => {
      if (isVisible) {
        entry.target.classList.add('is-visible')
      }
    }

    const navigateToProducts = () => {
      console.log('Navegando a productos...')
      router.push('/productos')
    }

    return { featuredProducts, onVisibilityChange, navigateToProducts }
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%; /* Asegura que todas las tarjetas tengan la misma altura */
  opacity: 1;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.product-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
