import React, { useState } from 'react';
import {
  ArrowDown,
  FileDown,
  Mail,
  Zap,
  CheckCircle2,
  Atom,
  Database,
  Layers,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = () => {
  const { personal, stats } = portfolioData;
  const [activeStack, setActiveStack] = useState('MERN');

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Golden-hour ambient radiant blooms */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[650px] h-[450px] bg-yellow-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[450px] h-[350px] bg-amber-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 flex-grow flex flex-col justify-center">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Name, Role, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Anti-Gravity Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#12151c]/90 border border-amber-500/25 shadow-lg shadow-amber-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-amber-200/90 tracking-wide">
                {personal.status}
              </span>
            </div>

            {/* Main Greeting & Name: Gowtham B */}
            <div className="space-y-3">
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-slate-400 block">
                Hello, I am
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight text-white leading-[1.05]">
                <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                {personal.role}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {personal.supportingText}
            </p>

            {/* Action Buttons: [View Projects] & [Download Resume] */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base"
              >
                <span>View Projects</span>
                <ArrowDown size={18} />
              </a>

              <a
                href={personal.resumeUrl}
                download="Gowtham_B_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-slate-200 bg-[#12151c]/90 hover:bg-slate-800 border border-slate-700/80 shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>

              {/* Floating Social Icons */}
              <div className="flex items-center gap-3 ml-0 sm:ml-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gowtham's GitHub Profile"
                  className="p-3.5 rounded-xl bg-[#12151c]/80 border border-slate-800 hover:border-amber-400/50 hover:text-amber-300 hover:bg-slate-800 transition-all text-slate-300 shadow-md animate-float-medium"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gowtham's LinkedIn Profile"
                  className="p-3.5 rounded-xl bg-[#12151c]/80 border border-slate-800 hover:border-amber-400/50 hover:text-amber-300 hover:bg-slate-800 transition-all text-slate-300 shadow-md animate-float-reverse"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email Gowtham"
                  className="p-3.5 rounded-xl bg-[#12151c]/80 border border-slate-800 hover:border-amber-400/50 hover:text-amber-300 hover:bg-slate-800 transition-all text-slate-300 shadow-md animate-float-slow"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Anti-Gravity Floating Centerpiece (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Weightless Floating Satellite Badges */}
            <div className="absolute -top-6 -left-6 z-20 px-3.5 py-1.5 rounded-xl bg-[#161a24]/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float-reverse hidden sm:flex items-center gap-2">
              <Atom size={14} className="text-amber-400" />
              <span>React 19 & Node.js</span>
            </div>

            <div className="absolute -bottom-6 -right-6 z-20 px-3.5 py-1.5 rounded-xl bg-[#161a24]/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float-medium hidden sm:flex items-center gap-2">
              <Database size={14} className="text-amber-400" />
              <span>MongoDB & REST APIs</span>
            </div>

            {/* Main Floating Anti-Gravity Card with Continuous Keyframe Animation */}
            <div className="rounded-3xl bg-[#10131a]/85 border border-amber-500/25 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] shadow-amber-500/5 animate-float-slow relative group overflow-hidden">
              {/* Subtle warm amber corner glow */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

              {/* Card Window Topbar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800/90 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-amber-400/90 flex items-center gap-2">
                  <Layers size={14} />
                  <span>gowtham.mern.json</span>
                </div>
              </div>

              {/* Interactive State View */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#161a24]/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Zap size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Full Stack Architecture</h4>
                      <p className="text-xs text-slate-400">MERN Stack • Database Driven</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    60fps
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#161a24]/60 border border-slate-800/80 space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Education:</span>
                    <span className="text-amber-300 font-bold">BCA (Dr. MGR Univ)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Full Stack Training:</span>
                    <span className="text-emerald-400 font-bold">SLA Institute (6 Mos)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Core Frameworks:</span>
                    <span className="text-slate-200">React • Node • Express</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Database Engine:</span>
                    <span className="text-amber-400 font-bold">MongoDB & MySQL</span>
                  </div>
                </div>

                {/* Visual Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">OTT Streaming</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Viva System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stat Metric Cards with Anti-Gravity Hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full pt-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#10131a]/60 backdrop-blur-md border border-slate-800/90 text-center hover:border-amber-400/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)] transition-all duration-300 group shadow-lg shadow-black/10"
            >
              <p className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1.5 uppercase tracking-wider">
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
