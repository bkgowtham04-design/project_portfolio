import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, Users, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700/80 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-600/10">
      <div>
        {/* Header: Project Number & Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-bold text-blue-400 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
            {project.projectNumber}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              <Sparkles size={13} />
              Featured
            </span>
          )}
        </div>

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
          {project.subtitle}
        </p>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Roles if applicable */}
        {project.roles && (
          <div className="mb-5 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/60">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-300 mb-2">
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

        {/* Key Features Preview */}
        <div className="mb-6 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Highlights:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/80 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons: [Live Demo], [GitHub], [View Details] */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ExternalLink size={15} />
            <span>Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Source on GitHub"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center justify-center gap-1 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all cursor-pointer"
          >
            <Info size={15} />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
