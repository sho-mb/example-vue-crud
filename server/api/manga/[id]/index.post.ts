import { API_BASE_URL } from '~/server/config/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const formData = await readFormData(event)
  try {
    $fetch(`${API_BASE_URL}/manga/${id}`, {
      method: 'post',
      body: formData,
    })
  }
  catch (e) {
    return e
  }
})
