'use client'
import Link from 'next/link'
import StarRating from './StarRating'
import { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Get initials from service title (first letter of first two words)
  const getInitials = (title: string) => {
    const words = title.split(' ')
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase()
    return (words[0][0] + words[1][0]).toUpperCase()
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '0',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
      border: '1px solid #e1e8ed',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      e.currentTarget.style.borderColor = '#14171a';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
      e.currentTarget.style.borderColor = '#e1e8ed';
    }}>
      {/* Header */}
      <div style={{
        padding: '32px 32px 24px',
        borderBottom: '1px solid #e1e8ed'
      }}>
        {/* Icon box with initials */}
        <div style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#14171a',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          fontSize: '20px',
          color: 'white',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          {getInitials(service.title)}
        </div>

        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.5rem',
          marginBottom: '12px',
          color: '#14171a',
          fontWeight: 'bold',
          lineHeight: '1.3'
        }}>
          {service.title}
        </h3>

        <div style={{ marginBottom: '0' }}>
          <StarRating rating={service.rating} />
        </div>
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
          marginBottom: '24px',
          lineHeight: '1.7',
          fontSize: '15px'
        }}>
          {service.description}
        </p>

        {service.testimonial && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            borderLeft: '3px solid #14171a'
          }}>
            <p style={{
              fontStyle: 'italic',
              fontSize: '14px',
              color: '#14171a',
              margin: 0,
              lineHeight: '1.6'
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
            paddingBottom: '24px',
            borderBottom: '1px solid #e1e8ed'
          }}>
            <span style={{
              fontSize: '13px',
              color: '#657786',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Starting at
            </span>
            <span style={{
              fontWeight: 'bold',
              color: '#14171a',
              fontSize: '1.2rem',
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
            backgroundColor: '#14171a',
            color: 'white',
            padding: '14px 24px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(20, 23, 26, 0.2)',
            border: 'none',
            marginTop: 'auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 23, 26, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(20, 23, 26, 0.2)';
          }}
        >
          Request Quote
        </Link>
      </div>
    </div>
  )
}
