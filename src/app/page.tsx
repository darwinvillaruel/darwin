import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 m-5 lg:m-10">
      <section className="flex flex-col justify-between lg:col-span-1">
        <Navbar />
        <Hero />
        <Footer />
      </section>
      <section className="lg:col-span-2">A</section>
    </main>
  );
}
