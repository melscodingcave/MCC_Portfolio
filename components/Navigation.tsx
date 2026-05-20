'use client'  // ← very top of the file, before any imports

import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (pathname !== '/') {
      router.push('/')
      setTimeout(() => {
        document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="text-white">MB</span>
            <span className="ml-2 text-[#3B82F6]">🎱</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-[#3B82F6] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => router.push('/work-with-me')}
                className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors text-sm font-semibold"
              >
                Work With Me
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#3B82F6] transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setIsOpen(false)
                router.push('/work-with-me')
              }}
              className="block w-full text-left px-3 py-2 text-[#3B82F6] font-semibold hover:text-blue-400 transition-colors"
            >
              Work With Me
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}