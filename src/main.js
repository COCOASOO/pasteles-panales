import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'; // Importa el store

const app = createApp(App)

app.use(router)
app.use(store) // Usa el store

app.mount('#app')
