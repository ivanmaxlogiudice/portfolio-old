<template>
    <div class="space-y-3">
        <div class="group h-72 overflow-hidden rounded-md border border-gray-700 shadow">
            <img
                class="h-full w-full object-cover transition duration-500 group-hover:scale-90"
                :src="project.preview"
                :title="project.title"
                :alt="project.title"
                loading="lazy"
            >
        </div>

        <div>
            <h3 class="font-jost text-2xl font-bold text-gray-700 dark:text-white">
                {{ project.title }}
            </h3>
            <p>{{ project.description }}</p>

            <div class="mt-4 flex space-x-2" role="group">
                <Button v-if="project.source" :to="project.source" full-width target="_blank">
                    <Icon name="codestats" class="text-xl" />
                    <span>Source Code</span>
                </Button>

                <Button v-if="project.live" :to="project.live" variant="primary" full-width target="_blank">
                    Live View
                </Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IProject } from '~~/types/IProject'

defineProps<{ project: IProject }>()
</script>
