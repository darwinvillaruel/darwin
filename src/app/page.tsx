import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 p-5 lg:p-10 min-h-screen">
      <section className="flex flex-col justify-between space-y-4 lg:col-span-1">
        <div>
          <Navbar />
          <Hero />
        </div>
        <div>
          <Footer />
        </div>
      </section>
      <section className="lg:col-span-2">A</section>
    </main>
  );
}
