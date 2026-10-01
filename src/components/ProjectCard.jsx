import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, Users, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-[#10131a]/60 border border-slate-800/90 hover:border-amber-400/40 backdrop-blur-xl p-8 sm:p-9 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_-15px_rgba(245,158,11,0.12)]">
      <div>
        {/* Header: Project Number, Category & Featured Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">
              {project.projectNumber}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full shadow-sm">
              <Sparkles size={13} className="text-amber-400" />
              Featured Project
            </span>
          )}
        </div>

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-wider font-semibold text-amber-400/80 mb-1">
          {project.subtitle}
        </p>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Roles if available */}
        {project.roles && (
          <div className="mb-5 p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-2">
              <Users size={14} />
              <span>Supported User Roles:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 font-medium border border-slate-700/50"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights Preview */}
        <div className="mb-6 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Architecture & Features:
          </p>
          <div className="space-y-1.5">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80 mb-6">
          {project.tech.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons: [Live Demo], [GitHub], [View Details] */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Source on GitHub"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <GithubIcon size={16} />
            <span>Source</span>
          </a>

          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-[#12151c] hover:bg-slate-800 hover:text-amber-300 border border-slate-800 transition-all cursor-pointer"
          >
            <Info size={16} />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
