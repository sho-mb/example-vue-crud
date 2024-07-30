<template>
  <div class="flex items-center justify-center w-full">
    <label
      for="dropzone-file"
      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
        <p
          v-if="!file"
          class="text-xs text-gray-500 dark:text-gray-400"
        >Upload Zip FIle</p>
        <p
          v-else
          class="text-xs text-gray-500 dark:text-gray-400"
        >{{ `Currently ${file.name} is ready to upload` }}</p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        class="hidden"
        @change="handleFileUpload"
      >
    </label>
  </div>
  <label
    for="number-input"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
  >Select a volume:</label>
  <input
    id="number-input"
    v-model="comicForm.vol"
    type="number"
    aria-describedby="helper-text-explanation"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="1"
    required
  >
  <button
    type="button"
    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4"
    @click="uploadToServer"
  >
    Upload
  </button>
</template>

<script lang="ts" setup>
import type { Comic } from '~/types/comic'

const tokenStore = useMyTokenStore()
const errorStore = useMyErrorStore()
const route = useRoute()
const router = useRouter()
const file = ref<File | null>(null)
const comicForm = ref<Omit<Comic, 'id'>>({
  comicUrl: '',
  vol: 0,
})

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    file.value = target.files[0]
  }
}

const uploadToServer = async () => {
  errorStore.clearError()
  if (!file.value) {
    console.error('No file selected')
    return
  }

  if (!tokenStore.dbxAccessToken) {
    const messages = 'Please authorize first with dbx'
    errorStore.setError(messages, 400)
    return router.back()
  }

  const formData = new FormData()
  formData.append('file', file.value)
  formData.append('token', tokenStore.dbxRefreshToken!)

  try {
    const data = await $fetch<string>('/api/cloud', {
      method: 'POST',
      body: formData,
    })

    if (data) {
      const messages = 'Adding storage successfuly'
      errorStore.setError(messages)
      comicForm.value.comicUrl = data
    }

    await $fetch(`/api/comics/${route.params.id}`, {
      method: 'POST',
      body: comicForm.value,
    })

    await refreshNuxtData()
  }
  catch (error) {
    const message = `Error uploading file: ${error}`
    errorStore.setError(message, 400)
  }
}
</script>

<style>

</style>
