import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  try {
    await $fetch(`${API_BASE_URL}/manga/${id}`, {
      method: 'put',
      body: body,
    })
  }
  catch (e) {
    return e
  }
})
