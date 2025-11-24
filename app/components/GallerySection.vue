<template>
  <section id="gallery" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Galeri Proyek
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Dokumentasi proyek instalasi sistem keamanan, jaringan, dan otomasi
          yang telah kami kerjakan.
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div
          v-for="item in galleryItems"
          :key="item.title"
          class="group relative overflow-hidden rounded-xl aspect-square"
        >
          <NuxtImg
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-300 flex items-center justify-center"
          >
            <div
              class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
            >
              <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Categories -->
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-gray-50 rounded-xl">
          <UIcon
            name="i-heroicons-shield-check"
            class="text-4xl text-blue-600 mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Sistem Keamanan
          </h3>
          <p class="text-gray-600">
            Instalasi CCTV dan kontrol akses canggih di berbagai industri.
          </p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-xl">
          <UIcon
            name="i-heroicons-computer-desktop"
            class="text-4xl text-green-600 mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Solusi Kantor
          </h3>
          <p class="text-gray-600">
            Implementasi otomasi kantor dan perangkat peripheral lengkap.
          </p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-xl">
          <UIcon
            name="i-heroicons-code-bracket"
            class="text-4xl text-purple-600 mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Software Custom
          </h3>
          <p class="text-gray-600">
            Solusi perangkat lunak khusus dan integrasi sistem untuk bisnis
            modern.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const galleryItems = [
  {
    image: "/images/galleries/pemasangan-autogate.png",
    title: "Pemasangan Autogate",
    description: "Sistem pintu otomatis modern",
  },
  {
    image: "/images/galleries/pemasangan-autogate-1.png",
    title: "Instalasi Autogate",
    description: "Solusi akses kendaraan otomatis",
  },
  {
    image: "/images/galleries/pemasangan-autogate-2.png",
    title: "Proyek Autogate",
    description: "Implementasi sistem barrier otomatis",
  },
  {
    image: "/images/galleries/pemasangan-autogate-3.png",
    title: "Setup Autogate",
    description: "Instalasi gate otomatis premium",
  },
  {
    image: "/images/galleries/pemasangan-jaringan-fo.png",
    title: "Pemasangan Jaringan Fiber Optik",
    description: "Infrastruktur jaringan berkecepatan tinggi",
  },
  {
    image: "/images/galleries/pemasangan-jaringan-fo-2.png",
    title: "Instalasi Fiber Optik",
    description: "Koneksi jaringan enterprise",
  },
  {
    image: "/images/galleries/pemasangan-jaringan-fo-3.png",
    title: "Konfigurasi FO",
    description: "Pemasangan kabel fiber optik",
  },
  {
    image: "/images/galleries/pemasangan-jaringan-fo-4.png",
    title: "Proyek Jaringan FO",
    description: "Implementasi infrastruktur FO",
  },
  {
    image: "/images/galleries/pemasangan-perangkat-ups.png",
    title: "Pemasangan UPS",
    description: "Sistem power backup terpercaya",
  },
  {
    image: "/images/galleries/pemasangan-perangkat-ups-1.png",
    title: "Instalasi UPS",
    description: "Perangkat uninterruptible power supply",
  },
  {
    image: "/images/galleries/pemasangan-turnstile.png",
    title: "Pemasangan Turnstile",
    description: "Sistem kontrol akses pedestrian",
  },
  {
    image: "/images/galleries/pemasangan-turnstile-2.png",
    title: "Instalasi Turnstile Gate",
    description: "Kontrol akses gedung modern",
  },
  {
    image: "/images/galleries/pemasangan-vide-intercom.png",
    title: "Pemasangan Video Intercom",
    description: "Sistem komunikasi visual",
  },
];
</script>
