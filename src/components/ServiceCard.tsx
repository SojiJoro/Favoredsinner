import Link from 'next/link'
import StarRating from './StarRating'
import PayPalButton from './PayPalButton'
import { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const basePrice = service.price?.match(/\d+/)?.[0] || '100'
  
  return (
    <div className="card hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="font-serif text-xl mb-2">{service.title}</h3>
      <p className="text-deep-grey mb-4">{service.description}</p>
      
      <StarRating rating={service.rating} />
      
      {service.testimonial && (
        <p className="italic text-sm text-deep-grey mt-3 mb-4">
          &ldquo;{service.testimonial}&rdquo;
        </p>
      )}
      
      {service.price && (
        <p className="font-semibold text-twitter-blue mb-4">{service.price}</p>
      )}
      
      <div className="flex gap-3 mt-auto">
        <Link href={`/quote?service=${service.id}`} className="btn-primary text-sm">
          Request Quote
        </Link>
        <PayPalButton amount={basePrice} description={service.title} />
      </div>
    </div>
  )
}