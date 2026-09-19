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
          Data / GTM Engineer @{" "}
          <span className="px-2 bg-green-500 hover:text-white">
            <a href="https://methodfi.com">Method</a>
          </span>{" "}
          & Integration Developer @{" "}
          <span className="px-2 bg-blue-500 hover:text-white">
            <a href="https://uleads.com.au">Uleads</a>
          </span>{" "}
        </p>
        <div className="mt-2 space-y-3 text-sm lg:mt-5 lg:text-lg">
          <p>
            I build the systems that keep lead gen and marketing operations
            running without the manual busywork — leads get logged and routed
            automatically, follow-ups go out on time, and client questions get
            answered even when your team's off the clock.
          </p>
          <p>
            Over the past 3-5 years I've worked across three areas that,
            together, solve most of the "why doesn't this just work" problems
            lead gen and marketing companies run into:
          </p>
          <div className="grid gap-3 mt-2 lg:grid-cols-3 lg:text-sm">
            <div>
              <p className="font-semibold">CRM Setup & Customization</p>
              <p>
                HubSpot, Salesforce, Pipedrive, GHL — pipelines, lead scoring,
                custom fields, and cleanup of messy data so your CRM actually
                reflects what's happening in your pipeline.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Integrations & Workflow Automation
              </p>
              <p>
                Connecting your CRM to your website, ad platforms, email, and
                client-reporting tools using Zapier, Make, or custom API/code
                integrations (Python/Node) when off-the-shelf tools hit their
                limits — especially for multi-client or multi-campaign setups.
              </p>
            </div>
            <div>
              <p className="font-semibold">AI Tools & Chatbots</p>
              <p>
                Practical AI built for how lead gen actually works — chatbots
                that qualify inbound leads, internal assistants that answer
                questions from your own campaign docs (RAG), and AI-powered
                automations (auto-drafting replies, summarizing calls, scoring
                and routing leads) using OpenAI, Claude, and similar APIs.
              </p>
            </div>
          </div>
        </div>
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
