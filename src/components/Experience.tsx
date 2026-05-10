import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
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
  ];

  return (
    <section id="experience" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-[#3B82F6] mx-auto" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-8 backdrop-blur-sm hover:border-[#3B82F6]/50 transition-all"
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
                    <span className="text-[#3B82F6] mt-1.5">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
