import { Dropbox } from 'dropbox'

export class dropboxUtil {
  async uploadFileAndGetLink(file: File, token: string) {
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
}
