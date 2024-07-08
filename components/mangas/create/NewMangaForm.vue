<template>
  <form class="relative flex justify-between">
    <div class="w-[45%]">
      <div class="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Mange title</label>
        <input
          id="name"
          v-model="mangaForm.mangaName"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Hunter x Hunter"
          required
        >
      </div>
      <div class="mb-5">
        <label
          for="author"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Author</label>
        <input
          id="author"
          v-model="mangaForm.author"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Yoshihiro Togashi"
          required
        >
      </div>
      <div class="mb-5">
        <label
          for="urlOfWeb"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Free DL website url</label>
        <input
          id="urlOfWeb"
          v-model="mangaForm.urlOfWeb"
          type="url"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="http://freemangaweb.com"
          required
        >
      </div>
      <div class="mb-5">
        <div>
          <label
            for="genre"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Add Genre</label>
          <div class="flex gap-4">
            <input
              id="genre"
              v-model="genre"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="action"
            >
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              @click="addGenre()"
            >
              New
            </button>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div
          v-if="selected[0]"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <div
            class="flex"
          >
            <span
              v-for="item in selected"
              id="badge-dismiss-default"
              :key="item.id"
              class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300"
            >
              {{ item.genre }}
              <button
                type="button"
                class="inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
                @click="remove(item.id)"
              >
                <svg
                  class="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Remove badge</span>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <USelectMenu
          v-model="selected"
          :options="genres"
          multiple
          placeholder="Select Genres"
          option-attribute="genre"
        />
      </div>
      <div class="mb-8">
        <div>
          <label
            for="cover"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Add Cover</label>
          <div class="flex gap-4">
            <input
              id="cover"
              v-model="coverUrl"
              type="url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="www.xxx.com"
            >
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              @click="previewCover()"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="submitForm()"
      >
        Submit
      </button>
    </div>
    <div class="w-[45%]">
      <div class="mb-4">
        <label
          for="contents"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Contents</label>
        <textarea
          id="contents"
          v-model="mangaForm.content"
          rows="10"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write detail of manga here..."
        />
      </div>
      <div>
        <NuxtImg
          class="h-auto max-w-lg rounded-lg"
          :src="imageUrl"
          height="300px"
          alt="managa cover"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import type { Genre } from '~/types/genre'
import type { Manga } from '~/types/manga'

const errorStore = useMyErrorStore()
const genres = ref<Genre[]>([])
const selected = ref<Genre[]>([])
const genre = ref<''>()
const coverUrl = ref<string>('')
const imageUrl = ref<string>('/image/default.jpg')
const mangaForm = ref<Omit<Manga, 'id'>>({
  mangaName: '',
  author: '',
  topViewUrl: coverUrl.value,
  content: '',
  genres: selected.value,
  urlOfWeb: '',
})

const submitForm = async () => {
  errorStore.clearError()
  mangaForm.value.topViewUrl = coverUrl.value
  mangaForm.value.genres = selected.value
  const { error } = await useFetch<string>('/api/manga', {
    method: 'post',
    body: mangaForm.value,
  })
  if (error.value) {
    const statusCode = error.value.statusCode
    const messages = error.value.data?.data?.message
    errorStore.setError(messages, statusCode)
  }
  else {
    return navigateTo('/')
  }
}

const remove = (id: string) => {
  selected.value = selected.value.filter(i => i.id !== id)
}

const previewCover = () => {
  imageUrl.value = coverUrl.value
}

const addGenre = async () => {
  errorStore.clearError()
  const { data, error } = await useFetch<string>('/api/genre', {
    method: 'post',
    body: { genre: genre.value },
  })
  if (data.value) {
    const messages = `Adding ${data.value} to genres successfuly`
    errorStore.setError(messages, 200)
    getGenres()
    genre.value = ''
  }
  else {
    const messages = error.value?.data?.data?.message
    const statusCode = error.value?.statusCode
    errorStore.setError(messages, statusCode)
  }
}

const getGenres = async () => {
  try {
    const { data } = await useFetch<Genre[]>('/api/genre')
    if (data.value) {
      genres.value = data.value
    }
  }
  catch (error) {
    console.log('Error fetching genres:', error)
  }
}

onMounted(() => {
  getGenres()
})
</script>

<style>

</style>
