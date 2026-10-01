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
    border: 'hover:border-amber-500/40',
    badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  frontend: {
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-blue-500/20 to-cyan-500/5',
    border: 'hover:border-blue-500/40',
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  backend: {
    title: 'Backend Development',
    icon: Server,
    color: 'from-emerald-500/20 to-teal-500/5',
    border: 'hover:border-emerald-500/40',
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  database: {
    title: 'Database Systems',
    icon: Database,
    color: 'from-green-500/20 to-emerald-500/5',
    border: 'hover:border-green-500/40',
    badge: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  tools: {
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-purple-500/20 to-pink-500/5',
    border: 'hover:border-purple-500/40',
    badge: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  fullstack: {
    title: 'Full Stack (MERN)',
    icon: Boxes,
    color: 'from-indigo-500/20 to-purple-500/5',
    border: 'hover:border-indigo-500/40',
    badge: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-32 w-full relative">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Technologies & Tools
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Hands-on technical competencies categorized across languages, frontend, backend, and full-stack development.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {Object.entries(skills).map(([key, items]) => {
            const meta = categoryMeta[key] || categoryMeta.languages;
            const Icon = meta.icon;

            return (
              <div
                key={key}
                className={`p-8 sm:p-9 rounded-3xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-sm relative overflow-hidden transition-all duration-300 group ${meta.border} hover:-translate-y-1.5 shadow-xl shadow-black/10`}
              >
                {/* Ambient glow */}
                <div
                  className={`absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br ${meta.color} blur-2xl pointer-events-none rounded-full`}
                />

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-md">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {meta.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {items.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Tech Cards (no boring progress bars) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-500 hover:bg-slate-800/90 transition-all flex flex-col justify-between group/card shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-md bg-slate-900/80">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-white group-hover/card:text-blue-400 transition-colors">
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
