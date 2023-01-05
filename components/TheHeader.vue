<template>
    <header class="font-jost font-bold">
        <div class="container flex items-center border-dashed border-gray-200 py-4 dark:border-gray-700 lg:border-x">
            <nav ref="nav" class="fixed inset-x-0 bottom-0 z-30 flex basis-[35%] items-center justify-around border-t border-gray-100 bg-gray-50 py-2 text-xs shadow-sm dark:border-gray-700/30 dark:bg-gray-900/90 lg:relative lg:mt-2 lg:-mb-3 lg:space-x-6 lg:border-none lg:!bg-transparent lg:py-0 lg:text-base lg:shadow-none">
                <NuxtLink v-for="(link, index) in links" :key="index" :to="link.link" class="group flex flex-col items-center focus:outline-none dark:text-white" exact-active-class="[&>:first-child]:!text-primary-500 [&>:first-child]:animate-bounce [&>:last-child]:!scale-100">
                    <span class="h-5 w-5 transition duration-300 group-hover:text-primary-500 group-focus:text-primary-500 lg:h-7 lg:w-7">
                        <component :is="link.icon" />
                    </span>
                    <span class="subpixel-antialiased transition duration-300 ease-[cubic-bezier(.175,.885,.32,1.275)] lg:scale-0 lg:group-hover:scale-100 lg:group-focus:scale-100">
                        {{ link.text }}
                    </span>
                </NuxtLink>
            </nav>

            <div class="flex w-full items-center justify-between space-x-4 lg:justify-end">
                <div>
                    <!-- TODO: Add i18n: English & Spanish -->
                </div>

                <ThemeSwitcher />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { BriefcaseIcon, ChatBubbleBottomCenterTextIcon, HomeIcon, IdentificationIcon } from '@heroicons/vue/24/outline'

const nav = ref<HTMLElement>()

const links = [
    { link: '/', text: 'Home', icon: HomeIcon },
    { link: '/projects', text: 'Projects', icon: BriefcaseIcon },
    { link: '/about', text: 'About', icon: IdentificationIcon },
    { link: '/contact', text: 'Contact', icon: ChatBubbleBottomCenterTextIcon }
]

const animate = (target: HTMLElement | NodeListOf<Element>, ease: 'ease.in' | 'elastic', yPercent: number, duration: number, delay: number, stagger = false) => {
    gsap.set(target, { autoAlpha: 0, yPercent })
    gsap.to(target, { autoAlpha: 1, yPercent: 0, ease, duration, delay, stagger: stagger ? { amount: 0.5 } : {} })
}

const stopAnimations = () => {
    if (!nav.value)
        return

    const links = nav.value.querySelectorAll('a svg')
    gsap.set([nav.value, links], { autoAlpha: 1 })
}

const animateHeader = () => {
    if (!nav.value)
        return

    const links = nav.value.querySelectorAll('a svg')
    if (window.innerWidth < 1024) {
        animate(nav.value, 'ease.in', 100, 0.5, 0.5)
        animate(links, 'elastic', 50, 1, 1.25, true)
    }
    else {
        animate(nav.value, 'ease.in', 0, 0, 0)
        animate(links, 'elastic', -50, 1, 0, true)
    }
}

useRouter().afterEach((to, from) => {
    if (to.fullPath !== from.fullPath)
        stopAnimations()
})

onMounted(() => animateHeader())
</script>
