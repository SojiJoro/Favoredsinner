export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  category: 'Thought Pieces' | 'Dev/Infra Notes' | 'Visual Drops' | 'Growth Logs'
  tags: string[]
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Being Anonymous',
    date: '2024-01-15',
    excerpt: 'Why choosing to remain faceless in the digital age is a form of art itself. In a world obsessed with personal branding, anonymity becomes a radical act of creative freedom.',
    content: `In a world obsessed with personal branding and self-promotion, choosing anonymity is a radical act. It's not about hiding; it's about letting the work speak for itself. When we remove the creator from the creation, we allow the audience to form a pure connection with the art itself. No preconceptions, no biases—just raw, unfiltered experience.`,
    category: 'Thought Pieces',
    tags: ['thoughts', 'philosophy', 'art'],
    slug: 'art-of-being-anonymous'
  },
  {
    id: '2',
    title: 'Surrealism in the Digital Era',
    date: '2024-01-10',
    excerpt: 'How technology has transformed the way we create and perceive surreal art. Digital tools have opened new dimensions for artistic expression beyond traditional boundaries.',
    content: `Digital tools have opened new dimensions for surrealist expression. We're no longer bound by physical limitations. Pixels bend to our will, reality morphs at our command. The surreal has become more accessible, yet maintaining its essence—that jarring disconnect from reality—requires even more intention in our oversaturated digital landscape.`,
    category: 'Visual Drops',
    tags: ['art', 'technology', 'surrealism'],
    slug: 'surrealism-digital-era'
  },
  {
    id: '3',
    title: 'The Power of Visual Storytelling',
    date: '2024-01-05',
    excerpt: 'Every image tells a story, but not all stories need words. Exploring how visual narratives can convey emotions and ideas that transcend language.',
    content: `Words can lie, but visuals speak directly to the soul. In my work, I explore how a single image can contain multitudes—layers of meaning that reveal themselves differently to each viewer. This is the democracy of art: each person brings their own story to the viewing, creating a unique narrative collaboration between creator and audience.`,
    category: 'Thought Pieces',
    tags: ['storytelling', 'design', 'creativity'],
    slug: 'power-visual-storytelling'
  },
  {
    id: '4',
    title: 'Creating in the Shadows',
    date: '2023-12-28',
    excerpt: 'The creative process when you choose to work without recognition. How anonymity can liberate artistic expression and foster genuine innovation.',
    content: `Working in the shadows liberates the creative process. Without the pressure of maintaining a public persona, we can experiment freely, fail spectacularly, and evolve organically. The work becomes the only measure of success, not likes, not followers, not recognition—just the pure satisfaction of creation.`,
    category: 'Thought Pieces',
    tags: ['creativity', 'process', 'philosophy'],
    slug: 'creating-in-shadows'
  }
]