export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  category: 'Craftsmanship' | 'Design' | 'Materials' | 'Projects'
  tags: string[]
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Custom Furniture Making',
    date: '2025-10-15',
    excerpt: 'Exploring the timeless craft of creating bespoke furniture pieces that tell a story. Every piece we create is a testament to quality, attention to detail, and personal expression.',
    content: `Custom furniture making is more than just woodworking—it's about creating pieces that become part of your life story. Each custom piece begins with a conversation, understanding your needs, your space, and your vision. We believe that furniture should not only be functional but should reflect your personality and enhance your living space.

The process involves careful planning, selecting the right materials, and applying traditional craftsmanship techniques combined with modern precision. From the initial sketch to the final finish, every step is executed with meticulous attention to detail. The result is a one-of-a-kind piece that you'll treasure for generations.

What sets custom furniture apart is the ability to perfectly fit your space and requirements. Whether it's a dining table built for family gatherings, a bookshelf designed for your collection, or a bed frame crafted to your exact specifications, custom work ensures that every dimension, every detail, and every finish is exactly as you envision it.`,
    category: 'Craftsmanship',
    tags: ['custom furniture', 'craftsmanship', 'design'],
    slug: 'art-of-custom-furniture-making'
  },
  {
    id: '2',
    title: 'Choosing the Right Wood for Your Project',
    date: '2025-10-08',
    excerpt: 'A comprehensive guide to wood selection—understanding grain patterns, durability, and how different species can transform your furniture piece.',
    content: `Selecting the right wood is one of the most critical decisions in any furniture project. Different wood species offer unique characteristics in terms of color, grain pattern, hardness, and workability. Understanding these properties helps create pieces that are not only beautiful but also durable and functional.

Hardwoods like oak, maple, and walnut are popular choices for furniture making due to their strength and beautiful grain patterns. Oak offers exceptional durability and a classic appearance with its prominent grain. Walnut provides rich, dark tones and works beautifully for both modern and traditional designs. Maple is prized for its fine, consistent grain and light color that can complement any interior.

Beyond aesthetics, we consider practical factors: How will the piece be used? Will it face moisture or temperature changes? What maintenance level are you comfortable with? These questions guide us toward the perfect wood choice for your specific needs.

Sustainability is also a crucial factor. We source our wood from responsible suppliers who practice sustainable forestry. This ensures that the beauty we create today doesn't come at the expense of tomorrow's forests. Each piece of wood has a story, and we honor that by using it wisely and beautifully.`,
    category: 'Materials',
    tags: ['wood', 'materials', 'sustainability'],
    slug: 'choosing-right-wood-for-project'
  },
  {
    id: '3',
    title: 'From Concept to Creation: Our Design Process',
    date: '2025-09-28',
    excerpt: 'Take a behind-the-scenes look at how we transform your ideas into functional works of art, from initial consultation to final delivery.',
    content: `Every custom furniture project begins with listening. We start with an in-depth consultation to understand your vision, needs, and the space where the piece will live. This conversation forms the foundation of our design process.

Next comes the design phase, where we translate ideas into detailed sketches and technical drawings. We present multiple design options, discussing proportions, joinery methods, and finish options. This collaborative approach ensures the final design exceeds your expectations.

Once the design is approved, we carefully select materials, considering grain patterns and color to ensure each piece flows naturally. The construction phase combines traditional joinery techniques with modern precision tools. We use time-tested methods like mortise-and-tenon joints and dovetails, ensuring structural integrity that lasts generations.

The finishing process is where the wood truly comes to life. Whether it's a hand-rubbed oil finish that enhances natural beauty or a custom stain to match your existing decor, we take our time to achieve perfection. Each piece goes through multiple rounds of sanding and finishing until it meets our exacting standards.

Finally, we handle delivery and installation with the same care we put into building. We ensure your new piece fits perfectly in your space and provide guidance on care and maintenance to keep it beautiful for years to come.`,
    category: 'Design',
    tags: ['process', 'design', 'consultation'],
    slug: 'from-concept-to-creation'
  },
  {
    id: '4',
    title: 'Restoration vs. Reproduction: Preserving History',
    date: '2025-09-15',
    excerpt: 'Understanding when to restore a vintage piece and when to create a faithful reproduction. Preserving the character and craftsmanship of yesteryear.',
    content: `Antique and vintage furniture carries history and character that can't be replicated. When clients bring us heirloom pieces, we face an important decision: restore the original or create a reproduction that captures its essence while improving function.

Restoration is ideal when the piece has good structural integrity and historical significance. We carefully repair damage, stabilize joints, and refinish surfaces while preserving original elements. The goal is to honor the piece's history while making it functional for modern use. We use period-appropriate techniques and materials to maintain authenticity.

Reproduction becomes the better choice when a piece is beyond repair or when you want the aesthetic of a particular style with modern improvements. We carefully study the original, documenting construction methods, proportions, and details. Our reproductions capture the spirit of the original while incorporating better joinery, more durable finishes, or modifications to suit contemporary needs.

Sometimes we combine both approaches—restoring key original elements while reproducing damaged or missing parts. This hybrid method preserves the soul of the piece while ensuring it can be enjoyed and used for generations to come.

Whether restoring or reproducing, our commitment remains the same: honoring the craftsmanship of the past while creating furniture that enhances your present and future.`,
    category: 'Projects',
    tags: ['restoration', 'vintage', 'craftsmanship'],
    slug: 'restoration-vs-reproduction'
  },
  {
    id: '5',
    title: 'Sustainable Craftsmanship: Building for Tomorrow',
    date: '2025-09-01',
    excerpt: 'How we combine traditional woodworking with sustainable practices to create furniture that respects both craft and environment.',
    content: `Sustainability in furniture making goes beyond using reclaimed wood—it's a holistic approach to every aspect of our craft. We believe that true craftsmanship means building pieces that last generations, reducing the cycle of consumption that defines modern furniture.

Our commitment starts with responsible sourcing. We work with suppliers who practice sustainable forestry, ensuring forests are managed for long-term health. We also actively seek reclaimed and salvaged wood, giving new life to materials with their own unique stories and character.

In our workshop, we minimize waste through careful planning and creative use of offcuts. Smaller pieces become inlays, breadboard ends, or components for smaller projects. Sawdust and shavings are collected for composting or used by local farms for animal bedding.

The finishes we use are carefully selected for both performance and environmental impact. We favor natural oils, waxes, and water-based finishes that are low in volatile organic compounds (VOCs). These finishes are healthier for our craftspeople, our clients, and the environment.

Most importantly, we build furniture that lasts. By using solid wood construction, traditional joinery, and quality hardware, we create pieces that can be repaired, refinished, and passed down through generations. This is the ultimate form of sustainability—furniture that doesn't need to be replaced.`,
    category: 'Craftsmanship',
    tags: ['sustainability', 'environment', 'quality'],
    slug: 'sustainable-craftsmanship'
  }
]
