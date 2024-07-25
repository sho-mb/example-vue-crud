<template>
  <div>
    <button
      type="button"
      class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      @click="addZip()"
    >
      Add Manga
    </button>
  </div>
</template>

<script lang="ts" setup>
const addZip = () => {
  emits('add-zip', 'openUploadModal')
}

const emits = defineEmits(['add-zip'])
</script>

<style>

</style>
