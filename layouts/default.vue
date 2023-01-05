<template>
    <div class="flex min-h-screen flex-1 flex-col divide-y divide-dashed divide-gray-200 dark:divide-gray-700">
        <TheHeader />

        <main class="container flex flex-1 border-x border-dashed border-gray-200 py-12 dark:border-gray-700">
            <slot />
        </main>

        <TheFooter />
    </div>
</template>

<script lang="ts" setup>
useHead({
    bodyAttrs: {
        class: 'dark:bg-gray-800 scroll-smooth bg-white text-gray-600 dark:text-gray-200 font-sans transition-colors ease-linear duration-150'
    }
})
</script>
