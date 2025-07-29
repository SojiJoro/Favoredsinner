import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Favored Sinner - Art like a dream, tech like a machine',
  description:
    'Favored Sinner blends surreal digital art with DevOps, web design, storytelling, and strategy. One creative mind, many bold services. Explore the strange, the smart, and the intentional.',
  keywords: 'surreal art, digital art, web design, devops, strategy, creative services',
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
            <Link
              href="/"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '24px',
                color: '#14171a',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Favored Sinner
            </Link>
            
            <div style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center'
            }}>
              <Link href="/about" style={{ color: '#657786', textDecoration: 'none' }}>About</Link>
              <Link href="/services" style={{ color: '#657786', textDecoration: 'none' }}>Services</Link>
              <Link href="/gallery" style={{ color: '#657786', textDecoration: 'none' }}>Gallery</Link>
              <Link href="/blog" style={{ color: '#657786', textDecoration: 'none' }}>Blog</Link>
              <Link href="/contact" style={{ color: '#657786', textDecoration: 'none' }}>Contact</Link>
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
            <p style={{ fontSize: '14px', marginTop: '16px', color: '#657786' }}>
              Built and run by a designer who writes false memoirs and a DevOps lead who sleeps next to his SSH keys.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}