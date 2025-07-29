'use client'
import { useState } from 'react'
import GalleryGrid from '@/components/GalleryGrid'
import { artworks } from '@/data/gallery'

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all')
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Gallery Header */}
      <section style={{
        background: 'linear-gradient(to bottom, #e8f5fe 0%, #fafbfc 100%)',
        padding: '80px 0 40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'bold',
          color: '#14171a',
          marginBottom: '16px'
        }}>
          Surreal Art Gallery
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#657786',
          marginBottom: '48px'
        }}>
          Visions from beyond the ordinary
        </p>
        
        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '12px 28px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: filter === 'all' ? '#1DA1F2' : 'white',
              color: filter === 'all' ? 'white' : '#657786',
              boxShadow: filter === 'all' ? '0 4px 14px rgba(29, 161, 242, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
          >
            All
          </button>
          <button
            onClick={() => setFilter('dreams')}
            style={{
              padding: '12px 28px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: filter === 'dreams' ? '#1DA1F2' : 'white',
              color: filter === 'dreams' ? 'white' : '#657786',
              boxShadow: filter === 'dreams' ? '0 4px 14px rgba(29, 161, 242, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
          >
            Dreams
          </button>
          <button
            onClick={() => setFilter('faces')}
            style={{
              padding: '12px 28px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: filter === 'faces' ? '#1DA1F2' : 'white',
              color: filter === 'faces' ? 'white' : '#657786',
              boxShadow: filter === 'faces' ? '0 4px 14px rgba(29, 161, 242, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
          >
            Faces
          </button>
          <button
            onClick={() => setFilter('words')}
            style={{
              padding: '12px 28px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: filter === 'words' ? '#1DA1F2' : 'white',
              color: filter === 'words' ? 'white' : '#657786',
              boxShadow: filter === 'words' ? '0 4px 14px rgba(29, 161, 242, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
          >
            Words
          </button>
        </div>
      </section>
      
      {/* Gallery Grid Container */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 80px'
      }}>
        <GalleryGrid artworks={filteredArtworks} />
      </section>
    </div>
  )
}