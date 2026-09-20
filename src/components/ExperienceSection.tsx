import { useState } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, FolderGit2, Building2, GraduationCap } from 'lucide-react';
import { Language } from '../types';
import { experiencesData } from '../data/portfolioData';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'internship' | 'project' | 'campus'>('all');

  const filteredExperiences = experiencesData.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.type === activeFilter;
  });

  const filterButtons = [
    { id: 'all', label: { zh: '全部经历', en: 'All Experiences' }, count: experiencesData.length },
    {
      id: 'internship',
      label: { zh: '实习经历', en: 'Internships' },
      count: experiencesData.filter((e) => e.type === 'internship').length,
    },
    {
      id: 'project',
      label: { zh: '项目经历', en: 'Projects' },
      count: experiencesData.filter((e) => e.type === 'project').length,
    },
    {
      id: 'campus',
      label: { zh: '校园经历', en: 'Campus Leadership' },
      count: experiencesData.filter((e) => e.type === 'campus').length,
    },
  ] as const;

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10 border-t border-purple-900/30 bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300 font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>{language === 'zh' ? '经历履历 • EXPERIENCE' : 'TIMELINE • EXPERIENCE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight leading-[1.08]">
            {language === 'zh' ? '项目经历与实习经历' : 'Projects & Internship Experience'}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
            {language === 'zh'
              ? '按照时间顺序呈现一线科研机构实习、核心业务系统改版与移动端全场景 AIOS 项目实践。'
              : 'Chronologically presented internship at Chinese Academy of Sciences, core platform UI iterations, and AIOS projects.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] border border-purple-400'
                    : 'bg-[#140e2e]/80 text-gray-300 border border-purple-500/25 hover:border-purple-400/50 hover:text-white'
                }`}
              >
                <span>{btn.label[language]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-purple-800 text-purple-200' : 'bg-purple-950/60 text-purple-300'
                  }`}
                >
                  {btn.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-purple-700/60 before:to-transparent">
          {filteredExperiences.map((exp) => {
            const isInternship = exp.type === 'internship';
            const isProject = exp.type === 'project';

            return (
              <div
                key={exp.id}
                className="relative group transition-all duration-300"
              >
                {/* Timeline Node Point with Pulsing Ring */}
                <div className="absolute -left-[30px] sm:-left-[38px] top-2 w-6 h-6 rounded-full bg-[#0d091f] border-2 border-purple-400 flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#120c27]/85 border border-purple-500/25 hover:border-purple-400/60 transition-all duration-300 shadow-[0_6px_24px_rgba(0,0,0,0.5)] group-hover:shadow-[0_12px_40px_rgba(147,51,234,0.25)] backdrop-blur-md">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        {/* Type Badge */}
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border flex items-center gap-1 ${
                            isInternship
                              ? 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                              : isProject
                              ? 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                              : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                          }`}
                        >
                          {isInternship && <Building2 className="w-3 h-3" />}
                          {isProject && <FolderGit2 className="w-3 h-3" />}
                          {!isInternship && !isProject && <GraduationCap className="w-3 h-3" />}
                          {exp.typeLabel[language]}
                        </span>

                        {exp.badge && (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                            {exp.badge[language]}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role[language]}
                      </h3>
                      <div className="text-sm font-semibold text-purple-300 mt-1">
                        {exp.company[language]}
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5 text-purple-300 bg-purple-950/50 px-2.5 py-1 rounded-md border border-purple-500/20">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        <span>{exp.location[language]}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                    {exp.description[language]}
                  </p>

                  {/* Key Highlights */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2 mb-6 p-4 rounded-[12px] bg-purple-950/30 border border-purple-500/20">
                      <div className="text-xs uppercase tracking-wider text-purple-300 font-mono font-semibold flex items-center gap-1.5 mb-2">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span>{language === 'zh' ? '关键成果与重点职责：' : 'Key Highlights & Responsibilities:'}</span>
                      </div>
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-gray-200">
                          <span className="text-purple-400 font-bold">•</span>
                          <p className="leading-relaxed">
                            {ach[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

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
            );
          })}
        </div>
      </div>
    </section>
  );
};
