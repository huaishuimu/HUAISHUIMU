import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { Experience, Language } from '../types';
import { experiencesData } from '../data/portfolioData';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10 border-t border-purple-900/30 bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300 font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>{language === 'zh' ? '职业履历 • EXPERIENCE' : 'CAREER TIMELINE • EXPERIENCE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight leading-[1.08]">
            {language === 'zh' ? '工作经历与实战沉淀' : 'Professional Journey'}
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
            {language === 'zh'
              ? '深耕一线科技与创意实验室，主导过多款高复杂度数字化产品、3D IP衍生与全栈 AIGC 落地。'
              : 'Leading product design and creative innovation at top-tier labs, launching zero-to-one platforms and commercial AIGC pipelines.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-purple-700/60 before:to-transparent">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="relative group transition-all duration-300"
            >
              {/* Timeline Node Point with Pulsing Ring */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full bg-[#0d091f] border-2 border-purple-400 flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-[16px] bg-[#120c27]/85 border border-purple-500/25 hover:border-purple-400/60 transition-all duration-300 shadow-[0_6px_24px_rgba(0,0,0,0.5)] group-hover:shadow-[0_12px_40px_rgba(147,51,234,0.25)] backdrop-blur-md">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role[language]}
                      </h3>
                      {exp.badge && (
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                          {exp.badge[language]}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-purple-300 mt-1">
                      {exp.company[language]}
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {exp.location[language]}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {exp.description[language]}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs uppercase tracking-wider text-purple-300 font-mono font-semibold">
                    {language === 'zh' ? '关键成果与量化贡献：' : 'Key Milestones & Impact:'}
                  </div>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{ach[language]}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-900/30">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-3 py-1 rounded-full bg-[#191036] text-purple-200 border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
