import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Services Header */}
      <section style={{
        background: 'linear-gradient(to bottom, #e8f5fe 0%, #fafbfc 100%)',
        padding: '80px 0 40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'bold',
          color: '#14171a',
          marginBottom: '16px'
        }}>
          Our Services
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#657786',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Professional solutions for your digital needs
        </p>
      </section>
      
      {/* Services Grid */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px 80px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  )
}