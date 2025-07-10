<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 border border-gray-200 animate-zoom-in"
          :style="{ 'animation-delay': `${index * 150}ms` }"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 object-cover object-center"
          />

          <div class="p-8">
            <h3 class="text-3xl font-extrabold text-gray-900 mb-3">
              {{ project.title }}
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="mb-6 flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-cyan-100 text-cyan-800 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm"
              >
                {{ t }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-900 font-bold hover:underline hover:text-blue-800 transition-colors duration-300"
            >
              Lihat Detail <span class="ml-2 text-xl">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
