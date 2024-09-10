import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="mx-auto py-3 container">
      <Navbar />
      <Hero />
    </main>
  );
}
