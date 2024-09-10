export default function BlogDetails({ params }: { params: { projectId: string; blogsId: string } }) {
  return (
    <h1>
      Blog {params.blogsId} from Project {params.projectId}
    </h1>
  );
}
