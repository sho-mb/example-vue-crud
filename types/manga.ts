interface Genre {
  id: string
  mangaId: string
  genre: string
}

export interface Manga {
  id: string
  mangaName: string
  author: string
  topViewUrl: string
  content: string
  genres: Genre[]
  urlForFreeWebsite: string
  // mangaZip: File[]
}
