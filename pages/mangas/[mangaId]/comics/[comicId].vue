<template>
  <div>
    <CommonComicPageSlider
      :comic="comic"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Comic } from '~/types/comic'

const comic = ref<Comic>({
  id: '',
  comicUrl: '',
  vol: 0,
})
const route = useRoute()
const vol = route.params.comicId

try {
  const data = await $fetch<Comic>(`/api/comics/${vol}`)
  comic.value = data
}
catch (e) {
  console.error(e)
}
</script>

<style>

</style>
