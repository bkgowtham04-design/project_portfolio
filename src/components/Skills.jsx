import React from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Boxes,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryMeta = {
  languages: {
    title: 'Languages',
    icon: Code,
    color: 'from-amber-500/20 to-yellow-500/5',
    border: 'hover:border-amber-400/50',
  },
  frontend: {
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-amber-400/20 to-orange-500/5',
    border: 'hover:border-amber-400/50',
  },
  backend: {
    title: 'Backend Development',
    icon: Server,
    color: 'from-yellow-500/20 to-amber-600/5',
    border: 'hover:border-yellow-400/50',
  },
  database: {
    title: 'Database Systems',
    icon: Database,
    color: 'from-amber-600/20 to-yellow-600/5',
    border: 'hover:border-amber-500/50',
  },
  tools: {
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-orange-500/20 to-amber-500/5',
    border: 'hover:border-orange-400/50',
  },
  fullstack: {
    title: 'Full Stack (MERN)',
    icon: Boxes,
    color: 'from-amber-500/25 to-yellow-400/10',
    border: 'hover:border-amber-300/60',
  },
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-36 w-full relative overflow-hidden">
      {/* Subtle ambient warm bloom */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[450px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Technical Repertoire
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Technologies & Tools
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Practical full-stack competencies spanning React, Node.js, Express, MongoDB, and modern UI engineering.
          </p>
        </div>

        {/* 6-Card Skills Grid with Anti-Gravity Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {Object.entries(skills).map(([key, items]) => {
            const meta = categoryMeta[key] || categoryMeta.languages;
            const Icon = meta.icon;

            return (
              <div
                key={key}
                className={`p-8 sm:p-9 rounded-3xl bg-[#10131a]/50 border border-slate-800/90 backdrop-blur-xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_25px_50px_-15px_rgba(245,158,11,0.1)] group ${meta.border}`}
              >
                {/* Ambient Card Glow */}
                <div
                  className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${meta.color} blur-2xl pointer-events-none rounded-full`}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {meta.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {items.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Technology Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/40 hover:bg-slate-800/90 transition-all flex flex-col justify-between group/card shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/80 px-2 py-0.5 rounded-md bg-slate-900/80 border border-amber-500/15">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-white group-hover/card:text-amber-300 transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
