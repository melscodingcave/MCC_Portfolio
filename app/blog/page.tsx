import { BlogPage } from '@/components/BlogPage'
import { getAllPosts } from '@/lib/posts'

export default function BlogPageRoute() {
    const posts = getAllPosts()
    return <BlogPage posts={posts} />
}