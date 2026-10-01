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
    <section id="education" className="py-24 md:py-32 w-full relative">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            Foundations & Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Education & Developer Journey
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Academic qualifications, intensive MERN stack training at SLA Institute, and my engineering path.
          </p>
        </div>

        {/* 2-Column Split: Education & Training (Left) | Developer Journey (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Column: Education & Training (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Academic Education Card */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-sm shadow-xl shadow-black/10">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-md">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
                    Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-blue-500/50 mb-6 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg font-bold text-slate-100">
                    {education.institution}
                  </h4>
                  <span className="text-xs font-mono font-bold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {education.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar size={14} />
                    {education.period}
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {education.description}
              </p>
            </div>

            {/* SLA Institute Training Card */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-sm shadow-xl shadow-black/10">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-md">
                  <Award size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-purple-400">
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
                <span className="text-xs font-mono font-bold text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
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
                      <h5 className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wide">
                        {cur.category}
                      </h5>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {cur.topics.map((top, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-1.5">
                            <span className="text-blue-500 font-bold">›</span>
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
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-sm shadow-xl shadow-black/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-md">
                <Sparkles size={22} />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-indigo-400">
                  Evolution
                </span>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
            </div>

            {/* Vertical Flow Diagram */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 space-y-6">
              {journey.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:border-blue-400 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/50" />

                  <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 group-hover:border-slate-500 group-hover:bg-slate-800/70 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-slate-900 border border-indigo-500/20">
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
