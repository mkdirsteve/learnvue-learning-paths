<script setup lang="ts">
const { locale, locales } = useI18n()

const story = await useAsyncStoryblok('blog/my-theme', {
  version: 'draft',
  language: locale.value
})
const articleContent = computed(() => renderRichText(story.value.content.body))
</script>

<template>
  <article v-editable="story.content">
    <h1
      class="text-white text-3xl font-black mb-8 pb-2 border-b-4 border-white"
    >
      {{ story.content.title }}
    </h1>
    <div v-html="articleContent"></div>
  </article>
</template>
