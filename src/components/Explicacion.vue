<template>
  <div class="py-20 ">
    <div class="container mx-auto px-4 max-w-7xl">
      <h2 class="text-5xl font-bold text-center mb-20 font-baby animate__animated animate__fadeIn">¿Cómo lo hacemos?</h2>
      <div class="flex flex-col items-center space-y-24">
        <div v-for="(step, index) in steps" :key="index" class="w-full">
          <div class="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
            <div class="w-full lg:w-1/2 animate__animated animate__fadeInLeft">
              <img :src="step.image" :alt="step.title" class="rounded-lg shadow-lg w-full h-96 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="w-full lg:w-1/2 animate__animated animate__fadeInRight">
              <h3 class="text-4xl font-semibold mb-8">{{ index + 1 }}. {{ step.title }}</h3>
              <p class="text-2xl leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
          <div v-if="index < steps.length - 1" class="text-center text-6xl mt-16 text-rosaFuerte animate__animated animate__pulse animate__infinite">↓</div>
        </div>
      </div>
      <div class="text-center mt-24 animate__animated animate__fadeInUp">
        <router-link to="/como-lo-hacemos" class="btn btn-lg bg-azulOscuro text-white hover:bg-rosaFuerte hover:scale-105 transition-transform duration-300 text-xl px-8 py-4">Saber Más</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { explicacionSteps } from '@/data/explicacion.js'
import 'animate.css'

export default {
  name: 'Explicacion',
  data() {
    return {
      steps: explicacionSteps
    }
  }
}
</script>
