import type { Metadata } from 'next'
import Link from 'next/link'
import Analytics from '@/components/Analytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'Favored Sinner - Art like a dream, tech like a machine',
  description:
    'Favored Sinner blends surreal digital art with DevOps, web design, storytelling, and strategy. One creative mind, many bold services. Explore the strange, the smart, and the intentional.',
  keywords: 'surreal art, digital art, web design, devops, strategy, creative services, cloud infrastructure, cybersecurity, branding',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Favored Sinner - Professional Digital Services',
    description: 'Expert web design, creative services, and technical infrastructure solutions for businesses that demand excellence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Favored Sinner',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Favored Sinner - Professional Digital Services',
    description: 'Expert web design, creative services, and technical infrastructure solutions for businesses that demand excellence.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Analytics />
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
          padding: '60px 0 24px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            {/* Footer Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '48px',
              marginBottom: '48px',
              textAlign: 'left'
            }}>
              {/* Brand Column */}
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px',
                  marginBottom: '16px',
                  fontWeight: 'bold'
                }}>
                  Favored Sinner
                </h3>
                <p style={{
                  color: '#9ca3af',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Art like a dream, tech like a machine. Professional digital services blending creativity with technical excellence.
                </p>
                <a
                  href="mailto:info@favoredsinner.com"
                  style={{
                    color: '#1DA1F2',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  info@favoredsinner.com
                </a>
              </div>

              {/* Services Column */}
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  Services
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { label: 'Web Design & Development', href: '/services?category=creative' },
                    { label: 'Graphics & Branding', href: '/services?category=creative' },
                    { label: 'Cloud Infrastructure', href: '/services?category=devops' },
                    { label: 'Cybersecurity', href: '/services?category=devops' },
                    { label: 'IT Support', href: '/services?category=support' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '8px' }}>
                      <Link
                        href={item.href}
                        style={{
                          color: '#9ca3af',
                          textDecoration: 'none',
                          fontSize: '14px',
                          transition: 'color 0.3s'
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Column */}
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  Quick Links
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { label: 'About', href: '/about' },
                    { label: 'All Services', href: '/services' },
                    { label: 'Blog', href: '/blog' },
                    { label: 'Contact', href: '/contact' },
                    { label: 'Request Quote', href: '/quote' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '8px' }}>
                      <Link
                        href={item.href}
                        style={{
                          color: '#9ca3af',
                          textDecoration: 'none',
                          fontSize: '14px',
                          transition: 'color 0.3s'
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social & Legal Column */}
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  Connect
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '24px'
                }}>
                  <a
                    href="https://twitter.com/favoredsinner"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s'
                    }}
                  >
                    Twitter
                  </a>
                  <a
                    href="https://instagram.com/favoredsinner"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s'
                    }}
                  >
                    Instagram
                  </a>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <Link
                    href="/privacy"
                    style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s'
                    }}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s'
                    }}
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
              borderTop: '1px solid #2d3748',
              paddingTop: '24px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '14px',
                color: '#657786',
                marginBottom: '8px'
              }}>
                © {new Date().getFullYear()} Favored Sinner. All rights reserved.
              </p>
              <p style={{
                fontSize: '13px',
                color: '#657786',
                fontStyle: 'italic'
              }}>
                Built and run by a designer who writes false memoirs and a DevOps lead who sleeps next to his SSH keys.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}