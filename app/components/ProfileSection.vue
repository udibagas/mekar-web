<template>
  <section id="profile" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            About Mekar Technology
          </h2>
          <div class="prose prose-lg text-gray-600">
            <p class="mb-4">
              Mekar Technology is a premier technology solutions provider established in 2015, 
              specializing in comprehensive security systems, office automation, and custom software development. 
              With over 8 years of experience in the industry, we have built a reputation for delivering 
              cutting-edge technology solutions that enhance business operations and security infrastructure.
            </p>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p class="mb-4">
              To empower businesses with innovative technology solutions that drive efficiency, security, 
              and growth while maintaining the highest standards of quality and customer service.
            </p>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Why Choose Mekar Technology?</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Experienced Team: Over 50 certified professionals with extensive industry experience</li>
              <li>Comprehensive Solutions: End-to-end services from consultation to implementation and support</li>
              <li>Quality Assurance: Rigorous testing and quality control processes</li>
              <li>24/7 Support: Round-the-clock technical support and maintenance services</li>
              <li>Competitive Pricing: Cost-effective solutions without compromising on quality</li>
            </ul>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
          <div class="bg-gray-50 p-8 rounded-xl">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <UIcon name="i-heroicons-calendar" class="text-blue-600 mr-3" />
                <span class="text-gray-600">Established in 2015</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-users" class="text-blue-600 mr-3" />
                <span class="text-gray-600">50+ Certified Professionals</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-building-office" class="text-blue-600 mr-3" />
                <span class="text-gray-600">200+ Successful Projects</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-clock" class="text-blue-600 mr-3" />
                <span class="text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// For now, let's use static content instead of dynamic content loading
// This will be replaced with proper content loading once the setup is complete
</script>