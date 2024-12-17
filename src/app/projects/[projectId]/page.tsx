import project from "@/lib/project";
import Image from "next/image";
import { IoGlobeOutline } from "react-icons/io5";

export default function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  const projects = project.find((proj) => proj.slug === params.projectId);

  return (
    <main className="container flex flex-col justify-between min-h-screen py-5">
      <section>
        <h1 className="py-2 text-3xl font-semibold lg:text-4xl">
          👋 Hi! I'm Darwin
        </h1>
        <p className="lg:text-lg font-space">
          🧑‍💻 Data Analyst at{" "}
          <span className="px-2 bg-green-500">
            <a href="https://methodfi.com">Method</a>
          </span>
        </p>
        <p className="mt-2 text-sm lg:mt-5 lg:text-xl">
          A developer with interest in building full stack applications and
          setting up automations to improve productivity.
        </p>
        <div className="py-2 mt-5 border-t-2 border-gray-600 border-dotted lg:text-xl">
          <h3 className="my-5 font-semibold">{projects?.title}</h3>
          <a href={projects?.projectLink}>
            <IoGlobeOutline size={25} />
          </a>
          <p>{projects?.description}</p>
          <Image
            src={projects.media}
            width={600}
            height={600}
            alt="video-porfolio"
            className="my-3"></Image>
          <div className="my-3">
            <h5 className="mt-5 font-semibold">Technologies</h5>
            {projects?.technologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
          <div className="mb-5">
            <h5 className="font-semibold">Challenges Faced</h5>
            <p>{projects?.challengesFaced}</p>
          </div>
          <div>
            <h5 className="font-semibold">Future Improvements</h5>
            <p>{projects?.futureImprovements}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
