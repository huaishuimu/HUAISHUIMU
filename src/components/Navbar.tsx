import { useState, useEffect } from 'react';
import { Menu, X, FileText, Globe, Sparkles, Send } from 'lucide-react';
import { Language } from '../types';
import { designerProfile } from '../data/portfolioData';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar = ({
  language,
  onToggleLanguage,
  onOpenResume,
  onOpenContact,
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', label: language === 'zh' ? '作品案例' : 'Projects' },
    { href: '#experience', label: language === 'zh' ? '工作经历' : 'Experience' },
    { href: '#skills', label: language === 'zh' ? '核心能力' : 'Capabilities' },
    { href: '#education', label: language === 'zh' ? '学历背景' : 'Education' },
    { href: '#contact', label: language === 'zh' ? '联系方式' : 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 transition-all duration-300">
      <div
        className={`w-full max-w-6xl rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#0d091f]/85 backdrop-blur-xl border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-[#0a0718]/65 backdrop-blur-md border-purple-500/15 shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
        }`}
      >
        {/* Brand / Designer Identity */}
        <div
          className="flex items-center gap-2.5 group cursor-default"
          id="nav-logo-link"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_14px_rgba(168,85,247,0.4)] shrink-0 overflow-visible">
            <img
              src={designerProfile.avatar || '/avatar.jpg'}
              alt={designerProfile.name[language]}
              className="w-full h-full rounded-full object-cover object-top select-none"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors drop-shadow-[0_0_12px_rgba(192,132,252,0.3)]">
              {designerProfile.name[language]}
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-tight">
              {language === 'zh' ? 'UI / 视觉设计' : 'UI & Visual'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-gray-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-purple-900/35 hover:text-purple-200 hover:shadow-[0_0_14px_rgba(168,85,247,0.2)] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Lang Switch + Resume Button + Contact CTA */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            id="nav-lang-toggle"
            className="flex items-center gap-1 text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-full bg-[#150e29]/70 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-950/50 transition-all cursor-pointer"
            title="Toggle Language / 切换语言"
          >
            <Globe className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold">{language === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-200 hover:text-white px-3.5 py-1.5 rounded-full bg-purple-950/45 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/50 hover:shadow-[0_0_16px_rgba(168,85,247,0.25)] transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>{language === 'zh' ? '在线简历' : 'Resume'}</span>
          </button>

          {/* Quick Contact CTA with 8px border radius */}
          <button
            onClick={onOpenContact}
            id="nav-contact-btn"
            className="flex items-center gap-1.5 text-xs font-bold text-white px-4 py-1.5 rounded-[8px] bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_2px_16px_rgba(124,58,237,0.4)] hover:shadow-[0_4px_22px_rgba(147,51,234,0.6)] cursor-pointer active:scale-95"
          >
            <Send className="w-3 h-3" />
            <span>{language === 'zh' ? '联系合作' : 'Contact'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleLanguage}
            className="text-xs text-gray-300 px-2 py-1 rounded-full bg-[#150e29] border border-purple-500/20"
          >
            {language === 'zh' ? 'EN' : '中'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-1.5 rounded-lg text-gray-300 hover:text-white bg-[#150e29] border border-purple-500/20"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden fixed inset-x-4 top-20 p-5 rounded-2xl bg-[#0d091e]/95 border border-purple-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-200 hover:text-purple-300 py-2 border-b border-purple-900/30"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-purple-200 py-2.5 rounded-[8px] bg-purple-950/60 border border-purple-500/30 hover:bg-purple-900/60"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>{language === 'zh' ? '查看完整履历' : 'View Resume'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 text-xs font-bold text-white py-2.5 rounded-[8px] bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>{language === 'zh' ? '立即洽谈' : 'Get in Touch'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
