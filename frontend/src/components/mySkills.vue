<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-slate-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-slate-200 animate-zoom-in"
          :style="{ 'animation-delay': `${index * 100}ms` }"
        >
          <!-- Icon -->
          <div class="flex justify-center items-center mb-4 text-cyan-600">
            <svg
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-1.75-3.25M3 13h18M3 17h18M6 10v-4m6 0v4m6 0v-4"
              />
            </svg>
          </div>

          <!-- Skill Name -->
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ skill.name }}</h3>

          <!-- Skill Level -->
          <p class="text-gray-600 font-medium">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
