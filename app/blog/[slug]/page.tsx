import { BlogPost } from "@/components/BlogPost"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) notFound()

    const mdxContent = <MDXRemote source={post!.content} />

    return <BlogPost post={post!} mdxContent={mdxContent} />
}
