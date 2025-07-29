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
      <body className="font-sans antialiased">
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="font-serif text-2xl text-charcoal hover:text-twitter-blue">
              Favored Sinner
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/gallery" className="hover:text-twitter-blue">Gallery</a>
              <a href="/services" className="hover:text-twitter-blue">Services</a>
              <a href="/blog" className="hover:text-twitter-blue">Blog</a>
              <a href="/about" className="hover:text-twitter-blue">About</a>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}