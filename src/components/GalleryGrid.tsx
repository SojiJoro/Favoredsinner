'use client'
import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import { Artwork } from '@/data/gallery'

interface GalleryGridProps {
  artworks: Artwork[]
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(artwork)}
          >
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-serif text-lg">
              {artwork.title}
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <Lightbox artwork={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  )
}
