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
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          Surreal Art Gallery
        </h1>
        <p className="text-xl text-center text-deep-grey mb-8">
          Visions from beyond the ordinary
        </p>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'all' ? 'bg-twitter-blue text-white' : 'bg-light-grey hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('dreams')}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'dreams' ? 'bg-twitter-blue text-white' : 'bg-light-grey hover:bg-gray-200'
            }`}
          >
            Dreams
          </button>
          <button
            onClick={() => setFilter('faces')}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'faces' ? 'bg-twitter-blue text-white' : 'bg-light-grey hover:bg-gray-200'
            }`}
          >
            Faces
          </button>
          <button
            onClick={() => setFilter('words')}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'words' ? 'bg-twitter-blue text-white' : 'bg-light-grey hover:bg-gray-200'
            }`}
          >
            Words
          </button>
        </div>
        
        <GalleryGrid artworks={filteredArtworks} />
      </section>
    </div>
  )
}