import { ArrowLeft, Clock } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export function BlogPage() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#0A1628] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => {
                        navigate('/')
                        setTimeout(() => {
                            document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
                        }, 100)
                    }}
                    className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors mb-12"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-4xl text-white font-bold mb-4">All Posts</h1>
                    <div className="h-1 w-20 bg-[#3B82F6] mx-auto mb-4" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Deep dives on test automation, AI-assisted development, and engineering philosophy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => navigate(`/blog/${post.slug}`)}
                            className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6 backdrop-blur-sm hover:border-[#3B82F6]/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-[#3B82F6]/20"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm">
                                    {post.category}
                                </span>
                            </div>
                            <h3 className="text-xl text-white mb-3">{post.title}</h3>
                            <p className="text-gray-300 mb-4 text-sm">{post.summary}</p>
                            <div className="flex items-center gap-4 text-gray-400 text-sm">
                                <div className="flex items-center gap-1">
                                    <Clock size={16} />
                                    <span>{post.readTime}</span>
                                </div>
                                <span>{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}