import { API_BASE_URL } from '~/server/config/api'
import type { Manga } from '~/types/manga'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    await $fetch<Manga>(`${API_BASE_URL}/manga`, {
      method: 'post',
      body: body,
    })
  }
  catch (e) {
    return e
  }
})
