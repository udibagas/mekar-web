<template>
  <section id="gallery" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Gallery
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Take a look at our work in action - from installations to completed
          projects.
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Image 1 - CCTV Installation -->
        <div
          class="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-blue-500 to-purple-600"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <UIcon
              name="i-heroicons-video-camera"
              class="text-6xl text-white opacity-70"
            />
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
          >
            <div
              class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-lg font-semibold mb-2">CCTV Installation</h3>
              <p class="text-sm">Professional camera setup</p>
            </div>
          </div>
        </div>

        <!-- Image 2 - Access Control -->
        <div
          class="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-green-500 to-teal-600"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <UIcon
              name="i-heroicons-finger-print"
              class="text-6xl text-white opacity-70"
            />
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
          >
            <div
              class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-lg font-semibold mb-2">Access Control</h3>
              <p class="text-sm">Biometric authentication</p>
            </div>
          </div>
        </div>

        <!-- Image 3 - Network Infrastructure -->
        <div
          class="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-orange-500 to-red-600"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <UIcon
              name="i-heroicons-server"
              class="text-6xl text-white opacity-70"
            />
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
          >
            <div
              class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-lg font-semibold mb-2">Network Infrastructure</h3>
              <p class="text-sm">Enterprise networking</p>
            </div>
          </div>
        </div>

        <!-- Image 4 - Office Setup -->
        <div
          class="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-purple-500 to-pink-600"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <UIcon
              name="i-heroicons-building-office"
              class="text-6xl text-white opacity-70"
            />
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
          >
            <div
              class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-lg font-semibold mb-2">Office Setup</h3>
              <p class="text-sm">Complete office solutions</p>
            </div>
          </div>
        </div>

        <!-- Image 5 - Smart Building -->
        <div
          class="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-cyan-500 to-blue-600"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <UIcon
              name="i-heroicons-home-modern"
              class="text-6xl text-white opacity-70"
            />
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
          >
            <div
              class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-lg font-semibold mb-2">Smart Building</h3>
              <p class="text-sm">Integrated automation</p>
            </div>
          </div>
        </div>

        <!-- Image 6 - Team Work -->
        <div
          class="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-indigo-500 to-purple-600"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <UIcon
              name="i-heroicons-users"
              class="text-6xl text-white opacity-70"
            />
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
          >
            <div
              class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-lg font-semibold mb-2">Professional Team</h3>
              <p class="text-sm">Expert technicians</p>
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
            Security Systems
          </h3>
          <p class="text-gray-600">
            Advanced CCTV and access control installations across various
            industries.
          </p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-xl">
          <UIcon
            name="i-heroicons-computer-desktop"
            class="text-4xl text-green-600 mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Office Solutions
          </h3>
          <p class="text-gray-600">
            Complete office automation and peripheral equipment implementations.
          </p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-xl">
          <UIcon
            name="i-heroicons-code-bracket"
            class="text-4xl text-purple-600 mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Custom Software
          </h3>
          <p class="text-gray-600">
            Tailored software solutions and system integrations for modern
            businesses.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
