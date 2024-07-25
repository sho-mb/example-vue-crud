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
      const link = await util.uploadFileAndGetLink(file, token)
      console.log(link)
      return link
    }
    catch (e) {
      return e
    }
  }
  catch (e) {
    console.log(e)
  }
})
