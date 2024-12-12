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
      "Built a responsive portfolio website using Next.js to showcase video editing skills and projects.",
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
  {
    id: 3,
    title: "Node CLI",
    slug: "node-cli",
    description:
      "A browser-based Tic-Tac-Toe game supporting two-player functionality.",
    technologies: ["JavaScript (ES6)", "HTML", "CSS"],
    skillsDemonstrated: ["Game logic", "DOM manipulation", "Event handling"],
    projectLink: "https://example.com/tic-tac-toe",
    sourceCode: "https://github.com/username/tic-tac-toe",
    media: "https://example.com/tic-tac-toe-screenshot.png",
    challengesFaced: "Creating an AI that plays against the user.",
    futureImprovements: "Add score tracking and a difficulty level for AI.",
  },
];

export default project;
