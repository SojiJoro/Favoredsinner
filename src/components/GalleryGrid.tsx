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
            onClick={() => setSelecte