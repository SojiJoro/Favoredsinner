import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #e8f5fe 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated orbs */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: '#1DA1F2',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: '0.2'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: '#1DA1F2',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: '0.2'
        }}></div>

        <div style={{
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            color: '#14171a',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Art like a dream. Tech like a machine.
          </h1>
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            color: '#657786',
            marginBottom: '24px'
          }}>
            I design, I deploy, I disturb comfort zones — with visuals, strategy, and code that all hit different.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: '#1DA1F2',
            fontWeight: '500',
            marginBottom: '48px'
          }}>
            <Link href="/gallery" style={{ textDecoration: 'none', color: '#1DA1F2' }}>
              Explore the work
            </Link>
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/gallery" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1DA1F2',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '50px',
                fontWeight: '500',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(29, 161, 242, 0.4)'
              }}
            >
              View Surreal Art
            </Link>
            <Link 
              href="/services" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #1DA1F2',
                color: '#1DA1F2',
                padding: '14px 30px',
                borderRadius: '50px',
                fontWeight: '500',
                textDecoration: 'none',
                backgroundColor: 'transparent'
              }}
            >
              Request a Service
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#fafbfc'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Digital Art Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e1e8ed'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 24px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #e8f5fe 0%, #1DA1F2 100%)',
              fontSize: '36px'
            }}>
              🎨
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              marginBottom: '12px',
              color: '#14171a'
            }}>Digital Art</h3>
            <p style={{
              color: '#657786',
              lineHeight: '1.6'
            }}>
              Surreal creations that challenge perception
            </p>
          </div>
          
          {/* Web Design Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e1e8ed'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 24px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #e8f5fe 0%, #1DA1F2 100%)',
              fontSize: '36px'
            }}>
              💻
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              marginBottom: '12px',
              color: '#14171a'
            }}>Web Design</h3>
            <p style={{
              color: '#657786',
              lineHeight: '1.6'
            }}>
              Clean, modern websites that tell your story
            </p>
          </div>
          
          {/* Digital Strategy Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e1e8ed'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 24px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #e8f5fe 0%, #1DA1F2 100%)',
              fontSize: '36px'
            }}>
              🚀
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              marginBottom: '12px',
              color: '#14171a'
            }}>Digital Strategy</h3>
            <p style={{
              color: '#657786',
              lineHeight: '1.6'
            }}>
              SEO, social media, and growth solutions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            color: '#14171a',
            marginBottom: '24px'
          }}>
            Ready to bring your vision to life?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#657786',
            marginBottom: '32px'
          }}>
            Let&apos;s create something extraordinary together.
          </p>
          <Link 
            href="/contact" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1DA1F2',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '50px',
              fontWeight: '500',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(29, 161, 242, 0.4)'
            }}
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}