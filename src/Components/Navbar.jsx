import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../../src/assets/myimage.png.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClass =
    "relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white cursor-pointer transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:scale-x-0 after:bg-cyan-400 after:transition-transform hover:after:scale-x-100";

  const activeLinkClass = "!text-cyan-400 after:scale-x-100 after:bg-cyan-400";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
            <div className="flex items-center min-w-0">
              <Link
                to="home"
                smooth={true}
                duration={700}
                className="flex items-center gap-2.5 cursor-pointer group min-h-[44px]"
                spy={true}
                offset={-80}
              >
                <img
                  src={logo}
                  alt="Ahmid Logo"
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain select-none rounded-lg ring-1 ring-white/10 group-hover:ring-cyan-400/40 transition-all"
                  draggable="false"
                />
                <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  ahmid
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 lg:gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    spy={true}
                    activeClass={activeLinkClass}
                    className={linkClass}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[min(24rem,80vh)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="section-container pb-4 pt-1 space-y-1 border-t border-white/5 bg-[#07070d]/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass="!text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
                className="block min-h-[48px] flex items-center px-4 py-3 text-base font-medium rounded-xl border border-transparent text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="h-16 md:h-[4.25rem] shrink-0" aria-hidden="true" />
    </>
  );
};

export default Navbar;
