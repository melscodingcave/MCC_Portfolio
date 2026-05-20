import { ProjectDetailPage } from "@/components/ProjectDetailPage"
import { projectDetails } from "@/data/projectData"

export async function generateStaticParams() {
    return projectDetails.map(project => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return <ProjectDetailPage slug={slug} />
}
