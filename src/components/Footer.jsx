import React from 'react';
import { ArrowUp, CodeXml, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#06070a] py-14 mt-auto">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Role */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
              <CodeXml size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xl text-white tracking-wider block">
                {personal.brandName}
              </span>
              <span className="text-xs text-amber-400 font-medium">
                {personal.role}
              </span>
            </div>
          </div>

          {/* Motto & Year */}
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wider text-slate-300">
              Building. Learning. Improving.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-amber-400/50 transition-all shadow-sm"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-amber-400/50 transition-all shadow-sm"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-amber-400/50 transition-all shadow-sm"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-400/50 hover:bg-slate-800 transition-all group cursor-pointer shadow-md ml-2"
            >
              <ArrowUp
                size={18}
                className="group-hover:-translate-y-0.5 transition-transform text-amber-400"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
