<template>
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Contact Us
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team to discuss your technology needs and
          discover how we can help your business.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">
            Get in Touch
          </h3>

          <!-- Head Office -->
          <div class="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h4
              class="text-lg font-semibold text-gray-900 mb-4 flex items-center"
            >
              <UIcon
                name="i-heroicons-building-office-2"
                class="mr-2 text-blue-600"
              />
              Head Office
            </h4>
            <div class="space-y-3 text-gray-600">
              <p class="flex items-start">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="mr-2 mt-1 text-gray-400"
                />
                Jl. Teknologi Raya No. 123<br />
                Cyber District, Jakarta 12950<br />
                Indonesia
              </p>
              <p class="flex items-center">
                <UIcon name="i-heroicons-phone" class="mr-2 text-gray-400" />
                +62 21 5555 0123
              </p>
              <p class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="mr-2 text-gray-400" />
                info@mekartechnology.com
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-globe-alt"
                  class="mr-2 text-gray-400"
                />
                www.mekartechnology.com
              </p>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h4
              class="text-lg font-semibold text-gray-900 mb-4 flex items-center"
            >
              <UIcon name="i-heroicons-clock" class="mr-2 text-green-600" />
              Business Hours
            </h4>
            <div class="space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div class="mt-4 p-3 bg-red-50 rounded-lg">
                <p class="text-red-700 font-medium">
                  Emergency Support: 24/7 Available
                </p>
              </div>
            </div>
          </div>

          <!-- Regional Offices -->
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">
              Regional Offices
            </h4>
            <div class="space-y-4">
              <div>
                <p class="font-medium text-gray-900">Surabaya Office</p>
                <p class="text-sm text-gray-600">
                  Jl. Industri No. 45, Surabaya 60271
                </p>
                <p class="text-sm text-gray-600">+62 31 1234 5678</p>
              </div>
              <div>
                <p class="font-medium text-gray-900">Medan Office</p>
                <p class="text-sm text-gray-600">
                  Jl. Bisnis No. 67, Medan 20111
                </p>
                <p class="text-sm text-gray-600">+62 61 2345 6789</p>
              </div>
              <div>
                <p class="font-medium text-gray-900">Bandung Office</p>
                <p class="text-sm text-gray-600">
                  Jl. Kreatif No. 89, Bandung 40123
                </p>
                <p class="text-sm text-gray-600">+62 22 3456 7890</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">
            Send us a Message
          </h3>

          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >First Name</label
                >
                <UInput
                  id="firstName"
                  placeholder="Your first name"
                  class="w-full"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >Last Name</label
                >
                <UInput
                  id="lastName"
                  placeholder="Your last name"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Email</label
              >
              <UInput
                id="email"
                type="email"
                placeholder="your.email@example.com"
                class="w-full"
              />
            </div>

            <div>
              <label
                for="company"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Company</label
              >
              <UInput
                id="company"
                placeholder="Your company name"
                class="w-full"
              />
            </div>

            <div>
              <label
                for="service"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Service Interest</label
              >
              <USelect
                id="service"
                :options="[
                  { label: 'CCTV Systems', value: 'cctv' },
                  { label: 'Access Control', value: 'access-control' },
                  { label: 'Parking Systems', value: 'parking' },
                  { label: 'Office Peripherals', value: 'office-peripherals' },
                  {
                    label: 'Software Integration',
                    value: 'software-integration',
                  },
                  { label: 'Custom Applications', value: 'custom-apps' },
                  { label: 'Networking Solutions', value: 'networking' },
                  { label: 'Consultation', value: 'consultation' },
                ]"
                placeholder="Select a service"
                class="w-full"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Message</label
              >
              <UTextarea
                id="message"
                :rows="4"
                placeholder="Tell us about your project requirements..."
                class="w-full"
              />
            </div>

            <UButton
              type="submit"
              color="primary"
              size="lg"
              class="w-full"
              icon="i-heroicons-paper-airplane"
            >
              Send Message
            </UButton>
          </form>

          <!-- Contact Methods -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">
              Direct Contact
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-center p-3 bg-blue-50 rounded-lg">
                <UIcon name="i-heroicons-phone" class="text-blue-600 mr-3" />
                <div>
                  <p class="text-sm font-medium text-gray-900">
                    Sales Inquiries
                  </p>
                  <p class="text-xs text-gray-600">+62 21 5555 0125</p>
                </div>
              </div>
              <div class="flex items-center p-3 bg-green-50 rounded-lg">
                <UIcon
                  name="i-heroicons-wrench-screwdriver"
                  class="text-green-600 mr-3"
                />
                <div>
                  <p class="text-sm font-medium text-gray-900">
                    Technical Support
                  </p>
                  <p class="text-xs text-gray-600">+62 21 5555 0126</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
