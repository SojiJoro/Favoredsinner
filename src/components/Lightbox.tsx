'use client'
import Image from 'next/image'
import { Artwork } from '@/data/gallery'

interface LightboxProps {
  artwork: Artwork
  onClose: () => void
}

export default function Lightbox({ artwork, onClose }: LightboxProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-square">
        <Image src={artwork.imageUrl} alt={artwork.title} fill className="object-contain" />
      </div>
    </div>
  )
}
