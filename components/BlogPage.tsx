'use client'

import type { PostFrontmatter } from '@/lib/posts'
import { ArrowLeft, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface BlogPageProps {
    posts: PostFrontmatter[]
}

export function BlogPage({ posts }: BlogPageProps) {
    const router = useRouter()
    const [activeTag, setActiveTag] = useState<string | null>(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const allTags = Array.from(
        new Set(posts.flatMap(post => post.tags))
    ).sort()

    const filteredPosts = activeTag
        ? posts.filter(post => post.tags.includes(activeTag))
        : posts

    return (
        <div className="min-h-screen bg-[#0A1628] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors mb-12"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>

                <div className="text-center mb-12">
                    <h1 className="text-4xl text-white font-bold mb-4">All Posts</h1>
                    <div className="h-1 w-20 bg-[#3B82F6] mx-auto mb-4" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Deep dives on test automation, AI-assisted development, and engineering philosophy.
                    </p>
                </div>

                {/* Tag Filter */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                    <button
                        onClick={() => setActiveTag(null)}
                        className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTag === null
                            ? 'bg-[#3B82F6] text-white'
                            : 'bg-[#1E3A5F]/40 text-gray-300 hover:text-[#3B82F6] border border-[#3B82F6]/20'
                            }`}
                    >
                        All
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTag === tag
                                ? 'bg-[#3B82F6] text-white'
                                : 'bg-[#1E3A5F]/40 text-gray-300 hover:text-[#3B82F6] border border-[#3B82F6]/20'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Post count */}
                <p className="text-gray-400 text-sm text-center mb-8">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                    {activeTag ? ` tagged "${activeTag}"` : ''}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
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
                            <p className="text-gray-300 mb-4 text-sm">{post.summary}</p>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 text-xs bg-[#0A1628] text-gray-400 rounded border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
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
            </div>
        </div>
    )
}