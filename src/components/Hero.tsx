export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A1628] to-[#1E3A5F] relative overflow-hidden">
      {/* Subtle billiards felt texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)`
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-12 bg-[#3B82F6]" />
            <span className="text-4xl">🎱</span>
            <div className="h-1 w-12 bg-[#3B82F6]" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            Melanie Basso
          </h1>

          <p className="text-xl sm:text-2xl text-[#3B82F6] max-w-3xl mx-auto">
            Software Engineer | Quality, Automation & Full-Stack Development
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            9+ years building and testing complex systems across healthcare, aerospace, and enterprise environments.
            Precision, strategy, and quality — on the table and in the code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6]/10 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/Melanie_Basso_Resume.pdf"
              download
              className="px-8 py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
