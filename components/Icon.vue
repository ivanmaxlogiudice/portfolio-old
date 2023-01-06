<!-- eslint-disable vue/no-v-html -->
<template>
    <span class="[&>svg]:h-[1em] [&>svg]:w-[1em] [&>svg]:align-middle" v-html="icon" />
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()

const icon = ref()

try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', { as: 'raw', eager: false })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    icon.value = rawIcon
}
catch {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`)
}
</script>
