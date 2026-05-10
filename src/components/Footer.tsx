export function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white">© 2026 Melanie Basso</span>
            <span className="text-[#3B82F6]">🎱</span>
          </div>

          <p className="text-gray-400 text-center md:text-right">
            Built with precision. Tested with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
