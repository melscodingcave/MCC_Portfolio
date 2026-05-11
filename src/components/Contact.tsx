import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mykobwyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0F1E33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#3B82F6] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
            Looking to collaborate on a project or discuss opportunities? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={20} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center">
                  Message sent! I'll get back to you soon. 🎱
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-[#1E3A5F]/30 border border-[#3B82F6]/20 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:melanie.basso@melscodingcave.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#3B82F6] transition-colors group"
                >
                  <div className="p-3 bg-[#0A1628] rounded-lg border border-white/10 group-hover:border-[#3B82F6] transition-colors flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <span className="break-all text-sm sm:text-base">melanie.basso@melscodingcave.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/melaniebasso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#3B82F6] transition-colors group"
                >
                  <div className="p-3 bg-[#0A1628] rounded-lg border border-white/10 group-hover:border-[#3B82F6] transition-colors flex-shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <span className="break-all text-sm sm:text-base">linkedin.com/in/melaniebasso</span>
                </a>

                <a
                  href="https://github.com/melscodingcave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#3B82F6] transition-colors group"
                >
                  <div className="p-3 bg-[#0A1628] rounded-lg border border-white/10 group-hover:border-[#3B82F6] transition-colors flex-shrink-0">
                    <Github size={20} />
                  </div>
                  <span className="break-all text-sm sm:text-base">github.com/melscodingcave</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E3A5F]/40 to-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl sm:text-3xl">🎱</span>
                <h3 className="text-lg sm:text-xl text-white">Let's Collaborate</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Whether you need test automation, full-stack development, or strategic technical guidance,
                I'm always interested in challenging projects that require precision and expertise.
              </p>
            </div>
            <a
              href="/Melanie_Basso_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
