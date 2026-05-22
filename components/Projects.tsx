"use client"

import { Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "League API",
      slug: "league-api",
      description: "REST API for billiards league management with handicap scoring validation, soft delete patterns, and computed standings. Paired with Break & Verify — 32 BDD scenarios across Players, Matches, and Standings.",
      emoji: "🏆",
      tech: ["C#", "ASP.NET Core", "Entity Framework", "PostgreSQL", "Docker"],
      tests: "32 scenarios",
      framework: "SpecFlow/Gherkin",
      github: "https://github.com/melscodingcave/league-api"
    },
    {
      title: "The Practice Log",
      slug: "the-practice-log",
      description: "AI-powered billiards practice tracker with shot logging, trend visualization, and Claude API coaching insights. Paired with Cue QA — 21 E2E + 16 unit tests with GitHub Actions CI.",
      emoji: "🎱",
      tech: ["React", "TypeScript", "Tailwind", "Vite", "Claude API"],
      tests: "16 unit + 21 E2E",
      framework: "Vitest + Playwright",
      github: "https://github.com/melscodingcave/the-practice-log"
    },
    {
      title: "Rack Stats",
      slug: "rack-stats",
      description: "Tournament analytics pipeline for a simulated Florida billiards circuit. ETL data processing with interactive Streamlit dashboard. 14 PyTest scenarios caught 2 real query bugs during development.",
      emoji: "📈",
      tech: ["Python", "SQLAlchemy", "Pandas", "Streamlit", "Plotly"],
      tests: "14 scenarios",
      framework: "PyTest",
      github: "https://github.com/melscodingcave/rack-stats"
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
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="bg-[#1E3A5F]/20 border border-[#3B82F6]/30 rounded-lg p-6 hover:border-[#3B82F6] transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20 block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{project.emoji}</span>
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
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
