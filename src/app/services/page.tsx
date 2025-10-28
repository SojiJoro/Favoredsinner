'use client'
import { useState } from 'react'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'

type Category = 'all' | 'creative' | 'devops' | 'support'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory)

  const categories = [
    { id: 'all' as Category, label: 'All Services', icon: '✨' },
    { id: 'creative' as Category, label: 'Creative & Marketing', icon: '🎨' },
    { id: 'devops' as Category, label: 'DevOps & Infrastructure', icon: '⚙️' },
    { id: 'support' as Category, label: 'Support & Career', icon: '🤝' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #e8f5fe 0%, #ffffff 50%, #e8f5fe 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: '#1DA1F2',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(80px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '400px',
          height: '400px',
          background: '#1DA1F2',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(80px)'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#e8f5fe',
            color: '#1DA1F2',
            padding: '8px 20px',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '24px',
            border: '1px solid #1DA1F2'
          }}>
            Professional Services
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            color: '#14171a',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Transform Your Digital Presence
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: '#657786',
            maxWidth: '700px',
            margin: '0 auto 48px',
            lineHeight: '1.6'
          }}>
            From surreal creative work to rock-solid infrastructure, we deliver services that blend art and engineering.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '32px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#1DA1F2',
                  fontFamily: 'Playfair Display, serif',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#657786',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e1e8ed',
        position: 'sticky',
        top: '73px',
        zIndex: 40,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            padding: '16px 0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  border: activeCategory === category.id ? '2px solid #1DA1F2' : '2px solid #e1e8ed',
                  backgroundColor: activeCategory === category.id ? '#e8f5fe' : 'white',
                  color: activeCategory === category.id ? '#1DA1F2' : '#657786',
                  fontWeight: activeCategory === category.id ? '600' : '500',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: activeCategory === category.id ? '0 4px 12px rgba(29, 161, 242, 0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.borderColor = '#1DA1F2';
                    e.currentTarget.style.backgroundColor = '#f7f9fa';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.borderColor = '#e1e8ed';
                    e.currentTarget.style.backgroundColor = 'white';
                  }
                }}
              >
                <span style={{ fontSize: '20px' }}>{category.icon}</span>
                <span>{category.label}</span>
                <span style={{
                  backgroundColor: activeCategory === category.id ? '#1DA1F2' : '#e1e8ed',
                  color: activeCategory === category.id ? 'white' : '#657786',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {category.id === 'all' ? services.length : services.filter(s => s.category === category.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '32px',
          animation: 'fadeIn 0.5s ease-out'
        }}>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            color: '#657786'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#14171a' }}>
              No services found
            </h3>
            <p>Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#14171a',
        color: 'white',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: '#1DA1F2',
          borderRadius: '50%',
          opacity: 0.05,
          filter: 'blur(100px)'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Can&rsquo;t Find What You Need?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#e1e8ed',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Every project is unique. Let&rsquo;s discuss your specific requirements and create a custom solution.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#1DA1F2',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(29, 161, 242, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a91da';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(29, 161, 242, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1DA1F2';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(29, 161, 242, 0.3)';
            }}
          >
            Get Custom Quote
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
