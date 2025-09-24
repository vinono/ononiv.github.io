import { getBlogPosts } from '@/lib/blog'
import BlogList from './BlogList'

export default function Blog() {
  const posts = getBlogPosts()

  return <BlogList posts={posts} />
}