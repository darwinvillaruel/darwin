type Data = {
  date: string;
  company: string;
  website: string;
  location: string;
  role: string;
  desc: string[];
};

const data: Data[] = [
  {
    date: "March 2022 - Present",
    company: "Method Financial",
    website: "https://methodfi.com",
    location: "Austin, TX",
    role: "Data Analyst",
    desc: [
      "Streamlined Customer Success Management operations by seamlessly integrating Close, Linear, Outreach, and Google Sheets with the use of Zapier. This has greatly eased the burden on CSM teams, fostering a cohesive workflow.",
      "Contributed to improving Method's API documentation using MDX and React JS. Updated content and implemented dynamic features for a user-friendly, interactive experience.",
      "Led the development of Method's first newsletter using CSS and HTML. Designed an engaging layout, structured HTML for readability and navigation, and applied CSS for a cohesive aesthetic.",
    ],
  },
  {
    date: "February 2019 - December 2023",
    company: "NarrativePros",
    website: "https://narrativepros.com",
    location: "Minneapolis, MN",
    role: "Web Developer",
    desc: [
      "Led the creation of the NarrativePros website from wireframing to UX design, utilizing Elementor, Oxygen, and WordPress for a visually compelling and user-friendly result.",
      "Integrated applications used by the company through Zapier, Integromat and API endpoints. Ensure consistency through cohesive and direct connections whilst avoiding data loss.",
      "Optimized team efficiency by creating streamlined workflows in Asana and Airtable. Designed and implemented systematic processes using the robust capabilities of these platforms to enhance collaboration, task management, and data organization.",
    ],
  },
];

export default data;
