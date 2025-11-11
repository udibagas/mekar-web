<template>
  <section id="products" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Products & Solutions
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to enhance your business operations and security infrastructure.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- CCTV Systems -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-video-camera" class="text-3xl text-blue-600 mr-3" />
            <h3 class="text-xl font-semibold text-gray-900">CCTV Systems</h3>
          </div>
          <p class="text-gray-600 mb-4">Advanced surveillance solutions with IP cameras, NVR/DVR systems, and cloud-based monitoring.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• IP Camera Systems</li>
            <li>• Video Management Software</li>
            <li>• Cloud Surveillance</li>
          </ul>
        </div>

        <!-- Access Control -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-key" class="text-3xl text-green-600 mr-3" />
            <h3 class="text-xl font-semibold text-gray-900">Access Control</h3>
          </div>
          <p class="text-gray-600 mb-4">Secure access management with biometric and card-based authentication systems.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Biometric Systems</li>
            <li>• Card Reader Access</li>
            <li>• Time Attendance</li>
          </ul>
        </div>

        <!-- Parking Systems -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-truck" class="text-3xl text-purple-600 mr-3" />
            <h3 class="text-xl font-semibold text-gray-900">Parking Systems</h3>
          </div>
          <p class="text-gray-600 mb-4">Automated parking management with ALPR, guidance systems, and payment integration.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• License Plate Recognition</li>
            <li>• Parking Guidance</li>
            <li>• Payment Systems</li>
          </ul>
        </div>

        <!-- Office Peripherals -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-printer" class="text-3xl text-orange-600 mr-3" />
            <h3 class="text-xl font-semibold text-gray-900">Office Peripherals</h3>
          </div>
          <p class="text-gray-600 mb-4">Professional office equipment including printers, scanners, and AV systems.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Professional Printers</li>
            <li>• Interactive Whiteboards</li>
            <li>• Conference Equipment</li>
          </ul>
        </div>

        <!-- Software Integration -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-puzzle-piece" class="text-3xl text-red-600 mr-3" />
            <h3 class="text-xl font-semibold text-gray-900">Software Integration</h3>
          </div>
          <p class="text-gray-600 mb-4">Seamless system integration and API development for optimal workflow automation.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• ERP Integration</li>
            <li>• API Development</li>
            <li>• System Optimization</li>
          </ul>
        </div>

        <!-- Networking -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-globe-alt" class="text-3xl text-cyan-600 mr-3" />
            <h3 class="text-xl font-semibold text-gray-900">Networking</h3>
          </div>
          <p class="text-gray-600 mb-4">Comprehensive network design, implementation, and security solutions.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Network Design</li>
            <li>• Wireless Solutions</li>
            <li>• Security Implementation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>