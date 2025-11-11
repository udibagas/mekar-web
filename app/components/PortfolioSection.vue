<template>
  <section id="portfolio" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Portfolio
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcasing our successful projects and implementations across various
          industries.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 mb-12">
        <!-- Featured Projects -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
          >
            <UIcon
              name="i-heroicons-building-office-2"
              class="text-6xl text-white"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Corporate Headquarters Security
            </h3>
            <p class="text-gray-600 mb-4">
              PT Global Finance - Integrated Security Solution
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >IP CCTV</span
              >
              <span
                class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >Access Control</span
              >
              <span
                class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                >Parking Management</span
              >
            </div>
            <p class="text-sm text-gray-600">
              150+ IP cameras, biometric access control for 2000+ employees,
              automated parking for 500 vehicles.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center"
          >
            <UIcon name="i-heroicons-light-bulb" class="text-6xl text-white" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Smart Office Solution
            </h3>
            <p class="text-gray-600 mb-4">
              Tech Startup Incubator - Office Automation
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                >IoT Sensors</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >Mobile Apps</span
              >
              <span
                class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >Cloud Integration</span
              >
            </div>
            <p class="text-sm text-gray-600">
              Complete smart office transformation with automated systems and
              mobile app integration.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            class="h-48 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center"
          >
            <UIcon
              name="i-heroicons-shopping-cart"
              class="text-6xl text-white"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Retail Chain CCTV Network
            </h3>
            <p class="text-gray-600 mb-4">
              Supermarket Chain - Multi-location Surveillance
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                >Cloud CCTV</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >AI Analytics</span
              >
              <span
                class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >Mobile Monitoring</span
              >
            </div>
            <p class="text-sm text-gray-600">
              Centralized surveillance across 15 locations with AI-powered
              analytics and remote monitoring.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            class="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
          >
            <UIcon name="i-heroicons-heart" class="text-6xl text-white" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Hospital Management System
            </h3>
            <p class="text-gray-600 mb-4">
              Regional Medical Center - Custom Healthcare Software
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full"
                >Web Application</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >Database Integration</span
              >
              <span
                class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >Report Systems</span
              >
            </div>
            <p class="text-sm text-gray-600">
              Custom hospital management with patient records, scheduling, and
              comprehensive reporting.
            </p>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-gray-900 text-center mb-8">
          Project Statistics
        </h3>
        <div class="grid md:grid-cols-5 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <p class="text-gray-600">Successful Projects</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-green-600 mb-2">150+</div>
            <p class="text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <p class="text-gray-600">System Uptime</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <p class="text-gray-600">Support Coverage</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-red-600 mb-2">8</div>
            <p class="text-gray-600">Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
