import About from "./About";
import { HiMail } from "react-icons/hi";
import { HiSaveAs } from "react-icons/hi";

export default function Footer() {
  return (
    <section className="flex flex-row gap-4">
      <div>
        <About />
      </div>
      <div>
        <button className="btn btn-info">
          <HiMail />
          Contact
        </button>
      </div>
      <div>
        <button className="btn btn-info">
          <HiSaveAs />
          PDF
        </button>
      </div>
    </section>
  );
}
