import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Testimonials", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-3 group">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 font-black">
              SP
            </span>
            <span className="text-xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
              Subhadip
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 px-2 py-1 focus:outline-none"
              >
                {link}
              </a>
            ))}
            
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 px-4 py-2"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-cyan-500 text-slate-900 px-4 py-2 rounded-lg font-semibold"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
