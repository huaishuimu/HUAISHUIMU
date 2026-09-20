import React, { useState } from 'react';
import { Sparkles, Layers, Box, Cpu, Palette, Film, Music, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { skillDimensions } from '../data/portfolioData';

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection = ({ language }: SkillsSectionProps) => {
  const [activeDimension, setActiveDimension] = useState<string>(skillDimensions[0].id);

  const iconMap: Record<string, any> = {
    Layout: Layers,
    Boxes: Box,
    Sparkles: Sparkles,
    Feather: Palette,
  };

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10 border-t border-purple-900/30 bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300 font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{language === 'zh' ? '核心能力 • CAPABILITIES' : 'CORE MATRIX • CAPABILITIES'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight leading-[1.08]">
              {language === 'zh' ? '核心软件技能与把控度' : 'Software Mastery & Tool Proficiency'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-gray-300 leading-relaxed">
            {language === 'zh'
              ? '围绕四大专业维度，深度呈现对 Figma、Adobe全家桶、C4D/3D软件及前沿 AIGC 音视频制作工作流的精通把控。'
              : 'Detailed software proficiency across UI/UX, brand visuals, 3D modeling, and cutting-edge AIGC video & audio production.'}
          </p>
        </div>

        {/* 4 Dimension Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillDimensions.map((dim) => {
            const Icon = iconMap[dim.icon] || Sparkles;
            const isCurrent = activeDimension === dim.id;

            return (
              <div
                key={dim.id}
                onClick={() => setActiveDimension(dim.id)}
                className={`p-6 sm:p-8 rounded-[16px] transition-all duration-300 backdrop-blur-md ${
                  isCurrent
                    ? 'bg-[#130d2a]/95 border-2 border-purple-400 shadow-[0_0_32px_rgba(168,85,247,0.3)]'
                    : 'bg-[#120c27]/85 border border-purple-500/25 shadow-[0_6px_24px_rgba(0,0,0,0.5)] hover:border-purple-400/50 hover:bg-purple-950/40'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-[12px] bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30 font-semibold">
                    {dim.id}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {dim.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                  {dim.subtitle[language]}
                </p>

                {/* Software Mastery Progress Indicators */}
                <div className="space-y-4">
                  {dim.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-200 font-medium leading-tight">{skill.name}</span>
                        <span className="text-purple-300 font-mono text-[11px] font-semibold shrink-0 ml-2">
                          {skill.tag[language]} • {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#191036] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
