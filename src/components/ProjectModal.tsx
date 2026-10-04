import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Wrench, Sparkles, TrendingUp, Layers } from 'lucide-react';
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

        {/* Visual Showcase (核心视觉企划原案大图) */}
        {(project.videoUrl || project.videoZcoolUrl || project.videoPoster) && (
          <div className="mb-8 rounded-[16px] overflow-hidden border border-[#dda6ff]/40 bg-[#090614] shadow-[0_4px_30px_rgba(221,166,255,0.18)]">
            <div className="px-4 py-3 bg-[#140c2b] border-b border-[#dda6ff]/20 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#dda6ff]">
                <Sparkles className="w-3.5 h-3.5 text-[#dda6ff]" />
                <span>
                  {project.videoTitle
                    ? project.videoTitle[language]
                    : (language === 'zh' ? '全案核心视觉企划原案 (Key Visual Presentation)' : 'Core Key Visual Presentation')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#dda6ff]/15 text-[#dda6ff] border border-[#dda6ff]/30 font-mono">
                  IMAGE · 4K UHD
                </span>
                {(project.videoZcoolUrl || project.zcoolUrl) && (
                  <a
                    href={project.videoZcoolUrl || project.zcoolUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-900/60 hover:bg-purple-800/80 text-purple-200 border border-purple-500/30 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{language === 'zh' ? '站酷原案' : 'View on Zcool'}</span>
                  </a>
                )}
              </div>
            </div>

            <div className="relative w-full overflow-hidden bg-[#05030a] flex items-center justify-center">
              <img
                src={project.videoPoster || project.coverImage}
                alt={project.videoTitle ? project.videoTitle[language] : project.title[language]}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[75vh] block select-none hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {(project.videoZcoolUrl || project.zcoolUrl) && (
              <div className="p-3.5 bg-[#0d091f]/90 border-t border-[#dda6ff]/20 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5 text-gray-300">
                  ✦ {project.videoTitle ? project.videoTitle[language] : (language === 'zh' ? '视觉企划原案 · 高清大图呈现' : 'Digital Visual Showcase')}
                </span>
                <a
                  href={project.videoZcoolUrl || project.zcoolUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#dda6ff] hover:text-white underline decoration-[#dda6ff]/50 flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>{language === 'zh' ? '在站酷 (ZCOOL) 查看完整原案' : 'View Full Case on Zcool'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Project Summary */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-[#dda6ff] font-mono mb-2 flex items-center gap-2 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#dda6ff]" />
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
          <h3 className="text-xs uppercase tracking-widest text-[#dda6ff] font-mono mb-4 flex items-center gap-2 font-bold">
            <Layers className="w-3.5 h-3.5 text-[#dda6ff]" />
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

        {/* Vertical Case Presentation Strip (长图展示区) */}
        {(project.longStripImages?.length || project.longStripImage) && (
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="text-xs uppercase tracking-widest text-[#dda6ff] font-mono flex items-center gap-2 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#dda6ff]" />
                {language === 'zh' ? '完整作品长图演示 (Full Case Presentation Strip)' : 'Full Case Presentation Strip'}
                {(project.longStripImages && project.longStripImages.length > 1) && (
                  <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-purple-500/20 text-[#dda6ff] border border-purple-500/30">
                    {project.longStripImages.length} 篇幅连载
                  </span>
                )}
              </h3>
              {project.zcoolUrl && (
                <a
                  href={project.zcoolUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-900/60 hover:bg-purple-800/80 text-purple-200 border border-purple-500/30 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>{language === 'zh' ? '站酷官方作品原址' : 'View on Zcool'}</span>
                </a>
              )}
            </div>

            <div className="space-y-4">
              {(project.longStripImages || (project.longStripImage ? [project.longStripImage] : [])).map((stripUrl, sIdx, allStrips) => (
                <div key={sIdx} className="relative w-full rounded-[16px] overflow-hidden border border-[#a82cff] bg-[#090614] shadow-[0_4px_30px_rgba(168,44,255,0.15)]">
                  <img
                    src={stripUrl}
                    alt={`${project.title[language]} 长图展示 ${allStrips.length > 1 ? `(Part ${sIdx + 1})` : ''}`}
                    className="w-full h-auto block select-none"
                    loading="lazy"
                  />
                  <div className="p-4 bg-[#0d091f]/90 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 font-mono">
                    <span>
                      ✦ {project.title[language]} {language === 'zh' ? '完整作品视觉长图' : 'Full Case Presentation Strip'}
                      {allStrips.length > 1 && ` · Part 0${sIdx + 1}`}
                    </span>
                    {project.zcoolUrl && (
                      <a
                        href={project.zcoolUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-300 hover:text-purple-100 underline decoration-purple-500/50 flex items-center gap-1"
                      >
                        <span>{language === 'zh' ? '在站酷 (ZCOOL) 查看高清原案' : 'Zcool Source'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables List */}
        <div className="mb-8 p-5 rounded-[16px] bg-[#130d2a]/80 border border-purple-500/25">
          <h3 className="text-xs uppercase tracking-widest text-[#dda6ff] font-mono mb-3 font-bold">
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
