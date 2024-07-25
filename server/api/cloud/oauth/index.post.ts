import type { DropboxToken } from '~/types/dropbox'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const redirectUri = process.env.REDIRECT_URI!
  const clientId = process.env.DROPBOX_APP_KEY!
  const clientSecret = process.env.APP_SECRET!

  const request = new URLSearchParams()
  request.append('code', body)
  request.append('grant_type', 'authorization_code')
  request.append('redirect_uri', redirectUri)
  request.append('client_id', clientId)
  request.append('client_secret', clientSecret)
  try {
    const data = await $fetch<DropboxToken>('https://api.dropboxapi.com/oauth2/token', {
      method: 'post',
      body: request,
    })

    return data
  }
  catch (e) {
    console.error(e)
  }
  return 'Hello Nitro'
})
