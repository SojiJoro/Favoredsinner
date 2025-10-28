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
    title: 'Web Design & Development',
    description: 'Modern, responsive websites built with cutting-edge technology to capture your brand essence and drive results',
    icon: 'WD',
    rating: 5,
    testimonial: 'Exceptional design work. Delivered beyond expectations!',
    price: 'From $1,500',
    category: 'creative'
  },
  {
    id: 'graphics-branding',
    title: 'Graphics Design & Branding',
    description: 'Unique visual identities and brand strategies that make your business memorable and recognizable',
    icon: 'GB',
    rating: 5,
    testimonial: 'Our brand has never looked better!',
    price: 'From $800',
    category: 'creative'
  },
  {
    id: 'ui-design',
    title: 'User Interface Design',
    description: 'Intuitive, user-centered interface designs that enhance usability and create delightful user experiences',
    icon: 'UI',
    rating: 5,
    price: 'From $1,200',
    category: 'creative'
  },
  {
    id: 'seo-content',
    title: 'SEO & Content Strategy',
    description: 'Data-driven SEO strategies and compelling content that improves search rankings and converts visitors',
    icon: 'SEO',
    rating: 4.5,
    price: 'From $600/month',
    category: 'creative'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Strategic social media management to build your brand presence and engage with your target audience',
    icon: 'SM',
    rating: 5,
    price: 'From $800/month',
    category: 'creative'
  },
  {
    id: 'ppc-campaigns',
    title: 'PPC & Online Campaigns',
    description: 'Targeted pay-per-click advertising campaigns optimized for maximum ROI and business growth',
    icon: 'PPC',
    rating: 4.5,
    price: 'From $500/month + ad spend',
    category: 'creative'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Management',
    description: 'Enterprise-grade cloud solutions with scalable architecture, monitoring, and optimization',
    icon: 'CI',
    rating: 5,
    price: 'From $500/month',
    category: 'devops'
  },
  {
    id: 'network-design',
    title: 'Network Design & Implementation',
    description: 'Custom network architectures built for performance, security, and reliability at scale',
    icon: 'ND',
    rating: 5,
    price: 'Custom quote',
    category: 'devops'
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery & Backup',
    description: 'Comprehensive backup and disaster recovery solutions to protect your critical business data',
    icon: 'DR',
    rating: 5,
    price: 'From $300/month',
    category: 'devops'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    description: 'Advanced security measures and compliance frameworks to protect against digital threats',
    icon: 'CS',
    rating: 5,
    testimonial: 'They secured our entire infrastructure professionally',
    price: 'From $1,000',
    category: 'devops'
  },
  {
    id: 'it-support',
    title: 'IT Support & Maintenance',
    description: 'Round-the-clock technical support and proactive system maintenance to keep your business running',
    icon: 'IT',
    rating: 5,
    price: 'From $200/month',
    category: 'support'
  },
  {
    id: 'helpdesk',
    title: 'Onsite & Remote Helpdesk',
    description: 'Professional helpdesk services with fast response times, available both onsite and remotely',
    icon: 'HD',
    rating: 5,
    price: 'From $150/month',
    category: 'support'
  },
  {
    id: 'cv-review',
    title: 'Professional CV Review',
    description: 'Expert resume review and optimization to help you stand out and land your dream job',
    icon: 'CV',
    rating: 5,
    testimonial: 'Got my dream job thanks to the CV makeover!',
    price: 'From $150',
    category: 'support'
  }
]