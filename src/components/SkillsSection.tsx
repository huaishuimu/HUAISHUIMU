import React, { useState } from 'react';
import { Sparkles, Layers, Box, Cpu, Palette, Check, ShieldCheck, Compass } from 'lucide-react';
import { Language } from '../types';
import { skillDimensions, toolStacks } from '../data/portfolioData';

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection = ({ language }: SkillsSectionProps) => {
  const [activeDimension, setActiveDimension] = useState<string>(skillDimensions[0].id);

  const iconMap: Record<string, any> = {
    Layout: Layers,
    Boxes: Box,
    Sparkles: Cpu,
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
              <span>{language === 'zh' ? '能力矩阵 • CAPABILITIES' : 'CORE MATRIX • CAPABILITIES'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight leading-[1.08]">
              {language === 'zh' ? '全链路专业技能体系' : 'Craft & Expertise'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-gray-300 leading-relaxed">
            {language === 'zh'
              ? '跨越 UI/UX 产品架构、3D 潮玩建模、前沿 AIGC 生成流水线与品牌动态升级的复合型设计技能树。'
              : 'Holistic design engineering spanning UI/UX architecture, 3D character sculpting, AIGC workflows, and brand motion systems.'}
          </p>
        </div>

        {/* 4 Dimension Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillDimensions.map((dim) => {
            const Icon = iconMap[dim.icon] || Sparkles;
            const isCurrent = activeDimension === dim.id;

            return (
              <div
                key={dim.id}
                onClick={() => setActiveDimension(dim.id)}
                className={`p-6 sm:p-8 rounded-[16px] transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  isCurrent
                    ? 'bg-[#130d2a]/95 border-2 border-purple-400 shadow-[0_0_32px_rgba(168,85,247,0.3)] -translate-y-1'
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

                {/* Progress Indicators */}
                <div className="space-y-3.5">
                  {dim.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-purple-300 font-mono text-[11px] font-semibold">
                          {skill.tag[language]} • {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#191036] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-700"
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

        {/* Tools & Technologies Arsenal */}
        <div className="p-8 rounded-[16px] bg-[#0e0920]/80 border border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white text-glow-subtle">
                {language === 'zh' ? '设计与制作工具军械库' : 'Tooling & Production Arsenal'}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {language === 'zh' ? '每日高频高标准工业级输出' : 'High-frequency daily production stack'}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'zh' ? '全流程闭环交付' : 'Full Pipeline Competency'}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {toolStacks.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-[8px] bg-[#150f2e]/90 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_16px_rgba(168,85,247,0.2)] transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-[6px] bg-purple-950/70 text-purple-300 border border-purple-500/30">
                    {tool.proficiency}
                  </span>
                </div>
                <div className="text-[11px] text-gray-400 mt-2">
                  {tool.category[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
