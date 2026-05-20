import { About } from '@/components/About'
import { Blog } from '@/components/Blog'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog posts={posts} />
      <Contact />
    </>
  )
}