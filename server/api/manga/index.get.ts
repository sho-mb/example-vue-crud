import { API_BASE_URL } from '~/server/config/api'
import type { Manga } from '~/types/manga'

export default defineEventHandler(async () => {
  const mangas = await $fetch<Manga[]>(`${API_BASE_URL}/manga`)
  return mangas
})
