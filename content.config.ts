import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    likalikuid: defineCollection({
      source: 'likalikuid/**/*.md',
      type: 'page',
      schema: z.object({
        tags: z.array(z.string())
      })
    }),
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page'
    })
  }
})
