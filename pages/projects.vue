<template>
    <section class="space-y-6">
        <h2 class="block font-jost font-medium uppercase text-primary-500 dark:text-primary-400">
            Projects
        </h2>

        <div class="grid gap-4 md:grid-cols-2">
            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import type { IProject } from '~~/types/IProject'

useMetaHelper({
    title: 'Projects',
    description: 'Things i have worked on.'
})

const projects = await queryContent<IProject>('projects').find()

onMounted(() => {
    gsap.timeline({ repeatDelay: 0.1, defaults: { opacity: 0, ease: 'ease.in' } })
        .from('section > h2', { yPercent: 50 })
        .from('section > div > *', { ease: 'fadein', stagger: 0.5 })
})
</script>
