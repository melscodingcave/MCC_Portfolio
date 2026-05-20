'use client'

import type { Post } from '@/lib/posts'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { GiscusComments } from './GiscusComments'

interface BlogPostProps {
    post: Post
    mdxContent: React.ReactNode
}

export function BlogPost({ post, mdxContent }: BlogPostProps) {
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors mb-8"
            >
                <ArrowLeft size={20} />
                Back to Blog
            </button>

            <div className="mb-8">
                <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm mb-4 inline-block">
                    {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl text-white font-bold mb-4">
                    {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                    <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                    </div>
                    <span>{post.date}</span>
                </div>
                <p className="text-gray-300 text-lg border-l-4 border-[#3B82F6] pl-4 italic">
                    {post.summary}
                </p>
            </div>

            <div className="h-px bg-[#3B82F6]/20 mb-8" />

            <div className="prose prose-invert prose-blue max-w-none">
                {mdxContent}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span
                            key={tag}
                            className="flex items-center gap-1 px-3 py-1 bg-[#1E3A5F]/40 text-gray-300 rounded-full text-sm"
                        >
                            <Tag size={12} />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <GiscusComments />

            <div className="text-center mt-8 pt-6">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-[#3B82F6] hover:text-blue-400 transition-colors text-sm"
                >
                    ↑ Back to Top
                </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>
            </div>
        </div>
    )
}