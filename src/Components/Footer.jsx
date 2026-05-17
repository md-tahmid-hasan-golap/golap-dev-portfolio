import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();

  const formattedDate = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/g.lap.raj",
      label: "Facebook",
    },
    {
      icon: FaGithub,
      href: "https://github.com/md-tahmid-hasan-golap",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/feed/",
      label: "LinkedIn",
    },
  ];

  const footerNav = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050508]/90 backdrop-blur-sm">
      <div className="section-container py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-white">
              Tahmid Hasan Golap
            </p>
            <p className="text-slate-500 text-sm mt-1">MERN Stack Developer</p>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            aria-label="Footer navigation"
          >
            {footerNav.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={700}
                offset={-80}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer min-h-[44px] inline-flex items-center"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl glass-card text-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center space-y-2">
          <p className="text-slate-500 text-sm font-medium">{formattedDate}</p>
          <p className="text-slate-500 text-sm">
            © {year} All rights reserved by{" "}
            <span className="text-cyan-400 font-semibold">Tahmid Hasan Golap</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
