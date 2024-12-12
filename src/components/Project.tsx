import project from "@/lib/project";
import Link from "next/link";

export default function Project() {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-6">
        {project.map((item, index) => (
          <div
            key={index}
            className="inline-flex flex-row items-center justify-center p-5 mt-3 mr-3 border-2 border-gray-500 lg min-h-24 hover:border-green-500 hover:border-b-4 rounded-xl">
            <Link href={`/projects/${item.slug}`}>{item.title}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
