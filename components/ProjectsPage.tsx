import { projectDetails } from '@/data/projectData'
import { Github } from 'lucide-react'
import Link from 'next/link'

export function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#0A1628] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl text-white font-bold mb-4">All Projects</h1>
                    <div className="h-1 w-20 bg-[#3B82F6] mx-auto mb-4" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Billiards-themed full-stack portfolio with <strong className="text-white">95 automated tests</strong> across 5 frameworks in 4 languages.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectDetails.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="bg-[#1E3A5F]/20 border border-[#3B82F6]/30 rounded-lg p-6 hover:border-[#3B82F6] transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20 block"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-4xl">{project.emoji}</span>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-[#3B82F6] transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                            <h3 className="text-xl text-white mb-3">{project.title}</h3>
                            <p className="text-gray-300 mb-4 min-h-[4rem]">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className="text-gray-400">{project.testCount}</span>
                                <span className="text-[#3B82F6]">{project.testFramework}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}