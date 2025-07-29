import Link from 'next/link'
import { BlogPost } from '@/data/blog-posts'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card">
      <h2 className="font-serif text-2xl mb-2">
        <Link href={`/blog/${post.slug}`} className="text-charcoal hover:text-twitter-blue transition-colors">
          {post.title}
        </Link>
      </h2>
      
      <p className="text-sm text-deep-grey mb-3">
        {new Date(post.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
      
      <p className="text-deep-grey mb-4">{post.excerpt}</p>
      
      <div className="flex gap-2 flex-wrap">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs bg-light-grey px-3 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  )
}