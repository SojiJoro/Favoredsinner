import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          Our Services
        </h1>
        <p className="text-xl text-center text-deep-grey mb-12">
          Professional solutions for your digital needs
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  )
}