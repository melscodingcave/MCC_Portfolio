import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostFrontmatter {
    title: string
    slug: string
    category: string
    readTime: string
    date: string
    summary: string
    tags: string[]
}

export interface Post extends PostFrontmatter {
    content: string
}

export function getAllPosts(): PostFrontmatter[] {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
        .filter(name => name.endsWith('.mdx'))
        .map(fileName => {
            const filePath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(filePath, 'utf8')
            const { data } = matter(fileContents)
            return data as PostFrontmatter
        })

    return posts.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const filePath = path.join(postsDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        return { ...(data as PostFrontmatter), content }
    } catch (err) {
        console.error(`Failed to read post: ${slug}`, err)
        return null
    }
}