<template>
  <section id="products" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Produk & Solusi
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Solusi teknologi komprehensif yang dirancang untuk meningkatkan
          operasi bisnis dan infrastruktur keamanan Anda.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- CCTV Systems -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-4">
            <UIcon
              name="i-heroicons-video-camera"
              class="text-3xl text-blue-600 mr-3"
            />
            <h3 class="text-xl font-semibold text-gray-900">Sistem CCTV</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Solusi pengawasan canggih dengan kamera IP, sistem NVR/DVR, dan
            monitoring berbasis cloud.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Sistem Kamera IP</li>
            <li>• Software Manajemen Video</li>
            <li>• Pengawasan Cloud</li>
          </ul>
        </div>

        <!-- Access Control -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-4">
            <UIcon
              name="i-heroicons-key"
              class="text-3xl text-green-600 mr-3"
            />
            <h3 class="text-xl font-semibold text-gray-900">Kontrol Akses</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Manajemen akses aman dengan sistem autentikasi biometrik dan
            berbasis kartu.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Sistem Biometrik</li>
            <li>• Akses Card Reader</li>
            <li>• Absensi Waktu</li>
          </ul>
        </div>

        <!-- Parking Systems -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-4">
            <UIcon
              name="i-heroicons-truck"
              class="text-3xl text-purple-600 mr-3"
            />
            <h3 class="text-xl font-semibold text-gray-900">Sistem Parkir</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Manajemen parkir otomatis dengan ALPR, sistem panduan, dan integrasi
            pembayaran.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Pengenalan Plat Nomor</li>
            <li>• Panduan Parkir</li>
            <li>• Sistem Pembayaran</li>
          </ul>
        </div>

        <!-- Office Peripherals -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-4">
            <UIcon
              name="i-heroicons-printer"
              class="text-3xl text-orange-600 mr-3"
            />
            <h3 class="text-xl font-semibold text-gray-900">
              Peralatan Kantor
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            Peralatan kantor profesional termasuk printer, scanner, dan sistem
            AV.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Printer Profesional</li>
            <li>• Papan Tulis Interaktif</li>
            <li>• Peralatan Konferensi</li>
          </ul>
        </div>

        <!-- Software Integration -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-4">
            <UIcon
              name="i-heroicons-puzzle-piece"
              class="text-3xl text-red-600 mr-3"
            />
            <h3 class="text-xl font-semibold text-gray-900">
              Integrasi Software
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            Integrasi sistem yang mulus dan pengembangan API untuk otomatisasi
            alur kerja optimal.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Integrasi ERP</li>
            <li>• Pengembangan API</li>
            <li>• Optimasi Sistem</li>
          </ul>
        </div>

        <!-- Networking -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-4">
            <UIcon
              name="i-heroicons-globe-alt"
              class="text-3xl text-cyan-600 mr-3"
            />
            <h3 class="text-xl font-semibold text-gray-900">Jaringan</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Desain jaringan komprehensif, implementasi, dan solusi keamanan.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Desain Jaringan</li>
            <li>• Solusi Nirkabel</li>
            <li>• Implementasi Keamanan</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
