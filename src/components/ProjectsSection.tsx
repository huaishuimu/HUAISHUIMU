import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Layers, Box, Cpu, Palette, SlidersHorizontal } from 'lucide-react';
import { Project, ProjectCategory, Language } from '../types';
import { projectsData } from '../data/portfolioData';

interface ProjectsSectionProps {
  language: Language;
  selectedCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  onOpenProject: (project: Project) => void;
}

export const ProjectsSection = ({
  language,
  selectedCategory,
  onSelectCategory,
  onOpenProject,
}: ProjectsSectionProps) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const categories: { id: ProjectCategory; label: { zh: string; en: string }; icon: any }[] = [
    { id: 'all', label: { zh: '全部作品', en: 'All Works' }, icon: SlidersHorizontal },
    { id: 'ui', label: { zh: 'UI/UX 界面', en: 'UI/UX Design' }, icon: Layers },
    { id: 'ip', label: { zh: 'IP 形象潮玩', en: 'IP & 3D Design' }, icon: Box },
    { id: 'aigc', label: { zh: 'AIGC 视觉矩阵', en: 'AIGC Workflows' }, icon: Cpu },
    { id: 'brand', label: { zh: '品牌视觉重塑', en: 'Brand Identity' }, icon: Palette },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10 bg-transparent">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300 font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{language === 'zh' ? '作品案例集 • PORTFOLIO 2024–2026' : 'SELECTED WORKS • PORTFOLIO 2024–2026'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight leading-[1.08]">
              {language === 'zh' ? '多维设计实践与商业成果' : 'Multidimensional Design Craft'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-gray-300 leading-relaxed">
            {language === 'zh'
              ? '兼备理性 UX 交互架构与高辨识度视觉美学，覆盖企业级智能系统、3D潮玩、AIGC工业管线与品牌重塑。'
              : 'Spanning enterprise UI/UX interfaces, 3D character IP collectibles, production AIGC pipelines, and global brand overhauls.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 sm:gap-3">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const count = tab.id === 'all'
              ? projectsData.length
              : projectsData.filter((p) => p.category === tab.id).length;
            const isActive = selectedCategory === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.45)] border border-purple-400/40'
                    : 'bg-[#130d29]/80 hover:bg-purple-950/60 text-gray-300 hover:text-white border border-purple-500/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                <span>{tab.label[language]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/25 text-white' : 'bg-[#1e153f] text-purple-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isHovered = hoveredCardId === project.id;
            const isFeatured = project.featured && idx === 0 && selectedCategory === 'all';

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCardId(project.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => onOpenProject(project)}
                className={`group relative rounded-[16px] overflow-hidden bg-[#120c27]/85 border transition-all duration-500 cursor-pointer backdrop-blur-md ${
                  isFeatured ? 'md:col-span-2' : ''
                } ${
                  isHovered
                    ? 'border-purple-400/60 shadow-[0_16px_48px_rgba(147,51,234,0.3)] -translate-y-1'
                    : 'border-purple-500/25 shadow-[0_6px_24px_rgba(0,0,0,0.5)]'
                }`}
              >
                <div className={`flex flex-col ${isFeatured ? 'lg:flex-row' : ''} h-full`}>
                  {/* Visual Preview Container */}
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured ? 'lg:w-7/12 min-h-[320px] sm:min-h-[420px]' : 'w-full h-64 sm:h-72'
                    }`}
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title[language]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120c27] via-transparent to-transparent opacity-80" />

                    {/* Category & Year Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0d091f]/85 backdrop-blur-md border border-purple-500/30 text-purple-300 shadow-sm">
                        {project.categoryLabel[language]}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#0d091f]/80 backdrop-blur-md text-gray-300 border border-purple-500/20">
                        {project.year}
                      </span>
                    </div>

                    {/* Action Arrow Overlay Icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0d091f]/85 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`p-6 sm:p-7 flex flex-col justify-center ${
                      isFeatured ? 'lg:w-5/12' : 'w-full'
                    }`}
                  >
                    {/* Project Title */}
                    <h3
                      className="text-lg sm:text-xl font-extrabold px-3.5 py-1.5 rounded-[10px] w-fit mb-3 tracking-tight text-white bg-transparent shadow-none"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                      }}
                    >
                      {project.title[language]}
                    </h3>

                    {/* Capsule Tags (精简概括作品主要特点的胶囊标签) */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-3 py-1 rounded-full bg-purple-950/70 text-purple-200 border border-purple-500/30 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Summary (项目简介) */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-4">
                      {project.summary[language]}
                    </p>
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
