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

      <!-- Client Logos Marquee -->
      <UMarquee :spacing="80" class="mb-16">
        <NuxtImg
          src="/images/clients/bni.png"
          alt="Bank BNI"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/mandiri.png"
          alt="Bank Mandiri"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/bri.png"
          alt="Bank BRI"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/pelindo.png"
          alt="Pelindo"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/disporapar.jpg"
          alt="Disporapar Jawa Tengah"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/pln.png"
          alt="PLN"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/kai.jpg"
          alt="KAI"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/jne.png"
          alt="JNE"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/jamkrida.png"
          alt="Jamkrida Jateng"
          class="h-16 w-auto object-contain"
        />
        <NuxtImg
          src="/images/clients/bpjs.jpg"
          alt="BPJS Kesehatan"
          class="h-16 w-auto object-contain"
        />
      </UMarquee>

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
            <li>• Bank BNI</li>
            <li>• Bank Mandiri</li>
            <li>• Bank BRI</li>
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
            <li>• PT PLN</li>
            <li>• PT KAI</li>
            <li>• BPJS Kesehatan</li>
            <li>• Pelindo</li>
            <li>• Jamkrida</li>
            <li>• Disporapar</li>
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
            <li>• JNE</li>
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
          <div class="text-3xl font-bold text-blue-600 mb-2">10+</div>
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
          <div class="text-3xl font-bold text-orange-600 mb-2">10+</div>
          <p class="text-gray-600 text-sm">Tahun Kepercayaan</p>
        </div>
      </div>
    </div>
  </section>
</template>
