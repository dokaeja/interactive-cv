<script setup>
defineProps({ title: String });
</script>

<template>
  <div class="mb-16 text-center animate-zoom-in">
    <h2 class="text-5xl font-extrabold text-gray-900 relative inline-block">
      {{ title }}
      <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span> </h2>
    <div class="w-32 h-2 bg-blue-900 mx-auto mt-6 rounded-full shadow-md"></div> </div>
</template>
