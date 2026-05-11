import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { BlogPage } from './components/BlogPage'
import { BlogPost } from './components/BlogPost'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { Projects } from './components/Projects'
import { WorkWithMe } from './components/WorkWithMe'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Blog />
            <Contact />
          </>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
      </Routes>
      <Footer />
    </div>
  )
}