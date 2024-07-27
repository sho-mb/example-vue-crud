import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  try {
    const comics = await $fetch(`${API_BASE_URL}/comics/${id}`)
    return comics
  }
  catch (e) {
    console.log(e)
  }
})
