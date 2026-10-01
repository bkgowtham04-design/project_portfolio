import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, CodeXml } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090a0f]/80 backdrop-blur-xl border-b border-amber-500/15 shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo: GOWTHAM B with golden flare */}
          <a
            href="#"
            className="flex items-center gap-3 font-bold text-xl text-white group tracking-wider"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:shadow-amber-500/40 transition-all">
              <CodeXml size={22} className="stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-amber-300 transition-colors">
                {portfolioData.personal.brandName}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-amber-400/80 -mt-0.5">
                Full Stack • MERN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3 bg-[#12151c]/60 px-5 py-2 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Download Resume CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Gowtham_B_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#090a0f]/95 backdrop-blur-2xl border-b border-amber-500/15 px-6 pt-3 pb-8 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-amber-300 hover:bg-slate-800/80 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Gowtham_B_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl shadow-md shadow-amber-500/20 transition-colors"
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
