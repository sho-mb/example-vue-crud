<template>
  <div>
    <button
      type="button"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      @click="returnPage()"
    >
      Back to Top
    </button>
  </div>
</template>

<script lang="ts" setup>
const returnPage = () => {
  emits('return-page', 'clicked')
}

const emits = defineEmits(['return-page'])
</script>

<style>

</style>
