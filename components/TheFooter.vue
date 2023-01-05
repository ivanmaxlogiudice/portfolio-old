<template>
    <footer class="bg-gray-50 pb-12 dark:bg-gray-800 lg:pb-0">
        <div class="container flex flex-col justify-between border-x border-dashed border-gray-200 py-4 dark:border-gray-700 md:flex-row md:items-center">
            <p class="order-last pt-2 text-sm md:order-first md:pt-0">
                Mady by <NuxtLink :to="config.social.github" target="_blank" rel="noreferrer" class="font-semibold transition duration-300 hover:text-primary-500 dark:hover:text-primary-400">
                    {{ config.name }}
                </NuxtLink>
            </p>

            <div class="flex items-center space-x-4 border-b border-dashed border-gray-200 pb-2 dark:border-gray-700 md:border-0 md:pb-0">
                <NuxtLink v-for="(link, social) in config.social" :key="social" :to="link" target="_blank" rel="noreferrer" class="transition duration-300 hover:-translate-y-0.5 ">
                    <span class="sr-only capitalize">{{ social }}</span>
                    <Icon :name="social" class="text-lg" />
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const config = useAppConfig()
</script>
