<template>
  <div>
    <UButton>
      <NuxtLink :to="dropboxPath">
        Auth with dropbox
      </NuxtLink>
    </UButton>
  </div>
</template>

<script lang="ts" setup>
import { app_key } from '~/server/config/api'

const dropboxPath = `https://www.dropbox.com/oauth2/authorize?client_id=${app_key}&token_access_type=offline&response_type=code&redirect_uri=http://localhost:3000/`
</script>

<style>

</style>
