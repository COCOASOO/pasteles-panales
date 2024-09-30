import { createStore } from 'vuex';
import { gruposDeProductos } from './data/productos.js'; // Importa los datos directamente
import { gruposDeBlogs } from './data/blogdata.js'; // Importa los blogs

export default createStore({
  state: {
    gruposDeProductos: [],
    gruposDeBlogs: [],
    // Agrega más estados según sea necesario
  },
  mutations: {
    setGruposDeProductos(state, productos) {
      state.gruposDeProductos = productos;
    },
    setGruposDeBlogs(state, blogs) {
      state.gruposDeBlogs = blogs;
    },
    // Agrega más mutaciones según sea necesario
  },
  actions: {
    fetchGruposDeProductos({ commit }) {
      commit('setGruposDeProductos', gruposDeProductos); // Usa los datos importados
    },
    fetchGruposDeBlogs({ commit }) {
      commit('setGruposDeBlogs', gruposDeBlogs); // Usa los datos importados
    },
    // Agrega más acciones según sea necesario
  },
  getters: {
    getGruposDeProductos: (state) => state.gruposDeProductos,
    getGruposDeBlogs: (state) => state.gruposDeBlogs,
    // Agrega más getters según sea necesario
  }
});
