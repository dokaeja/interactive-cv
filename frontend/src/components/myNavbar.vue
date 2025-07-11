<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center relative">
      <div class="text-2xl font-extrabold text-blue-900">My Portfolio</div> <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-700 hover:text-cyan-500 focus:outline-none focus:text-cyan-500"> <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-4 6h4" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul class="hidden md:flex space-x-6">
        <li><a href="#profil" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300 relative group">Profil<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></a></li>
        <li><a href="#pendidikan" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300 relative group">Pendidikan<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></a></li>
        <li><a href="#skill" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300 relative group">Skill<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></a></li>
        <li><a href="#proyek" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300 relative group">Proyek<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></a></li>
        <li><a href="#kontak" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300 relative group">Kontak<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></a></li>
      </ul>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <ul v-show="isMenuOpen" class="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-4 space-y-3 z-40">
          <li><a href="#profil" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium py-2 px-4 block w-full text-center">Profil</a></li>
          <li><a href="#pendidikan" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium py-2 px-4 block w-full text-center">Pendidikan</a></li>
          <li><a href="#skill" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium py-2 px-4 block w-full text-center">Skill</a></li>
          <li><a href="#proyek" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium py-2 px-4 block w-full text-center">Proyek</a></li>
          <li><a href="#kontak" @click="closeMenu" class="text-gray-700 hover:text-cyan-500 font-medium py-2 px-4 block w-full text-center">Kontak</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
