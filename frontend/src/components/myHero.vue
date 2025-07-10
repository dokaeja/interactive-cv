<template>
  <section id="profil" class="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)]">
    <!-- Teks Profil -->
    <div class="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
      <h1
        class="text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-slide-in-left"
        style="animation-delay: 200ms;"
      >
        Halo, Saya <span class="text-blue-900">Agustina Septofanny</span>
        <span class="text-cyan-500">.</span>
      </h1>
      <p
        class="text-2xl text-gray-700 mb-10 leading-relaxed animate-slide-in-left"
        style="animation-delay: 400ms;"
      >
        Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
      </p>
      <a
        href="#kontak"
        class="bg-blue-900 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 inline-block animate-slide-in-left hover:scale-105"
        style="animation-delay: 600ms;"
      >
        Hubungi Saya
        <span class="ml-2">&rarr;</span>
      </a>
    </div>

    <!-- Gambar Profil -->
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        src="https://via.placeholder.com/400"
        alt="Foto Profil"
        class="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300 animate-float"
      >
    </div>
  </section>
</template>
