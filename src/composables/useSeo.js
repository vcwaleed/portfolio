import { computed, unref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const SITE = {
  name: 'Talha Waleed',
  url: 'https://talhawaleed.online',
  defaultTitle: 'Talha Waleed - Vue.js & Frontend Developer',
  defaultDescription:
    'Official Portfolio of Talha Waleed, an experienced Vue.js and Frontend Developer showcasing projects, skills, and professional experience.',
  defaultImage: 'https://talhawaleed.online/linkedmatrix.png',
  locale: 'en_US',
  twitterSite: '@talhawaleed'
}
function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE.url
  if (pathOrUrl.startsWith('http')) return pathOrUrl
  return `${SITE.url}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`
}

export function useSeo(options = {}) {
  const route = useRoute()

  const title = computed(() => route.meta.title || options.title || SITE.defaultTitle)
  const description = computed(() => route.meta.description || options.description || SITE.defaultDescription)
  const image = computed(() => absoluteUrl(route.meta.image || options.image || SITE.defaultImage))
  const canonical = computed(() => absoluteUrl(route.path))

  const robots = computed(() => route.meta.robots || options.robots || 'index,follow')
  const schema = computed(() => {
    const fromRoute = route.meta.schema
    const fromOptions = options.schema
    const value = fromOptions ?? fromRoute
    if (!value) return null
    return Array.isArray(value) ? value : [value]
  })

  useHead({
    title,
    titleTemplate: (t) => (t ? `${t}` : SITE.defaultTitle),

    link: [
      { rel: 'canonical', href: canonical.value },
      { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      { rel: 'icon', href: '/developer.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],

    meta: [
      { name: 'description', content: description.value },
      { name: 'robots', content: robots.value },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:title', content: title.value },
      { property: 'og:description', content: description.value },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical.value },
      { property: 'og:image', content: image.value },
      { property: 'og:image:alt', content: `${SITE.name} - Preview image` },
      { property: 'og:locale', content: SITE.locale },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title.value },
      { name: 'twitter:description', content: description.value },
      { name: 'twitter:image', content: image.value },
      { name: 'twitter:site', content: SITE.twitterSite }
    ],
    script: schema.value
      ? schema.value.map((obj) => ({
          type: 'application/ld+json',
          children: JSON.stringify(unref(obj))
        }))
      : []
  })

  return { title, description, image, canonical, robots, schema }
}
