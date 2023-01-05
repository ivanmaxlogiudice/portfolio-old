<template>
    <div class="w-full space-y-12">
        <h2 class="block font-jost font-medium uppercase text-primary-500 dark:text-primary-400">
            About
        </h2>

        <section id="story" class="!mt-6 space-y-3">
            <h1 class="font-jost text-2xl font-bold dark:text-white md:text-4xl">
                My Story
            </h1>

            <p>
                I'm a Full Stack Developer from Argentina. Who likes to provide solutions for people's projects and businesses which it is a challenge that I enjoy overcoming.
            </p>

            <p>
                I am a passionate person who pursues his dreams, who works hard and who is results oriented. As a matter of fact, I
                constantly work on improving myself seeking to achieve the best version of myself.
            </p>

            <p>
                You can see more about my work in
                <NuxtLink to="/projects" class="underline decoration-teal-500 underline-offset-4 dark:text-gray-100 dark:decoration-teal-400">
                    projects
                </NuxtLink>.
            </p>
        </section>

        <Button to="#" class="!transition-none" variant="primary">
            Download Resume
        </Button>

        <section id="stack" class="space-y-3">
            <h1 class="font-jost text-2xl font-bold dark:text-white md:text-4xl">
                Stack
            </h1>

            <div class="flex w-full flex-col space-y-6">
                <div v-for="stack in stacks" :key="stack.title" class="w-full">
                    <h2 class="font-semibold">
                        {{ stack.title }}
                    </h2>

                    <hr class="my-2 w-full border-gray-100 dark:border-gray-700">

                    <div class="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
                        <div v-for="dev in stack.items" :key="dev.name" class="flex cursor-pointer select-none items-center space-x-2 overflow-hidden rounded-md bg-gray-100/30 px-4 py-2 font-semibold text-gray-500 shadow dark:bg-gray-700/50 dark:text-gray-100">
                            <Icon :name="dev.icon" filled class="rounded-lg p-2 text-2xl" :style="`background-color: ${dev.bg}`" />
                            <span class="flex-1 truncate px-0.5">{{ dev.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="work" class="space-y-3">
            <h1 class="font-jost text-2xl font-bold dark:text-white md:text-4xl">
                Places I've worked at
            </h1>

            <ol class="relative space-y-10 border-l border-gray-700">
                <li class="ml-4">
                    <div class="absolute -left-1.5 mt-2.5 h-3 w-3 rounded-full border border-gray-700 bg-gray-600" />
                    <div>
                        <time class="text-sm leading-none sm:text-base">2021 - present</time>
                        <div class="text-xs font-bold uppercase tracking-widest text-primary-500 sm:text-sm">
                            Part Time
                        </div>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white sm:text-2xl">
                            Full-stack Developer
                        </h2>
                        <p class="text-base sm:text-lg">
                            Freelancer
                        </p>
                    </div>
                </li>
            </ol>
        </section>

        <section id="studies" class="space-y-3">
            <h1 class="font-jost text-2xl font-bold dark:text-white md:text-4xl">
                Studies
            </h1>

            <ol class="relative space-y-8 border-l border-gray-700">
                <li class="ml-4">
                    <div class="absolute -left-1.5 mt-2.5 h-3 w-3 rounded-full border border-gray-700 bg-gray-600" />
                    <div>
                        <time class="text-sm leading-none sm:text-base">2019 - present</time>
                        <div class="text-xs font-bold uppercase tracking-widest text-primary-500 sm:text-sm">
                            Partial Time
                        </div>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white sm:text-2xl">
                            Full Stack Developer
                        </h2>
                        <p class="text-base sm:text-lg">
                            Self Taught - Internet
                        </p>
                    </div>
                </li>

                <li class="ml-4">
                    <div class="absolute -left-1.5 mt-2.5 h-3 w-3 rounded-full border border-gray-700 bg-gray-600" />
                    <div>
                        <time class="text-sm leading-none sm:text-base">2019 - 2021</time>
                        <div class="text-xs font-bold uppercase tracking-widest text-primary-500 sm:text-sm">
                            Incomplete
                        </div>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white sm:text-2xl">
                            Programming Technician
                        </h2>
                        <p class="text-base sm:text-lg">
                            FRSN
                        </p>
                    </div>
                </li>

                <li class="ml-4">
                    <div class="absolute -left-1.5 mt-2.5 h-3 w-3 rounded-full border border-gray-700 bg-gray-600" />
                    <div>
                        <time class="text-sm leading-none sm:text-base">2018 - 2019</time>
                        <div class="text-xs font-bold uppercase tracking-widest text-primary-500 sm:text-sm">
                            Complete
                        </div>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white sm:text-2xl">
                            PC Repair Course
                        </h2>
                        <p class="text-base sm:text-lg">
                            CFL 402, Ramallo
                        </p>
                    </div>
                </li>
            </ol>
        </section>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'

useMetaHelper({
    title: 'About Me'
})

onMounted(() => {
    gsap.timeline({ repeatDelay: 0.1, defaults: { duration: 0.4, opacity: 0, ease: 'ease.in' } })
        .from('div > h2', { yPercent: 50, delay: 0.2 })
        .from('section#story > h1', { yPercent: 50 })
        .from('section#story > p', { ease: 'fadein' })
        .from('div > a', { yPercent: 50 })

        .from('section#stack > h1', { yPercent: 50 })

        .from('section#stack > div > :nth-child(1)', { xPercent: -5 })
        .from('section#stack > div > :nth-child(1) > hr', { })
        .from('section#stack > div > :nth-child(1) > div > *', { yPercent: 50, ease: 'elastic', duration: 1, stagger: { amount: 0.5 } })

        .from('section#stack > div > :nth-child(2)', { xPercent: -5 })
        .from('section#stack > div > :nth-child(2) > hr', { })
        .from('section#stack > div > :nth-child(2) > div > *', { yPercent: 50, ease: 'elastic', duration: 1, stagger: { amount: 0.5 } })

        .from('section#work > h1', { yPercent: 50 })
        .from('section#work > ol', { ease: 'fadein', stagger: 0.2 })

        .from('section#studies > h1', { yPercent: 50 })
        .from('section#studies > ol', { ease: 'fadein', stagger: 0.2 })
})

const stacks = [
    {
        title: 'Development',
        items: [
            { name: 'HTML 5', icon: 'html', bg: 'rgb(221 75 37 / 0.12)' },
            { name: 'Sass', icon: 'sass', bg: 'rgb(236 64 122 / 0.12)' },
            { name: 'TailwindCSS', icon: 'tailwindcss', bg: 'rgb(7 182 213 / 0.12)' },
            { name: 'TypeScript', icon: 'typescript', bg: 'rgb(49 120 198 / 0.12)' },
            { name: 'Vue.js', icon: 'vuejs', bg: 'rgb(65 184 131 / 0.12)' },
            { name: 'Nuxt.js', icon: 'nuxt', bg: 'rgb(0 220 130 / 0.12)' },
            { name: 'Electron', icon: 'electron', bg: 'rgb(162 236 251 / 0.12)' },
            { name: 'Laravel', icon: 'laravel', bg: 'rgb(255 82 82 / 0.12)' },
            { name: 'NodeJS', icon: 'nodejs', bg: 'rgb(111 166 96 / 0.12)' },
            { name: 'PHP', icon: 'php', bg: 'rgb(97 129 183 / 0.12)' }
        ]
    },
    {
        title: 'Apps',
        items: [
            { name: 'VS Code', icon: 'vscode', bg: 'rgb(1 101 169 / 0.12)' }
        ]
    }
]
</script>
