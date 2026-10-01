import React, { useState } from 'react';
import { X, CheckCircle2, ExternalLink, Sparkles, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import ProjectCard from './ProjectCard';

const filterCategories = ['All', 'MERN', 'React', 'Full Stack', '.NET'];

const Projects = () => {
  const { projects, personal } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 md:py-36 w-full relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-amber-500/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Practical full-stack web applications built with the MERN stack, .NET 8, and modern React interfaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-[#10131a]/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* GitHub Callout */}
        <div className="text-center mt-20">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 bg-[#10131a]/90 hover:bg-slate-800 hover:text-amber-300 border border-slate-800 transition-all hover:scale-[1.02] shadow-xl shadow-black/30"
          >
            <GithubIcon size={20} />
            <span>Explore all repositories & open-source on GitHub</span>
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0f1219] border border-amber-500/30 p-6 sm:p-10 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">
                {selectedProject.projectNumber}
              </span>
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-400/80 mt-3">
                {selectedProject.subtitle}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedProject.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Roles if applicable */}
            {selectedProject.roles && (
              <div className="mb-6 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-300 mb-2.5">
                  <Users size={16} />
                  <span>Configured User Roles & Permissions:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.roles.map((r, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-semibold text-slate-200 border border-slate-700"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* All Highlights Checklist */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles size={15} className="text-amber-400" />
                <span>Architecture Highlights & Capabilities:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.highlights.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/25 transition-all"
              >
                <ExternalLink size={16} />
                <span>Open Live Demo</span>
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
              >
                <GithubIcon size={16} />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
