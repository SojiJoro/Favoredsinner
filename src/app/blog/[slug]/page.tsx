import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          {post.title}
        </h1>
        
        <p className="text-center text-deep-grey mb-8">
          {new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        
        <div className="flex justify-center gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm bg-light-grey px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-deep-grey leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-twitter-blue hover:opacity-80">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </div>
  )
}