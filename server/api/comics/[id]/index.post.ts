import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  console.log(id)
  console.log(body)
  try {
    await $fetch(`${API_BASE_URL}/comics/${id}`, {
      method: 'post',
      body: body,
    })
  }
  catch (e) {
    console.log(e)
  }
})
