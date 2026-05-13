import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import { GiscusComments } from './GiscusComments'

export function BlogPost() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white text-2xl mb-4">Post not found</p>
                    <button
                        onClick={() => navigate('/')}
                        className="text-[#3B82F6] hover:underline"
                    >
                        Back to home
                    </button>
                </div>
            </div>
        )
    }

    // Convert markdown-like content to paragraphs
    const renderContent = (content: string) => {
    return content.trim().split('\n').map((line, i) => {
        if (line.trim().startsWith('## ')) {
            return (
                <h2 key={i} className="text-2xl text-white font-bold mt-8 mb-4">
                    {line.trim().replace('## ', '')}
                </h2>
            )
        }
        if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
            return (
                <p key={i} className="text-white font-semibold mb-3">
                    {line.replace(/\*\*/g, '')}
                </p>
            )
        }
        if (line.trim().startsWith('- ')) {
            const bulletText = line.trim().replace(/^- /, '')
            const parts = bulletText.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g)
            return (
                <li key={i} className="text-gray-300 ml-6 mb-2 list-disc">
                    {parts.map((part, j) => {
                        if (part.match(/^\[.*?\]\(.*?\)$/)) {
                            const text = part.match(/\[(.*?)\]/)?.[1] || ''
                            const url = part.match(/\((.*?)\)/)?.[1] || ''
                            return (
                                <a key={j} href={url} target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">
                                    {text}
                                </a>
                            )
                        }
                        if (part.startsWith('**') && part.endsWith('**'))
                            return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
                        if (part.startsWith('*') && part.endsWith('*'))
                            return <em key={j} className="italic">{part.slice(1, -1)}</em>
                        return part
                    })}
                </li>
            )
        }
        if (line.trim() === '') {
            return <br key={i} />
        }
        const parts = line.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g)
        return (
            <p key={i} className="text-gray-300 mb-4 leading-relaxed">
                {parts.map((part, j) => {
                    if (part.match(/^\[.*?\]\(.*?\)$/)) {
                        const text = part.match(/\[(.*?)\]/)?.[1] || ''
                        const url = part.match(/\((.*?)\)/)?.[1] || ''
                        return (
                            <a key={j} href={url} target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">
                                {text}
                            </a>
                        )
                    }
                    if (part.startsWith('**') && part.endsWith('**'))
                        return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
                    if (part.startsWith('*') && part.endsWith('*'))
                        return <em key={j} className="italic">{part.slice(1, -1)}</em>
                    return part
                })}
            </p>
        )
    })
}

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
            <button
                onClick={() => navigate(-1)}
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

            <div className="prose-content">
                {renderContent(post.content)}
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
            <div className="mt-8 pt-6 border-t border-white/10">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>
            </div>
        </div>
    )
}
