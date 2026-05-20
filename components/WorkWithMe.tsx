'use client'

import { ArrowLeft, Briefcase, Calendar, Download, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function WorkWithMe() {
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => e.preventDefault()
        document.addEventListener('contextmenu', handleContextMenu)
        return () => document.removeEventListener('contextmenu', handleContextMenu)
    }, [])

    const experiences = [
        {
            company: 'Pratt & Whitney',
            role: 'Software Engineer (Quality, Automation & Systems)',
            location: 'Jupiter, FL',
            period: 'Jan 2024 – Present',
            highlights: [
                'Modernized legacy Bash automation into scalable Python/PyTest framework',
                'Expanded test coverage from 117 to 600+ cases across mission-critical aerospace systems',
                'Automated system imaging and provisioning, reducing setup time from 4+ hours to under 30 minutes',
                'Built SQL validation tools for data integrity and system behavior verification',
                'Reduced new-hire ramp-up from 12 months to 90 days through documentation and standards'
            ]
        },
        {
            company: 'Net Health',
            role: 'Software Engineer (Quality & Automation)',
            location: 'Remote',
            period: 'Aug 2016 – Jan 2024',
            highlights: [
                'Subject Matter Expert across healthcare billing, claims, and clinical workflow products',
                'Developed automation using C#, SpecFlow, and Gherkin with reusable test libraries',
                'Performed advanced SQL-driven backend validation, defect analysis, and data correction',
                'Executed REST API testing with Swagger and validated microservices in Docker environments',
                'Mentored junior engineers on test design, debugging, SQL analysis, and automation practices'
            ]
        }
    ]

    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Python', 'C#/.NET', 'JavaScript', 'TypeScript', 'SQL', 'Dart/Flutter', 'Bash', 'VBA']
        },
        {
            title: 'Frontend & Mobile',
            skills: ['React', 'Vite', 'Tailwind CSS', 'Flutter', 'Streamlit', 'Bootstrap CSS']
        },
        {
            title: 'Backend & Data',
            skills: ['ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'SQLAlchemy', 'Pandas', 'PostgreSQL', 'MSSQL', 'SQLite']
        },
        {
            title: 'Testing & Automation',
            skills: ['Playwright', 'SpecFlow', 'Gherkin/BDD', 'PyTest', 'Vitest', 'Flutter Widget Tests', 'Swagger', 'Regression Testing', 'NUnit']
        },
        {
            title: 'DevOps & Tools',
            skills: ['Docker', 'GitHub Actions', 'Jira', 'Visual Studio', 'VS Code', 'Git', 'Azure']
        },
        {
            title: 'AI Integration',
            skills: ['Anthropic Claude API', 'Prompt Engineering', 'AI-Assisted Development', 'GitHub Copilot', 'ChatGPT', 'Gemini']
        }
    ]

    return (
        <div className="min-h-screen bg-[#0A1628]">
            {/* Hero */}
            <div className="bg-gradient-to-b from-[#1E3A5F]/40 to-[#0A1628] py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-[#3B82F6] hover:text-blue-400 transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>

                    <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4">
                        Work With Me
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mb-8">
                        9+ years of experience building, testing, and automating complex systems
                        across healthcare, aerospace, and enterprise environments.
                    </p>

                    <a
                        href="/Melanie_Basso_Resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* Experience */}
                <div className="select-none">
                    <h2 className="text-3xl text-white font-bold mb-8">
                        Professional Experience
                    </h2>
                    <div className="space-y-6">
                        {experiences.map((exp) => (
                            <div
                                key={exp.company}
                                className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-8 backdrop-blur-sm"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Briefcase className="text-[#3B82F6]" size={24} />
                                            <h3 className="text-2xl text-white">{exp.company}</h3>
                                        </div>
                                        <p className="text-xl text-[#3B82F6] mb-3">{exp.role}</p>
                                        <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {exp.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-[#3B82F6] mt-1.5">{'▸'}</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="select-none">
                    <h2 className="text-3xl text-white font-bold mb-8">
                        Skills & Technologies
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category) => (
                            <div
                                key={category.title}
                                className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6 backdrop-blur-sm"
                            >
                                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                                    <span className="text-[#3B82F6]">{'▸'}</span>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-[#0A1628] text-gray-300 rounded border border-white/10 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="select-none">
                    <h2 className="text-3xl text-white font-bold mb-8">Education</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6">
                            <p className="text-[#3B82F6] text-sm mb-1">Bachelor of Science</p>
                            <h3 className="text-white font-bold text-lg">Information Technology</h3>
                            <p className="text-gray-400">Purdue Global University</p>
                        </div>
                        <div className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6">
                            <p className="text-[#3B82F6] text-sm mb-1">Associate of Science</p>
                            <h3 className="text-white font-bold text-lg">Information Technology</h3>
                            <p className="text-gray-400">Indian River State College</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#1E3A5F]/40 to-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg p-8 text-center">
                    <h2 className="text-2xl text-white font-bold mb-3">
                        Ready to collaborate?
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Whether you need test automation, full-stack development, or strategic
                        technical guidance — let's talk.
                    </p>
                    <button
                        onClick={() => {
                            router.push('/#contact')
                        }}
                        className="px-8 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div >
    )
}