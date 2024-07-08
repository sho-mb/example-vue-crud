<template>
  <div>
    <MangasEditUpdateForm
      v-bind="manga"
      class="mt-10"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Manga } from '~/types/manga'

const route = useRoute()
const manga = ref<Manga>({
  id: '',
  mangaName: '',
  author: '',
  topViewUrl: '/image/default.jpg',
  content: '',
  genres: [],
  urlOfWeb: '',
})

const { data } = await useFetch<Manga>(`/api/manga/${route.params.id}`)
if (data.value) {
  manga.value = {
    id: data.value.id.toString(),
    mangaName: data.value.mangaName,
    author: data.value.author,
    topViewUrl: data.value.topViewUrl,
    content: data.value.content,
    genres: data.value.genres,
    urlOfWeb: data.value.urlOfWeb,
  }
}
</script>

<style>

</style>
