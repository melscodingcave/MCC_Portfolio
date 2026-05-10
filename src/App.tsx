import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { BlogPage } from './components/BlogPage'
import { BlogPost } from './components/BlogPost'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Blog />
            <Contact />
          </>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  )
}