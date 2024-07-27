import { Dropbox } from 'dropbox'

export class dropboxUtil {
  async uploadFileAndGetId(file: File, token: string) {
    try {
      const dbx = new Dropbox({
        refreshToken: token,
        clientId: process.env.DROPBOX_APP_KEY,
        clientSecret: process.env.APP_SECRET,
        fetch })
      const buf = await file.arrayBuffer()
      const uploadResponse = await dbx.filesUpload({ path: `/${file.name}`, contents: buf })
      return uploadResponse.result.id
    }
    catch (e) {
      console.error(e)
    }
  }

  async findUploadFile(id: string, token: string) {
    try {
      const dbx = new Dropbox({
        refreshToken: token,
        clientId: process.env.DROPBOX_APP_KEY,
        clientSecret: process.env.APP_SECRET,
        fetch })

      const uploadResponse = await dbx.fileRequestsGet({ id: id })
      return uploadResponse.result.url
    }
    catch (e) {
      console.error(e)
    }
  }
}
