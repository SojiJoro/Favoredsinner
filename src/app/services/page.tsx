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
    { id: 'all' as Category, label: 'All Services' },
    { id: 'creative' as Category, label: 'Creative & Marketing' },
    { id: 'devops' as Category, label: 'Technical Infrastructure' },
    { id: 'support' as Category, label: 'Support & Consultation' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        padding: '140px 24px 80px',
        textAlign: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#14171a',
            color: 'white',
            padding: '8px 24px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '32px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Professional Services
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            color: '#14171a',
            marginBottom: '24px',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Professional Digital Solutions
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#657786',
            maxWidth: '700px',
            margin: '0 auto 48px',
            lineHeight: '1.7'
          }}>
            Comprehensive services spanning creative design, technical infrastructure, and ongoing support to help your business thrive in the digital landscape.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '40px',
            maxWidth: '700px',
            margin: '0 auto',
            padding: '40px 0'
          }}>
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#14171a',
                  fontFamily: 'Playfair Display, serif',
                  marginBottom: '8px',
                  lineHeight: '1'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#657786',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
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
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            padding: '20px 0',
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
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeCategory === category.id ? '#14171a' : '#f8f9fa',
                  color: activeCategory === category.id ? 'white' : '#657786',
                  fontWeight: activeCategory === category.id ? '600' : '500',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: activeCategory === category.id ? '0 2px 8px rgba(20, 23, 26, 0.15)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.backgroundColor = '#e1e8ed';
                    e.currentTarget.style.color = '#14171a';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.color = '#657786';
                  }
                }}
              >
                <span>{category.label}</span>
                <span style={{
                  backgroundColor: activeCategory === category.id ? 'rgba(255, 255, 255, 0.2)' : '#e1e8ed',
                  color: activeCategory === category.id ? 'white' : '#657786',
                  padding: '3px 10px',
                  borderRadius: '6px',
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
        padding: '100px 24px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Need a Custom Solution?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#9ca3af',
            marginBottom: '40px',
            lineHeight: '1.7'
          }}>
            Every project is unique. Let&rsquo;s discuss your specific requirements and create a tailored solution that meets your goals.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'white',
              color: '#14171a',
              padding: '18px 40px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 255, 255, 0.1)';
            }}
          >
            Contact Us
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
