<template>
  <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="whatsapp-button">
    Consultar por WhatsApp
  </a>
</template>

<script>
export default {
  name: 'WhatsAppButton',
  data() {
    return {
      phoneNumber: '664377198', // Reemplaza con el número de teléfono deseado (sin el '+')
      message: '¡Hola! Me interesa saber más sobre sus productos para bebés. ¿Podría darme más información?'
    }
  },
  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.message);
      return `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodedMessage}`;
    }
  }
}
</script>

<style scoped>
.whatsapp-button {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.whatsapp-button:hover {
  background-color: #128C7E;
}
</style>
