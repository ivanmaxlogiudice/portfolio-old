<template>
    <NuxtLayout>
        <SeoKit />
        <OgImageScreenshot />

        <NuxtPage />
    </NuxtLayout>

    <LazyGoTop />
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Home'
})
</script>
