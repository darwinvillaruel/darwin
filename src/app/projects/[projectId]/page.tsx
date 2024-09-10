export default function ProjectDetails({ params }: { params: { projectId: string } }) {
  return <h1>Project Details {params.projectId}</h1>;
}
