// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
        strict: true,
    },

    // https://nuxt.com/docs/api/configuration/nuxt-config/#ssr
    // ssr: false,

    runtimeConfig: {
        public: {
            titleSeparator: '·',
            siteUrl: 'https://ivanlogiudice.com',
            siteName: 'Iván Máximiliano, Lo Giudice',
            siteDescription: 'I\'m a full stack developer. I build web apps using frameworks such as vue.js, nuxt, tailwindcss, amongst others.',
            language: 'en',
        },
    },

    extends: [
        'nuxt-seo-kit',
    ],

    modules: [
        // https://google-fonts.nuxtjs.org/
        '@nuxtjs/google-fonts',

        // https://tailwindcss.nuxt.dev/
        '@nuxtjs/tailwindcss',

        // https://color-mode.nuxtjs.org/
        '@nuxtjs/color-mode',

        // https://nuxt.com/modules/content
        '@nuxt/content',
    ],

    googleFonts: {
        families: {
            'Open Sans': true,
            'Jost': [700],
        },
    },

    tailwindcss: {
        configPath: 'tailwind.config.js',
    },

    colorMode: {
        preference: 'dark',
        fallback: 'dark',
        classSuffix: '',
    },

    ogImage: {
        colorScheme: 'dark',
        delay: 2500,
    },

    build: {
        transpile: ['gsap', '@heroicons/vue'],
    },
})
