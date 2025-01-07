import project from "@/lib/project";
import Image from "next/image";
import { IoGlobeOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  const projects = project.find((proj) => proj.slug === params.projectId);

  if (!projects) {
    return (
      <main className="container flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-semibold text-red-500">
          No projects data available.
        </h1>
      </main>
    );
  }

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
          <h3 className="mt-5 mb-3 font-semibold">{projects?.title}</h3>
          <div className="flex gap-1 mb-3">
            <a href={projects?.projectLink}>
              <IoGlobeOutline size={25} />
            </a>
            <a href={projects?.sourceCode}>
              <IoLogoGithub size={25} />
            </a>
          </div>
          <div className="grid-cols-2 gap-2 md:grid my-7">
            <div>
              <p className="pr-1">{projects?.description}</p>
              <div className="lg:flex lg:gap-9">
                <Image
                  src={projects.media}
                  width={600}
                  height={600}
                  alt="project-media"
                  className="my-3 rounded-xl"></Image>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <h5 className="font-semibold">Technologies</h5>
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
          </div>
          <section className="flex flex-row justify-between">
            <Footer />
            <div className="self-end">
              <About />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
