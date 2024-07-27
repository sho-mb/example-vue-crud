<template>
  <div>
    <p>{{ props.comicId }}</p>
  </div>
</template>

<script lang="ts" setup>
const tokenStore = useMyTokenStore()
const props = defineProps<{
  comicId: string
}>()

const token = tokenStore.dbxRefreshToken
const comic = await $fetch(`/api/cloud/${props.comicId}`, {
  method: 'POST',
  body: { token: token },
})
console.log(comic)
</script>

<style>

</style>
