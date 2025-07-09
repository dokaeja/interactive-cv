<script setup>
import Navbar from '@/components/myNavbar.vue';
import Hero from '@/components/myHero.vue';
import Education from '@/components/myEducation.vue';
import Skills from '@/components/mySkills.vue';
import Projects from '@/components/myProjects.vue';
import Contact from '@/components/myContact.vue';
</script>

<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <div v-animate-on-scroll>
        <Education />
      </div>
      <div v-animate-on-scroll>
        <Skills />
      </div>
      <div v-animate-on-scroll>
        <Projects />
      </div>
      <div v-animate-on-scroll>
        <Contact />
      </div>
    </main>
  </div>
</template>
