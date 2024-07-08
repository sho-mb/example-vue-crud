export const useMyErrorStore = defineStore('error', () => {
  const statusCode = ref<number | null>(null)
  const messageOrMessages = ref<string | string[] | null >(null)

  function setError(messages: string | string[], status?: number) {
    if (status)
      statusCode.value = status
    messageOrMessages.value = messages
  }

  function clearError() {
    statusCode.value = null
    messageOrMessages.value = null
  }

  return {
    statusCode,
    messageOrMessages,
    setError,
    clearError,
  }
})
