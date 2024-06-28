<template>
  <div class="flex gap-4">
    <input
      id="dark"
      v-model="$colorMode.preference"
      type="radio"
      value="dark"
      class="hidden"
    >
    <label
      for="dark"
      aria-selected="true"
    ><MoonIcon class="size-10" /></label>

    <input
      id="sepia"
      v-model="$colorMode.preference"
      type="radio"
      value="sepia"
      class="hidden"
    >
    <label for="sepia"><SunIcon class="size-10" /></label>
  </div>
</template>

<script lang="ts" setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
</script>

<style>
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
