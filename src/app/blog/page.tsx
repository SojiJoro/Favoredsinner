import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/data/blog-posts'

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Blog Header */}
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
          Thoughts & Stories
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#657786',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Musings from a faceless creator
        </p>
      </section>
      
      {/* Blog Posts */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 24px 80px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}