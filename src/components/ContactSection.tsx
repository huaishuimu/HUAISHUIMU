import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MapPin, MessageSquare, ArrowUpRight, Heart } from 'lucide-react';
import { Language } from '../types';
import { designerProfile } from '../data/portfolioData';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'ui',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designerProfile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText(designerProfile.contact.wechat);
    setCopiedWeChat(true);
    setTimeout(() => setCopiedWeChat(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <footer id="contact" className="relative pt-20 sm:pt-28 pb-12 px-4 sm:px-6 z-10 border-t border-purple-900/30 bg-transparent overflow-hidden">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300 font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{language === 'zh' ? '开启合作 • LET’S CONNECT' : 'COLLABORATION • LET’S CONNECT'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-glow-white tracking-tight mb-4 leading-[1.08]">
            {language === 'zh' ? '共同创造具有先锋影响力的数字杰作' : 'Let’s Build Something Remarkable Together'}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            {language === 'zh'
              ? '无论是全链路产品界面架构、3D IP形象定制、商业级AIGC流搭建，还是品牌全面视觉重塑，期待与您对话。'
              : 'Available for design leadership, full-stack UI/UX architecture, 3D character IP creation, and production AIGC pipelines.'}
          </p>
        </div>

        {/* Contact Grid: Direct Channels & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Email Card with 1-click copy */}
              <div className="p-5 rounded-[16px] bg-[#120c27]/85 border border-purple-500/25 shadow-[0_6px_24px_rgba(0,0,0,0.5)] hover:border-purple-400/50 backdrop-blur-md transition-all">
                <span className="text-[11px] text-purple-300 font-mono uppercase tracking-wider font-semibold">
                  {language === 'zh' ? '官方商务邮箱 (Direct Email)' : 'Direct Inquiries'}
                </span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide truncate mr-2">
                    {designerProfile.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-[8px] bg-purple-950/70 hover:bg-purple-900/80 border border-purple-500/30 text-purple-300 hover:text-white transition-all shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-400 mt-1 block font-medium">
                    ✓ {language === 'zh' ? '邮箱已成功复制到剪贴板' : 'Email copied to clipboard!'}
                  </span>
                )}
              </div>

              {/* WeChat & Location Card */}
              <div className="p-5 rounded-[16px] bg-[#120c27]/85 border border-purple-500/25 shadow-[0_6px_24px_rgba(0,0,0,0.5)] hover:border-purple-400/50 backdrop-blur-md transition-all">
                <span className="text-[11px] text-purple-300 font-mono uppercase tracking-wider font-semibold">
                  {language === 'zh' ? '即时通讯与坐标' : 'Direct Message & Location'}
                </span>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-mono">WeChat / 微信：</span>
                    <span className="text-sm font-bold text-white">{designerProfile.contact.wechat}</span>
                  </div>
                  <button
                    onClick={handleCopyWeChat}
                    className="p-2 rounded-[8px] bg-purple-950/70 hover:bg-purple-900/80 border border-purple-500/30 text-purple-300 hover:text-white transition-all shrink-0 cursor-pointer"
                    title="Copy WeChat"
                  >
                    {copiedWeChat ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedWeChat && (
                  <span className="text-[11px] text-emerald-400 mt-1 block font-medium">
                    ✓ {language === 'zh' ? '微信号已成功复制' : 'WeChat ID copied!'}
                  </span>
                )}

                <div className="flex items-center gap-2 text-xs text-gray-400 mt-3 pt-3 border-t border-purple-900/30">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{designerProfile.contact.location[language]}</span>
                </div>
              </div>
            </div>

            {/* Social Links Matrix */}
            <div>
              <span className="text-xs uppercase tracking-wider text-purple-300 font-mono block mb-3 font-semibold">
                {language === 'zh' ? '设计作品集主页与社交矩阵' : 'Design Portfolios & Socials'}
              </span>
              <div className="flex flex-wrap gap-2">
                {designerProfile.contact.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-[#150f2e] hover:bg-purple-950/70 border border-purple-500/20 hover:border-purple-400/50 text-xs text-gray-300 hover:text-white transition-all hover:scale-105"
                  >
                    <span>{soc.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-purple-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Interactive Message Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[16px] bg-[#120c27]/90 border border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                {language === 'zh' ? '发送即时项目意向' : 'Send a Project Inquiry'}
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                {language === 'zh' ? '通常在 24 小时内获得详细设计回复与排期沟通。' : 'Expect a thoughtful response within 24 hours.'}
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-[16px] bg-purple-950/50 border border-purple-500/30 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {language === 'zh' ? '信息已成功投递！' : 'Inquiry Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto mb-4">
                    {language === 'zh'
                      ? '感谢您的关注，Fengyiran 会尽快查阅您的项目需求并提供设计方案沟通。'
                      : 'Thank you for reaching out. Fengyiran will review your inquiry and follow up promptly.'}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', type: 'ui', message: '' });
                    }}
                    className="text-xs text-purple-300 hover:text-white font-semibold underline cursor-pointer"
                  >
                    {language === 'zh' ? '发送另一条消息' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-300 font-medium mb-1.5">
                        {language === 'zh' ? '您的称呼 (Your Name) *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'zh' ? '例如：张先生 / Alex' : 'e.g. Alex Taylor'}
                        className="w-full px-4 py-2.5 rounded-[8px] bg-[#0b0717]/80 border border-purple-500/25 focus:bg-[#100b21] focus:border-purple-400 focus:outline-none text-xs text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-gray-300 font-medium mb-1.5">
                        {language === 'zh' ? '电子邮箱 (Your Email) *' : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-[8px] bg-[#0b0717]/80 border border-purple-500/25 focus:bg-[#100b21] focus:border-purple-400 focus:outline-none text-xs text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 font-medium mb-1.5">
                      {language === 'zh' ? '意向项目类别 (Project Dimension)' : 'Project Category'}
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-[8px] bg-[#0b0717]/80 border border-purple-500/25 focus:bg-[#100b21] focus:border-purple-400 focus:outline-none text-xs text-white"
                    >
                      <option value="ui" className="bg-[#120c27] text-white">{language === 'zh' ? 'UI/UX 界面体验与设计系统' : 'UI/UX & Design Systems'}</option>
                      <option value="ip" className="bg-[#120c27] text-white">{language === 'zh' ? '3D IP 形象孵化与潮玩衍生' : '3D IP & Toy Collectibles'}</option>
                      <option value="aigc" className="bg-[#120c27] text-white">{language === 'zh' ? 'AIGC 工业化落地与定制LoRA' : 'AIGC Pipelines & LoRA Fine-tuning'}</option>
                      <option value="brand" className="bg-[#120c27] text-white">{language === 'zh' ? '品牌视觉升级与动态规范' : 'Brand Identity & Motion Systems'}</option>
                      <option value="career" className="bg-[#120c27] text-white">{language === 'zh' ? '全职 / 顾问职位招募机会' : 'Full-time / Strategic Advisory'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 font-medium mb-1.5">
                      {language === 'zh' ? '项目简述或留言 (Project Brief) *' : 'Message or Project Scope *'}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'zh'
                          ? '简要描述您的项目目标、时间节点或合作形式...'
                          : 'Share a brief summary of your project, target timeline, or vision...'
                      }
                      className="w-full px-4 py-2.5 rounded-[8px] bg-[#0b0717]/80 border border-purple-500/25 focus:bg-[#100b21] focus:border-purple-400 focus:outline-none text-xs text-white placeholder-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-[8px] bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-[16px] tracking-wide shadow-[0_4px_20px_rgba(124,58,237,0.45)] hover:shadow-[0_6px_28px_rgba(168,85,247,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'zh' ? '提交项目需求' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <span>© 2024–2026 {designerProfile.name[language]}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-purple-300 font-medium">
            <span>Fengyiran • UX & Visual Design Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
