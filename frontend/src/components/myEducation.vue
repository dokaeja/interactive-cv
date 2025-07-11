<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white shadow-inner">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative max-w-3xl mx-auto">
        <!-- Garis tengah vertikal -->
        <div class="absolute h-full border-l-4 border-slate-300 left-1/2 transform -translate-x-1/2"></div>

        <!-- Setiap item pendidikan -->
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 flex items-center w-full"
        >
          <!-- Jika index genap, tampil di kiri -->
          <template v-if="index % 2 === 0">
            <div class="w-1/2 pr-8 text-right flex flex-col items-end">
              <div
                class="bg-cyan-100 text-cyan-800 px-4 py-1 rounded-full text-sm font-semibold mb-2 shadow-md animate-zoom-in"
                :style="{ animationDelay: `${index * 100 + 100}ms` }"
              >
                {{ edu.period }}
              </div>
              <div
                class="p-6 bg-white rounded-lg shadow-xl border-t-4 border-blue-900 transform hover:scale-105 transition-transform duration-300 animate-slide-in-left"
                :style="{ animationDelay: `${index * 100 + 200}ms` }"
              >
                <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ edu.institution }}</h3>
                <p class="text-blue-700 font-semibold">{{ edu.major }}</p>
              </div>
            </div>

            <!-- Titik tengah -->
            <div class="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center z-10 flex-shrink-0">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <!-- Spacer kanan -->
            <div class="w-1/2"></div>
          </template>

          <!-- Jika index ganjil, tampil di kanan -->
          <template v-else>
            <!-- Spacer kiri -->
            <div class="w-1/2"></div>

            <!-- Titik tengah -->
            <div class="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center z-10 flex-shrink-0">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div class="w-1/2 pl-8 text-left flex flex-col items-start">
              <div
                class="bg-cyan-100 text-cyan-800 px-4 py-1 rounded-full text-sm font-semibold mb-2 shadow-md animate-zoom-in"
                :style="{ animationDelay: `${index * 100 + 100}ms` }"
              >
                {{ edu.period }}
              </div>
              <div
                class="p-6 bg-white rounded-lg shadow-xl border-t-4 border-blue-900 transform hover:scale-105 transition-transform duration-300 animate-slide-in-right"
                :style="{ animationDelay: `${index * 100 + 200}ms` }"
              >
                <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ edu.institution }}</h3>
                <p class="text-blue-700 font-semibold">{{ edu.major }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
