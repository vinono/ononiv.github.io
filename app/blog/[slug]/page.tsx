import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.date && (
            <p className="text-gray-600">{post.date}</p>
          )}
        </header>

        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}