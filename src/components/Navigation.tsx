'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center relative">
        <Link href="/" className="font-serif text-xl">
          Favored Sinner
        </Link>

        <button
          className="ml-auto md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div
          className={`absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-md flex-col ml-0 ${open ? 'flex' : 'hidden'} md:static md:flex md:flex-row md:gap-4 md:border-none md:shadow-none md:ml-auto`}
        >
          <Link href="/about" className="p-4 md:p-0" onClick={closeMenu}>About</Link>
          <Link href="/services" className="p-4 md:p-0" onClick={closeMenu}>Services</Link>
          <Link href="/gallery" className="p-4 md:p-0" onClick={closeMenu}>Gallery</Link>
          <Link href="/blog" className="p-4 md:p-0" onClick={closeMenu}>Blog</Link>
          <Link href="/contact" className="p-4 md:p-0" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
