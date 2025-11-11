<template>
  <section
    class="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <!-- Hero Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Advanced Technology
            <span class="text-blue-300">Solutions</span>
            for Modern Business
          </h1>
          <p class="text-xl lg:text-2xl text-blue-100 mb-8 max-w-2xl">
            Empowering businesses with cutting-edge security systems, office
            automation, and custom software solutions since 2015.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <UButton
              color="primary"
              size="xl"
              @click="scrollTo('contact')"
              icon="i-heroicons-rocket-launch"
              class="bg-blue-600 hover:bg-blue-500"
            >
              Get Started
            </UButton>
            <UButton
              variant="outline"
              size="xl"
              @click="scrollTo('portfolio')"
              icon="i-heroicons-eye"
              class="border-blue-300 text-blue-100 hover:bg-blue-800"
            >
              View Portfolio
            </UButton>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">
                200+
              </div>
              <p class="text-sm text-blue-100">Projects Completed</p>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">
                150+
              </div>
              <p class="text-sm text-blue-100">Happy Clients</p>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">
                8+
              </div>
              <p class="text-sm text-blue-100">Years Experience</p>
            </div>
          </div>
        </div>

        <!-- Hero Visual -->
        <div class="mt-12 lg:mt-0">
          <div class="relative">
            <!-- Background decoration -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-6 opacity-20"
            ></div>

            <!-- Main visual container -->
            <div
              class="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8"
            >
              <!-- Technology Icons Grid -->
              <div class="grid grid-cols-3 gap-6">
                <div
                  class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl"
                >
                  <UIcon
                    name="i-heroicons-video-camera"
                    class="text-3xl text-blue-300 mb-2"
                  />
                  <span class="text-sm text-blue-100">CCTV</span>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl"
                >
                  <UIcon
                    name="i-heroicons-shield-check"
                    class="text-3xl text-green-300 mb-2"
                  />
                  <span class="text-sm text-blue-100">Security</span>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl"
                >
                  <UIcon
                    name="i-heroicons-globe-alt"
                    class="text-3xl text-purple-300 mb-2"
                  />
                  <span class="text-sm text-blue-100">Network</span>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl"
                >
                  <UIcon
                    name="i-heroicons-key"
                    class="text-3xl text-yellow-300 mb-2"
                  />
                  <span class="text-sm text-blue-100">Access</span>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl"
                >
                  <UIcon
                    name="i-heroicons-code-bracket"
                    class="text-3xl text-red-300 mb-2"
                  />
                  <span class="text-sm text-blue-100">Software</span>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl"
                >
                  <UIcon
                    name="i-heroicons-cog-6-tooth"
                    class="text-3xl text-orange-300 mb-2"
                  />
                  <span class="text-sm text-blue-100">Support</span>
                </div>
              </div>

              <!-- Central connection lines effect -->
              <div
                class="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="text-center mt-16">
        <UButton
          variant="ghost"
          @click="scrollTo('profile')"
          icon="i-heroicons-chevron-down"
          class="text-blue-200 hover:text-white animate-bounce"
        >
          Learn More
        </UButton>
      </div>
    </div>

    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>
