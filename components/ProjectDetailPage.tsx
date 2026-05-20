'use client'

import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { projectDetails } from '../data/projectData'

export function ProjectDetailPage({ slug }: { slug: string }) {
    const router = useRouter()
    const project = projectDetails.find(p => p.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white text-2xl mb-4">Project not found</p>
                    <button
                        onClick={() => router.back()}
                        className="text-[#3B82F6] hover:underline"
                    >
                        Back to home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#0A1628]">
            {/* Hero */}
            <div className="bg-gradient-to-b from-[#1E3A5F]/40 to-[#0A1628] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl">{project.emoji}</span>
                        <div>
                            <h1 className="text-3xl sm:text-4xl text-white font-bold">
                                {project.title}
                            </h1>
                            <p className="text-[#3B82F6] text-lg mt-1">{project.tagline}</p>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg mt-6 max-w-3xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
                        >
                            <Github size={20} />
                            View on GitHub
                        </a>
                        <div className="flex items-center gap-2 px-6 py-3 border border-[#3B82F6]/40 text-gray-300 rounded-lg">
                            <span className="text-[#3B82F6] font-bold">{project.testCount}</span>
                            <span>·</span>
                            <span>{project.testFramework}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#1E3A5F]/20 border border-[#3B82F6]/20 rounded-lg p-6">
                        <h2 className="text-xl text-white font-bold mb-3">The Problem</h2>
                        <p className="text-gray-300">{project.problem}</p>
                    </div>
                    <div className="bg-[#1E3A5F]/20 border border-[#3B82F6]/20 rounded-lg p-6">
                        <h2 className="text-xl text-white font-bold mb-3">The Solution</h2>
                        <p className="text-gray-300">{project.solution}</p>
                    </div>
                </div>

                {/* Screenshots */}
                <div>
                    <h2 className="text-2xl text-white font-bold mb-6">Screenshots</h2>
                    <div className="space-y-6">
                        {project.screenshots.map((shot, i) => (
                            <div key={i} className="rounded-lg overflow-hidden border border-[#3B82F6]/20">
                                <img
                                    src={shot.src}
                                    alt={shot.alt}
                                    className="w-full"
                                />
                                <p className="text-gray-400 text-sm px-4 py-3 bg-[#1E3A5F]/20">
                                    {shot.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <h2 className="text-2xl text-white font-bold mb-6">Tech Stack</h2>
                    <div className="space-y-3">
                        {project.techStack.map((tech, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 bg-[#1E3A5F]/20 border border-[#3B82F6]/20 rounded-lg p-4"
                            >
                                <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm font-semibold whitespace-nowrap">
                                    {tech.name}
                                </span>
                                <p className="text-gray-300 text-sm pt-0.5">{tech.reason}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Engineering Decisions */}
                <div>
                    <h2 className="text-2xl text-white font-bold mb-6">
                        Key Engineering Decisions
                    </h2>
                    <div className="space-y-3">
                        {project.keyDecisions.map((decision, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 text-gray-300"
                            >
                                <span className="text-[#3B82F6] mt-1 flex-shrink-0">{'▸'}</span>
                                <p>{decision}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Project */}
                {project.relatedProject && (
                    <div className="bg-gradient-to-r from-[#1E3A5F]/40 to-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg p-6">
                        <p className="text-gray-400 text-sm mb-2">Related Project</p>
                        <button
                            onClick={() => router.push(`/projects/${project.relatedProject!.slug}`)}
                            className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors text-lg font-semibold"
                        >
                            <ExternalLink size={18} />
                            {project.relatedProject.title}
                        </button>
                    </div>
                )}
            </div>
            {/* Back to Top */}
            <div className="text-center pt-8">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-[#3B82F6] hover:text-blue-400 transition-colors text-sm"
                >
                    ↑ Back to Top
                </button>
            </div>
        </div>
    )
}