import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language, ProjectCategory, Project } from './types';
import { ParallaxGlow } from './components/ParallaxGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { AiChatWidget } from './components/AiChatWidget';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#07050e] text-[#f4f4f5] selection:bg-purple-600/40 selection:text-purple-200 font-sans">
      {/* Background Luminescent Diffused Light Blooms */}
      <ParallaxGlow />

      {/* Floating Glass Navigation */}
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero
          language={language}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ProjectsSection
          language={language}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        <ExperienceSection language={language} />

        <SkillsSection language={language} />

        <EducationSection language={language} />

        <ContactSection language={language} />
      </main>

      {/* Floating Back-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-22 right-6 z-30 p-2.5 rounded-full bg-[#130d27]/85 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white shadow-[0_4px_24px_rgba(147,51,234,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer animate-in fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* AI Persona Floating Chat Widget (Gemini 2.5 Pro 角色扮演智能问答) */}
      <AiChatWidget
        language={language}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
      />

      {/* Online Resume Modal (CV Printable Sheet) */}
      <ResumeModal
        isOpen={isResumeOpen}
        language={language}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
