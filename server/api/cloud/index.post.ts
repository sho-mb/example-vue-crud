import { dropboxUtil } from '~/utils/dropboxUtil'

export default defineEventHandler(async (event) => {
  try {
    const formData = await readFormData(event)
    const file = formData.get('file') as File
    const token = formData.get('token') as string
    const util = new dropboxUtil()

    if (!file) {
      console.error('ファイルが選択されていません。')
      return
    }

    try {
      const id = await util.uploadFileAndGetId(file, token)
      return id
    }
    catch (e) {
      return e
    }
  }
  catch (e) {
    console.log(e)
  }
})
