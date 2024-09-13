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
        <a href="mailto:darwinvillaruel2215@gmail.com">
          <button className="btn btn-info">
            <HiMail />
            Contact
          </button>
        </a>
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
