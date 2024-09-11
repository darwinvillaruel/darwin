import About from "./About";

export default function Footer() {
  return (
    <section className="flex flex-row gap-4">
      <div>
        <About />
      </div>
      <div>
        <button className="btn btn-info">Contact</button>
      </div>
      <div>
        <button className="btn btn-info">PDF</button>
      </div>
    </section>
  );
}
