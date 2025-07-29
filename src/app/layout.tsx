import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Favored Sinner - Surreal visuals. Bold designs.',
  description: 'No face, just craft. Creative services and surreal digital art.',
  keywords: 'surreal art, digital art, web design, creative services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif' }}>
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e1e8ed',
          zIndex: 50
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <a href="/" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              color: '#14171a',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Favored Sinner
            </a>
            
            <div style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center'
            }}>
              <a href="/about" style={{ color: '#657786', textDecoration: 'none' }}>About</a>
              <a href="/services" style={{ color: '#657786', textDecoration: 'none' }}>Services</a>
              <a href="/gallery" style={{ color: '#657786', textDecoration: 'none' }}>Gallery</a>
              <a href="/blog" style={{ color: '#657786', textDecoration: 'none' }}>Blog</a>
              <a href="/contact" style={{ color: '#657786', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        </nav>
        
        <main style={{ paddingTop: '73px', minHeight: '100vh' }}>
          {children}
        </main>
        
        <footer style={{
          backgroundColor: '#14171a',
          color: 'white',
          padding: '48px 0',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <p style={{ marginBottom: '8px' }}>© 2025 Favored Sinner</p>
            <p style={{ fontSize: '14px' }}>
              Contact: <a href="mailto:info@favoredsinner.com" style={{ color: '#1DA1F2', textDecoration: 'none' }}>info@favoredsinner.com</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}