# Vinono Blog - Next.js 15

A modern personal blog built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 📝 Markdown blog posts with gray-matter
- 🔍 SEO optimized
- 📱 Responsive design
- 🚀 Static site generation
- 🚢 GitHub Pages deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── content/posts/    # Markdown blog posts
├── lib/              # Utility functions
└── public/           # Static assets
```

## Deployment

The site automatically deploys to GitHub Pages on push to main branch.

## Writing Blog Posts

Create `.md` files in `content/posts/` with frontmatter:

```markdown
---
title: 'Post Title'
date: '2025-01-01'
excerpt: 'Brief description'
---

Your content here...
```