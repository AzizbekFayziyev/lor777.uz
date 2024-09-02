// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      title: "Lor777 - Премиальный ЛОР-центр 24/7 в Ташкенте | Диагностика и Лечение",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
      meta: [
        {
          name: "description",
          content:
            "Lor777 - Премиальный ЛОР-центр в Ташкенте, работающий круглосуточно. Полный спектр услуг: точная диагностика, эффективное лечение ЛОР-заболеваний, консультации лучших врачей. Запись 24/7.",
        },
        {
          property: "og:title",
          content: "Lor777 - Премиальный ЛОР-центр 24/7 в Ташкенте",
        },
        {
          property: "og:description",
          content:
            "Посетите Lor777, круглосуточный ЛОР-центр в Ташкенте для точной диагностики и эффективного лечения ЛОР-заболеваний. Запись на прием 24/7.",
        },
        {
          property: "og:image",
          content: "/cover.png",
        },
        {
          property: "og:url",
          content: "https://lor777.uz", 
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Lor777 - Премиальный ЛОР-центр 24/7 в Ташкенте",
        },
        {
          name: "twitter:description",
          content:
            "Премиальный ЛОР-центр в Ташкенте, работающий круглосуточно. Полный спектр услуг: диагностика, лечение, консультации лучших врачей.",
        },
        {
          name: "twitter:image",
          content: "/cover.png", 
        },
      ],
    },
    
  },
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  colorMode: {
    preference: "light",
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL || "https://admin.lor777.uz/api"
    },
  },
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt"],
});
