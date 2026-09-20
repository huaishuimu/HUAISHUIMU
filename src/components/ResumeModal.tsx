import { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Briefcase, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { designerProfile, experiencesData, educationData, skillDimensions, toolStacks, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, language, onClose }: ResumeModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[16px] bg-[#100b24]/95 border border-purple-500/30 text-gray-100 p-6 sm:p-10 shadow-[0_0_60px_rgba(124,58,237,0.35)] my-auto backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Top Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-purple-900/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-purple-300 font-medium">
              {language === 'zh' ? '设计师官方标准电子履历 (CV 2024-2026)' : 'Official Designer Resume (CV 2024-2026)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-[8px] bg-purple-950/70 hover:bg-purple-900 border border-purple-500/30 text-xs font-semibold text-purple-300 hover:text-white transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '打印 / 另存为 PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-[8px] bg-purple-950/70 hover:bg-purple-900 border border-purple-500/30 text-purple-300 hover:text-white transition-all cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 p-6 rounded-[16px] bg-[#160e33]/90 border border-purple-500/30">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white text-glow-white">
              {designerProfile.name[language]}
            </h1>
            <p className="text-sm font-semibold text-purple-300 mt-1">
              {designerProfile.title[language]}
            </p>
            <p className="text-xs text-gray-300 mt-2 max-w-lg leading-relaxed">
              {designerProfile.bio[language]}
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-xs text-gray-300 font-mono shrink-0">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>{designerProfile.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{designerProfile.contact.location[language]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-emerald-400 font-semibold">{designerProfile.status[language]}</span>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-purple-300 font-mono mb-4 flex items-center gap-2 font-bold">
            <Briefcase className="w-4 h-4 text-purple-400" />
            {language === 'zh' ? '工作经历 (WORK EXPERIENCE)' : 'WORK EXPERIENCE'}
          </h2>
          <div className="space-y-4">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="p-4 rounded-[12px] bg-[#150f2e]/80 border border-purple-500/25">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="font-bold text-sm text-white">{exp.role[language]}</span>
                  <span className="text-xs text-purple-300 font-mono font-medium">{exp.period}</span>
                </div>
                <div className="text-xs font-semibold text-purple-300 mb-2">
                  {exp.company[language]} • {exp.location[language]}
                </div>
                <p className="text-xs text-gray-300 mb-3 leading-relaxed">{exp.description[language]}</p>
                <div className="space-y-1">
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{ach[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Background */}
        <div className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-purple-300 font-mono mb-4 flex items-center gap-2 font-bold">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            {language === 'zh' ? '学术背景 (EDUCATION)' : 'EDUCATION'}
          </h2>
          {educationData.map((edu) => (
            <div key={edu.id} className="p-4 rounded-[12px] bg-[#150f2e]/80 border border-purple-500/25">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm text-white">{edu.institution[language]}</span>
                <span className="text-xs text-purple-300 font-mono font-medium">{edu.period}</span>
              </div>
              <div className="text-xs text-purple-300 font-semibold mb-2">
                {edu.degree[language]} • {edu.major[language]}
              </div>
              <div className="space-y-1">
                {edu.honors.map((h, idx) => (
                  <div key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{h[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies & Tools */}
        <div className="p-4 rounded-[12px] bg-[#150f2e]/80 border border-purple-500/25">
          <h2 className="text-xs uppercase tracking-widest text-purple-300 font-mono mb-3 font-bold">
            {language === 'zh' ? '设计军械库与工具 (TOOLS & PROFICIENCY)' : 'TOOLS & PROFICIENCY'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {toolStacks.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-[6px] text-xs bg-[#1f153d] border border-purple-500/30 text-purple-200 font-medium"
              >
                {t.name} <span className="text-purple-400 font-mono text-[10px]">({t.proficiency})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
