<template>
    <button
        class="relative flex cursor-pointer select-none items-center justify-center space-x-2 rounded-full bg-gray-100 p-1 after:absolute after:left-1 after:block after:h-7 after:w-7 after:rounded-full after:bg-white after:transition after:duration-200 after:ease-in-out after:content-[''] focus:outline-none dark:bg-gray-700 after:dark:translate-x-9"
        role="switch"
        :aria-checked="theme.value === 'dark'"
        aria-label="Toggle Dark Mode"
        @click="toggleTheme"
    >
        <span class="z-20 rounded-full p-1 outline-none transition-colors duration-150">
            <SunIcon class="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </span>

        <span class="z-20 rounded-full p-1 outline-none transition-colors duration-150">
            <MoonIcon class="h-5 w-5 text-gray-700 dark:text-gray-800" />
        </span>
    </button>
</template>

<script lang="ts" setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const theme = useColorMode()

const toggleTheme = () => {
    theme.preference = theme.value === 'light' ? 'dark' : 'light'
}
</script>
