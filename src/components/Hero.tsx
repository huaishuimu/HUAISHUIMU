import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { Language, ProjectCategory } from '../types';
import card1Img from '../assets/images/regenerated_image_1790124919848.png';
import card2Img from '../assets/images/regenerated_image_1790124924991.png';
import card3Img from '../assets/images/regenerated_image_1790124922846.png';
import card4Img from '../assets/images/regenerated_image_1790124916164.png';
import card5Img from '../assets/images/regenerated_image_1790124911271.png';

interface HeroProps {
  language: Language;
  onSelectCategory?: (cat: ProjectCategory) => void;
  onOpenResume?: () => void;
}

interface ImageCardData {
  id: string;
  title: string;
  categoryZh: string;
  categoryEn: string;
  imgUrl: string;
  initRotate: number;
  initX: number;
  initY: number;
  targetScatter: {
    x: number;
    y: number;
    rotate: number;
  };
  zIndex: number;
}

const CARDS: ImageCardData[] = [
  {
    id: 's-link-pm',
    title: '速合 (S-Link) 项目管理平台',
    categoryZh: 'B端设计 • 敏捷项目管理',
    categoryEn: 'B2B Enterprise Platform',
    imgUrl: card1Img,
    initRotate: -16,
    initX: -22,
    initY: -16,
    targetScatter: { x: -460, y: -260, rotate: -24 }, // 1. 左上
    zIndex: 10,
  },
  {
    id: 'tongyi-qwen-aios',
    title: '通义千问 APP 改版设计',
    categoryZh: '全场景 AIOS • 数字人伙伴',
    categoryEn: 'Mobile AI Agent OS',
    imgUrl: card2Img,
    initRotate: 15,
    initX: 24,
    initY: -18,
    targetScatter: { x: 460, y: -260, rotate: 22 }, // 2. 右上
    zIndex: 20,
  },
  {
    id: 'chicalt-ecommerce',
    title: 'ChicAlt 跨境电商 APP',
    categoryZh: '跨境电商 • AI虚拟试衣',
    categoryEn: 'Fashion E-Commerce & AI',
    imgUrl: card3Img,
    initRotate: -8,
    initX: -16,
    initY: 16,
    targetScatter: { x: -500, y: 140, rotate: -15 }, // 3. 左略偏下
    zIndex: 30,
  },
  {
    id: 'sister-liu-ip',
    title: '“刘姐·菜篮子” 品牌 IP 衍生',
    categoryZh: '3D潮玩 IP • 品牌全案',
    categoryEn: '3D Mascot Universe',
    imgUrl: card4Img,
    initRotate: 19,
    initX: 20,
    initY: 22,
    targetScatter: { x: 500, y: 150, rotate: 18 }, // 4. 右略偏下
    zIndex: 40,
  },
  {
    id: 'nio-aigc-super-symbol',
    title: '蔚来 NIO × AIGC 超级符号海报',
    categoryZh: 'AIGC 概念视觉 • 超级符号',
    categoryEn: 'AIGC Super Symbol Post',
    imgUrl: card5Img,
    initRotate: -2,
    initX: 0,
    initY: 0,
    targetScatter: { x: 0, y: 350, rotate: 0 }, // 5. 下
    zIndex: 50,
  },
];

