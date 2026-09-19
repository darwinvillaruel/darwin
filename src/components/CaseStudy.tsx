import Image from "next/image";
import { IoGlobeOutline, IoLogoGithub } from "react-icons/io5";
import type { CaseStudy as CaseStudyData } from "@/lib/project";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  media: string;
  projectLink?: string;
  sourceCode?: string;
  caseStudy: CaseStudyData;
};

function SectionHeading({ label }: { label: string }) {
  return (
    <h4 className="pb-1 mb-4 text-sm font-semibold tracking-wider text-gray-600 uppercase border-b-2 border-gray-600 border-dotted">
      {label}
    </h4>
  );
}

export default function CaseStudy({
  title,
  description,
  technologies,
  media,
  projectLink,
  sourceCode,
  caseStudy,
}: Props) {
  const {
    client,
    problem,
    features,
    architecture,
    hardProblems,
    outcome,
    nextSteps,
    mediaAlt,
  } = caseStudy;

  return (
    <article className="mt-5 space-y-12 text-base lg:text-lg">
      <header>
        <h3 className="text-2xl font-semibold lg:text-3xl">{title}</h3>
        <p className="mt-3 text-sm text-gray-600 lg:text-base">
          <span className="font-semibold">Client:</span> {client}
        </p>
        {(projectLink || sourceCode) && (
          <div className="flex gap-1 mt-3">
            {projectLink && (
              <a href={projectLink} aria-label="Live site">
                <IoGlobeOutline size={25} />
              </a>
            )}
            {sourceCode && (
              <a href={sourceCode} aria-label="Source code">
                <IoLogoGithub size={25} />
              </a>
            )}
          </div>
        )}
        <ul className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 text-xs border border-gray-500 rounded-full lg:text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </header>

      <section>
        <p className="max-w-4xl">{description}</p>
        <Image
          src={media}
          width={1600}
          height={720}
          alt={mediaAlt}
          className="w-full mt-6 border-2 border-gray-500 rounded-xl"
          priority
        />
      </section>

      <section>
        <SectionHeading label="The problem" />
        <p className="max-w-4xl">{problem}</p>
      </section>

      <section>
        <SectionHeading label="What I built" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-5 border-2 border-gray-500 rounded-xl hover:border-green-500">
              <h5 className="mb-2 font-semibold">{feature.title}</h5>
              <p className="text-sm lg:text-base">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading label="Architecture" />
        <p className="max-w-4xl mb-4">{architecture.caption}</p>
        {architecture.image && (
          <Image
            src={architecture.image}
            width={1600}
            height={720}
            alt={architecture.imageAlt ?? ""}
            className="w-full border-2 border-gray-500 rounded-xl"
          />
        )}
        <div className="grid gap-4 mt-6 md:grid-cols-2">
          {architecture.decisions.map((decision) => (
            <div key={decision.title}>
              <h5 className="mb-1 font-semibold">{decision.title}</h5>
              <p className="text-sm lg:text-base">{decision.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading label="Hard problems worth calling out" />
        <ol className="space-y-6">
          {hardProblems.map((problem, index) => (
            <li key={problem.title} className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 font-semibold bg-green-500 rounded-full shrink-0">
                {index + 1}
              </span>
              <div>
                <h5 className="mb-1 font-semibold">{problem.title}</h5>
                <p className="text-sm lg:text-base">{problem.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <SectionHeading label="Outcome" />
        <p className="max-w-4xl p-5 border-l-4 border-green-500 rounded-r-xl bg-green-500/10">
          {outcome}
        </p>
      </section>

      {nextSteps && (
        <section>
          <SectionHeading label="What I'd improve next" />
          <ul className="grid gap-4 md:grid-cols-2">
            {nextSteps.map((step) => (
              <li key={step.title}>
                <h5 className="mb-1 font-semibold">{step.title}</h5>
                <p className="text-sm lg:text-base">{step.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
