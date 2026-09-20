import { GraduationCap, Award, BookOpen, CheckCircle2, Sparkles, HeartHandshake } from 'lucide-react';
import { Education, Language } from '../types';
import { educationData } from '../data/portfolioData';

interface EducationSectionProps {
  language: Language;
}

export const EducationSection = ({ language }: EducationSectionProps) => {
  const edu = educationData[0];

  return (
    <section id="education" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10 border-t border-purple-900/30 bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300 font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>{language === 'zh' ? '学术背景 • EDUCATION' : 'ACADEMIC BACKGROUND • EDUCATION'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight leading-[1.08]">
            {language === 'zh' ? '学历背景与设计理论修养' : 'Education & Theoretical Foundation'}
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
            {language === 'zh'
              ? '扎根顶尖艺术学府，接受严苛现代设计造型、排版网格、交互心理与数字媒体系统训练。'
              : 'Formed at premier art academy, grounded in modernist typography, form composition, cognitive psychology, and generative code.'}
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-6 sm:p-10 rounded-[16px] bg-[#120c27]/85 border border-purple-500/25 shadow-[0_6px_24px_rgba(0,0,0,0.5)] hover:border-purple-400/50 hover:shadow-[0_12px_36px_rgba(147,51,234,0.25)] backdrop-blur-md transition-all mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 font-mono font-semibold">
                  {edu.degree[language]}
                </span>
                {edu.badge && (
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 font-mono font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {edu.badge[language]}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {edu.institution[language]}
              </h3>
              <p className="text-sm sm:text-base text-purple-300 font-medium mt-1">
                {edu.major[language]}
              </p>
            </div>

            <div className="text-xs sm:text-sm text-gray-400 font-mono">
              {edu.period}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8">
            {edu.description[language]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-purple-900/30">
            {/* Honors & Scholarships */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-300 font-mono font-semibold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                {language === 'zh' ? '学术荣誉与代表奖项' : 'Academic Honors & Awards'}
              </h4>
              <ul className="space-y-2.5">
                {edu.honors.map((honor, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{honor[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Focus Disciplines */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-300 font-mono font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {language === 'zh' ? '深研学术方向与核心课程' : 'Research & Curriculum Focus'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#191036] text-purple-200 border border-purple-500/20"
                  >
                    {area[language]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Designer Core Philosophy Quote */}
        <div className="p-6 sm:p-8 rounded-[16px] bg-[#0e0920]/80 border border-purple-500/30 shadow-[0_0_24px_rgba(168,85,247,0.2)] backdrop-blur-md text-center flex flex-col items-center">
          <Sparkles className="w-6 h-6 text-purple-400 mb-3" />
          <blockquote className="text-base sm:text-xl font-light italic text-gray-200 text-glow-subtle max-w-2xl leading-relaxed mb-3">
            {language === 'zh'
              ? '“设计是理性的结构与感性的光芒共舞。技术会进化，但对用户情感的精准关怀与对纯粹美学的执着永远是核心。”'
              : '"Design is the seamless dance of structural rigor and emotive luminescence. Tools evolve, but empathy and aesthetic truth remain eternal."'}
          </blockquote>
          <span className="text-xs text-purple-300 font-mono font-semibold">
            — Fengyiran / UX & Visual Design
          </span>
        </div>
      </div>
    </section>
  );
};
