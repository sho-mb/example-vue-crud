import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  try {
    const manga = await $fetch(`${API_BASE_URL}/manga/${id}`)
    return manga
  }
  catch (e) {
    console.log(e)
  }
})
