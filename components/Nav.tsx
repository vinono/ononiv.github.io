import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="p-4 border-b">
      <div className="container mx-auto flex gap-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          首页
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">
          关于
        </Link>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          博客
        </Link>
      </div>
    </nav>
  )
}