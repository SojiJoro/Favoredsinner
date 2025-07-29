'use client'
import Link from 'next/link'
import StarRating from './StarRating'
import PayPalButton from './PayPalButton'
import { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '32px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e1e8ed',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(29, 161, 242, 0.15)';
      e.currentTarget.style.borderColor = '#1DA1F2';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      e.currentTarget.style.borderColor = '#e1e8ed';
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>{service.icon}</div>
      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '24px',
        marginBottom: '12px',
        color: '#14171a'
      }}>{service.title}</h3>
      <p style={{
        color: '#657786',
        marginBottom: '16px',
        flex: '1'
      }}>{service.description}</p>
      
      <StarRating rating={service.rating} />
      
      {service.testimonial && (
        <p style={{
          fontStyle: 'italic',
          fontSize: '14px',
          color: '#657786',
          borderLeft: '4px solid #1DA1F2',
          paddingLeft: '16px',
          margin: '16px 0'
        }}>
          &ldquo;{service.testimonial}&rdquo;
        </p>
      )}
      
      {service.price && (
        <p style={{
          fontWeight: 'bold',
          color: '#1DA1F2',
          fontSize: '18px',
          marginBottom: '24px'
        }}>{service.price}</p>
      )}
      
      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: 'auto'
      }}>
        <Link 
          href={`/quote?service=${service.id}`}
          style={{
            flex: '1',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1DA1F2',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '50px',
            fontWeight: '500',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1a91da';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1DA1F2';
          }}
        >
          Request Quote
        </Link>
        <PayPalButton amount={service.price?.replace(/[^\d.]/g, '') || '0'} description={service.title} />
      </div>
    </div>
  )
}