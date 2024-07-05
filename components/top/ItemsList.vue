<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Manga
          </th>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Author
          </th>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Genre
          </th>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Detail
          </th>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Edit
          </th>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in mangas"
          :key="item.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.mangaName }}
          </th>
          <td class="px-6 py-4">
            {{ item.author }}
          </td>
          <td class="px-6 py-4 flex gap-4">
            <div
              v-for="genre in item.genres"
              :key="genre.id"
            >
              {{ genre.genre }}
            </div>
          </td>
          <td class="px-6 py-4 text-green-400 hover:text-green-600">
            <NuxtLink :to="{ name: 'mangas-id', params: { id: item.id } }">
              Go to detail
            </NuxtLink>
          </td>
          <td class="px-6 py-4 text-orange-400 hover:text-orange-600">
            <NuxtLink :to="{ name: 'mangas-id-edit', params: { id: item.id } }">
              <PencilSquareIcon class="size-6 " />
            </NuxtLink>
          </td>
          <td class="px-6 py-4">
            <button
              type="button"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
            >
              <XCircleIcon
                class="size-6 text-red-400"
                @click="deleteItem(item.id)"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { useMyErrorStore } from '@/stores/errorStore'
import type { Manga } from '~/types/manga'

const mangas = ref<Manga[]>([])
const errorStore = useMyErrorStore()

const fetchData = async () => {
  try {
    const { data } = await useFetch<Manga[]>('/api/manga')
    if (data.value) {
      mangas.value = data.value
    }
  }
  catch (error) {
    console.error('Error fetching data:', error)
  }
}

const deleteItem = async (id: string) => {
  errorStore.clearError()
  const { error } = await useFetch(`/api/manga/${id}`, {
    method: 'delete',
  })

  if (error.value) {
    const messages = error.value?.data?.data?.message
    const statusCode = error.value?.statusCode
    errorStore.setError(messages, statusCode)
  }
  else {
    // 削除成功後にデータを再フェッチ
    fetchData()
  }
}

fetchData()
</script>

<style>

</style>
