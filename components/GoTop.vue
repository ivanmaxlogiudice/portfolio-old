<template>
    <Transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
    >
        <div v-if="position > 100" class="fixed bottom-16 right-4 z-50 flex flex-col items-center gap-2 md:right-6 md:bottom-4 md:flex-row">
            <button class="flex items-center justify-center rounded-full bg-gray-100 p-2 text-gray-500 shadow hover:bg-gray-200/50 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700/80 dark:hover:text-gray-100" @click="goTop(200)">
                <span class="sr-only">Go Top</span>
                <ChevronUpIcon class="h-4 w-4 md:h-5 md:w-5" />
            </button>

            <button class="flex items-center justify-center rounded-full bg-gray-100 p-2 text-gray-500 shadow hover:bg-gray-200/50 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700/80 dark:hover:text-gray-100" @click="toggleTheme">
                <span class="sr-only">Toggle theme</span>
                <component :is="theme.preference === 'light' ? MoonIcon : SunIcon" class="h-4 w-4 md:h-5 md:w-5" />
            </button>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ChevronUpIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const position = ref(0)
const theme = useColorMode()

const updatePosition = () => position.value = window.scrollY

/**
 * Transitions
 */
const onBeforeEnter = (el: HTMLElement) => {
    gsap.set(el.children, { opacity: 0, yPercent: 50 })
}

const onEnter = (el: HTMLElement, done: () => void) => {
    gsap.to(el.children, { opacity: 1, yPercent: 0, ease: 'elastic', duration: 1, stagger: { amount: 0.2 }, onComplete: done })
}

const onLeave = (el: HTMLElement, done: () => void) => {
    gsap.to(el.children, { opacity: 0, yPercent: 50, ease: 'power4.out', duration: 0.5, stagger: { amount: 0.2 }, onComplete: done })
}

/**
 * Scroll to the top of the page.
 *
 * @param duration duration in ms
 */
const goTop = (duration: number) => {
    const scrollStep = -window.scrollY / (duration / 15)
    const scrollInterval: NodeJS.Timer = setInterval(() => window.scrollY === 0 ? clearInterval(scrollInterval) : window.scrollBy(0, scrollStep), 15)
}

const toggleTheme = () => {
    theme.preference = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => window.addEventListener('scroll', updatePosition))
onUnmounted(() => window.removeEventListener('scroll', updatePosition))
</script>
