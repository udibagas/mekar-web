// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/image", "@nuxt/ui"],

  css: ["@/assets/css/main.css"],

  app: {
    head: {
      title: "Mekar Kreasindo - Penyedia Solusi Teknologi Terdepan",
      meta: [
        {
          name: "description",
          content:
            "Mekar Kreasindo menyediakan sistem keamanan terdepan, otomasi kantor, dan solusi perangkat lunak khusus. Spesialis CCTV, kontrol akses, sistem parkir, dan lainnya.",
        },
        {
          name: "keywords",
          content:
            "CCTV, kontrol akses, sistem parkir, peralatan kantor, integrasi software, aplikasi khusus, jaringan, sistem keamanan, Jakarta",
        },
        { name: "author", content: "Mekar Kreasindo Solutions" },
        {
          property: "og:title",
          content: "Mekar Kreasindo - Penyedia Solusi Teknologi Terdepan",
        },
        {
          property: "og:description",
          content:
            "Solusi teknologi profesional untuk bisnis modern. Sistem keamanan, otomasi kantor, dan pengembangan perangkat lunak khusus.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/images/logo.jpeg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },

  content: {
    // Content configuration
  },
});
