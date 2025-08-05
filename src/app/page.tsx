import Footer from "@/components/Footer";
import About from "@/components/About";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="container flex flex-col justify-between min-h-screen py-5">
      <section>
        <h1 className="py-2 text-3xl font-semibold lg:text-4xl">
          👋 Hi! I'm Darwin
        </h1>
        <p className="lg:text-lg font-space">
          Data Analyst @{" "}
          <span className="px-2 bg-green-500 hover:text-white">
            <a href="https://methodfi.com">Method</a>
          </span>{" "}
          & Integration Developer @{" "}
          <span className="px-2 bg-blue-500 hover:text-white">
            <a href="https://uleads.com.au">Uleads</a>
          </span>{" "}
        </p>
        <p className="mt-2 text-sm lg:mt-5 lg:text-lg">
          Four years of experience in building automation workflows and
          integration systems across sales, marketing, CRM, and backend
          platforms using tools like n8n, Zapier, Make.com, Hightouch, Leadbyte,
          Leadshook and CRM systems like Zoho, Salesforce, Close, LendCRM,
          Pipedrive, etc.
          <br></br> <br></br> As a data analyst and integration developer, I
          specialize in building clean, organized data integration workflows
          with a strong focus on automation and AI to drive efficiency and
          scalability.
        </p>
        <p className="py-2 mt-5 border-t-2 border-gray-600 border-dotted lg:text-xl">
          Check out my projects!
        </p>
        <div>
          <Project />
        </div>
      </section>
      <section className="flex flex-row justify-between">
        <Footer />
        <div className="self-end">
          <About />
        </div>
      </section>
    </main>
  );
}
