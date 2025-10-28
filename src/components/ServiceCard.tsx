'use client'
import Link from 'next/link'
import StarRating from './StarRating'
import { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '0',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      border: '1px solid #e1e8ed',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(29, 161, 242, 0.2)';
      e.currentTarget.style.borderColor = '#1DA1F2';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
      e.currentTarget.style.borderColor = '#e1e8ed';
    }}>
      {/* Icon Header with gradient background */}
      <div style={{
        background: 'linear-gradient(135deg, #e8f5fe 0%, #ffffff 100%)',
        padding: '40px 32px 32px',
        borderBottom: '1px solid #e1e8ed',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '120px',
          height: '120px',
          background: '#1DA1F2',
          borderRadius: '50%',
          opacity: 0.08
        }} />

        <div style={{
          fontSize: '56px',
          marginBottom: '12px',
          position: 'relative',
          zIndex: 1
        }}>
          {service.icon}
        </div>

        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.6rem',
          marginBottom: '0',
          color: '#14171a',
          fontWeight: 'bold',
          lineHeight: '1.3',
          position: 'relative',
          zIndex: 1
        }}>
          {service.title}
        </h3>
      </div>

      {/* Content */}
      <div style={{
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        <p style={{
          color: '#657786',
          marginBottom: '20px',
          flex: '1',
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          {service.description}
        </p>

        <div style={{ marginBottom: '20px' }}>
          <StarRating rating={service.rating} />
        </div>

        {service.testimonial && (
          <div style={{
            backgroundColor: '#e8f5fe',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '20px',
            borderLeft: '3px solid #1DA1F2'
          }}>
            <p style={{
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: '#14171a',
              margin: 0,
              lineHeight: '1.5'
            }}>
              &ldquo;{service.testimonial}&rdquo;
            </p>
          </div>
        )}

        {service.price && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            padding: '16px',
            backgroundColor: '#f7f9fa',
            borderRadius: '12px'
          }}>
            <span style={{
              fontSize: '0.85rem',
              color: '#657786',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Starting at
            </span>
            <span style={{
              fontWeight: 'bold',
              color: '#1DA1F2',
              fontSize: '1.3rem',
              fontFamily: 'Playfair Display, serif'
            }}>
              {service.price}
            </span>
          </div>
        )}

        <Link
          href={`/quote?service=${service.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1DA1F2 0%, #1a91da 100%)',
            color: 'white',
            padding: '14px 24px',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(29, 161, 242, 0.3)',
            border: 'none',
            marginTop: 'auto',
            width: '100%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 161, 242, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(29, 161, 242, 0.3)';
          }}
        >
          Request Quote
        </Link>
      </div>
    </div>
  )
}
