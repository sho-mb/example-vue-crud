const apiUri = process.env.API_URI || 'localhost'
const apiPort = process.env.API_PORT || '8000'

export const API_BASE_URL = `http://${apiUri}:${apiPort}`
