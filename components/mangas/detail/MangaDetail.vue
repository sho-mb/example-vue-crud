<template>
  <div class="flex justify-between">
    <div class="w-[40%]">
      <NuxtImg
        :src="props.topViewUrl"
      />
    </div>
    <div class="w-[55%]">
      <div class="flex items-center gap-4 mb-4">
        <h1 class="text-5xl">
          {{ props.mangaName }}
        </h1>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl">
          {{ props.author }}
        </h2>
      </div>
      <div class="mb-8">
        <p class="text-xl w-3/4">
          {{ props.content }}
        </p>
      </div>
      <div class="mb-8">
        <div class="flex gap-4">
          <div
            v-for="genre in genres"
            :key="genre.id"
            class="text-xl"
          >
            {{ genre.genre }}
          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="mb-2">
          Free website
        </div>
        <div v-if="props.urlOfWeb">
          <NuxtLink
            :to="props.urlOfWeb"
            target="_blank"
          >
            {{ props.urlOfWeb }}
          </NuxtLink>
        </div>
        <div
          v-else
          class="text-xl"
        >
          No website added yet
        </div>
      </div>
      <div>
        <div class="text-xl">
          Comics
        </div>
        <!-- todo list -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: string
  mangaName: string
  author: string
  topViewUrl: string
  content: string
  genres: { id: string, genre: string }[]
  urlOfWeb: string
}>()
</script>

<style>

</style>
