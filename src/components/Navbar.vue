<template>
  <div class="navbar bg-azulBebe px-4 py-1">
    <!--Movil-->
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 p-1 shadow">
          <li>
            <router-link to="/" class="text-azulNavbar font-semibold transition-colors"
              exact-active-class="font-bold">
              Inicio
            </router-link>
          </li>
          <li>
            <router-link to="/productos" class="text-azulNavbar font-semibold transition-colors"
              exact-active-class="font-bold">
              Productos
            </router-link>
          </li>
          <li>
            <router-link to="/como-lo-hacemos" class="text-azulNavbar font-semibold transition-colors"
              exact-active-class="font-bold">
              Proceso de pedido
            </router-link>
          </li>
          <li>
            <router-link to="/contacto" class="text-azulNavbar font-semibold transition-colors"
              exact-active-class="font-bold">
              Contacto
            </router-link>
          </li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-link no-underline font-semibold normal-case text-xl text-azulNavbar p-0 font-baby"
        exact-active-class="font-bold">
        PañalPastel
      </router-link>
    </div>
    <!--PC-->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 space-x-6">
        <li>
          <router-link to="/" class="text-azulNavbar font-semibold transition-colors text-xl font-baby">
            Inicio
          </router-link>
        </li>
        <li>
          <router-link to="/productos" class="text-azulNavbar font-semibold transition-colors text-xl font-baby">
            Pasteles de pañales
          </router-link>
        </li>
        <li>
          <router-link to="/como-lo-hacemos" class="text-azulNavbar font-semibold transition-colors text-xl font-baby">
            Proceso de pedido
          </router-link>
        </li>
        <li>
          <router-link to="/contacto" class="text-azulNavbar font-semibold transition-colors text-xl font-baby">
            Contacto
          </router-link>
        </li>
      </ul>
    </div>

    <div class="navbar-end">
      <img src="../assets/bebe2.gif" alt="Descripción del GIF" class="w-10 h-10 object-cover rounded-md" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Añade estilos personalizados si es necesario */
</style>
