<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" class="text-white" />

      <p class="text-xl text-gray-300 mb-10 leading-relaxed">
        Jangan ragu untuk terhubung, berdiskusi, atau bertanya.
        Saya senang berkolaborasi dan belajar hal baru!
      </p>

      <a
        href="mailto:agustinasfanny@students.amikom.ac.id"
        class="bg-blue-900 text-white font-extrabold py-4 px-10 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 inline-block mb-16 transform hover:scale-105"
      >
        Kirim Email <span class="ml-2">&gt;</span>
      </a>

      <div class="flex justify-center space-x-8 mb-10">
        <!-- GitHub -->
        <a
          href="https://github.com/dokaeja"
          target="_blank"
          class="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1"
        >
          <svg class="w-10 h-10 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483
              0-.237-.007-.866-.012-1.704-2.782.601-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.607.069-.607
              1.004.072 1.532 1.03 1.532 1.03.892 1.529 2.342 1.088 2.91.831.091-.646.352-1.088.638-1.338-2.22-.253-4.555-1.116-4.555-4.945
              0-1.092.39-1.988 1.029-2.682-.103-.253-.446-1.27.098-2.651 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.006 1.7-.101
              2.502-.294 1.909-1.295 2.747-1.026 2.747-1.026.546 1.382.202 2.398.099 2.651.64.694 1.028 1.59 1.028 2.682
              0 3.839-2.339 4.686-4.567 4.935.359.307.678.915.678 1.85V21.5c0 .268.182.58.687.483C21.133 20.198 24 16.442 24 12.017
              24 6.484 19.522 2 14 2h-2z"
            />
          </svg>
          GitHub
        </a>

        <!-- LinkedIn -->
        <a
          href="#"
          target="_blank"
          class="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1"
        >
          <svg class="w-10 h-10 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20.218 20.218H16.54V13.57c0-1.61-.88-2.39-1.84-2.39-1.57 0-2.02 1.04-2.02 2.36v6.678h-3.68c.05-.01.09-.03.14-.04v-9.742h3.68v1.56c.55-.83
              1.34-1.56 2.47-1.56 2.87 0 3.65 1.88 3.65 4.65v5.092zM7.48 8.01c-1.23 0-2.02-.91-2.02-2.05s.79-2.05 2.02-2.05
              2.02.91 2.02 2.05-.79 2.05-2.02 2.05zm1.84 12.208H5.64v-9.742h3.68v9.742z"
            />
          </svg>
          LinkedIn
        </a>
      </div>

      <p class="text-gray-500 text-sm mt-8">
        &copy; {{ new Date().getFullYear() }} Nama Mahasiswa.
        Dibuat dengan ❤
      </p>
    </div>
  </footer>
</template>
