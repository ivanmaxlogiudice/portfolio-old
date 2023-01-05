<template>
    <section class="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div class="basis-1/2 space-y-6">
            <div class="space-y-3">
                <h1 class="mt-8 font-jost text-5xl text-gray-600 dark:text-white">
                    Iván Maxímiliano,<br> Lo Giudice
                </h1>

                <p class="leading-6">
                    I'm looking for new opportunities to collaborate. However, if you have other request or question, don't hesitate to contact me.
                </p>
            </div>

            <div class="space-y-3">
                <h2 class="font-jost text-xl text-gray-600 dark:text-white">
                    Contact me
                </h2>

                <NuxtLink :to="app.social.email" rel="noreferrer noopener" class=" hover:underline">
                    {{ app.email }}
                </NuxtLink>
            </div>
        </div>

        <div class="basis-1/2">
            <img src="/images/reading-email.svg" class="max-h-[35vh] w-full md:max-h-full" alt="Man reading email">
        </div>
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'

const app = useAppConfig()
definePageMeta({
    title: 'Contact'
})

onMounted(() => {
    gsap.timeline({ repeatDelay: 0.2, defaults: { opacity: 0, ease: 'ease.in' } })
        .from('section > :first-child > div > h1', { xPercent: -10, delay: 0.5 })
        .from('section > :first-child > div > p', { xPercent: -10 })
        .from('section > :first-child > div > h2', { xPercent: -10 })
        .from('section > :first-child > div > a', { xPercent: -10 })
        .from('section > :last-child > img', { })
})
</script>
