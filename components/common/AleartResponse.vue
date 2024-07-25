<template>
  <div>
    <UAlert
      v-if="successMessage"
      icon="i-heroicons-check-circle-20-solid"
      :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'white', variant: 'link', padded: false }"
      color="primary"
      variant="solid"
      :title="successMessage"
      class="w-72 mb-4 animate-bounce absolute top-12 right-3"
      @close="removeMessage()"
    />
    <div
      v-else-if="errorMessages"
      class="w-fit absolute -top-12 right-3"
    >
      <UAlert
        v-for="(error, index) in errorMessages"
        :key="index"
        :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'white', variant: 'link', padded: false }"
        icon="i-heroicons-bell-alert"
        class="w-72 mb-4 animate-bounce"
        :title="error"
        variant="solid"
        color="red"
        @close="removeMessage(index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const successMessage = ref<string>('')
const errorMessages = ref<string[]>([])
const props = defineProps({
  statusCode: {
    type: Number,
    required: false,
  },
  messageOrMessages: {
    type: [String, Array] as PropType<string | string[]>,
    required: false,
  },
})

watch(() => props.messageOrMessages, (targetVal) => {
  errorMessages.value = []
  if (Array.isArray(targetVal)) {
    const errorMessage = `Error status: ${props.statusCode}`
    errorMessages.value.push(errorMessage)

    console.log('pass')
    targetVal.forEach((message: string) => {
      const errorMessage = `Message: ${message}`
      errorMessages.value.push(errorMessage)
    })
  }
  else if (typeof targetVal === 'string' && props.statusCode) {
    const errorMessage = `Error status: ${props.statusCode},  Message: ${targetVal}`
    errorMessages.value.push(errorMessage)
  }
  else if (typeof targetVal === 'string' && !props.statusCode) {
    successMessage.value = targetVal
  }
})

const removeMessage = (index?: number) => {
  if (index !== undefined) {
    errorMessages.value.splice(index, 1)
  }
  successMessage.value = ''
}
</script>

<style>

</style>
