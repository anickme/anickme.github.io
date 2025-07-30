<script setup>
// const { post: pages } = await useAsyncData('likalikuid', () => queryCollection('likalikuid').first())
const post = await queryCollection('likalikuid').first()

const title = post.title
const description = post.description
// console.log(post.title)
// console.log(post.description)
// console.log(post.tags)

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})
</script>

<style>
@import url("~/assets/css/blog.css");
</style>

<template>
  <UMain class="mt-20 px-10">
    <UContainer class="relative min-h-screen">
      <UPage v-if="post">
        <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
          {{ post.title }}
        </h1>
        <p class="text-muted text-center max-w-2xl mx-auto mb-7">
          {{ post.description }}
        </p>
        
        <UPageBody class="max-w-3xl mx-auto text-justify">
          <ContentRenderer
            v-if="post.body"
            :value="post"
          />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>