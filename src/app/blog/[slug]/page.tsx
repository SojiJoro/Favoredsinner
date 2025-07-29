import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Article Header */}
      <div style={{
        background: 'linear-gradient(to bottom, #e8f5fe 0%, #fafbfc 100%)',
        padding: '80px 0 60px'
      }}>
        <article style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            color: '#14171a',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            {post.title}
          </h1>
          
          <p style={{
            textAlign: 'center',
            color: '#657786',
            marginBottom: '24px',
            fontSize: '16px'
          }}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            <span style={{ margin: '0 16px', color: '#e1e8ed' }}>•</span>
            {Math.ceil(post.content.split(' ').length / 200)} min read
            <span style={{ margin: '0 16px', color: '#e1e8ed' }}>•</span>
            {post.category}
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                style={{
                  fontSize: '14px',
                  backgroundColor: 'white',
                  color: '#1DA1F2',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontWeight: '500',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </div>
      
      {/* Article Content */}
      <article style={{
        maxWidth: '800px',
        margin: '-40px auto 0',
        padding: '0 24px 80px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '60px',
          boxShadow: '0 8px 24px rgba(29, 161, 242, 0.08)',
          border: '1px solid #e1e8ed'
        }}>
          <div style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#14171a'
          }}>
            {/* First paragraph - larger font */}
            {post.content.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                style={{
                  marginBottom: '32px',
                  color: index === 0 ? '#14171a' : '#657786',
                  fontSize: index === 0 ? '20px' : '18px',
                  fontWeight: index === 0 ? '500' : '400',
                  lineHeight: '1.8'
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Author signature */}
          <div style={{
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '2px solid #e8f5fe',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              color: '#1DA1F2',
              fontStyle: 'italic',
              marginBottom: '8px'
            }}>
              — Favored Sinner
            </p>
            <p style={{
              fontSize: '14px',
              color: '#657786'
            }}>
              Anonymous creator of surreal visions
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <div style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <Link 
            href="/blog" 
            style={{
              color: '#1DA1F2',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            ← Back to all posts
          </Link>
          
          {/* Share buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px', color: '#657786' }}>Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://favoredsinner.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#1DA1F2',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Twitter
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://favoredsinner.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#1DA1F2',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Related posts suggestion */}
        <div style={{
          marginTop: '60px',
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center',
          border: '1px solid #e1e8ed'
        }}>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '24px',
            color: '#14171a',
            marginBottom: '16px'
          }}>
            Enjoyed this read?
          </h3>
          <p style={{
            color: '#657786',
            marginBottom: '24px'
          }}>
            Explore more thoughts and stories from the collection
          </p>
          <Link 
            href="/blog" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1DA1F2',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '50px',
              fontWeight: '500',
              textDecoration: 'none',
              fontSize: '16px',
              boxShadow: '0 4px 14px rgba(29, 161, 242, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            View All Posts
          </Link>
        </div>
      </article>
    </div>
  )
}