"use client"

import type { PostFrontmatter } from "@/lib/posts"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

export function Blog({ posts }: { posts: PostFrontmatter[] }) {
  return (
    <section id="blog" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Blog</h2>
          <div className="h-1 w-20 bg-[#3B82F6] mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Deep dives on test automation, AI-assisted development, and engineering philosophy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[...posts].slice(0, 4).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6 backdrop-blur-sm hover:border-[#3B82F6]/50 transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20 block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl text-white mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="px-6 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors inline-block"
          >
            View All Posts
          </Link>
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1E3A5F]/40 to-[#3B82F6]/20 rounded-lg border border-[#3B82F6]/30">
            <Calendar className="text-[#3B82F6]" size={24} />
            <p className="text-gray-300">
              Follow me on <a href="https://linkedin.com/in/melaniebasso" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">LinkedIn</a> for updates
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
