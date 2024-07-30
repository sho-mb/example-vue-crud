<template>
  <div class="flex gap-4 text-green-600">
    <div
      v-for="comic in comics"
      :key="comic.id"
    >
      <NuxtLink :to="{ name: 'mangas-mangaId-comics-comicId', params: { mangaId: props.mangaId, comicId: comic.vol } }">
        {{ comic.vol }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Comic } from '~/types/comic'

const props = defineProps<{
  mangaId: string
  mangaComics: Comic[]
}>()

const comics = ref<Comic[]>([])
onMounted(() => {
  comics.value = props.mangaComics
})

// try {
//   const data = await $fetch<Comic[]>(`/api/manga/${props}/comics`)
//   comics.value = data
// }
// catch (e) {
//   console.log(e)
// }
</script>

<style>

</style>
