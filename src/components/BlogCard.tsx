import Link from 'next/link'
import { BlogPost } from '@/data/blog-posts'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e1e8ed',
      transition: 'all 0.3s ease'
    }}>
      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '28px',
        marginBottom: '12px',
        lineHeight: '1.3'
      }}>
        <Link 
          href={`/blog/${post.slug}`}
          style={{
            color: '#14171a',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
        >
          {post.title}
        </Link>
      </h2>
      
      <p style={{
        fontSize: '14px',
        color: '#657786',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <span>{new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
        <span style={{ color: '#e1e8ed' }}>•</span>
        <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
        <span style={{ color: '#e1e8ed' }}>•</span>
        <span>{post.category}</span>
      </p>
      
      <p style={{
        color: '#657786',
        marginBottom: '20px',
        lineHeight: '1.7',
        fontSize: '16px'
      }}>
        {post.excerpt}
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              style={{
                fontSize: '12px',
                backgroundColor: '#e8f5fe',
                color: '#1DA1F2',
                padding: '6px 16px',
                borderRadius: '50px',
                fontWeight: '500'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <Link 
          href={`/blog/${post.slug}`}
          style={{
            color: '#1DA1F2',
            textDecoration: 'none',
            fontWeight: '500',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'gap 0.3s ease'
          }}
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}