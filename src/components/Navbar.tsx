export default function Navbar() {
  return (
    <nav>
      <div className="p-0 navbar">
        <div className="lg:hidden navbar-start">
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
              className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm">
              <li>
                <button className="btn btn-outline btn-primary">Primary</button>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">drwn</a>
        </div>
        <div className="lg:flex hidden navbar-center">
          <ul className="px-0 menu menu-horizontal">
            <li>
              <details>
                <summary className="pl-0">
                  <button className="border-b-4 btn btn-outline btn-primary">Darwin</button>
                </summary>
                <ul className="border-2 border-primary p-2 w-80">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <button className="border-b-4 btn btn-outline btn-secondary">Projects</button>
                </summary>
                <ul className="border-2 border-primary p-2 w-80">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
