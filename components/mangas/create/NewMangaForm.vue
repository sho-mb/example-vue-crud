<template>
  <form>
    <div class="w-[45%]">
      <div class="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Mange title</label>
        <input
          id="name"
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
          >Gernre</label>
          <div class="flex gap-4">
            <input
              id="genre"
              v-model="genre"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="action"
            >
            <button type="button" @click="addGenre()" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> New </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
// const genres = ref<string[]>([])
const genre = ref<string>('')

const addGenre = async () => {
  try {
    await $fetch<string>('/api/genre', {
      method: 'post',
      body: { genre: genre.value },
    })
    genre.value = ''
  }
  catch (error) {
    console.error('Error adding genre:', error)
  }
}
</script>

<style>

</style>
