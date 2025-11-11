// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/image", "@nuxt/ui"],

  css: ["@/assets/css/main.css"],

  app: {
    head: {
      title: "Mekar Technology - Leading Technology Solutions Provider",
      meta: [
        {
          name: "description",
          content:
            "Mekar Technology provides cutting-edge security systems, office automation, and custom software solutions. Specializing in CCTV, access control, parking systems, and more.",
        },
        {
          name: "keywords",
          content:
            "CCTV, access control, parking system, office peripherals, software integration, custom applications, networking, security systems, Jakarta",
        },
        { name: "author", content: "Mekar Technology Solutions" },
        {
          property: "og:title",
          content: "Mekar Technology - Leading Technology Solutions Provider",
        },
        {
          property: "og:description",
          content:
            "Professional technology solutions for modern businesses. Security systems, office automation, and custom software development.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
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
