export interface Artwork {
  id: string
  title: string
  category: 'dreams' | 'faces' | 'words'
  imageUrl: string
  description?: string
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Dreams',
    category: 'dreams',
    imageUrl: '/gallery/dreams/1.jpg',
    description: 'A journey through subconscious realms'
  },
  {
    id: '2',
    title: 'Faceless Identity',
    category: 'faces',
    imageUrl: '/gallery/faces/1.jpg',
    description: 'Who are we without our masks?'
  },
  {
    id: '3',
    title: 'Words Unspoken',
    category: 'words',
    imageUrl: '/gallery/words/1.jpg',
    description: 'Typography meets emotion'
  },
  // Add more artworks as needed
]