export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Being Anonymous',
    date: '2024-01-15',
    excerpt: 'Why choosing to remain faceless in the digital age is a form of art itself.',
    content: `In a world obsessed with personal branding and self-promotion, choosing anonymity is a radical act...`,
    tags: ['thoughts', 'philosophy', 'art'],
    slug: 'art-of-being-anonymous'
  },
  {
    id: '2',
    title: 'Surrealism in the Digital Era',
    date: '2024-01-10',
    excerpt: 'How technology has transformed the way we create and perceive surreal art.',
    content: `Digital tools have opened new dimensions for surrealist expression...`,
    tags: ['art', 'technology', 'surrealism'],
    slug: 'surrealism-digital-era'
  },
  // Add more blog posts
]