export const Hero = ({ language }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [viewportFactor, setViewportFactor] = useState(1);

  useEffect(() => {
    const updateFactor = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewportFactor(0.42);
      } else if (width < 1024) {
        setViewportFactor(0.72);
      } else {
        setViewportFactor(1);
      }
    };
    updateFactor();
    window.addEventListener('resize', updateFactor);
    return () => window.removeEventListener('resize', updateFactor);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Center text animations: as scroll proceeds from 0 to 0.75, opacity 0 -> 1, scale 0.5 -> 1.0
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.75], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.05, 0.75], [0.5, 1.0]);

  // Scroll hint fade-out
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // 5 CARDS PARALLAX DEPTH & SPEED DIFFERENTIATION (5张卡片滚动视差与纵深分速移动系统)
  // 通过不同的滚动区间映射、位移倍率、垂直视差漂移与景深缩放，构建出极具纵深层次感与速度反差的 3D 悬浮视差体验

  // Card 1: 远景深背景 (Far Background) - 响应最平缓深邃, 散开速度最慢(在 0.85 处才到位), 随向下滚动产生轻微向后收敛与微幅上浮
  const x1 = useTransform(scrollYProgress, [0, 0.45, 0.85, 1], [
    CARDS[0].initX,
    CARDS[0].initX + (CARDS[0].targetScatter.x * viewportFactor * 0.38),
    CARDS[0].targetScatter.x * viewportFactor,
    CARDS[0].targetScatter.x * viewportFactor * 1.08,
  ]);
  const y1 = useTransform(scrollYProgress, [0, 0.45, 0.85, 1], [
    CARDS[0].initY,
    CARDS[0].initY + (CARDS[0].targetScatter.y * viewportFactor * 0.35),
    CARDS[0].targetScatter.y * viewportFactor,
    (CARDS[0].targetScatter.y - 70) * viewportFactor,
  ]);
  const rot1 = useTransform(scrollYProgress, [0, 0.85], [CARDS[0].initRotate, CARDS[0].targetScatter.rotate]);
  const scale1 = useTransform(scrollYProgress, [0, 0.85, 1], [1.0, 0.72, 0.68]);
  const rotX1 = useTransform(scrollYProgress, [0, 0.85], [0, 6]);
  const rotY1 = useTransform(scrollYProgress, [0, 0.85], [0, -8]);

  // Card 2: 次深景背景 (Mid-Deep Layer) - 适中偏慢速度, 在 0.78 处散开完成, 垂直向下适度漂移
  const x2 = useTransform(scrollYProgress, [0, 0.4, 0.78, 1], [
    CARDS[1].initX,
    CARDS[1].initX + (CARDS[1].targetScatter.x * viewportFactor * 0.48),
    CARDS[1].targetScatter.x * viewportFactor,
    CARDS[1].targetScatter.x * viewportFactor * 1.12,
  ]);
  const y2 = useTransform(scrollYProgress, [0, 0.4, 0.78, 1], [
    CARDS[1].initY,
    CARDS[1].initY + (CARDS[1].targetScatter.y * viewportFactor * 0.46),
    CARDS[1].targetScatter.y * viewportFactor,
    (CARDS[1].targetScatter.y + 60) * viewportFactor,
  ]);
  const rot2 = useTransform(scrollYProgress, [0, 0.78], [CARDS[1].initRotate, CARDS[1].targetScatter.rotate]);
  const scale2 = useTransform(scrollYProgress, [0, 0.78, 1], [1.0, 0.76, 0.73]);
  const rotX2 = useTransform(scrollYProgress, [0, 0.78], [0, -5]);
  const rotY2 = useTransform(scrollYProgress, [0, 0.78], [0, 7]);

  // Card 3: 中景自然层 (Midground) - 标准自然流动速度, 在 0.72 处到达目标位置, 形成中景基准参考
  const x3 = useTransform(scrollYProgress, [0, 0.35, 0.72, 1], [
    CARDS[2].initX,
    CARDS[2].initX + (CARDS[2].targetScatter.x * viewportFactor * 0.55),
    CARDS[2].targetScatter.x * viewportFactor,
    CARDS[2].targetScatter.x * viewportFactor * 1.16,
  ]);
  const y3 = useTransform(scrollYProgress, [0, 0.35, 0.72, 1], [
    CARDS[2].initY,
    CARDS[2].initY + (CARDS[2].targetScatter.y * viewportFactor * 0.55),
    CARDS[2].targetScatter.y * viewportFactor,
    (CARDS[2].targetScatter.y - 110) * viewportFactor,
  ]);
  const rot3 = useTransform(scrollYProgress, [0, 0.72], [CARDS[2].initRotate, CARDS[2].targetScatter.rotate]);
  const scale3 = useTransform(scrollYProgress, [0, 0.72, 1], [1.0, 0.82, 0.79]);
  const rotX3 = useTransform(scrollYProgress, [0, 0.72], [0, 5]);
  const rotY3 = useTransform(scrollYProgress, [0, 0.72], [0, -5]);

  // Card 4: 次前景层 (Near-Foreground) - 快速飞散, 运动更灵敏(在 0.65 处完成), 向下视差漂移达 +140px
  const x4 = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [
    CARDS[3].initX,
    CARDS[3].initX + (CARDS[3].targetScatter.x * viewportFactor * 0.65),
    CARDS[3].targetScatter.x * viewportFactor,
    CARDS[3].targetScatter.x * viewportFactor * 1.2,
  ]);
  const y4 = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [
    CARDS[3].initY,
    CARDS[3].initY + (CARDS[3].targetScatter.y * viewportFactor * 0.65),
    CARDS[3].targetScatter.y * viewportFactor,
    (CARDS[3].targetScatter.y + 140) * viewportFactor,
  ]);
  const rot4 = useTransform(scrollYProgress, [0, 0.65], [CARDS[3].initRotate, CARDS[3].targetScatter.rotate]);
  const scale4 = useTransform(scrollYProgress, [0, 0.65, 1], [1.0, 0.88, 0.85]);
  const rotX4 = useTransform(scrollYProgress, [0, 0.65], [0, -4]);
  const rotY4 = useTransform(scrollYProgress, [0, 0.65], [0, 6]);

  // Card 5: 特写特快近景前景层 (Foreground Lead) - 响应最早最快(在 0.58 处即达), 速度达背景卡的2倍以上, 视差位移量显著扩大至 +220px
  const x5 = useTransform(scrollYProgress, [0, 0.25, 0.58, 1], [
    CARDS[4].initX,
    CARDS[4].initX + (CARDS[4].targetScatter.x * viewportFactor * 0.75),
    CARDS[4].targetScatter.x * viewportFactor,
    CARDS[4].targetScatter.x * viewportFactor * 1.25,
  ]);
  const y5 = useTransform(scrollYProgress, [0, 0.25, 0.58, 1], [
    CARDS[4].initY,
    CARDS[4].initY + (CARDS[4].targetScatter.y * viewportFactor * 0.75),
    CARDS[4].targetScatter.y * viewportFactor,
    (CARDS[4].targetScatter.y + 220) * viewportFactor,
  ]);
  const rot5 = useTransform(scrollYProgress, [0, 0.58], [CARDS[4].initRotate, CARDS[4].targetScatter.rotate]);
  const scale5 = useTransform(scrollYProgress, [0, 0.58, 1], [1.0, 0.94, 0.92]);
  const rotX5 = useTransform(scrollYProgress, [0, 0.58], [0, -2]);
  const rotY5 = useTransform(scrollYProgress, [0, 0.58], [0, 0]);

  const cardTransforms = [
    { x: x1, y: y1, rotate: rot1, scale: scale1, rotateX: rotX1, rotateY: rotY1, shadow: '0 4px 18px rgba(0, 0, 0, 0.12)' },
    { x: x2, y: y2, rotate: rot2, scale: scale2, rotateX: rotX2, rotateY: rotY2, shadow: '0 6px 22px rgba(0, 0, 0, 0.15)' },
    { x: x3, y: y3, rotate: rot3, scale: scale3, rotateX: rotX3, rotateY: rotY3, shadow: '0 8px 26px rgba(0, 0, 0, 0.18)' },
    { x: x4, y: y4, rotate: rot4, scale: scale4, rotateX: rotX4, rotateY: rotY4, shadow: '0 12px 32px rgba(0, 0, 0, 0.22)' },
    { x: x5, y: y5, rotate: rot5, scale: scale5, rotateX: rotX5, rotateY: rotY5, shadow: '0 16px 40px rgba(0, 0, 0, 0.26)' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('3251908480@qq.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToWorks = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[280vh] bg-transparent"
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent flex flex-col justify-between items-center select-none">
        {/* Ambient Subtle Luminous Purple Aura with breathing glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[520px] rounded-full blur-[140px] pointer-events-none opacity-50 -z-10 animate-breathe-glow"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(124, 58, 237, 0.18) 45%, transparent 75%)',
          }}
        />

        {/* TOP SPACER for Navbar clearance */}
        <div className="w-full h-20 pointer-events-none" />

        {/* 1. CENTERED TEXT LAYER (居中文本层, 水平垂直居中展示, 排版靠左, 随滚动透明度0->1且放大0.5->1) */}
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-2xl px-6 sm:px-8 pointer-events-auto"
        >
          <div className="flex flex-col items-start text-left">
            {/* Tag / Period Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/35 text-xs font-semibold text-purple-200 mb-5 shadow-[0_0_18px_rgba(168,85,247,0.25)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.9)]" />
              <span className="font-mono tracking-wide text-[12px] text-purple-200" style={{ fontSize: '12px' }}>
                2024 — 2026 · {language === 'zh' ? '作品集' : 'Selected Works'}
              </span>
            </div>

            {/* Main Multi-line Display Title (发光白色与浅紫色渐变光晕弥散效果：第一行 Fengyiran，第二行 Portfolio) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.03] mb-4">
              <span className="block text-white text-glow-white tracking-tight">
                Fengyiran
              </span>
              <span className="relative inline-block text-luminous-flow tracking-tight">
                Portfolio
                {/* Breathing soft purple glow aura behind the title */}
                <span className="absolute -inset-3 bg-purple-500/25 rounded-2xl blur-xl -z-10 animate-breathe-glow pointer-events-none" />
              </span>
            </h1>

            {/* Positioning line */}
            <div className="text-lg sm:text-2xl font-bold tracking-tight mb-4 flex flex-wrap items-center gap-2.5">
              <span className="text-glow-subtle">{language === 'zh' ? 'UI设计师 / 视觉设计师' : 'UI & Visual Designer'}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono font-medium shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                武汉科技大学
              </span>
            </div>

            {/* Description Text (14px, 浅灰白, 常规行高) */}
            <p className="text-[14px] leading-relaxed text-gray-300 font-normal max-w-lg mb-8 drop-shadow-sm">
              {language === 'zh'
                ? '具备UI与视觉双栖背景，拥有3个独立UI项目及海量视觉物料设计经验。精通各类设计软件并能深度运用AIGC工具实现商业化量产。'
                : 'Specializing in UI & visual craft. 3 independent UI systems, extensive brand collateral, and advanced AIGC video/music pipelines.'}
            </p>

            {/* CTA Button (8px圆角, 16px粗体, 紫色品牌渐变与发光投影) */}
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToWorks}
                id="hero-explore-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 active:scale-[0.98] text-white text-[16px] font-bold shadow-[0_6px_28px_rgba(147,51,234,0.55)] hover:shadow-[0_8px_36px_rgba(168,85,247,0.75)] transition-all cursor-pointer group"
              >
                <span>{language === 'zh' ? '浏览精选作品' : 'Explore Works'}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-[8px] border border-purple-500/30 hover:border-purple-400 bg-[#140e29]/70 hover:bg-purple-950/60 text-sm font-semibold text-purple-200 hover:text-white transition-all shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
              >
                <span>{language === 'zh' ? '快速联系' : 'Contact'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. IMAGE STACK LAYER (图片堆叠层: 屏幕正中央绝对定位, 5张Unsplash设计卡片交错堆叠, 随滚动以不同速度与视差深度散开) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
        >
          {CARDS.map((card, idx) => {
            const transform = cardTransforms[idx];

            return (
              <motion.div
                key={card.id}
                style={{
                  x: transform.x,
                  y: transform.y,
                  rotate: transform.rotate,
                  rotateX: transform.rotateX,
                  rotateY: transform.rotateY,
                  scale: transform.scale,
                  zIndex: card.zIndex,
                  transformStyle: 'preserve-3d',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              >
                {/* Individual Card with Spring Hover floating effect (放大至1.1倍并向上浮动12px，还原水平) */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -12,
                    rotateX: 0,
                    rotateY: 0,
                    boxShadow: '0 20px 48px rgba(168, 85, 247, 0.45)',
                    transition: {
                      type: 'spring',
                      stiffness: 360,
                      damping: 22,
                      mass: 0.8,
                    },
                  }}
                  onClick={scrollToWorks}
                  className="relative w-[300px] sm:w-[360px] h-[212px] sm:h-[254px] rounded-[16px] overflow-hidden bg-[#150e28] border border-purple-500/25 hover:border-purple-400/60 cursor-pointer group transition-colors duration-300"
                  style={{
                    boxShadow: transform.shadow,
                  }}
                >
                  <img
                    src={card.imgUrl}
                    alt={card.title}
                    className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Gradient Overlay & Meta label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between text-white">
                    <div>
                      <div className="text-[11px] font-mono text-purple-300 tracking-wide uppercase">
                        {language === 'zh' ? card.categoryZh : card.categoryEn}
                      </div>
                      <h4 className="text-base font-bold text-white tracking-tight drop-shadow-sm">
                        {card.title}
                      </h4>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xs group-hover:bg-purple-600 transition-colors shadow-sm">
                      ↗
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll down unpacking hint (visible initially, fades on scroll) */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-25 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[12px] font-mono text-purple-300/80 tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-purple-400" />
            {language === 'zh' ? '滚动展开作品集' : 'Scroll to unfold'}
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-purple-500/30 flex justify-center p-1">
            <div className="w-1.5 h-2 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </motion.div>

        {/* 3. BOTTOM STATUS BAR (底部状态栏: 绝对定位在屏幕底部, 左侧显示联系邮箱, 右侧显示小圆点和“Available for work” 表态) */}
        <div className="absolute bottom-6 left-0 right-0 px-6 sm:px-12 flex justify-between items-center z-30 pointer-events-auto border-t border-purple-900/30 pt-4">
          {/* Left: Contact Email with copy action */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              id="hero-copy-email-btn"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120d25]/80 hover:bg-purple-950/70 border border-purple-500/25 hover:border-purple-400/50 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
              title="Click to copy email / 点击复制邮箱"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-purple-300 group-hover:text-purple-200 transition-colors" />
              )}
              <span className="font-medium">3251908480@qq.com</span>
              <span className="text-[10px] text-purple-400/70 group-hover:text-purple-300">
                {copied ? (language === 'zh' ? '已复制' : 'Copied') : (language === 'zh' ? '复制' : 'Copy')}
              </span>
            </button>
          </div>

          {/* Right: Pulsing green dot and Available for work status */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#120d25]/80 border border-purple-500/25 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide">
              Available for work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
