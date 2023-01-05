import type { MetaObject } from '#app'

interface Meta {
    title?: string
    description?: string
    keywords?: string | string[]
    image?: string
    type?: string
}

export const useMetaHelper = ({
    title,
    description,
    keywords,
    image,
    type = 'website'
}: Meta & Omit<MetaObject, 'titleTemplate'> = {}) => {
    const app = useAppConfig()

    title = title ? `${title} - ${app.name}` : app.name
    description ??= app.description

    const url = `${app.domain}${useRoute().path}`

    useHead({
        title,
        meta: [
            // Open Graph
            { hid: 'og:title', property: 'og:title', content: title },
            { hid: 'og:type', property: 'og:type', content: type },
            { hid: 'og:url', property: 'og:url', content: url },

            // Twitter
            { hid: 'twitter:title', name: 'twitter:title', content: title },
            { hid: 'twitter:url', name: 'twitter:url', content: url },

            ...(description
                ? [
                    { hid: 'description', name: 'description', content: description },
                    { hid: 'og:description', property: 'og:description', content: description },
                    { hid: 'twitter:description', name: 'twitter:description', content: description }
                ]
                : []),

            ...(image
                ? [
                    { hid: 'og:image', property: 'og:image', content: image },
                    { hid: 'twitter:image', name: 'twitter:image', content: image },
                    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
                ]
                : []),

            {
                hid: 'keywords',
                name: 'keywords',
                content: keywords
                    ? `${app.keywords}, ${Array.isArray(keywords) ? keywords.join(', ') : keywords}`
                    : app.keywords
            }
        ]
    })
}
