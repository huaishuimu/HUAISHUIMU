import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Wrench, Sparkles, TrendingUp, Layers } from 'lucide-react';
import { Project, Language } from '../types';

interface ProjectModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const ProjectModal = ({ project, language, onClose }: ProjectModalProps) => {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[16px] bg-[#100b24]/95 border border-purple-500/30 shadow-[0_0_60px_rgba(124,58,237,0.35)] text-gray-100 p-6 sm:p-10 my-auto backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-[8px] bg-purple-950/70 hover:bg-purple-900 border border-purple-500/30 text-purple-300 hover:text-white transition-all cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/70 border border-purple-500/30 text-purple-300 font-mono">
              {project.categoryLabel[language]}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              {project.year} • {project.role[language]}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-glow-white tracking-tight mb-3">
            {project.title[language]}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            {project.subtitle[language]}
          </p>
        </div>

        {/* Cover Hero Banner */}
        <div className="relative w-full h-64 sm:h-96 rounded-[16px] overflow-hidden border border-purple-500/25 mb-8 group">
          <img
            src={project.coverImage}
            alt={project.title[language]}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Project Summary */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-purple-300 font-mono mb-2 flex items-center gap-2 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            {language === 'zh' ? '项目概览 (Project Overview)' : 'Project Overview'}
          </h3>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            {project.summary[language]}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="p-5 rounded-[16px] bg-[#1d0e20]/80 border border-rose-500/30">
            <h4 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {language === 'zh' ? '核心痛点与挑战 (The Challenge)' : 'Core Challenge'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.challenge[language]}
            </p>
          </div>

          <div className="p-5 rounded-[16px] bg-[#160e33]/80 border border-purple-500/30">
            <h4 className="text-sm font-bold text-purple-300 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              {language === 'zh' ? '策略与突破方案 (The Solution)' : 'Strategy & Breakthrough'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.solution[language]}
            </p>
          </div>
        </div>

        {/* Design Highlights Breakdown */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-purple-300 font-mono mb-4 flex items-center gap-2 font-bold">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            {language === 'zh' ? '设计亮点剖析 (Design Highlights)' : 'Design Highlights'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.designHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[12px] bg-[#160e33]/70 border border-purple-500/25 shadow-sm hover:border-purple-400/50 transition-colors"
              >
                <h5 className="text-sm font-bold text-white mb-1.5">{hl.title[language]}</h5>
                <p className="text-xs text-gray-300 leading-relaxed">{hl.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables List */}
        <div className="mb-8 p-5 rounded-[16px] bg-[#130d2a]/80 border border-purple-500/25">
          <h3 className="text-xs uppercase tracking-widest text-purple-300 font-mono mb-3 font-bold">
            {language === 'zh' ? '交付成果与成果物 (Key Deliverables)' : 'Key Deliverables'}
          </h3>
          <ul className="space-y-2.5">
            {project.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span>{item[language]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Tech Stack */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-purple-900/30">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-gray-300 font-mono">
              {language === 'zh' ? '设计与制作工具栈：' : 'Tools & Pipeline:'}
            </span>
            <div className="flex flex-wrap gap-1.5 ml-1">
              {project.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-[6px] text-[11px] bg-[#1d143c] border border-purple-500/25 text-purple-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-[8px] bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-all cursor-pointer shadow-[0_2px_12px_rgba(124,58,237,0.4)]"
          >
            {language === 'zh' ? '关闭案例' : 'Close Case'}
          </button>
        </div>
      </div>
    </div>
  );
};
