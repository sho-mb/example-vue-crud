<template>
  <div class="py-4">
    <MangasDetailMangaDetail
      v-bind="manga"
      class="mt-10"
    />
    <div class="flex justify-end">
      <MangasDetailAddZipBtn @add-zip="openUploadModal" />
      <CommonReturnButton @return-page="clicked" />
    </div>
    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48">
          <CommonUploadZip />
        </Placeholder>
      </div>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import type { Manga } from '~/types/manga'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const manga = ref<Manga>({
  id: '',
  mangaName: '',
  author: '',
  topViewUrl: '/image/default.jpg',
  content: '',
  genres: [],
  urlOfWeb: '',
})

const { data } = await useFetch<Manga>(`/api/manga/${route.params.id}`)
if (data.value) {
  manga.value = {
    id: data.value.id.toString(),
    mangaName: data.value.mangaName,
    author: data.value.author,
    topViewUrl: data.value.topViewUrl,
    content: data.value.content,
    genres: data.value.genres,
    urlOfWeb: data.value.urlOfWeb,
  }
}

const clicked = () => {
  router.back()
}

const openUploadModal = () => {
  isOpen.value = true
}
</script>

<style>

</style>
