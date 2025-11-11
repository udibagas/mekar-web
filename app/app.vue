<template>
  <div>
    <NuxtRouteAnnouncer />

    <!-- Header Navigation -->
    <HeaderSection />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Profile Section -->
    <ProfileSection />

    <!-- Products Section -->
    <ProductsSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Clients Section -->
    <ClientsSection />

    <!-- Portfolio Section -->
    <PortfolioSection />

    <!-- Gallery Section -->
    <GallerySection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", system-ui, sans-serif;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}
</style>
