import { dropboxUtil } from '~/utils/dropboxUtil'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const util = new dropboxUtil()
  try {
    util.findUploadFile(id!, body)
  }
  catch (e) {
    console.log(e)
  }
})
