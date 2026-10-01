import React from 'react';
import {
  ArrowRight,
  FileDown,
  Mail,
  CheckCircle2,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = () => {
  const { personal, stats } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden"
    >
      {/* Ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[600px] h-[450px] bg-purple-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 flex-grow flex flex-col justify-center">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Headline, Role, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-black/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide">
                {personal.status}
              </span>
            </div>

            {/* Main Heading: Hi, I'm Gowtham B */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.08]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl font-bold text-slate-400 mt-2">
                {personal.role}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {personal.supportingText}
            </p>

            {/* Action Buttons: [View My Projects] & [Download Resume] */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base"
              >
                <span>View My Projects</span>
                <ArrowRight size={20} />
              </a>

              <a
                href={personal.resumeUrl}
                download="Gowtham_B_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base"
              >
                <FileDown size={20} />
                <span>Download Resume</span>
              </a>

              {/* Direct Social Links: GitHub, LinkedIn, Email */}
              <div className="flex items-center gap-3 ml-0 sm:ml-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gowtham's GitHub Profile"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800 transition-all text-slate-300 shadow-md"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gowtham's LinkedIn Profile"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800 transition-all text-slate-300 shadow-md"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email Gowtham"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800 transition-all text-slate-300 shadow-md"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

              {/* Window Controls */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Terminal size={14} className="text-blue-400" />
                  <span>gowtham.developer.json</span>
                </div>
              </div>

              {/* Code Snippet / Config View */}
              <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">'{personal.name}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">'{personal.role}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-300">'BCA Graduate'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">specialization:</span> [
                  <span className="text-amber-300">'React.js'</span>,{' '}
                  <span className="text-amber-300">'Node.js'</span>,{' '}
                  <span className="text-amber-300">'Express.js'</span>,{' '}
                  <span className="text-amber-300">'MongoDB'</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">location:</span>{' '}
                  <span className="text-emerald-300">'{personal.location}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">'{personal.status}'</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Status Chips */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>Full Stack Development Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                  <Sparkles size={14} />
                  <span>MERN Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid Under Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full pt-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800/90 text-center hover:border-slate-700/90 hover:bg-slate-900/80 transition-all group shadow-lg shadow-black/10"
            >
              <p className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1.5">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
