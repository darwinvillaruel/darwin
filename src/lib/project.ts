type Projects = {
  title: string;
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
    title: "Tic-Tac-Toe Game",
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
