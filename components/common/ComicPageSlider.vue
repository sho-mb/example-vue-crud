<template>
  <div>
    <p>{{ props.comic.vol }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Comic } from '~/types/comic'

const tokenStore = useMyTokenStore()
const props = defineProps<{
  comic: Comic
}>()

const token = tokenStore.dbxRefreshToken
// const comic = await $fetch(`/api/cloud/${props.comicVol}`, {
//   method: 'POST',
//   body: { token: token },
// })
// console.log(comic)
</script>

<style>

</style>
