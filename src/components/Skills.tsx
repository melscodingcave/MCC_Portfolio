export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        'Python', 'C#/.NET', 'JavaScript', 'TypeScript', 'SQL', 'Dart/Flutter', 'Bash', 'VBA'
      ]
    },
    {
      title: 'Frontend & Mobile',
      skills: [
        'React', 'Vite', 'Tailwind CSS', 'Flutter', 'Streamlit'
      ]
    },
    {
      title: 'Backend & Data',
      skills: [
        'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'SQLAlchemy', 'Pandas', 'PostgreSQL', 'MSSQL', 'SQLite'
      ]
    },
    {
      title: 'Testing & Automation',
      skills: [
        'Playwright', 'SpecFlow', 'Gherkin/BDD', 'PyTest', 'Vitest', 'Flutter Widget Tests', 'Swagger', 'Regression Testing'
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Docker', 'GitHub Actions', 'Jira', 'Visual Studio', 'VS Code', 'Git'
      ]
    },
    {
      title: 'AI Integration',
      skills: [
        'Anthropic Claude API', 'Prompt Engineering', 'AI-Assisted Development', 'GitHub Copilot'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0F1E33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-[#3B82F6] mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit built over 9 years of solving complex engineering challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <span className="text-[#3B82F6]">▸</span>
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

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#1E3A5F]/40 to-[#3B82F6]/20 rounded-lg border border-[#3B82F6]/30">
            <span className="text-2xl">🎯</span>
            <p className="text-gray-300">
              <span className="text-[#3B82F6]">Continuous learner</span> — Always adding new tools to the rack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
