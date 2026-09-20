import { GraduationCap, Award, BookOpen, CheckCircle2, Sparkles, UserCheck, Trophy } from 'lucide-react';
import { Language } from '../types';
import { educationData, designerProfile } from '../data/portfolioData';

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
            <span>{language === 'zh' ? '学历背景 • EDUCATION' : 'ACADEMIC BACKGROUND • EDUCATION'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight leading-[1.08]">
            {language === 'zh' ? '学历背景与获奖荣誉' : 'Education & Honors'}
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
            {language === 'zh'
              ? '武汉科技大学视觉传达专业，专业成绩前10%（绩点3.5），中共党员，并斩获多项国家级与省级设计大奖。'
              : 'Wuhan University of Science and Technology, top 10% academic standing, CPC member, recipient of multiple national design awards.'}
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-6 sm:p-10 rounded-[16px] bg-[#120c27]/85 border border-purple-500/25 shadow-[0_6px_24px_rgba(0,0,0,0.5)] hover:border-purple-400/50 hover:shadow-[0_12px_36px_rgba(147,51,234,0.25)] backdrop-blur-md transition-all mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 font-mono font-semibold">
                  {edu.degree[language]}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 font-mono font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>绩点 3.5 (专业前10%)</span>
                </span>
                {edu.politics && (
                  <span className="text-xs px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 font-mono font-semibold flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{edu.politics[language]}</span>
                  </span>
                )}
                {edu.position && (
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono font-semibold">
                    {edu.position[language]}
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
                <Trophy className="w-4 h-4 text-amber-400" />
                {language === 'zh' ? '获奖信息与设计竞赛荣誉' : 'Awards & Honors'}
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
                <BookOpen className="w-4 h-4 text-purple-400" />
                {language === 'zh' ? '主修课程与学术方向' : 'Curriculum & Coursework'}
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
          <blockquote className="text-base sm:text-lg font-light text-gray-200 text-glow-subtle max-w-2xl leading-relaxed mb-3">
            {language === 'zh'
              ? '“擅长平衡设计美学与业务需求，具备极强的逻辑拆解能力与执行效率。能与产品及研发团队无缝对接，是一位懂产品逻辑、懂用户心理、且具备未来技术视野的协作伙伴。”'
              : '"Balancing aesthetic craft and product viability with rigorous logical decomposition and seamless cross-team execution."'}
          </blockquote>
          <span className="text-xs text-purple-300 font-mono font-semibold">
            — {designerProfile.name[language]} ({designerProfile.pinyin}) • {designerProfile.title[language]}
          </span>
        </div>
      </div>
    </section>
  );
};
