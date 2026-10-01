import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education, training, journey } = portfolioData;

  return (
    <section id="education" className="py-24 md:py-36 w-full relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[450px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Education & Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Academic Foundation & Path
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Degree in Computer Applications at Dr. MGR University and 6-month intensive full-stack MERN training at SLA Institute Chennai.
          </p>
        </div>

        {/* 2-Column Split: Education & Training (Left) | Developer Journey (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Column: Education & Training (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Academic Education Card */}
            <div className="p-8 sm:p-9 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 backdrop-blur-xl shadow-xl hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.08)]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-md">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    Academic Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-amber-500/40 mb-6 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg font-bold text-slate-100">
                    {education.institution}
                  </h4>
                  <span className="text-xs font-mono font-bold text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25">
                    {education.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar size={14} />
                    {education.period}
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {education.description}
              </p>
            </div>

            {/* SLA Institute Training Card */}
            <div className="p-8 sm:p-9 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 backdrop-blur-xl shadow-xl hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.08)]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-md">
                  <Award size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    Professional Certification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {training.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <p className="text-base font-bold text-slate-200">
                  {training.institute}
                </p>
                <span className="text-xs font-mono font-bold text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25">
                  Duration: {training.duration}
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {training.description}
              </p>

              {/* Training Curriculum Tree */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Curriculum Breakdown:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {training.curriculum.map((cur, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60"
                    >
                      <h5 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wide">
                        {cur.category}
                      </h5>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {cur.topics.map((top, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-1.5">
                            <span className="text-amber-500 font-bold">›</span>
                            <span>{top}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Journey (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-md">
                <Sparkles size={22} />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  Milestones
                </span>
                <h3 className="text-2xl font-bold text-white">Developer Journey</h3>
              </div>
            </div>

            {/* Vertical Flow Roadmap with Anti-Gravity Glowing Nodes */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/30 space-y-5">
              {journey.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-amber-500 group-hover:border-amber-300 group-hover:scale-125 transition-all shadow-md shadow-amber-500/40" />

                  <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 group-hover:border-amber-500/40 group-hover:bg-slate-800/70 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-slate-900 border border-amber-500/20">
                        STEP {item.step}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
