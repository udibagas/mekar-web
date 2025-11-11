<template>
  <section id="services" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Professional Services
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert technology services from consultation to implementation and ongoing support.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Consultation Services -->
        <div class="space-y-8">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Consultation Services</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-chart-bar" class="text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">Technology Assessment</h4>
                  <p class="text-sm text-gray-600">Comprehensive evaluation of your current infrastructure and security posture.</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-cog-6-tooth" class="text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">System Design</h4>
                  <p class="text-sm text-gray-600">Custom solution architecture tailored to your specific requirements.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Implementation Services -->
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Implementation Services</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-wrench-screwdriver" class="text-green-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">Installation & Setup</h4>
                  <p class="text-sm text-gray-600">Professional installation and configuration of all systems.</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-clipboard-document-list" class="text-green-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">Project Management</h4>
                  <p class="text-sm text-gray-600">End-to-end project management ensuring timely delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Support & Training -->
        <div class="space-y-8">
          <div class="bg-purple-50 p-6 rounded-xl">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Support & Maintenance</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-phone" class="text-purple-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">24/7 Technical Support</h4>
                  <p class="text-sm text-gray-600">Round-the-clock support for all your technical needs.</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-arrow-path" class="text-purple-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">Maintenance Services</h4>
                  <p class="text-sm text-gray-600">Preventive maintenance and regular system updates.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Training Services -->
          <div class="bg-orange-50 p-6 rounded-xl">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Training Services</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-academic-cap" class="text-orange-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">User Training</h4>
                  <p class="text-sm text-gray-600">Comprehensive training programs for end users.</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-server" class="text-orange-600 mt-1 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">Technical Training</h4>
                  <p class="text-sm text-gray-600">Advanced training for system administrators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Process -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-900 text-center mb-8">Our Service Process</h3>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-blue-600">1</span>
            </div>
            <h4 class="font-medium text-gray-900 mb-2">Consultation</h4>
            <p class="text-sm text-gray-600">Initial assessment and requirement analysis</p>
          </div>
          <div class="text-center">
            <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-green-600">2</span>
            </div>
            <h4 class="font-medium text-gray-900 mb-2">Design</h4>
            <p class="text-sm text-gray-600">Custom solution design and planning</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-purple-600">3</span>
            </div>
            <h4 class="font-medium text-gray-900 mb-2">Implementation</h4>
            <p class="text-sm text-gray-600">Professional installation and setup</p>
          </div>
          <div class="text-center">
            <div class="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-orange-600">4</span>
            </div>
            <h4 class="font-medium text-gray-900 mb-2">Support</h4>
            <p class="text-sm text-gray-600">Ongoing support and maintenance</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>