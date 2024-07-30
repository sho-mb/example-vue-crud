import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const vol = getRouterParam(event, 'id')
  try {
    const comic = await $fetch(`${API_BASE_URL}/comics/${vol}`)
    return comic
  }
  catch (e) {
    console.log(e)
  }
})
