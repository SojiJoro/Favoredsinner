export interface Service {
  id: string
  title: string
  description: string
  icon: string
  rating: number
  testimonial?: string
  price?: string
  category: 'creative' | 'devops' | 'support'
}

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Modern, responsive websites that capture your brand essence',
    icon: '🌐',
    rating: 5,
    testimonial: 'Exceptional design work. Delivered beyond expectations!',
    price: 'From $1,500',
    category: 'creative'
  },
  {
    id: 'graphics-branding',
    title: 'Graphics Design & Branding',
    description: 'Unique visual identities that make your brand unforgettable',
    icon: '🎨',
    rating: 5,
    testimonial: 'Our brand has never looked better!',
    price: 'From $800',
    category: 'creative'
  },
  {
    id: 'ui-design',
    title: 'User Interface Design',
    description: 'Intuitive interfaces that users love to interact with',
    icon: '📱',
    rating: 5,
    price: 'From $1,200',
    category: 'creative'
  },
  {
    id: 'seo-content',
    title: 'SEO & Content Strategy',
    description: 'Get found online with optimized content that converts',
    icon: '📈',
    rating: 4.5,
    price: 'From $600/month',
    category: 'creative'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Engage your audience with strategic social presence',
    icon: '📲',
    rating: 5,
    price: 'From $800/month',
    category: 'creative'
  },
  {
    id: 'social-growth',
    title: 'Social Media Likes & Followers',
    description: 'Boost your social proof with real engagement',
    icon: '👥',
    rating: 4.5,
    price: 'Custom quote',
    category: 'creative'
  },
  {
    id: 'ppc-campaigns',
    title: 'PPC & Online Campaigns',
    description: 'Targeted ads that bring real results',
    icon: '🎯',
    rating: 4.5,
    price: 'From $500/month + ad spend',
    category: 'creative'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Management',
    description: 'Scalable cloud solutions for modern businesses',
    icon: '☁️',
    rating: 5,
    price: 'From $500/month',
    category: 'devops'
  },
  {
    id: 'network-design',
    title: 'Network Design & Implementation',
    description: 'Robust networks built for performance and reliability',
    icon: '🌐',
    rating: 5,
    price: 'Custom quote',
    category: 'devops'
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery & Backup',
    description: 'Never lose critical data with our backup solutions',
    icon: '💾',
    rating: 5,
    price: 'From $300/month',
    category: 'devops'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    description: 'Protect your business from digital threats',
    icon: '🔐',
    rating: 5,
    testimonial: 'They secured our entire infrastructure professionally',
    price: 'From $1,000',
    category: 'devops'
  },
  {
    id: 'it-support',
    title: 'IT Support & Maintenance',
    description: 'Keep your systems running smoothly 24/7',
    icon: '🔧',
    rating: 5,
    price: 'From $200/month',
    category: 'support'
  },
  {
    id: 'helpdesk',
    title: 'Onsite & Remote Helpdesk',
    description: 'Expert support whenever and wherever you need it',
    icon: '🆘',
    rating: 5,
    price: 'From $150/month',
    category: 'support'
  },
  {
    id: 'cv-review',
    title: 'CV Review',
    description: 'Stand out with a professionally crafted resume',
    icon: '📄',
    rating: 5,
    testimonial: 'Got my dream job thanks to the CV makeover!',
    price: 'From $150',
    category: 'support'
  }
]