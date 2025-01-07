type Projects = {
  id: number;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  skillsDemonstrated: string[];
  projectLink: string;
  sourceCode: string;
  media: string;
  challengesFaced: string;
  futureImprovements: string;
};

const project: Projects[] = [
  {
    id: 1,
    title: "Video Editor Portfolio",
    slug: "editor-portfolio",
    description:
      "Built a responsive portfolio website using Next.js for my video editor friend that highlights his video editing skills and current projects.",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Node.js",
      "Cloudinary API",
    ],
    skillsDemonstrated: [
      "SSR/SSG in Next.js",
      "API integration",
      "Responsive design",
      "Performance optimization",
    ],
    projectLink: "https://marcusgo.vercel.app/",
    sourceCode: "https://github.com/darwinvillaruel/video-editor",
    media: "/video_portfolio.png",
    challengesFaced:
      "Optimizing video files for fast loading and seamless playback across different devices.",
    futureImprovements:
      "Add a CMS for easier project management and a custom video player with advanced controls.",
  },
  {
    id: 2,
    title: "PrepMate",
    slug: "exam-app",
    description:
      "A comprehensive, user-friendly web application designed to help aspiring professionals prepare effectively for licensure exams.",
    technologies: ["React", "Tailwind", "APIs", "Postgres"],
    skillsDemonstrated: [
      "Fisher-Yates algorithm",
      "Route handling",
      "API integration",
    ],
    projectLink: "https://reviewletapp.surge.sh/",
    sourceCode: "https://github.com/darwinvillaruel/let-review-app",
    media: "/exam_app.png",
    challengesFaced: "Routing the correct examination route per subjects.",
    futureImprovements: "Add reviewers for different licensure examination.",
  },
];

export default project;
