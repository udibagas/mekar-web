<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-4">
            <div class="bg-blue-600 p-2 rounded-lg mr-3">
              <UIcon name="i-heroicons-cpu-chip" class="text-xl text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold">Mekar Technology</h3>
              <p class="text-xs text-gray-400">Technology Solutions Provider</p>
            </div>
          </div>
          <p class="text-gray-400 mb-6">
            Leading technology solutions provider specializing in security
            systems, office automation, and custom software development.
          </p>
          <div class="flex space-x-4">
            <UButton
              variant="ghost"
              size="sm"
              icon="i-heroicons-envelope"
              class="text-gray-400 hover:text-blue-400"
            />
            <UButton
              variant="ghost"
              size="sm"
              icon="i-heroicons-phone"
              class="text-gray-400 hover:text-blue-400"
            />
            <UButton
              variant="ghost"
              size="sm"
              icon="i-heroicons-map-pin"
              class="text-gray-400 hover:text-blue-400"
            />
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >CCTV Systems</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Access Control</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Parking Systems</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Office Peripherals</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Software Integration</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Custom Applications</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Networking Solutions</a
              >
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="#profile" class="hover:text-blue-400 transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a href="#portfolio" class="hover:text-blue-400 transition-colors"
                >Portfolio</a
              >
            </li>
            <li>
              <a href="#gallery" class="hover:text-blue-400 transition-colors"
                >Gallery</a
              >
            </li>
            <li>
              <a href="#contact" class="hover:text-blue-400 transition-colors"
                >Contact</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Careers</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors">News</a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Support</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <div class="space-y-3 text-gray-400">
            <div class="flex items-start">
              <UIcon
                name="i-heroicons-map-pin"
                class="mr-2 mt-1 text-blue-400"
              />
              <div>
                <p class="text-sm">Jl. Teknologi Raya No. 123</p>
                <p class="text-sm">Cyber District, Jakarta 12950</p>
                <p class="text-sm">Indonesia</p>
              </div>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-phone" class="mr-2 text-blue-400" />
              <span class="text-sm">+62 21 5555 0123</span>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="mr-2 text-blue-400" />
              <span class="text-sm">info@mekartechnology.com</span>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-clock" class="mr-2 text-blue-400" />
              <span class="text-sm">Mon-Fri: 8:00 AM - 6:00 PM</span>
            </div>
            <div class="mt-4">
              <p class="text-sm font-medium text-red-400">
                Emergency Support: 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm mb-4 lg:mb-0">
            © 2025 Mekar Technology Solutions. All rights reserved.
          </div>
          <div class="flex space-x-6 text-sm text-gray-400">
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Terms of Service</a
            >
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Site Map</a
            >
          </div>
        </div>
        <div class="text-center mt-4 text-xs text-gray-500">
          Built with Nuxt.js, @nuxt/content, and @nuxt/ui
        </div>
      </div>
    </div>
  </footer>
</template>
