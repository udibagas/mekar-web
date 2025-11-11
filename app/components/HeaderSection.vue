<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="bg-blue-600 p-2 rounded-lg mr-3">
            <UIcon name="i-heroicons-cpu-chip" class="text-2xl text-white" />
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Mekar Technology</h1>
            <p class="text-xs text-gray-600">Technology Solutions Provider</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-8">
          <UButton
            variant="ghost"
            color="neutral"
            @click="scrollTo('profile')"
            class="text-gray-600 hover:text-blue-600"
          >
            About
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="scrollTo('products')"
            class="text-gray-600 hover:text-blue-600"
          >
            Products
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="scrollTo('services')"
            class="text-gray-600 hover:text-blue-600"
          >
            Services
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="scrollTo('portfolio')"
            class="text-gray-600 hover:text-blue-600"
          >
            Portfolio
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="scrollTo('gallery')"
            class="text-gray-600 hover:text-blue-600"
          >
            Gallery
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="scrollTo('contact')"
            class="text-gray-600 hover:text-blue-600"
          >
            Contact
          </UButton>
        </nav>

        <!-- Contact Button -->
        <div class="hidden lg:flex">
          <UButton
            color="primary"
            @click="scrollTo('contact')"
            icon="i-heroicons-phone"
          >
            Get Quote
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <UButton
            variant="ghost"
            color="neutral"
            @click="toggleMobileMenu"
            :icon="
              isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'
            "
            size="xl"
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden border-t border-gray-200 py-4"
      >
        <nav class="space-y-2">
          <UButton
            variant="ghost"
            color="neutral"
            @click="mobileScrollTo('profile')"
            block
            class="text-left justify-start"
          >
            About
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="mobileScrollTo('products')"
            block
            class="text-left justify-start"
          >
            Products
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="mobileScrollTo('services')"
            block
            class="text-left justify-start"
          >
            Services
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="mobileScrollTo('portfolio')"
            block
            class="text-left justify-start"
          >
            Portfolio
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="mobileScrollTo('gallery')"
            block
            class="text-left justify-start"
          >
            Gallery
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            @click="mobileScrollTo('contact')"
            block
            class="text-left justify-start"
          >
            Contact
          </UButton>
          <UButton
            color="primary"
            @click="mobileScrollTo('contact')"
            block
            icon="i-heroicons-phone"
            class="mt-4"
          >
            Get Quote
          </UButton>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const mobileScrollTo = (elementId: string) => {
  scrollTo(elementId);
  isMobileMenuOpen.value = false;
};

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    const header = document.querySelector("header");

    if (header && !header.contains(target)) {
      isMobileMenuOpen.value = false;
    }
  };

  document.addEventListener("click", handleClickOutside);

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });
});
</script>
