import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-6 items-center">
        <Link href="/" className="font-serif text-xl">
          Favored Sinner
        </Link>
        <div className="flex gap-4 ml-auto">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
