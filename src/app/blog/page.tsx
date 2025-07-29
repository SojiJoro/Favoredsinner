import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/data/blog-posts'

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          Thoughts & Stories
        </h1>
        <p className="text-xl text-center text-deep-grey mb-12">
          Musings from a faceless creator
        </p>
        
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}