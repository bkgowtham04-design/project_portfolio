import React from 'react';
import {
  CodeXml,
  Server,
  Database,
  Layers,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  layout: CodeXml,
  server: Server,
  database: Database,
  layers: Layers,
};

const About = () => {
  const { about, stats, whatIDo, strengths } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32 w-full relative">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            Profile Overview
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            {about.heading}
          </h2>
        </div>

        {/* Narrative & Quick Stats Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-stretch mb-20">
          {/* Main About Story (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800/90 shadow-xl shadow-black/10 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Passionate about building practical, user-focused web solutions.
              </h3>
              <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                {about.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Core Strengths Chips */}
            <div className="mt-8 pt-8 border-t border-slate-800/80">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400" />
                <span>Key Competencies & Mindset</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/70 border border-slate-700/60 text-xs sm:text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-sm flex flex-col justify-center items-center text-center group hover:border-slate-700 hover:bg-slate-900/70 transition-all shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-mono text-sm font-bold">0{idx + 1}</span>
                </div>
                <p className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  {st.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1 uppercase tracking-wider">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What I Do / Services Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Services & Capabilities
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white mt-3">
              What I Do
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDo.map((item, idx) => {
              const Icon = iconMap[item.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 group flex flex-col justify-between shadow-lg shadow-black/10"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
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
