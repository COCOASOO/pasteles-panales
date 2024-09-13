<template>
  <div class="productos-grid">
    <div v-for="producto in productosDestacados" :key="producto.id" class="producto-card">
      <div class="producto-imagen-container">
        <img :src="producto.image" :alt="producto.name" class="producto-imagen">
      </div>
      <div class="producto-info">
        <h3>{{ producto.name }}</h3>
        <p>{{ producto.description }}</p>
        <button @click="verDetalles(producto.id)" class="ver-detalles-btn">Ver detalles</button>
      </div>
    </div>
  </div>
</template>

<script>
import { productos } from '@/data/productos.js'

export default {
  name: 'Productos',
  data() {
    return {
      productosDestacados: productos.slice(0, 4)
    }
  },
  methods: {
    verDetalles(productoId) {
      this.$router.push({ name: 'ProductosDetalles', params: { id: productoId } })
    }
  }
}
</script>

<style scoped>
.productos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px;
}

.producto-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.producto-imagen-container {
  width: 100%;
  padding-top: 100%; /* Esto crea un contenedor cuadrado */
  position: relative;
  overflow: hidden;
}

.producto-imagen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.producto-info {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.producto-info h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.producto-info p {
  flex-grow: 1;
  margin-bottom: 15px;
}

.ver-detalles-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-start;
}

.ver-detalles-btn:hover {
  background-color: #0056b3;
}
</style>
