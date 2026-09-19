type Section = { title: string; body: string };

type CaseStudy = {
  client: string;
  mediaAlt: string;
  problem: string;
  features: Section[];
  architecture: {
    image?: string;
    imageAlt?: string;
    caption: string;
    decisions: Section[];
  };
  hardProblems: Section[];
  outcome: string;
  nextSteps?: Section[];
};

type Projects = {
  id: number;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  skillsDemonstrated: string[];
  projectLink?: string;
  sourceCode?: string;
  media: string;
  challengesFaced?: string;
  futureImprovements?: string;
  caseStudy?: CaseStudy;
};

const project: Projects[] = [
  {
    id: 1,
    title: "Building a Multi-Country P&L Dashboard for a Lead Marketing Agency",
    slug: "multi-country-pl-dashboard",
    description:
      "Built a live dashboard that shows a marketing agency's profit and loss across 5 countries, in one place. Before this, the team had to manually combine data from a CRM, several ad platforms, and currency spreadsheets. Now they can see leads, spend, revenue, and margin per campaign, track commissions per media buyer, and view company-wide reports — all updated automatically. I also fixed a vendor bug that recorded leads in the wrong timezone, by building a tool that scrapes the correct numbers automatically. Built with Next.js and TypeScript.",
    technologies: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Hosted key-value store",
      "Playwright",
      "GitHub Actions",
      "Vercel (hosting + cron)",
      "Signed-cookie session auth",
      "Live FX-rate API",
    ],
    skillsDemonstrated: [
      "Full-stack Next.js",
      "Caching & request de-duplication",
      "Browser automation",
      "Timezone & DST handling",
      "Role-based data redaction",
    ],
    media: "/landing_page_proj_1.png",
    caseStudy: {
      mediaAlt:
        "Campaigns view of the P&L dashboard, showing per-campaign leads, revenue, spend, ROI and margin for Australia",
      client:
        "A lead-generation / performance-marketing agency running paid-media campaigns across Australia, New Zealand, the US, UK, and Canada.",
      problem:
        'The client buys leads from a third-party lead-delivery CRM and spends on multiple ad platforms (Meta, plus native and search ad networks) to generate them. Knowing whether a campaign was profitable meant manually cross-referencing exports from the CRM, each ad platform\'s own dashboard, and a spreadsheet of currency conversions — separately, per country, after the fact. There was no single place to see revenue, spend, and margin together, no way to attribute performance to individual media buyers, and no reliable way to reason about numbers across timezones when "today" means something different in Sydney, London, and Los Angeles at the same moment.',
      features: [
        {
          title: "Campaigns view",
          body: "Per-campaign leads, revenue, spend, net revenue, ROI, and margin, with per-country tabs, multi-select supplier filtering, campaign search, a custom date-range picker, and CSV export.",
        },
        {
          title: "Media Buyer P&L",
          body: "Each buyer sees their own assigned campaigns with revenue, margin, and commission (from an individually configured rate), plus a month-to-date Total Margin that's tracked independently of the table's date filter.",
        },
        {
          title: "Insight page",
          body: "A cross-country analytics view for leadership: stat tiles, geography and supplier-mix breakdowns, campaign rankings, automatic flags for campaigns losing money, and period-over-period comparisons.",
        },
        {
          title: "Cache diagnostics",
          body: "Shows each region's current local time next to its cached data, so the team can tell at a glance whether a number is fresh or stale.",
        },
        {
          title: "Role-based views",
          body: "Admins, media buyers, and a third role that can see leads and spend but never revenue — or anything revenue-derived — so cost-side visibility doesn't leak margin.",
        },
      ],
      architecture: {
        image: "/workflow_proj_1.png",
        imageAlt:
          "Data flow diagram: external sources feed scheduled ingestion and caching, which feed the server-rendered dashboard and role-based access layer",
        caption:
          "A single Next.js deployment on Vercel — API routes and UI in one codebase, with no separate backend service.",
        decisions: [
          {
            title: "Dual-mode persistence",
            body: "Locally, data lives in a flat JSON file for fast iteration; in production the same code path reads and writes a hosted key-value store, selected by environment. Production seeds itself from the committed file on first deploy, so there's no manual migration.",
          },
          {
            title: "Multi-layer caching with de-duplication",
            body: "The lead-delivery CRM's API is slow and easy to over-call, so reads go through an in-memory cache backed by a persistent store. In-flight requests are de-duplicated, so concurrent page loads collapse into a single upstream call.",
          },
          {
            title: "Scheduled regional refresh",
            body: "Spend and lead data are prefetched on a cron schedule timed to each region's local midnight. FX rates refresh daily from a live API, with a cached-then-static fallback chain if the live source is unavailable.",
          },
          {
            title: "Browser-automation correction pipeline",
            body: "The CRM's REST API buckets every lead by the account's home timezone, regardless of the campaign's country — a vendor limitation with no API-level fix. A scheduled headless-browser job logs into the vendor's web reporting UI (which does apply per-campaign timezones), scrapes the corrected numbers, and the app overlays them on the raw API data.",
          },
        ],
      },
      hardProblems: [
        {
          title: "Timezone-correct date boundaries, DST included",
          body: "\"This week's numbers\" has to mean the same thing whether or not a country is observing daylight saving, and a range spanning a DST transition can't silently be off by an hour. Date-boundary logic resolves each region's actual local calendar day rather than shifting a UTC timestamp by a fixed offset — the shortcut that breaks twice a year.",
        },
        {
          title: "A race condition in tab switching",
          body: "Users could click through the five country tabs faster than each tab's data loaded, so a slow response for a tab they'd left could overwrite fresh data for the one they were on. Fixed with a per-request token: each fetch is stamped when issued, and a response is applied only if its token still matches the selected tab.",
        },
        {
          title: "Server-enforced data redaction",
          body: "Profit, ROI, and margin are all derived from revenue, and margin plus visible spend is enough to back-calculate revenue. So the whole cluster of derived fields is treated as one redaction unit and enforced in the API layer itself — the restriction holds regardless of what the frontend renders.",
        },
      ],
      outcome:
        'The team went from reconciling four separate data sources by hand, after the fact, to one live dashboard that answers "are we profitable, where, and on what" in real time — with per-buyer commission visibility built in and a scraping pipeline quietly working around a vendor bug that would otherwise have made every non-home-timezone number wrong.',
    },
  },
  {
    id: 3,
    title: "Building a B2B Lead Management System",
    slug: "b2b-lead-management-system",
    description:
      "Built a lead management system that gives a B2B company one continuously updated view of its customer universe. It holds a list of accounts, each with its ICP contacts pulled from Clay, Apollo, LinkedIn, and events, and keeps every contact's email, name, title, category, vertical, seniority, function, location, and lead score current. Sales, Marketing, and Executive teams use it to make decisions, launch marketing campaigns, and see where the business stands.",
    technologies: [
      "Clay",
      "Apollo",
      "LinkedIn",
      "Event lead capture",
      "Lead scoring",
      "Account-based data model",
    ],
    skillsDemonstrated: [
      "Multi-source data integration",
      "Account-based data modeling",
      "Lead scoring",
      "Cross-team reporting",
    ],
    media: "/lead_mgmt_dashboard.png",
    caseStudy: {
      mediaAlt:
        "Sample lead management dashboard: an account list on the left, and the selected account's ICP contacts on the right with title, category, vertical, seniority, function, location, source, and lead score",
      client:
        "An internal system for a B2B company's Sales, Marketing, and Executive teams. The dashboard shown is a sample built with illustrative data, since the original can't be shared.",
      problem:
        "A B2B company's contact data is spread across several places at once: enrichment in Clay, prospecting in Apollo, profiles on LinkedIn, and lead lists collected at events. Each source holds its own version of the same people, and the data never stops changing as people switch roles and new leads come in. Sales needs to know who to contact at an account, Marketing needs clean segments to build campaigns from, and leadership needs a trustworthy picture of the current universe of customers. Without one shared, current view, none of those questions has a single answer.",
      features: [
        {
          title: "Account-centric list",
          body: 'A searchable list of accounts, each opening into its ICP contacts, so "who do we know at this company?" has one answer.',
        },
        {
          title: "Rich contact profiles",
          body: "Every contact carries email, name, title, category, vertical, seniority, function, location, and lead score, along with the source it came from.",
        },
        {
          title: "Multi-source contacts",
          body: "Contacts pulled from Clay, Apollo, LinkedIn, and events land in one place, with the originating source shown on each record.",
        },
        {
          title: "Lead scoring",
          body: "A lead score for every contact, color-banded so hot leads stand out, and rolled up to rank accounts by their average score.",
        },
        {
          title: "Filtering and segmentation",
          body: "Slice the universe by vertical, seniority, function, source, and location to build target lists, then export them or add them to a campaign.",
        },
        {
          title: "Views for three teams",
          body: "Sales works account by account, Marketing builds segments and launches campaigns from them, and Executives get a top-level view of the customer universe.",
        },
      ],
      architecture: {
        caption:
          "The system sits between the data sources and the teams that use them: contacts flow in from each source, are normalized into one account-and-contact model, and are served back through views built for Sales, Marketing, and Executives.",
        decisions: [
          {
            title: "Account-centric data model",
            body: "Accounts are the top-level record and ICP contacts hang off them, matching how B2B teams actually sell and plan campaigns.",
          },
          {
            title: "Multi-source ingestion",
            body: "Clay, Apollo, LinkedIn, and event lists each feed the same contact schema, and the originating source is kept on every record.",
          },
          {
            title: "Continuous updates",
            body: "Records are refreshed constantly rather than loaded once, so titles, locations, and scores reflect the current state, and the dashboard shows when data was last synced.",
          },
          {
            title: "One schema, many uses",
            body: "The same fields power sales lookups, marketing segmentation, and executive reporting, so all three teams are working from the same numbers.",
          },
        ],
      },
      hardProblems: [
        {
          title: "One person, many sources",
          body: "The same contact can appear in Clay, Apollo, LinkedIn, and an event list with slightly different titles or details. Resolving them to a single record, with the source preserved, is what keeps counts honest and stops the same person from being contacted twice.",
        },
        {
          title: "Data that is never finished",
          body: "People change jobs, titles, and locations constantly, so a one-time import goes stale quickly. Treating updates as the normal state of the system, and showing how fresh the data is, keeps teams from acting on outdated contacts.",
        },
        {
          title: "One dataset, three audiences",
          body: "Sales wants individual contacts, Marketing wants segments, and Executives want the big picture. Designing a single schema and set of fields that serve all three, rather than three separate spreadsheets, is what lets them trust the same numbers.",
        },
      ],
      outcome:
        "Sales, Marketing, and Executive teams work from one shared, continuously updated view of the customer universe, deciding who to contact, launching campaigns from live segments, and seeing where the business stands without stitching together exports from each source.",
    },
  },
  {
    id: 2,
    title: "PrepMate: A Review App for Aspiring Teachers",
    slug: "exam-app",
    description:
      "Built a free, no-signup web app that helps aspiring teachers in the Philippines prepare for the Licensure Examination for Teachers (LET). Instead of scrolling through PDFs and reviewer notes, they pick a subject area and how many questions they want, and get a freshly shuffled quiz with instant right-or-wrong feedback and a final score. It ships with about 800 questions across General Education, Professional Education, Specialization, Rizal, and Behaviorism, and runs entirely in the browser. Built with React, Vite, and Tailwind CSS.",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui (Radix UI)",
      "React Router",
      "Lucide icons",
      "Surge (hosting)",
    ],
    skillsDemonstrated: [
      "Fisher-Yates shuffle",
      "Client-side routing",
      "State management with hooks",
      "Component-driven UI",
    ],
    projectLink: "https://reviewletapp.surge.sh/",
    sourceCode: "https://github.com/darwinvillaruel/let-review-app",
    media: "/exam_app.png",
    caseStudy: {
      mediaAlt:
        "PrepMate home page listing the LET subject areas — General Education, Professional Education, Specialization, Rizal Life and Works, and Theories in Behaviorism — each with a Take the Quiz button",
      client:
        "Self-initiated project for aspiring teachers in the Philippines preparing for the Licensure Examination for Teachers (LET).",
      problem:
        "LET review material mostly lives in scattered PDFs, screenshots, and long reviewer documents. Reading them is passive, the order never changes so people memorize positions instead of content, and there's no quick way to check yourself, see whether you got an item right, or score a practice run. Reviewees also need to focus on different parts of the exam at different times — General Education one week, Professional Education the next — so a single fixed question list doesn't work.",
      features: [
        {
          title: "Exam-aligned subject areas",
          body: "The home page mirrors how the LET is actually weighted: General Education (20%), Professional Education (40%), and Specialization (40%), each listing its subjects, plus separate cards for Rizal Life and Works and Theories in Behaviorism.",
        },
        {
          title: "Choose your own session length",
          body: "Before each quiz, pick 10, 25, 50, 100, or 150 questions, so the same app works for a five-minute warm-up or a full mock run.",
        },
        {
          title: "Shuffled on every attempt",
          body: "Questions are drawn from a large bank and reshuffled each time, so no two sessions come out in the same order.",
        },
        {
          title: "Instant feedback",
          body: "Selecting an answer immediately colours the result card green or red and shows the correct answer, so the review happens at the moment of the mistake.",
        },
        {
          title: "Progress and score",
          body: "A progress bar tracks position in the session, each question shows its subject badge, and a score dialog at the end reports how many you got right out of the total.",
        },
        {
          title: "Exam-date countdown",
          body: "The footer shows today's date and the days remaining until the exam date, as a constant nudge to keep reviewing.",
        },
      ],
      architecture: {
        caption:
          "A client-side single-page app with no backend: the question banks ship with the app, so there's nothing to sign in to and nothing that can be down.",
        decisions: [
          {
            title: "Static question banks",
            body: "About 800 questions live as plain JavaScript modules — roughly 350 in General Education, 300 in Professional Education, 100 in Specialization, and 50 in Behaviorism — each with its answer options and a correct flag. Rizal questions are a tagged slice of the General Education bank.",
          },
          {
            title: "Three-step route flow",
            body: "Home card, then /option/:id to choose a question count, then the quiz route carrying the count as a query string (for example /profed?questions=50). The session's settings live in the URL rather than in global state.",
          },
          {
            title: "One quiz pattern, five subjects",
            body: "Each subject area renders the same card-based quiz — badge, progress, question, options, feedback — fed by a shared helper module for advancing, checking answers, and scoring, so a fix in one place applies everywhere.",
          },
          {
            title: "Composable UI primitives",
            body: "Cards, badges, progress bars, alert dialogs, and buttons come from shadcn/ui on top of Radix UI, styled with Tailwind, which keeps the quiz screens accessible and consistent without a heavy component library.",
          },
        ],
      },
      hardProblems: [
        {
          title: "Fair randomization that doesn't fight React",
          body: "A naive shuffle inside a component re-runs on every render, so the question would change as soon as you picked an answer. The shuffle uses a Fisher-Yates implementation on a copy of the bank (so the source data is never mutated), and it runs once, inside a lazy state initializer, so the order is fixed for the whole session.",
        },
        {
          title: "Routing the right quiz for each subject",
          body: "Five subject areas share one picker screen, but each maps to a different quiz route and data set, and General Education has a second mode that draws only from questions tagged as actual. Mapping every option page to the correct quiz route, and carrying the chosen question count through, was the trickiest part of the navigation.",
        },
        {
          title: "Instant feedback without a backend",
          body: "With no server to grade answers, each selection is checked against the question's correct flag on the client and recorded in an array; the score is derived from that array at the end, and the result card's colour and message update the moment an option is picked.",
        },
      ],
      outcome:
        "Aspiring teachers get a reviewer that turns passive reading into active practice: pick a subject, choose a session length, and get an instantly graded, freshly shuffled quiz — no account, no install, and nothing to load from a server. It's deployed as a static site.",
      nextSteps: [
        {
          title: "Reviewers for more licensure exams",
          body: "Generalize the question banks and categories so other professional licensure exams can be added as data, not code.",
        },
        {
          title: "Lazy-load question banks",
          body: "The banks are bundled into the app today; dynamic imports per subject would keep the first load small as the question count grows.",
        },
        {
          title: "Configurable exam date",
          body: "The footer countdown is tied to one hard-coded date and uses an absolute difference, so it counts up after the date passes; it should be user-configurable and stop at zero.",
        },
        {
          title: "Saved progress",
          body: "Persist past scores and missed questions so learners can retry only what they got wrong.",
        },
      ],
    },
  },
];

export type { CaseStudy };
export default project;
