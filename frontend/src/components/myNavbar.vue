<template>
  <header class="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Nama Mahasiswa</div>

      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-4 6h4"></path>
          </svg>
        </button>
      </div>

      <ul :class="{'hidden': !isOpen, 'flex': isOpen}" class="md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 py-4 md:py-0 pl-6 md:pl-0 shadow-md md:shadow-none">
        <li>
          <a href="#profil"
             class="block text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
             @click="closeMenu">
            Profil
          </a>
        </li>
        <li>
          <a href="#pendidikan"
             class="block text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
             @click="closeMenu">
            Pendidikan
          </a>
        </li>
        <li>
          <a href="#skill"
             class="block text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
             @click="closeMenu">
            Skill
          </a>
        </li>
        <li>
          <a href="#proyek"
             class="block text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
             @click="closeMenu">
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak"
             class="block text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
             @click="closeMenu">
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* You can add custom styles here if needed, but Tailwind CSS handles most of it. */
</style>
