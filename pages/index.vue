<template>
  <div>
    <section class="mt-10">
      <CommonDropboxAuthBtn />
      <TopCreateMangaBtn class="text-right p-4" />
      <TopItemsList class="" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { DropboxToken } from '~/types/dropbox'

const tokenStore = useMyTokenStore()
const authCode = ref<string>('')

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')
  if (code) {
    authCode.value = code
    exchangeCodeForToken()
  }
})

const exchangeCodeForToken = async () => {
  try {
    const response = await $fetch<DropboxToken>('/api/cloud/oauth', {
      method: 'POST',
      body: JSON.stringify(authCode.value),
    })
    const accessToken = response.access_token
    const refreshToken = response.refresh_token

    tokenStore.setRefresshToken(refreshToken)
    tokenStore.setAccessToken(accessToken)

    const url = new URL(window.location.href)
    history.replaceState(null, '', url.pathname)
  }
  catch (error) {
    console.error('Error exchanging code for token:', error)
  }
}
</script>

<style>

</style>
