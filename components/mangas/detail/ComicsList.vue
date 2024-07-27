<template>
  <div class="flex" v-for="comic in comics" :key="comic.id">
    <div>
      <NuxtLink :to="{ name: 'comics-id', params: { id: comic.comicId } }">
        {{ comic.vol }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Comic } from '~/types/comic'

const props = defineProps<{
  mangaId: string
}>()

const comics = ref<Comic[]>([])

try {
  const data = await $fetch<Comic[]>(`/api/comics/${props.mangaId}`)
  comics.value = data
}
catch (e) {
  console.log(e)
}
</script>

<style>

</style>
