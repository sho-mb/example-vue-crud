import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  try {
    await $fetch(`${API_BASE_URL}/manga/${id}`, {
      method: 'delete',
    })
  }
  catch (e) {
    return e
  }
})
