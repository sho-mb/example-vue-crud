import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await $fetch<string>(`${API_BASE_URL}/genres`, {
    method: 'post',
    body: body,
  })
})
