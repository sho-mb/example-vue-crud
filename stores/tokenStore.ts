import { defineStore } from 'pinia'

export const useMyTokenStore = defineStore('token', () => {
  const dbxAccessToken = ref<string | null>(null)
  const dbxRefreshToken = ref<string | null>(null)

  function setAccessToken(token: string) {
    if (token) {
      dbxAccessToken.value = token
    }
  }

  function setRefresshToken(token: string) {
    if (token) {
      dbxRefreshToken.value = token
    }
  }

  function cleanToken() {
    dbxAccessToken.value = null
    dbxRefreshToken.value = null
  }

  return {
    dbxAccessToken,
    dbxRefreshToken,
    setAccessToken,
    setRefresshToken,
    cleanToken,
  }
})
