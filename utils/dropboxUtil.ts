import { Dropbox } from 'dropbox'

export class dropboxUtil {
  async uploadFileAndGetUrl(file: File, token: string) {
    try {
      const dbx = new Dropbox({
        refreshToken: token,
        clientId: process.env.DROPBOX_APP_KEY,
        clientSecret: process.env.APP_SECRET,
        fetch })
      const buf = await file.arrayBuffer()
      const res = await dbx.filesUpload({ path: `/${file.name}`, contents: buf })
      const link = await getSharedlink(dbx, res.result.path_lower!)
      console.log(link)
      return link
    }
    catch (error) {
      console.log(error)
    }
  }

  // async findUploadFile(id: string, token: string) {
  //   try {
  //     const dbx = new Dropbox({
  //       refreshToken: token,
  //       clientId: process.env.DROPBOX_APP_KEY,
  //       clientSecret: process.env.APP_SECRET,
  //       fetch })

  //     const uploadResponse = await dbx.fileRequestsGet({ id: id }).catch(function (error) {
  //       console.log(error.error)
  //     })
  //     console.log(uploadResponse)
  //     return uploadResponse.result.url
  //   }
  //   catch (e) {
  //     console.error(e)
  //   }
  // }
}

const getSharedlink = async (dbx: Dropbox, path: string) => {
  try {
    const res = await dbx.sharingCreateSharedLinkWithSettings({
      path: path,
      settings: {
        requested_visibility: { '.tag': 'public' }, // 必要に応じて適切な設定を使用
      },
    })

    const sharedLink = res.result.url
    return sharedLink
  }
  catch (error) {
    console.log(error)
    return null
  }
}
