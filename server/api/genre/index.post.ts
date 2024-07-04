import { API_BASE_URL } from '~/server/config/api'
import type { Genre } from '~/types/genre'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const data = await $fetch<Genre>(`${API_BASE_URL}/genres`, {
      method: 'post',
      body: body,
    })
    return JSON.stringify(data.genre)
  }
  catch (e) {
    return e
  }
})
