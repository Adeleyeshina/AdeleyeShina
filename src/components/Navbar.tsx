import { Link, NavLink } from "react-router-dom";
import { navLink } from "../utils/contant";
import { useTheme } from "../hooks/useTheme";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // GSAP entry animation
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-surface fixed top-0 left-0 w-full shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-30 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-extrabold text-brand">
          SA<span className="text-primarytext">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-secondarytext font-medium">
          {navLink.map(({ key, title, path }) => (
            <li key={key} className="relative group">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? "text-brand font-semibold" : "hover:text-brand"
                  }`
                }
              >
                {title}
              </NavLink>
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + Mobile Button */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-background cursor-pointer shadow hover:scale-110 transition-transform"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-secondarytext" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded bg-background cursor-pointer shadow"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <FaTimes className="text-primarytext" />
            ) : (
              <FaBars className="text-primarytext" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface shadow-lg overflow-hidden">
          <ul className="flex flex-col items-center py-6 space-y-6 text-lg text-secondarytext">
            {navLink.map(({ key, title, path }) => (
              <li key={key}>
                <NavLink
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive ? "text-brand font-semibold" : "hover:text-brand"
                    }`
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
