import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, RotateCcw, Sparkles, ChevronDown, MessageSquare, ExternalLink, User } from 'lucide-react';
import { Language } from '../types';
import { designerProfile } from '../data/portfolioData';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

interface AiChatWidgetProps {
  language: Language;
  onOpenResume?: () => void;
}

export const AiChatWidget = ({ language, onOpenResume }: AiChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: language === 'zh'
        ? `您好！我是依然的 AI 智能分身，已深度接入 **Gemini 2.5 Pro** 并完整掌握我的简历履历与作品体系。\n\n您可以向我了解我的**求职意向（UI/视觉设计）**、**中科院软件所及武大数智实习经历**、**速合S-Link/通义千问等核心项目落地**、**国家级设计大奖**或 **AIGC 生产力工作流**，也欢迎直接向我提出任何面试提问！`
        : `Hello! I am Feng Yiran's AI digital persona powered by **Gemini 2.5 Pro**, trained on my complete portfolio and professional background.\n\nFeel free to ask about my target roles (UI/Visual Design), internships at ISCAS and Wuhan University Digital Education, key design projects, national awards, or my AIGC commercial workflows!`,
      time: '刚刚',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const quickPrompts = language === 'zh' ? [
    { label: '🎯 求职意向与优势', text: '请介绍一下你的求职意向以及相比其他设计师的核心优势？' },
    { label: '🏛️ 中科院软件所实习', text: '你在中国科学院软件研究所主要负责什么？有哪些代表性成果？' },
    { label: '🚀 通义千问 APP 改版', text: '在通义千问 APP 改版项目中，你是如何运用 AIGC 与数字人理念的？' },
    { label: '🏆 所获设计大奖', text: '你获得过哪些国家级或省级的权威设计奖项？' },
    { label: '📱 如何联系依然本人', text: '如何联系到依然本人进行面试或项目沟通？' },
  ] : [
    { label: '🎯 Target Roles & Strengths', text: 'What are your target roles and key competitive strengths as a designer?' },
    { label: '🏛️ ISCAS Internship', text: 'What were your responsibilities and achievements at the Institute of Software, CAS?' },
    { label: '🚀 Qwen AIOS Project', text: 'How did you incorporate AIGC and digital avatar pipelines into the Tongyi Qwen redesign?' },
    { label: '🏆 Design Awards', text: 'What national and provincial design awards have you won?' },
    { label: '📱 Contact Information', text: 'How can I get in touch with Feng Yiran directly for an interview?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInput('');
    setIsLoading(true);

    try {
      // Build history for backend
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.content,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      const replyContent = data.reply || (language === 'zh'
        ? '抱歉，刚才网络稍微走神了一下，您可以稍后重试或加我的微信（Qwerndkljaol）与我本人联系！'
        : 'Apologies, temporary network pause. Feel free to retry or connect via WeChat: Qwerndkljaol!');

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyContent,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: language === 'zh'
          ? `非常抱歉，网络暂时抖动。但我已为您准备好精简答案：\n\n- **求职意向**：UI设计师 / 视觉设计师\n- **核心经历**：中科院软件所（军工/数据中台交互）、武大数智（睿云实验平台改版）\n- **学术荣誉**：武汉科技大学视觉传达专业前10%（绩点3.5）、中共党员、米兰设计周国家级三等奖\n- **联系方式**：电话 15827658825，微信 Qwerndkljaol。欢迎直接加微信与我沟通！`
          : `Network hiccup. Summary: Target UI/Visual Designer, GPA 3.5 Top 10% Wuhan Tech, Milan Design Week National 3rd Prize, Intern at Chinese Academy of Sciences (ISCAS). Reach me at 15827658825 or WeChat: Qwerndkljaol!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: language === 'zh'
          ? '对话已重置。您可以随时向我了解任何关于依然的简历与作品集问题！'
          : 'Conversation reset. Ask me anything about Feng Yiran\'s resume and design portfolio!',
        time: '刚刚',
      },
    ]);
  };

  // Helper to render simple markdown formatting (bold and lists)
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      // Bold replacer: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-white tracking-wide">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        return (
          <div key={lIdx} className="flex items-start gap-1.5 my-1">
            <span className="text-purple-400 mt-0.5">•</span>
            <span className="flex-1">{renderedParts}</span>
          </div>
        );
      }

      if (/^\d+\.\s/.test(line.trim())) {
        return (
          <div key={lIdx} className="my-1 pl-1">
            {renderedParts}
          </div>
        );
      }

      return (
        <p key={lIdx} className={line.trim() === '' ? 'h-2' : 'my-0.5'}>
          {renderedParts}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Entry Trigger Button at Bottom Right (首页右下角入口) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        {!isOpen && hasUnread && (
          <div className="hidden sm:flex items-center gap-1.5 mr-3 px-3 py-1.5 rounded-full bg-[#180e38]/95 border border-purple-500/40 text-purple-200 text-xs font-mono shadow-[0_4px_20px_rgba(147,51,234,0.35)] animate-bounce backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{language === 'zh' ? '点击向我提问关于简历' : 'Ask AI About My Resume'}</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close AI Chat' : 'Open AI Chat'}
          className={`group relative flex items-center gap-2.5 p-2.5 sm:px-4 sm:py-3 rounded-full border transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.45)] cursor-pointer backdrop-blur-xl ${
            isOpen
              ? 'bg-purple-950/90 border-purple-400 text-white scale-100'
              : 'bg-gradient-to-r from-[#170e34] via-[#22124d] to-[#120a2e] hover:from-[#241355] hover:to-[#1c0f44] border-purple-500/60 text-purple-200 hover:text-white hover:scale-105'
          }`}
        >
          {/* Avatar with glowing ring and online badge */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-400/60 shadow-inner shrink-0">
            <img
              src={designerProfile.avatar || '/avatar.jpg'}
              alt="冯依然 AI"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#07050e]" />
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold tracking-wide text-white">
                {language === 'zh' ? '冯依然 · AI 分身' : 'Yiran AI Persona'}
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-cyan-300 border border-cyan-400/30 font-mono">
                Gemini 2.5 Pro
              </span>
            </div>
            <span className="text-[10px] text-purple-300/80 font-mono">
              {language === 'zh' ? '简历智能答疑 · 随时交流' : 'Interactive Resume Assistant'}
            </span>
          </div>

          <div className="sm:hidden flex items-center justify-center">
            {isOpen ? <X className="w-5 h-5 text-purple-300" /> : <Bot className="w-5 h-5 text-purple-300" />}
          </div>
        </button>
      </div>

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[440px] max-h-[82vh] h-[600px] flex flex-col rounded-[20px] bg-[#0d0822]/95 border border-purple-500/40 shadow-[0_16px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(147,51,234,0.25)] backdrop-blur-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-[#170e38] via-[#1f1147] to-[#140b30] border-b border-purple-500/25 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-purple-400/50 shadow-md">
                <img
                  src={designerProfile.avatar || '/avatar.jpg'}
                  alt="冯依然"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#170e38]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {language === 'zh' ? '冯依然 (AI 角色扮演)' : 'Feng Yiran (AI Persona)'}
                  </h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-[#dda6ff] border border-purple-400/30 font-mono">
                    Gemini 2.5 Pro
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{language === 'zh' ? '在线 · 已学习完整简历档案' : 'Online · Resume Knowledge Ready'}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title={language === 'zh' ? '重新开始对话' : 'Reset Conversation'}
                className="p-1.5 rounded-[8px] text-gray-400 hover:text-purple-300 hover:bg-purple-950/60 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title={language === 'zh' ? '关闭' : 'Close'}
                className="p-1.5 rounded-[8px] text-gray-400 hover:text-white hover:bg-purple-950/60 transition-colors cursor-pointer"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Resume Link Banner */}
          <div className="px-4 py-2 bg-[#120a28] border-b border-purple-900/40 flex items-center justify-between text-xs font-mono text-purple-300/90 shrink-0">
            <span className="flex items-center gap-1 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{language === 'zh' ? '支持提问实习、项目、技能与奖项' : 'Ask about ISCAS, Qwen, skills & awards'}</span>
            </span>
            {onOpenResume && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="text-[11px] text-cyan-300 hover:text-cyan-200 underline flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{language === 'zh' ? '查看纸质简历' : 'View Full CV'}</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Chat Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-[13px] leading-relaxed select-text">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-purple-400/40 shrink-0 mt-0.5">
                    <img
                      src={designerProfile.avatar || '/avatar.jpg'}
                      alt="冯依然"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-[14px] px-3.5 py-2.5 shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none'
                      : 'bg-[#181035] border border-purple-500/25 text-gray-200 rounded-tl-none'
                  }`}
                >
                  <div className="break-words">
                    {msg.role === 'assistant' ? renderFormattedText(msg.content) : msg.content}
                  </div>
                  <div
                    className={`mt-1 text-[10px] font-mono text-right ${
                      msg.role === 'user' ? 'text-purple-200/70' : 'text-gray-400'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-purple-900/70 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5 text-purple-200">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-purple-400/40 shrink-0 mt-0.5">
                  <img
                    src={designerProfile.avatar || '/avatar.jpg'}
                    alt="冯依然"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="rounded-[14px] rounded-tl-none bg-[#181035] border border-purple-500/25 px-4 py-3 text-purple-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  <span className="text-xs font-mono">{language === 'zh' ? '依然正在组织回答...' : 'Yiran is typing...'}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3 py-2 bg-[#100926]/90 border-t border-purple-900/40 shrink-0">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              {quickPrompts.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(qp.text)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 hover:text-white border border-purple-500/25 transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {qp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#130b2c] border-t border-purple-500/25 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === 'zh' ? '向冯依然提问简历、项目或技能...' : 'Ask Feng Yiran about resume or projects...'}
              disabled={isLoading}
              className="flex-1 bg-[#090516] border border-purple-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-[13px] text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
