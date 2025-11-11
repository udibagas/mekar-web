<template>
  <section id="clients" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Klien Terpercaya
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Dipercaya oleh perusahaan terkemuka di Indonesia untuk menyediakan
          solusi teknologi yang andal dan inovatif.
        </p>
      </div>

      <!-- Client Logos Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-16"
      >
        <!-- Bank Indonesia -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-building-library"
              class="text-4xl text-blue-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Bank Indonesia</p>
          </div>
        </div>

        <!-- PT Pertamina -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-fire"
              class="text-4xl text-green-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">PT Pertamina</p>
          </div>
        </div>

        <!-- Telkom Indonesia -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-signal"
              class="text-4xl text-red-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Telkom Indonesia</p>
          </div>
        </div>

        <!-- PT PLN -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-bolt"
              class="text-4xl text-yellow-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">PT PLN</p>
          </div>
        </div>

        <!-- BCA -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-credit-card"
              class="text-4xl text-purple-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Bank BCA</p>
          </div>
        </div>

        <!-- Mandiri -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-banknotes"
              class="text-4xl text-orange-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Bank Mandiri</p>
          </div>
        </div>

        <!-- Garuda Indonesia -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-paper-airplane"
              class="text-4xl text-blue-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Garuda Indonesia</p>
          </div>
        </div>

        <!-- Unilever -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-beaker"
              class="text-4xl text-teal-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Unilever Indonesia</p>
          </div>
        </div>

        <!-- Astra International -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-truck"
              class="text-4xl text-indigo-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Astra International</p>
          </div>
        </div>

        <!-- Shopee -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-shopping-bag"
              class="text-4xl text-pink-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Shopee Indonesia</p>
          </div>
        </div>

        <!-- Gojek -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-device-phone-mobile"
              class="text-4xl text-green-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Gojek</p>
          </div>
        </div>

        <!-- BUMN -->
        <div
          class="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <div class="text-center">
            <UIcon
              name="i-heroicons-building-office-2"
              class="text-4xl text-gray-600 mx-auto mb-2"
            />
            <p class="text-sm font-medium text-gray-700">Berbagai BUMN</p>
          </div>
        </div>
      </div>

      <!-- Client Categories -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="text-center p-6 bg-blue-50 rounded-xl">
          <UIcon
            name="i-heroicons-building-library"
            class="text-5xl text-blue-600 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Perbankan & Keuangan
          </h3>
          <p class="text-gray-600 mb-4">
            Melayani institusi perbankan dan keuangan terkemuka dengan solusi
            keamanan dan teknologi tingkat enterprise.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Bank Indonesia</li>
            <li>• Bank BCA</li>
            <li>• Bank Mandiri</li>
            <li>• Bank BNI</li>
          </ul>
        </div>

        <div class="text-center p-6 bg-green-50 rounded-xl">
          <UIcon
            name="i-heroicons-building-office"
            class="text-5xl text-green-600 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            BUMN & Pemerintahan
          </h3>
          <p class="text-gray-600 mb-4">
            Mendukung BUMN dan instansi pemerintahan dalam transformasi digital
            dan modernisasi infrastruktur.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• PT Pertamina</li>
            <li>• PT PLN</li>
            <li>• Telkom Indonesia</li>
            <li>• Garuda Indonesia</li>
          </ul>
        </div>

        <div class="text-center p-6 bg-purple-50 rounded-xl">
          <UIcon
            name="i-heroicons-globe-asia-australia"
            class="text-5xl text-purple-600 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Swasta & Multinasional
          </h3>
          <p class="text-gray-600 mb-4">
            Membantu perusahaan swasta dan multinasional mengoptimalkan operasi
            dengan teknologi terdepan.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Unilever Indonesia</li>
            <li>• Astra International</li>
            <li>• Shopee Indonesia</li>
            <li>• Gojek</li>
          </ul>
        </div>
      </div>

      <!-- Testimonial -->
      <div
        class="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
      >
        <div class="max-w-3xl mx-auto">
          <UIcon
            name="i-heroicons-chat-bubble-left-ellipsis"
            class="text-4xl mx-auto mb-4 opacity-80"
          />
          <blockquote class="text-xl md:text-2xl font-medium mb-6">
            "Mekar Technology telah menjadi mitra teknologi terpercaya kami
            selama bertahun-tahun. Solusi keamanan dan sistem manajemen yang
            mereka berikan sangat membantu operasional perusahaan kami menjadi
            lebih efisien dan aman."
          </blockquote>
          <div class="flex items-center justify-center space-x-4">
            <div
              class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <UIcon name="i-heroicons-user" class="text-xl" />
            </div>
            <div class="text-left">
              <p class="font-semibold">Ir. Budi Santoso</p>
              <p class="text-blue-100 text-sm">IT Manager, PT Global Finance</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-12 grid md:grid-cols-4 gap-6 text-center">
        <div>
          <div class="text-3xl font-bold text-blue-600 mb-2">150+</div>
          <p class="text-gray-600 text-sm">Klien Aktif</p>
        </div>
        <div>
          <div class="text-3xl font-bold text-green-600 mb-2">99.8%</div>
          <p class="text-gray-600 text-sm">Kepuasan Klien</p>
        </div>
        <div>
          <div class="text-3xl font-bold text-purple-600 mb-2">24/7</div>
          <p class="text-gray-600 text-sm">Dukungan Teknis</p>
        </div>
        <div>
          <div class="text-3xl font-bold text-orange-600 mb-2">8+</div>
          <p class="text-gray-600 text-sm">Tahun Kepercayaan</p>
        </div>
      </div>
    </div>
  </section>
</template>
