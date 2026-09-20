import { useEffect, useState } from 'react';
import { X, Printer, Phone, Mail, MapPin, Sparkles, GraduationCap, Briefcase, Award, Cpu, User, FileText, CheckCircle2, Globe, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, language, onClose }: ResumeModalProps) => {
  const [isWhitePaper, setIsWhitePaper] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[16px] transition-colors duration-300 shadow-[0_0_60px_rgba(124,58,237,0.35)] my-auto print:max-h-none print:shadow-none print:border-none print:w-full print:rounded-none ${
          isWhitePaper
            ? 'bg-[#ffffff] text-slate-900 border border-slate-300'
            : 'bg-[#100b24]/95 text-gray-100 border border-purple-500/30 backdrop-blur-xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md print:hidden ${
          isWhitePaper
            ? 'bg-white/95 border-slate-200'
            : 'bg-[#100b24]/90 border-purple-900/30'
        }`}>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium">
              {language === 'zh' ? '冯依然 · 个人简历' : 'Feng Yiran · Resume'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWhitePaper(!isWhitePaper)}
              className={`px-3 py-1.5 rounded-[8px] text-xs font-semibold border transition-all cursor-pointer ${
                isWhitePaper
                  ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                  : 'bg-purple-950/70 border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900'
              }`}
            >
              {isWhitePaper ? '切换深色模式' : '切换白纸视图'}
            </button>

            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[8px] text-xs font-semibold border transition-all cursor-pointer ${
                isWhitePaper
                  ? 'bg-purple-600 border-purple-600 text-white hover:bg-purple-700'
                  : 'bg-purple-600 border-purple-500 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.4)]'
              }`}
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '打印 / 导出 PDF' : 'Print / Export PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-[8px] border transition-all cursor-pointer ${
                isWhitePaper
                  ? 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900'
                  : 'bg-purple-950/70 border-purple-500/30 text-purple-300 hover:text-white'
              }`}
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body: Dual Column Layout Matching 简历新版.jpg */}
        <div className="p-6 sm:p-10 print:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Column (4 cols on desktop) */}
            <div className="md:col-span-4 space-y-7 border-b md:border-b-0 md:border-r pb-8 md:pb-0 md:pr-8 border-purple-900/30">
              {/* Profile Header */}
              <div className="text-center md:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl mx-auto md:mx-0 overflow-hidden mb-4 border-2 border-purple-400/40 shadow-[0_4px_20px_rgba(147,51,234,0.25)] bg-[#0d091f] flex items-center justify-center">
                  <img
                    src="/avatar.jpg"
                    alt="冯依然 证件照"
                    className="w-full h-full object-cover object-top select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  冯依然
                </h1>
                <p className={`text-xs font-mono mt-0.5 ${isWhitePaper ? 'text-slate-500' : 'text-purple-300'}`}>
                  Feng Yiran
                </p>
                <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${
                  isWhitePaper
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-purple-950/80 text-purple-300 border border-purple-500/40'
                }`}>
                  求职意向：UI设计师 / 视觉设计师
                </div>
              </div>

              {/* 个人评价 */}
              <div>
                <h2 className={`text-xs uppercase font-mono font-bold tracking-wider mb-2.5 pb-1 border-b ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-400 border-purple-900/40'
                }`}>
                  个人评价
                </h2>
                <p className={`text-xs sm:text-[13px] leading-relaxed text-justify ${
                  isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                }`}>
                  具备UI与视觉双栖背景的专业设计师。拥有3个独立UI项目及海量视觉物料设计经验。精通各类设计软件，并能深度运用AIGC工具实现商业化量产。
                </p>
                <p className={`text-xs sm:text-[13px] leading-relaxed text-justify mt-2 ${
                  isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                }`}>
                  擅长平衡设计美学与业务需求，具备极强的逻辑拆解能力与执行效率。能与产品及研发团队无缝对接，是一位懂产品逻辑、懂用户心理、且具备未来技术视野的协作伙伴。
                </p>
              </div>

              {/* 教育背景 */}
              <div>
                <h2 className={`text-xs uppercase font-mono font-bold tracking-wider mb-2.5 pb-1 border-b ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-400 border-purple-900/40'
                }`}>
                  教育背景
                </h2>
                <div className="space-y-2 text-xs sm:text-[13px]">
                  <div className="flex justify-between font-bold">
                    <span>武汉科技大学</span>
                    <span className="font-mono text-purple-400 text-xs">本科在读</span>
                  </div>
                  <div className={isWhitePaper ? 'text-slate-600' : 'text-gray-300'}>
                    <span className="font-medium">专业：</span>视觉传达（23届本科生）
                  </div>
                  <div className={isWhitePaper ? 'text-slate-600' : 'text-gray-300'}>
                    <span className="font-medium">绩点：</span>
                    <span className="font-semibold text-purple-400">3.5</span> (专业前10%)
                  </div>
                  <div className={isWhitePaper ? 'text-slate-600' : 'text-gray-300'}>
                    <span className="font-medium">政治面貌：</span>中共党员
                  </div>
                  <div className={isWhitePaper ? 'text-slate-600' : 'text-gray-300'}>
                    <span className="font-medium">职位：</span>学院新媒体中心主任
                  </div>
                  <div className="pt-1">
                    <span className="font-medium block mb-1">主修课程：</span>
                    <p className={`text-xs leading-relaxed ${isWhitePaper ? 'text-slate-600' : 'text-gray-400'}`}>
                      AIGC数字设计，UI设计，品牌设计，插画设计，IP形象设计，C4D三维设计，字体设计
                    </p>
                  </div>
                </div>
              </div>

              {/* 联系方式 */}
              <div>
                <h2 className={`text-xs uppercase font-mono font-bold tracking-wider mb-2.5 pb-1 border-b ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-400 border-purple-900/40'
                }`}>
                  联系方式
                </h2>
                <div className="space-y-2 text-xs sm:text-[13px]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="font-mono">15827658825</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="font-mono">3251908480@qq.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="font-mono">微信：Qwerndkljaol</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <a
                      href="https://www.zcool.com.cn/u/ZMTEyMjc4Mjg4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline font-mono text-[11px] break-all"
                    >
                      站酷主页 ↗
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>湖北省武汉市</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (8 cols on desktop) */}
            <div className="md:col-span-8 space-y-8">
              {/* 项目经历 */}
              <div>
                <h2 className={`text-sm uppercase font-mono font-bold tracking-wider mb-4 pb-1.5 border-b flex items-center justify-between ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-300 border-purple-900/40'
                }`}>
                  <span>项目经历</span>
                  <span className="text-[11px] font-normal text-gray-400">PROJECTS</span>
                </h2>

                <div className="space-y-5">
                  {/* 项目 1 */}
                  <div className={`p-4 rounded-[12px] border ${
                    isWhitePaper ? 'bg-slate-50 border-slate-200' : 'bg-[#150f2e]/70 border-purple-500/25'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className="font-bold text-sm sm:text-base text-purple-300">
                        睿云云平台(课程云实验网站)UI设计与迭代
                      </h3>
                      <span className="text-xs font-mono text-gray-400 shrink-0">
                        武大数智有限公司 • 2026.05-2026.07
                      </span>
                    </div>
                    <p className={`text-xs sm:text-[13px] leading-relaxed text-justify ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      包括【登录/注册页、积分充值、套餐详情、收银台/支付页面、个人中心】等核心高频页面的设计与改版；补充绘制产品统一的系统图标与业务场景插图；完成全量页面的精确切图与标注，制定动效及交互状态说明。UI界面设计推演严谨、细节到位，最终交付的页面均达到导师可直接复用的高标准，基本无返工，大幅缩短了设计走查周期。
                    </p>
                  </div>

                  {/* 项目 2 */}
                  <div className={`p-4 rounded-[12px] border ${
                    isWhitePaper ? 'bg-slate-50 border-slate-200' : 'bg-[#150f2e]/70 border-purple-500/25'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className="font-bold text-sm sm:text-base text-purple-300">
                        通义千问 APP 改版设计 (AIOS 转型)
                      </h3>
                      <span className="text-xs font-mono text-gray-400 shrink-0">
                        2026.03-2026.04
                      </span>
                    </div>
                    <p className={`text-xs sm:text-[13px] leading-relaxed text-justify mb-2 ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      主导从“对话框”向“AI 操作系统”升级，设计多协作系统和可视化“记忆管理系统”，运用动态反馈优化复杂认知的认知成本。制定 AI 组件规范，利用 AIGC 工作流实时生成 UI 材质与 IP 形象。
                    </p>
                    <p className={`text-xs sm:text-[13px] leading-relaxed ${
                      isWhitePaper ? 'text-purple-800' : 'text-purple-300'
                    }`}>
                      <span className="font-bold">项目成果：</span>成功打造“数字人伙伴”体系，实现品牌升维；缩短 25% 研发迭代周期，确保了视觉差异化竞争优势。
                    </p>
                  </div>

                  {/* 项目 3 */}
                  <div className={`p-4 rounded-[12px] border ${
                    isWhitePaper ? 'bg-slate-50 border-slate-200' : 'bg-[#150f2e]/70 border-purple-500/25'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className="font-bold text-sm sm:text-base text-purple-300">
                        淘宝情人节促销活动UI界面设计
                      </h3>
                      <span className="text-xs font-mono text-gray-400 shrink-0">
                        2025.11-2025.12
                      </span>
                    </div>
                    <p className={`text-xs sm:text-[13px] leading-relaxed text-justify mb-2 ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      搭建模块化组件库，实现 H5、小程序、App 多端视觉高度同步。引入 AIGC工作流替代传统绘图，高效产出高质量 3D 材质与复杂大促场景。优化瀑布流与金刚位逻辑。
                    </p>
                    <p className={`text-xs sm:text-[13px] leading-relaxed ${
                      isWhitePaper ? 'text-purple-800' : 'text-purple-300'
                    }`}>
                      <span className="font-bold">项目成果：</span>团队制图效率提升 40%，产出效率提升 30% 以上；通过设计手段有效缩短转化链路，提升了用户沉浸感。
                    </p>
                  </div>
                </div>
              </div>

              {/* 实习经历 */}
              <div>
                <h2 className={`text-sm uppercase font-mono font-bold tracking-wider mb-4 pb-1.5 border-b flex items-center justify-between ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-300 border-purple-900/40'
                }`}>
                  <span>实习经历</span>
                  <span className="text-[11px] font-normal text-gray-400">INTERNSHIPS</span>
                </h2>

                <div className="space-y-4">
                  {/* 实习 1 */}
                  <div className={`p-4 rounded-[12px] border ${
                    isWhitePaper ? 'bg-slate-50 border-slate-200' : 'bg-[#150f2e]/70 border-purple-500/25'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className="font-bold text-sm sm:text-base text-white">
                        中国科学院软件研究所
                      </h3>
                      <span className="text-xs font-mono text-purple-400 shrink-0">
                        2026.08-至今
                      </span>
                    </div>
                    <p className={`text-xs sm:text-[13px] leading-relaxed text-justify ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      负责军工系统及数据中台产品的界面视觉与交互设计。深度参与需求梳理与原型评审，结合复杂业务场景优化界面布局与操作逻辑，输出高保真设计方案并跟进前端开发。参与产品视觉风格迭代与组件库搭建，统一多模块视觉体系以提升设计交付效率。与产品经理、前端工程师紧密协作，精准解决设计与开发过程中的适配及交互细节问题。
                    </p>
                  </div>

                  {/* 实习 2 */}
                  <div className={`p-4 rounded-[12px] border ${
                    isWhitePaper ? 'bg-slate-50 border-slate-200' : 'bg-[#150f2e]/70 border-purple-500/25'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className="font-bold text-sm sm:text-base text-white">
                        武大数智教育有限公司
                      </h3>
                      <span className="text-xs font-mono text-gray-400 shrink-0">
                        2026.06-2026.08
                      </span>
                    </div>
                    <p className={`text-xs sm:text-[13px] leading-relaxed text-justify mb-2 ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      负责公司主要产品睿云（AI云端实验平台）页面的优化（如积分详情页，个人中心页，支付页面等），熟练复用组件库进行设计以及图标绘制，设计细节到位并精准切图交付研发团队，基本无返工，极大降低团队的沟通及走查成本；
                    </p>
                    <p className={`text-xs sm:text-[13px] leading-relaxed text-justify ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      负责设计公司企业文化墙，产品发布大会ppt页面以及产品宣传手册等，排版设计与商务视觉输出符合政企高校规格，获得领导好评。
                    </p>
                  </div>
                </div>
              </div>

              {/* 校园经历 */}
              <div>
                <h2 className={`text-sm uppercase font-mono font-bold tracking-wider mb-3 pb-1.5 border-b flex items-center justify-between ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-300 border-purple-900/40'
                }`}>
                  <span>校园经历</span>
                  <span className="text-[11px] font-normal text-gray-400">CAMPUS</span>
                </h2>
                <div className={`p-4 rounded-[12px] border ${
                  isWhitePaper ? 'bg-slate-50 border-slate-200' : 'bg-[#150f2e]/70 border-purple-500/25'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      艺术与设计学院新媒体中心主任
                    </h3>
                    <span className="text-xs font-mono text-purple-400 shrink-0">
                      2025.5-至今
                    </span>
                  </div>
                  <p className={`text-xs sm:text-[13px] leading-relaxed text-justify ${
                    isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                  }`}>
                    <span className="font-semibold">团队统筹与流程优化：</span>负责学院全媒体矩阵(微信、抖音、视频号)的运营决策，主导建立了示范化的选题与作品产出流程，显著提升了学院特色辨识度，通过数据分析复盘点击率与转化率，通过内容调优实现流量增长，多个作品获得校级好评，锻炼了我的洞察力与运营思维。
                  </p>
                </div>
              </div>

              {/* 获奖信息 */}
              <div>
                <h2 className={`text-sm uppercase font-mono font-bold tracking-wider mb-3 pb-1.5 border-b flex items-center justify-between ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-300 border-purple-900/40'
                }`}>
                  <span>获奖信息</span>
                  <span className="text-[11px] font-normal text-gray-400">AWARDS</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px]">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>米兰设计周国家级三等奖</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>米兰设计周省级一等奖</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>大广赛省级三等奖</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>ncda未来设计师省级三等奖</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>华灿奖省级三等奖</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>“互联网+”大学生创新创业竞赛校级金奖</span>
                  </div>
                </div>
              </div>

              {/* 相关技能 */}
              <div>
                <h2 className={`text-sm uppercase font-mono font-bold tracking-wider mb-3 pb-1.5 border-b flex items-center justify-between ${
                  isWhitePaper ? 'text-purple-700 border-purple-200' : 'text-purple-300 border-purple-900/40'
                }`}>
                  <span>相关技能</span>
                  <span className="text-[11px] font-normal text-gray-400">SKILLS</span>
                </h2>
                <div className="space-y-3 text-xs sm:text-[13px]">
                  <div>
                    <h4 className="font-bold text-purple-300 mb-1">
                      · Figma. stitch. canvas. Adobe Photoshop. Illustrator
                    </h4>
                    <p className={`leading-relaxed text-justify ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      具备完整的UI/UX全流程设计经验，擅长B2B效率工具及移动端电商应用设计；熟悉Web/iOS/Android设计规范，能独立完成高保真原型、交互动效及多端适配。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-300 mb-1">
                      · MJ/SD/Liblib/Kling/Runway/Suno
                    </h4>
                    <p className={`leading-relaxed text-justify ${
                      isWhitePaper ? 'text-slate-700' : 'text-gray-300'
                    }`}>
                      精通Midjourney(提示词工程/风格一致性控制)、Stable Diffusion(ControlNet 构图控制/ LORA模型训练)。熟练运用Kling/Runway 等工具进行AI视频生成;运用Liblib/Pika探索AI短剧创作;利用Suno进行商业短视频配乐及MV 创作。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
