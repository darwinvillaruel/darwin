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
          🧑‍💻 Data Analyst at{" "}
          <span className="px-2 bg-green-500">
            <a href="https://methodfi.com">Method</a>
          </span>
        </p>
        <p className="mt-2 text-sm lg:mt-5 lg:text-xl">
          A developer with interest in building full stack applications and
          setting up automations to improve productivity.
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
