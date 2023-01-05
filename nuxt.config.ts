// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
        strict: true
    },

    // https://nuxt.com/docs/api/configuration/nuxt-config/#ssr
    // ssr: false,

    tailwindcss: {
        configPath: 'tailwind.config.js'
    },

    modules: [
        // https://google-fonts.nuxtjs.org/
        '@nuxtjs/google-fonts',

        // https://tailwindcss.nuxt.dev/
        '@nuxtjs/tailwindcss',

        // https://color-mode.nuxtjs.org/
        '@nuxtjs/color-mode',

        // https://nuxt.com/modules/content
        '@nuxt/content'
    ],

    googleFonts: {
        families: {
            'Open Sans': true,
            'Jost': [700]
        }
    },

    colorMode: {
        classSuffix: ''
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            }
        }
    },

    build: {
        transpile: ['gsap', '@heroicons/vue']
    }
})
