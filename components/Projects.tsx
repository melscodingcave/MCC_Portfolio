'use client'

import { Github } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Projects() {
  const router = useRouter()

  const projects = [
    {
      title: 'League API',
      slug: 'league-api',
      description: 'REST API for billiards league management with handicap scoring validation, soft delete patterns, and computed standings. Containerized with Docker + PostgreSQL.',
      emoji: '🏆',
      tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Docker'],
      tests: '32 scenarios',
      framework: 'SpecFlow/Gherkin',
      github: 'https://github.com/melscodingcave/league-api'
    },
    {
      title: 'Break And Verify',
      slug: 'break-and-verify',
      description: 'BDD test suite for league-api with 32 passing Gherkin scenarios. Break down features, verify behavior, pocket quality.',
      emoji: '✅',
      tech: ['C#', 'SpecFlow', 'NUnit'],
      tests: '32 scenarios',
      framework: 'SpecFlow BDD',
      github: 'https://github.com/melscodingcave/break-and-verify'
    },
    {
      title: 'Rack Stats',
      slug: 'rack-stats',
      description: 'Tournament analytics pipeline for a simulated Florida billiards circuit. ETL data processing with interactive Streamlit dashboard. PyTest caught 2 real query bugs.',
      emoji: '📈',
      tech: ['Python', 'SQLAlchemy', 'Pandas', 'Streamlit', 'Plotly'],
      tests: '14 scenarios',
      framework: 'PyTest',
      github: 'https://github.com/melscodingcave/rack-stats'
    },
    {
      title: 'The Practice Log',
      slug: 'the-practice-log',
      description: 'AI-powered billiards practice tracker with shot logging, trend visualization, and Claude API coaching insights. Full CI/CD pipeline with GitHub Actions.',
      emoji: '🎱',
      tech: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Claude API'],
      tests: '16 unit tests',
      framework: 'Vitest',
      github: 'https://github.com/melscodingcave/the-practice-log'
    },
    {
      title: 'Cue QA',
      slug: 'cue-qa',
      description: 'End-to-end test suite for the-practice-log. Automated browser testing with Playwright ensuring quality before every deployment.',
      emoji: '🔬',
      tech: ['Playwright', 'TypeScript', 'GitHub Actions'],
      tests: '21 E2E scenarios',
      framework: 'Playwright',
      github: 'https://github.com/melscodingcave/cue-qa'
    },
    {
      title: 'Chalk It Up',
      slug: 'chalk-it-up',
      description: 'Cross-platform 9-Ball scorekeeper with AI-generated trash talk. Flutter widget testing ensures consistent behavior across iOS and Android.',
      emoji: '📱',
      tech: ['Flutter', 'Dart', 'Claude API'],
      tests: '12 scenarios',
      framework: 'Flutter Widget Tests',
      github: 'https://github.com/melscodingcave/chalk-it-up'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-[#3B82F6] mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Billiards-themed full-stack portfolio with <strong className="text-white">95 automated tests</strong> across 5 frameworks in 4 languages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="bg-[#1E3A5F]/20 border border-[#3B82F6]/30 rounded-lg p-6 hover:border-[#3B82F6] transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{project.emoji}</span>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-[#3B82F6] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 min-h-[4rem]">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-gray-400">{project.tests}</span>
                <span className="text-[#3B82F6]">{project.framework}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => router.push('/projects')}
            className="px-6 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors"
          >
            View All Projects →
          </button>
        </div>
      </div>
    </section >
  )
}