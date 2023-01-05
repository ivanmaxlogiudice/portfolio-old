<template>
    <component :is="component" :to="to" :class="classes({ variant, fullWidth })">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { type VariantProps, cva } from 'class-variance-authority'

type ButtonProps = VariantProps<typeof classes>
const props = defineProps<{
    to?: string
    variant?: ButtonProps['variant']
    fullWidth?: boolean
}>()

const classes = cva('inline-flex items-center leading-6 justify-center space-x-2 whitespace-normal rounded-md py-3 px-5 font-semibold transition duration-300 focus:outline-none', {
    variants: {
        variant: {
            default: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:border-0 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700',
            primary: 'bg-primary-500 text-white hover:bg-primary-600 tracking-wide',
            secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
        },
        fullWidth: {
            true: 'w-full'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

const component = computed(() => props.to ? resolveComponent('NuxtLink') : 'button')
</script>
