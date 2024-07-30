import type { Comic } from './comic'
import type { Genre } from './genre'

export interface Manga {
  id: string
  mangaName: string
  author: string
  topViewUrl: string
  content: string
  genres: Genre[]
  urlOfWeb: string
  comics: Comic[]
}
