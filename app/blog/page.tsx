import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'

export default function Blog() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">博客</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600">No blog posts yet.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              {post.excerpt && (
                <p className="text-gray-700">{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}