import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";
import { IoDocumentAttach } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <p className="py-3 text-lg">Connect with me 🤝</p>
      <ul className="flex flex-row gap-2 ">
        <li>
          <a href="https://www.linkedin.com/in/darwin-villaruel-6b58aa16a/">
            <IoLogoLinkedin size={40} />
          </a>
        </li>
        <li>
          <a href="https://github.com/darwinvillaruel">
            <IoLogoGithub size={40} />
          </a>
        </li>
        <li>
          <a href="mailto:darwinvillaruel2215@gmail.com">
            <IoMailUnread size={40} />
          </a>
        </li>
        <li>
          <a href="/">
            <IoDocumentAttach size={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}
