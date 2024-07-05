<template>
  <div class="container m-auto pt-10">
    <CommonHeaderSection />
    <div class="relative">
      <slot />
      <CommonAleartResponse
        :status-code="statusCode!"
        :message-or-messages="messageOrMessages!"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyErrorStore } from '@/stores/errorStore'

const errorStore = useMyErrorStore()
const statusCode = ref<number | null>(null)
const messageOrMessages = ref<string | string[] | null>(null)
watch(
  () => errorStore.statusCode,
  (newStatusCode) => {
    statusCode.value = newStatusCode
  },
)
watch(
  () => errorStore.messageOrMessages,
  (newMessageOrMessages) => {
    messageOrMessages.value = newMessageOrMessages
  },
)
</script>

<style>

</style>
