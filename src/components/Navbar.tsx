import About from "./About";

export default function Navbar() {
  return (
    <nav>
      <div className="bg-base-100 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="z-[1] gap-2 grid bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm">
              <li>
                <About />
              </li>
              <li>
                <button
                  id="works"
                  className="btn">
                  Works
                </button>
              </li>
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">daisyUI</a>
        </div>
        <div className="lg:flex hidden navbar-center">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <About />
            </li>
            <li>
              <button
                id="works"
                className="btn">
                Works
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact</a>
        </div>
      </div>
    </nav>
  );
}
