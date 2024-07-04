import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async () => {
  const genres = await $fetch(`${API_BASE_URL}/genres`)
  return genres
})
