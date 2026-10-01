import React from 'react';
import { GraduationCap, CodeXml, Sparkles, Database, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = [GraduationCap, CodeXml, Sparkles, Database];

const strengthsList = [
  "Problem Solving",
  "Quick Learning",
  "Clean Development",
  "Responsive Design",
  "Database-driven Applications",
  "User-focused Development",
];

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-36 w-full relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            {about.heading}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            {about.subheading}
          </h2>
        </div>

        {/* 2-Column Split: Narrative (Left) & Anti-Gravity Pillars (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-stretch">
          {/* Left Column: Narrative (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 shadow-2xl backdrop-blur-xl flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-500">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-3">
                Background & Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-snug">
                BCA graduate specializing in the MERN stack & modern interfaces.
              </h3>
              <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {about.narrative.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Strengths Chips */}
            <div className="mt-8 pt-8 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block mb-3">
                Core Strengths:
              </span>
              <div className="flex flex-wrap gap-2">
                {strengthsList.map((str, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 size={14} className="text-amber-400" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Anti-Gravity Pillar Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.pillars.map((pillar, idx) => {
              const Icon = iconMap[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#10131a]/40 border border-slate-800/80 hover:border-amber-400/40 hover:bg-[#12151c]/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.08)] group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                        <Icon size={22} />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/90 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center text-xs font-mono text-slate-500">
                    <span>FOUNDATION #0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
