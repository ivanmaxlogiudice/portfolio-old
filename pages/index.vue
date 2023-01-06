<template>
    <section class="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div class="basis-1/2 space-y-6">
            <h1 class="font-jost text-4xl dark:text-white lg:text-6xl">
                Self taught
                <br />
                <span class="text-primary-400">full-stack</span> web developer
            </h1>

            <p>
                👋 Hi there, my name is Iván. I'm a self taught web developer from Argentina.
                I build web apps using frameworks such as
                <NuxtLink to="https://vuejs.org/" target="_blank" rel="noreferrer" class="border-b-2 border-gray-300 font-medium transition hover:border-gray-400 hover:text-gray-800 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:text-gray-100">
                    Vue.js
                </NuxtLink>,
                <NuxtLink to="https://nuxt.com/" target="_blank" rel="noreferrer" class="border-b-2 border-gray-300 font-medium transition hover:border-gray-400 hover:text-gray-800 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:text-gray-100">
                    Nuxt
                </NuxtLink>,
                <NuxtLink to="https://tailwindcss.com/" target="_blank" rel="noreferrer" class="border-b-2 border-gray-300 font-medium transition hover:border-gray-400 hover:text-gray-800 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:text-gray-100">
                    TailwindCSS
                </NuxtLink>, amongst others.
            </p>

            <div class="hidden flex-col gap-4 md:flex md:flex-row md:items-center md:gap-8">
                <Button variant="primary" to="/projects">
                    Check my projects
                </Button>

                <Button to="/about">
                    About me
                </Button>
            </div>
        </div>

        <div class="basis-1/2">
            <img src="/images/programming.svg" class="max-h-[35vh] w-full md:max-h-full" alt="Man programming in a PC" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'

onMounted(() => {
    gsap.timeline({ repeatDelay: 0.1, defaults: { opacity: 0, ease: 'ease.in' } })
        .from('section > :first-child > h1', { yPercent: 50, delay: 0.5 })
        .from('section > :first-child > p', { yPercent: 50 })
        .from('section > :first-child > div', { yPercent: 50 })
        .from('section > :last-child > img', { })
})
</script>
