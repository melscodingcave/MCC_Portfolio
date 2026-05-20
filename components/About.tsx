import { Code, TestTube, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0F1E33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-[#3B82F6] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#1E3A5F]/30 p-6 rounded-lg border border-[#3B82F6]/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-[#3B82F6]" size={24} />
              <h3 className="text-xl text-white">Cross-Domain Expertise</h3>
            </div>
            <p className="text-gray-300">
              9+ years developing and testing software across healthcare billing & claims, aerospace mission-critical systems, and enterprise applications. Deep knowledge of revenue cycle management, HL7, EDI, and data integrity validation.
            </p>
          </div>

          <div className="bg-[#1E3A5F]/30 p-6 rounded-lg border border-[#3B82F6]/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <TestTube className="text-[#3B82F6]" size={24} />
              <h3 className="text-xl text-white">Quality & Automation</h3>
            </div>
            <p className="text-gray-300">
              Expanded test coverage from 117 to 600+ cases at Pratt & Whitney. Built reusable automation frameworks in Python, C#, and TypeScript. Quality isn't just tested in — it's architected from the start.
            </p>
          </div>

          <div className="bg-[#1E3A5F]/30 p-6 rounded-lg border border-[#3B82F6]/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-[#3B82F6]" size={24} />
              <h3 className="text-xl text-white">AI-Assisted Development</h3>
            </div>
            <p className="text-gray-300">
              I use AI as a collaborator, not a ghostwriter. Guided prompts, domain expertise as a filter, and critical evaluation of every suggestion. AI accelerates the journey — I choose the destination.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[#1E3A5F]/40 to-[#0F1E33]/40 p-8 rounded-lg border border-[#3B82F6]/30 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎱</span>
              <div>
                <h3 className="text-2xl text-white mb-4">The Billiards Connection</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The precision, strategy, and patience required in billiards mirror my approach to software engineering. Every shot requires careful analysis, planning multiple moves ahead, and executing with precision — just like architecting a robust system. My portfolio projects are billiards-themed because the skills translate: pattern recognition, systematic problem-solving, and staying calm under pressure.
                </p>
                <p className="text-[#3B82F6] italic">
                  Fun fact: I own a 5' × 10' Diamond Pro-Am pool table with a perimeter light. Sometimes the best debugging happens on the felt.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1E3A5F]/40 to-[#0F1E33]/40 p-8 rounded-lg border border-[#3B82F6]/30 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎓</span>
              <div>
                <h3 className="text-2xl text-white mb-4">Education & Growth</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  <strong className="text-white">Bachelor of Science, Information Technology</strong><br />
                  Purdue Global University
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Associate of Science, Information Technology</strong><br />
                  Indian River State College
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
