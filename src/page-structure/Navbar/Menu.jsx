import MenuItem from "./MenuItem";
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-auto">
      {/* Mobile menu button */}
      <div className="flex justify-end md:hidden">
        <button
          className="p-2 text-green-600 hover:text-green-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <ul
        className={`
          md:flex md:items-center md:gap-8
          ${
            isOpen
              ? "absolute top-16 left-0 right-0 bg-white shadow-lg p-4 space-y-2 z-[999]"
              : "hidden md:flex"
          }
        `}
      >
        <MenuItem text="Home" link="/#" onNavigate={closeMenu} />
        <MenuItem text="About" link="/#info" onNavigate={closeMenu} />
        <MenuItem text="Contact" link="/#contact" onNavigate={closeMenu} />
        <MenuItem text="Projects" link="/#projects" onNavigate={closeMenu} />
        <MenuItem text="Blog" link="/blog" onNavigate={closeMenu} />
      </ul>
    </div>
  );
}

export default Menu;
