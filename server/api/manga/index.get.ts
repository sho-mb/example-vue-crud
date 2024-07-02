import { defineEventHandler, createError } from 'h3'
import { API_BASE_URL } from '~/server/config/api'
import type { Manga } from '~/types/manga'

export default defineEventHandler(async () => {
  try {
    const mangas = await $fetch<Manga[]>(`${API_BASE_URL}/manga`)
    return mangas
  }
  catch (error) {
    const statusCode = 500
    const message = 'Internal Server Error'
    throw createError({ statusCode, message })
  }
})
