import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 24px 80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Badge */}
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
            Professional Digital Services
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            color: '#14171a',
            marginBottom: '32px',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Elevate Your<br/>Digital Presence
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#657786',
            marginBottom: '48px',
            maxWidth: '800px',
            margin: '0 auto 48px',
            lineHeight: '1.7'
          }}>
            Expert web design, creative services, and technical infrastructure solutions
            for businesses that demand excellence.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '80px'
          }}>
            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#14171a',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(20, 23, 26, 0.3)'
              }}
            >
              View Services
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #14171a',
                color: '#14171a',
                padding: '16px 38px',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '16px',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Services Overview */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginTop: '80px',
            textAlign: 'left'
          }}>
            {/* Creative Services */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
              border: '1px solid #e1e8ed',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#14171a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                fontSize: '24px',
                color: 'white',
                fontWeight: 'bold'
              }}>
                C
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '24px',
                marginBottom: '12px',
                color: '#14171a',
                fontWeight: 'bold'
              }}>Creative Services</h3>
              <p style={{
                color: '#657786',
                lineHeight: '1.7',
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                Web design, branding, UI/UX, and digital marketing solutions that make your brand stand out.
              </p>
              <Link
                href="/services?category=creative"
                style={{
                  color: '#14171a',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Explore Creative →
              </Link>
            </div>

            {/* DevOps & Infrastructure */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
              border: '1px solid #e1e8ed',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#14171a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                fontSize: '24px',
                color: 'white',
                fontWeight: 'bold'
              }}>
                D
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '24px',
                marginBottom: '12px',
                color: '#14171a',
                fontWeight: 'bold'
              }}>Technical Infrastructure</h3>
              <p style={{
                color: '#657786',
                lineHeight: '1.7',
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                Cloud infrastructure, network design, cybersecurity, and disaster recovery for enterprise reliability.
              </p>
              <Link
                href="/services?category=devops"
                style={{
                  color: '#14171a',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Explore Infrastructure →
              </Link>
            </div>

            {/* Support Services */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
              border: '1px solid #e1e8ed',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#14171a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                fontSize: '24px',
                color: 'white',
                fontWeight: 'bold'
              }}>
                S
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '24px',
                marginBottom: '12px',
                color: '#14171a',
                fontWeight: 'bold'
              }}>Support & Consultation</h3>
              <p style={{
                color: '#657786',
                lineHeight: '1.7',
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                24/7 IT support, helpdesk services, and professional career consultation to keep you moving forward.
              </p>
              <Link
                href="/services?category=support"
                style={{
                  color: '#14171a',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Explore Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            color: '#14171a',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#657786',
            marginBottom: '40px',
            lineHeight: '1.7'
          }}>
            Let&apos;s discuss how we can help you achieve your goals with professional digital solutions.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#14171a',
              color: 'white',
              padding: '18px 40px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '16px',
              boxShadow: '0 4px 14px rgba(20, 23, 26, 0.3)'
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}