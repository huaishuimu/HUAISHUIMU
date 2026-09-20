import { DesignerProfile, Project, Experience, Education, SkillDimension, ToolStack } from '../types';

export const designerProfile: DesignerProfile = {
  name: {
    zh: 'Fengyiran',
    en: 'Fengyiran',
  },
  pinyin: 'Fengyiran',
  title: {
    zh: 'UX / 视觉设计 (2024 — 2026)',
    en: 'UX & Visual Designer (2024 — 2026)',
  },
  headline: {
    zh: 'Fengyiran 作品集 · 2024-2026 UX与视觉设计精选',
    en: 'Fengyiran Portfolio · UX & Visual Design 2024-2026',
  },
  bio: {
    zh: '专注于UX交互架构与先锋视觉设计的融合表达，兼具严谨的用户体验逻辑与高完成度的视觉美学质感。2024-2026 精选作品集。',
    en: 'Specializing in the intersection of UX interaction architecture and vanguard visual craftsmanship. Selected works 2024–2026.',
  },
  status: {
    zh: 'Available for work · 开放合作机会',
    en: 'Available for work · Open for opportunities',
  },
  yearsOfExp: '2024-2026',
  stats: [
    {
      label: { zh: '作品周期', en: 'Portfolio Span' },
      value: '2024–2026',
      desc: { zh: '最新精选设计实践', en: 'Latest selected works' },
    },
    {
      label: { zh: '设计定位', en: 'Discipline' },
      value: 'UX + 视觉',
      desc: { zh: '双维一体设计能力', en: 'Dual-discipline balance' },
    },
    {
      label: { zh: '落地交付', en: 'Shipped Works' },
      value: '100%',
      desc: { zh: '高保真原型与工程交付', en: 'Production-ready delivery' },
    },
    {
      label: { zh: '专业工具栈', en: 'Tool Stack' },
      value: '10+',
      desc: { zh: 'Figma / 3D / AI流水线', en: 'Modern design tooling' },
    },
  ],
  contact: {
    email: '3251908480@qq.com',
    wechat: 'fengyiran_ux',
    location: { zh: '远程协同 / 全球项目 (UTC+8)', en: 'Remote Worldwide (UTC+8)' },
    socials: [
      { platform: 'Behance', url: 'https://behance.net', handle: '@fengyiran' },
      { platform: 'Dribbble', url: 'https://dribbble.com', handle: '@fengyiran' },
      { platform: 'ZCOOL 站酷', url: 'https://zcool.com.cn', handle: '@fengyiran' },
      { platform: 'GitHub', url: 'https://github.com', handle: '@fengyiran' },
    ],
  },
};

export const projectsData: Project[] = [
  {
    id: 'nexus-ai-workspace',
    category: 'ui',
    categoryLabel: { zh: 'UI/UX 设计', en: 'UI/UX Design' },
    title: {
      zh: 'Nexus AI 智能体编排工作台',
      en: 'Nexus AI Agentic Canvas Workspace',
    },
    subtitle: {
      zh: '企业级多智能体协同与流式推理的可视化交互系统',
      en: 'Enterprise multi-agent orchestration canvas and real-time streaming cognition interface',
    },
    year: '2024',
    role: { zh: 'Lead UI/UX Designer', en: 'Lead UI/UX Designer' },
    tags: ['Design System', 'AI Interface', 'Infinite Canvas', 'Figma Tokens', 'SaaS'],
    accentColor: '#9333ea',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    ],
    summary: {
      zh: '针对复杂大语言模型工作流繁重晦涩的痛点，创新设计了以“无限节点网格 + 渐进式光晕对焦”为核心的智能体编排界面。构建统一的Dark Mode色彩系统与微动效规范，支持100+节点毫秒级流畅渲染。',
      en: 'Reinventing complex LLM pipeline orchestration through an infinite nodal canvas with luminous progressive focus. Designed unified Dark Theme tokens and 60fps micro-interaction states for over 100+ simultaneous nodes.',
    },
    metrics: [
      { label: { zh: '复杂任务编排耗时', en: 'Orchestration Time' }, value: '-42%' },
      { label: { zh: '首月客户满意度', en: 'CSAT Score' }, value: '98.4%' },
      { label: { zh: '组件复用率', en: 'Design Token Reuse' }, value: '92%' },
    ],
    challenge: {
      zh: '企业用户在处理多Agent链路（搜索、代码、视觉、验证）时经常因大量连接线和密集状态卡顿导致认知过载。如何平衡高密度专业信息与优雅现代的视觉美感是最大难点。',
      en: 'Enterprise power users suffered cognitive fatigue when configuring chained AI agents with complex conditionals. The challenge was balancing extreme data density with breathable modern aesthetic clarity.',
    },
    solution: {
      zh: '提出“呼吸式层级架构”：通过深色磨砂玻璃层级、微弱紫色边缘光晕区分激活态节点；引入自动走线吸附算法与多粒度缩放视图（LOD），使用户从宏观业务流到微观参数配置平滑转换。',
      en: 'Introduced an optical hierarchy using frosted glass overlays with subtle violet reactive rim lighting for active states. Designed Level-of-Detail (LOD) semantic zoom so users fluidly transition between macro architectures and micro-parameters.',
    },
    deliverables: [
      { zh: '全套 Figma 设计系统（包含320+ 原子组件与动态变体）', en: 'Complete Figma Design System with 320+ atomic components & variants' },
      { zh: '节点编排与动态连线交互原型（Principle / Protopie）', en: 'Interactive nodal interaction prototype with edge routing' },
      { zh: '前端设计交付标准规范与暗黑弥散质感 CSS Token', en: 'Front-end delivery specs & dark luminescence CSS tokens' },
    ],
    tools: ['Figma', 'Protopie', 'Tailwind CSS', 'Spline 3D', 'Linear'],
    designHighlights: [
      {
        title: { zh: '发光微交互状态机', en: 'Luminescent State Machine' },
        desc: { zh: '不同Agent类型映射独特的色相光谱，推理状态呈现细腻的呼吸光波脉冲。', en: 'Distinct hue gradients for agent categories with organic breathing wave pulses during generation.' },
      },
      {
        title: { zh: '自适应暗色玻璃层级', en: 'Adaptive Glass Hierarchy' },
        desc: { zh: '三层高斯模糊与极细1px紫色高光线，保证暗色环境下的视觉深度与极佳对比度。', en: 'Triple-layer Gaussian blur with 1px purple rim-lights ensures depth and crisp WCAG AA compliance.' },
      },
    ],
  },
  {
    id: 'aether-spirit-ip',
    category: 'ip',
    categoryLabel: { zh: 'IP 设计', en: 'IP Character Design' },
    title: {
      zh: 'Aether 灵界异想 - 潮玩与数字生命 IP 宇宙',
      en: 'Aether Spirit - Cyber-Bio Mascot & Collectibles',
    },
    subtitle: {
      zh: '融合机械流光与有机生命形态的新世代科技品牌3D形象孵化',
      en: 'Next-gen 3D mascot universe blending bio-luminescence, mechanical armor, and collectibles',
    },
    year: '2023 - 2024',
    role: { zh: 'IP Creator & 3D Visual Director', en: 'IP Creator & 3D Visual Director' },
    tags: ['3D Modeling', 'Blender', 'Cinema 4D', 'Blind Box', 'Character Rigging'],
    accentColor: '#c084fc',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    ],
    summary: {
      zh: '从核心世界观设定、2D三视图概念、3D高精度雕刻渲染，到潮玩盲盒拆解与社交表情包，打造全生命周期的数智IP形象。具备半透明发光耳翼、机械外骨骼与水灵萌动表情，广受年轻用户喜爱。',
      en: 'Complete IP incubation from narrative lore, 2D turnaround sketches, high-poly 3D sculpting and Octane rendering, to physical blind box kits and interactive 3D digital stickers.',
    },
    metrics: [
      { label: { zh: '社交全网曝光量', en: 'Social Impressions' }, value: '3.8M+' },
      { label: { zh: '表情包下载发送量', en: 'Stickers Sent' }, value: '1.2M+' },
      { label: { zh: '众筹盲盒达成率', en: 'Crowdfund Target' }, value: '380%' },
    ],
    challenge: {
      zh: '传统吉祥物容易显得低幼或脱离科技品牌内核，必须同时兼顾“高科技硬核感”、“未来潮酷”以及“有温度的情感共鸣”，并在3D打印与数字三维动画中均能完美还原。',
      en: 'Traditional mascots often look juvenile or disconnected from cutting-edge tech. The goal was to fuse cyber-futurism with emotional warmth while maintaining manufacturability for physical resin molding.',
    },
    solution: {
      zh: '独创“双层质感材质体系”：内层为半透明自发光晶体，外层为亚光流线型宇航陶瓷防护罩。骨骼绑定支持复杂面部微表情，并为盲盒生产严格规范了分件防呆结构与重心平衡。',
      en: 'Created a dual-material language: internal bio-luminescent crystal core shielded by a matte ceramic aerodynamic exoskeleton. Rigged custom facial blends for micro-emotions and optimized mold draft angles for physical casting.',
    },
    deliverables: [
      { zh: '角色世界观手册与标准三视图、色板标准规范', en: 'Character World Bible, 3-view turnarounds, and CMF pantone specs' },
      { zh: '高精度渲染场景库与 24组 3D 动态社交表情包', en: 'High-res 3D scene renders & 24 animated interactive 3D sticker packs' },
      { zh: '实物潮玩盲盒开模工程文件（STL / 分件图纸）', en: 'Physical blind box manufacturing STL molds & split part engineering' },
    ],
    tools: ['Blender', 'Cinema 4D', 'ZBrush', 'Octane Render', 'Substance Painter'],
    designHighlights: [
      {
        title: { zh: '次表面散射（SSS）光透材质', en: 'Subsurface Scattering Glow' },
        desc: { zh: '耳朵与尾翼采用特殊的紫色渐变散射半透明材质，在不同光线下流光溢彩。', en: 'Ears and tail feature custom purple-violet SSS shaders, casting iridescent inner glows under varied HDRI lights.' },
      },
      {
        title: { zh: '潮玩衍生延展性', en: 'Toy Collectible Ergonomics' },
        desc: { zh: '6款基础款与1款暗黑夜光隐藏款，每款均附带科技感专属磁吸配件。', en: '6 core editions plus 1 dark glow-in-the-dark chase figure, each with magnetic cyberpunk gear.' },
      },
    ],
  },
  {
    id: 'chronos-aigc-pipeline',
    category: 'aigc',
    categoryLabel: { zh: 'AIGC 探索', en: 'AIGC Workflows' },
    title: {
      zh: 'Chronos 异次元视觉矩阵 - 商业 AIGC 生成流水线',
      en: 'Chronos Dimension - Production AIGC Visual Matrix',
    },
    subtitle: {
      zh: '基于 ComfyUI、SDXL 与定制 LoRA 的高精度商业视觉资产工业化生成流',
      en: 'Commercial AIGC asset pipeline leveraging ComfyUI, custom LoRA training, and multi-model hybrid workflows',
    },
    year: '2024',
    role: { zh: 'AIGC Visual Researcher & Lead', en: 'AIGC Visual Researcher & Lead' },
    tags: ['ComfyUI', 'Midjourney', 'LoRA Training', 'Prompt Crafting', 'Commercial Art'],
    accentColor: '#818cf8',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    ],
    summary: {
      zh: '探索人工智能在商业视觉设计中的工业化应用，自研构建了一套“提示词工程库 + 姿态控制 ControlNet + 品牌调性微调 LoRA”的全链路流水线，输出质量稳定可控、支持8K超写实印刷级精度的商业大片。',
      en: 'Pioneered industrial AIGC production integrating structured prompt engineering, ControlNet pose/depth locks, and brand-tailored LoRA fine-tuning, consistently yielding 8K commercial-grade key visuals.',
    },
    metrics: [
      { label: { zh: '单套主视觉交付周期', en: 'Visual Asset Lead Time' }, value: '3天 ➔ 4小时' },
      { label: { zh: '物料制作综合成本', en: 'Production Cost' }, value: '-72%' },
      { label: { zh: '商业提案中选率', en: 'Client Pitch Win Rate' }, value: '91%' },
    ],
    challenge: {
      zh: 'AI原生工具（如原生Midjourney或简易WebUI）容易产生“不可控漂移”、“手指异化”、“品牌色彩偏移”和“角色人设不一致”等致命问题，无法直接应用于商业级严肃视觉诉求。',
      en: 'Off-the-shelf AI generation suffers from severe character drift, color inaccuracies, and anatomical hallucinations, making it risky for serious brand campaigns and high-stake client deliverables.',
    },
    solution: {
      zh: '在 ComfyUI 中搭建模块化节点流：利用 3D 粗模渲染图作为深度与法线控制源（Depth/Normal ControlNet），叠加自主标注清洗训练的“黑紫暗调光晕流”LoRA，结合局部重绘与矢量化精修。',
      en: 'Constructed modular ComfyUI graph nodes: fed 3D base geometry into Depth and Normal ControlNet, layered with custom dark-violet aesthetic LoRAs, followed by latent tile upscaling and vector post-processing.',
    },
    deliverables: [
      { zh: '自研商业级 ComfyUI 工作流 JSON 节点库与环境配置指南', en: 'Proprietary ComfyUI workflow JSON library and execution recipes' },
      { zh: '2组品牌专属调性 LoRA 权重模型（包含精选打标数据集）', en: '2 custom LoRA weight models with curated caption datasets' },
      { zh: '跨品类商业视觉演示集（涵盖3C数码、赛博潮玩、虚拟空间）', en: 'Cross-industry visual key art portfolio (3C tech, cyber apparel, virtual environments)' },
    ],
    tools: ['ComfyUI', 'SDXL', 'Midjourney v6', 'Photoshop AI', 'Topaz Gigapixel'],
    designHighlights: [
      {
        title: { zh: '精确色板与光影约束', en: 'Precision Palette & Lighting Control' },
        desc: { zh: '将品牌紫色（#7e22ce ~ #c084fc）与深空黑深度嵌入模型嵌入层，确保光晕弥散的一致性。', en: 'Hardcoded brand chromatic vectors into CLIP text embeddings to guarantee reproducible ambient gradient fields.' },
      },
      {
        title: { zh: '3D与AI混合管线', en: 'Hybrid 3D + GenAI Pipeline' },
        desc: { zh: 'Blender负责快速结构打底，AI负责超写实材质与体积光氛围，生产效率呈十倍爆发。', en: 'Blender locks composition and camera focal lengths while generative models synthesize photorealistic surface micro-details.' },
      },
    ],
  },
  {
    id: 'veloce-mobility-rebrand',
    category: 'brand',
    categoryLabel: { zh: '品牌视觉升级', en: 'Brand Visual Upgrade' },
    title: {
      zh: 'Veloce 极速未来 - 智能出行品牌全链路视觉重塑',
      en: 'Veloce Mobility - Global Brand Identity & Motion System',
    },
    subtitle: {
      zh: '从符号进化到动态生态：跨越硬件车机、移动端应用与线下发布会的全面升级',
      en: 'Transforming brand presence across in-car smart cockpit, digital app, and global spatial exhibitions',
    },
    year: '2023',
    role: { zh: 'Brand Experience Director', en: 'Brand Experience Director' },
    tags: ['Brand Identity', 'Motion Graphics', 'Typography', 'Design Guidelines', 'Cockpit UI'],
    accentColor: '#a855f7',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    ],
    summary: {
      zh: '带领设计团队主导智能汽车出行品牌 Veloce 的全球视觉重塑。提炼“穿透时空的流光”为核心超级符号，重构了动态标识、几何专属定制字体、新一代智能座舱中控视觉规范以及全球品牌手册。',
      en: 'Led the comprehensive visual overhaul for Veloce Smart Mobility. Distilled the "Speed of Light" metaphor into a kinetic brandmark, proprietary display typeface, cockpit interface guidelines, and global identity manual.',
    },
    metrics: [
      { label: { zh: '品牌好感度跃升', en: 'Brand Affinity Index' }, value: '+64%' },
      { label: { zh: '媒体与行业曝光', en: 'Global Media Reach' }, value: '15M+' },
      { label: { zh: '国际设计大奖', en: 'Major Honors' }, value: 'Red Dot Winner' },
    ],
    challenge: {
      zh: '品牌原视觉老旧、缺乏科技感与辨识度，且在小到车机实体按键、APP图标，大到数十米巨幅广告牌与发布会立体舞台上缺乏系统一致性。',
      en: 'The legacy identity felt dated and fragmented across mechanical car hardware, iOS/Android apps, and multi-story spatial billboard environments.',
    },
    solution: {
      zh: '打造“动态基因规范”：设计基于速度矢量的标志呼吸变形算法；建立以“暗夜黑 + 电气紫 + 极光银”为主基调的色彩系统；编写包含60+页的多端落地执行手册。',
      en: 'Engineered a "Dynamic Kinetic DNA": algorithmic brandmark morphing relative to driving velocity; established a "Void Black + Electric Violet + Aurora Silver" master palette with comprehensive 60-page guidelines.',
    },
    deliverables: [
      { zh: '主标动态 Logo、辅助图形矩阵与车标物理铸造规范', en: 'Kinetic logo suite, graphic matrix & physical badge die-cast blueprints' },
      { zh: '品牌专属定制西文字体 Veloce Sans 与排版层次规范', en: 'Custom headline typeface Veloce Sans & typographic hierarchy' },
      { zh: '跨端视觉规范系统（车机 HMI、App、官网、发布会主视觉）', en: 'Omni-channel visual guidelines (In-Vehicle HMI, App, Web, Keynote visuals)' },
    ],
    tools: ['Illustrator', 'After Effects', 'Figma', 'Cinema 4D', 'Glyphs'],
    designHighlights: [
      {
        title: { zh: '动态车标光影韵律', en: 'Kinetic Lighting Signature' },
        desc: { zh: '贯穿式车灯启动动画与车机开机音画实现毫秒级同频震颤，带来沉浸式仪式感。', en: 'Pixel-perfect sync between headlights greeting choreography and cockpit screen boot-up audio-visuals.' },
      },
      {
        title: { zh: '双态暗色色彩系统', en: 'Dual-State Dark Palette' },
        desc: { zh: '针对车载夜间驾驶低眩光要求与户外高日照强对比需求，算法级优化亮暗比。', en: 'Mathematically adjusted luminance ratios guaranteeing glare-free night navigation and high-sunlight legibility.' },
      },
    ],
  },
  {
    id: 'lumina-fintech-superapp',
    category: 'ui',
    categoryLabel: { zh: 'UI/UX 设计', en: 'UI/UX Design' },
    title: {
      zh: 'Lumina 全球财富管理超级移动端',
      en: 'Lumina Wealth - Next-Gen Fintech SuperApp',
    },
    subtitle: {
      zh: '整合多币种资产、高频交易看板与AI资产配置顾问的极致金融体验',
      en: 'Unified global wealth dashboard, algorithmic trading, and AI financial advisory in a sleek handheld interface',
    },
    year: '2023',
    role: { zh: 'Senior Product Designer', en: 'Senior Product Designer' },
    tags: ['Mobile UX', 'Fintech', 'Data Visualization', 'Micro-interactions', 'iOS / Android'],
    accentColor: '#a855f7',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    ],
    summary: {
      zh: '打破传统金融软件冰冷死板的刻板印象，利用黑曜石质感、流畅手势操作与动态平滑曲线图表，将复杂资产仓位和实时波动以直观美观的形式呈现。',
      en: 'Humanizing high-stakes financial operations through an obsidian aesthetic, fluid gesture navigation, and interactive asset wave charts.',
    },
    metrics: [
      { label: { zh: 'App Store 用户评分', en: 'App Store Rating' }, value: '4.9 ★' },
      { label: { zh: '日均活跃交易时长', en: 'Daily Session Time' }, value: '+35%' },
      { label: { zh: '转账链路完成率', en: 'Transfer Funnel' }, value: '96.2%' },
    ],
    challenge: {
      zh: '在单屏有限空间内展示海量财务数字与复杂多账户联动，且要求保障银行业级别的准确度与高频闪电响应。',
      en: 'Conveying heavy financial data tables and instant portfolio rebalancing without visual clutter or latency.',
    },
    solution: {
      zh: '模块化卡片收纳架构、微振动手势反馈与动态智能高光提示，帮助用户0秒定位核心风险指标。',
      en: 'Modular card hierarchy with haptic micro-interactions and predictive glow accents for volatile assets.',
    },
    deliverables: [
      { zh: '150+ 页面交互原型与全套暗色金融组件库', en: '150+ Mobile screens and dark fintech design token library' },
      { zh: '实时动态 K 线与资产饼图自定义交互动效规范', en: 'Custom dynamic candlestick & asset portfolio motion specs' },
    ],
    tools: ['Figma', 'Protopie', 'After Effects', 'Lottie'],
    designHighlights: [
      {
        title: { zh: '触感手势反馈', en: 'Tactile Gesture Feedback' },
        desc: { zh: '滑动转账与安全解锁拥有丝滑拉簧阻尼感与光晕跟随。', en: 'Spring physics dampening with luminescent track follower on security verification sliders.' },
      },
    ],
  },
  {
    id: 'cyberflora-generative-art',
    category: 'aigc',
    categoryLabel: { zh: 'AIGC 探索', en: 'AIGC & Generative Art' },
    title: {
      zh: 'CyberFlora 赛博植物图鉴 - 算法生成式艺术展',
      en: 'CyberFlora - Algorithmic Bio-Digital Visual Codex',
    },
    subtitle: {
      zh: '探索碳基植物脉络与硅基计算代码共生的沉浸式视觉实验',
      en: 'An immersive digital exhibition exploring symbiotic intersections of carbon botanical forms and silicon code',
    },
    year: '2024',
    role: { zh: 'Generative Visual Artist', en: 'Generative Visual Artist' },
    tags: ['Generative Art', '3D Bio-form', 'ComfyUI', 'Exhibition Visuals', 'Digital Codex'],
    accentColor: '#38bdf8',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    ],
    summary: {
      zh: '利用生成式AI与程序化着色器创造了30组不存在于现实的“发光仿生植物”，作为新媒体艺术展的核心主视觉并制成动态数字藏品。',
      en: 'Synthesized 30 impossible bio-luminescent flora using generative models and procedural shaders as core exhibition key art.',
    },
    metrics: [
      { label: { zh: '艺术展现场观展人次', en: 'Exhibition Visitors' }, value: '85,000+' },
      { label: { zh: '数字藏品售罄时间', en: 'NFT Drop Sold Out' }, value: '42秒' },
    ],
    challenge: {
      zh: '确保生成内容脱离机械刻板感，呈现真实大自然中精巧神秘的数学对称美与微观肌理。',
      en: 'Avoiding artificial stiffness while capturing sacred geometry and micro-organic cellular textures.',
    },
    solution: {
      zh: '将斐波那契螺旋和有机分形算法与深度学习扩散模型融合，结合程序化微距景深渲染。',
      en: 'Blended Fibonacci spiral geometry with customized diffusion prompt embeddings and macro depth-of-field post-passes.',
    },
    deliverables: [
      { zh: '30幅 8K 超高精度艺术微喷印刷原件', en: '30 8K Giclée fine art exhibition prints' },
      { zh: '循环动态主视觉视频装置（4K 60FPS）', en: 'Seamless looping 4K ambient video installation' },
    ],
    tools: ['Midjourney v6', 'ComfyUI', 'TouchDesigner', 'After Effects'],
    designHighlights: [
      {
        title: { zh: '自发光纤维微结构', en: 'Luminescent Fiber Microwaves' },
        desc: { zh: '植物花蕊在暗黑环境中脉动发光，宛如深海生物与未来芯片的交织。', en: 'Subtle neon bioluminescence pulsating along organic veins against pure void darkness.' },
      },
    ],
  },
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-1',
    company: { zh: 'HyperNova 灵境科技（创新实验室）', en: 'HyperNova Labs (AI & Digital Products)' },
    role: { zh: '资深产品体验与视觉设计专家 / Design Lead', en: 'Senior Staff Product & Visual Designer' },
    period: '2022.03 - 至今 (Present)',
    location: { zh: '上海 / 远程', en: 'Shanghai / Remote' },
    badge: { zh: 'Current', en: 'Current' },
    description: {
      zh: '全面统筹公司 AI 原生产品线的体验策略与视觉系统，主导多智能体编排工作台从0到1架构落地，带领团队构建全栈 AIGC 生产管线。',
      en: 'Leading product experience strategy and visual identity systems for generative AI tools. Spearheaded zero-to-one design for agentic workspaces and scaled enterprise design systems.',
    },
    achievements: [
      { zh: '从零主导打造 AI 协作核心产品，上线6个月突破 500,000+ 全球月活跃创作者', en: 'Led core AI platform design from 0 to 1, surpassing 500K+ monthly active creators worldwide' },
      { zh: '自研并沉淀公司级 AIGC 商业视觉工业流，将品牌与运营物料生产周期缩短 68%', en: 'Architected in-house AIGC visual production pipeline, shrinking campaign turnaround by 68%' },
      { zh: '制定跨端统一 Design Tokens 体系，支撑 Web/Desktop/Mobile 快速迭代与无缝交付', en: 'Authored multi-platform Design Tokens repository bridging Figma, React, and native clients' },
    ],
    skills: ['AI/UX', 'Design Strategy', 'Design Tokens', 'AIGC Pipeline', 'Design Leadership'],
  },
  {
    id: 'exp-2',
    company: { zh: 'MindCraft 国际数字体验机构', en: 'MindCraft Digital Agency' },
    role: { zh: '资深 UI/UX & 3D 视觉设计师', en: 'Senior UI/UX & 3D Visual Designer' },
    period: '2020.06 - 2022.02',
    location: { zh: '上海', en: 'Shanghai' },
    description: {
      zh: '服务全球一线科技、智能出行与潮玩品牌，负责高规格数字官网、3D 虚拟形象吉祥物孵化与移动端超级 App 的全案视觉升级。',
      en: 'Delivered high-impact digital experiences, 3D character mascots, and flagship mobile applications for global tech, smart mobility, and lifestyle clients.',
    },
    achievements: [
      { zh: '主导智能出行品牌 Veloce 全球视觉升级项目，荣获德国红点（Red Dot）品牌设计奖', en: 'Directed Veloce smart mobility rebrand, winning prestigious Red Dot Brand Award' },
      { zh: '原创孵化 3D 潮玩 IP 系列，主导潮玩盲盒开模与社交裂变传播，全网曝光超 300万', en: 'Incubated original 3D toy IP universe and oversaw physical molding with 3M+ social reach' },
      { zh: '辅导中初级设计师6名，输出《3D 与暗黑界面微交互设计白皮书》', en: 'Mentored 6 junior designers and authored the studio 3D Micro-interaction Handbook' },
    ],
    skills: ['Brand Identity', 'Blender / C4D', 'Fintech UI', 'Micro-interactions', 'Client Pitching'],
  },
  {
    id: 'exp-3',
    company: { zh: 'FutureVerse 互动科技工作室', en: 'FutureVerse Creative Studio' },
    role: { zh: 'UI/视觉与动态设计师', en: 'Visual & Motion Interaction Designer' },
    period: '2018.07 - 2020.05',
    location: { zh: '杭州', en: 'Hangzhou' },
    description: {
      zh: '专注于新媒体交互视觉、沉浸式 WebGL 官网、商业动效与品牌规范设计，积累深厚的排版几何美学与动效物理学功底。',
      en: 'Focused on interactive visual experiences, immersive promotional web features, dynamic brand guidelines, and keyframe motion choreography.',
    },
    achievements: [
      { zh: '完成20+ 款知名品牌的商业宣发动态视觉设计，3次登上站酷（Zcool）首页强力推荐', en: 'Designed 20+ commercial motion campaigns with 3 features on Zcool homepage showcase' },
      { zh: '搭建工作室首套动效函数库（Easing Curves），使全站动效交付效率提升 40%', en: 'Built the studio proprietary Easing Curve animation library, boosting motion handoff efficiency' },
    ],
    skills: ['Motion Design', 'After Effects', 'Typography', 'Visual Hierarchy', 'Prototyping'],
  },
];

export const educationData: Education[] = [
  {
    id: 'edu-1',
    institution: { zh: '中国美术学院 / 视觉传达与数字媒体艺术', en: 'China Academy of Art / Visual Communication' },
    degree: { zh: '学士学位 (B.F.A)', en: 'Bachelor of Fine Arts (B.F.A)' },
    major: { zh: '数字媒体与交互视觉设计', en: 'Digital Media & Interactive Visual Design' },
    period: '2014.09 - 2018.06',
    badge: { zh: '一等奖学金 / 优秀毕业设计', en: 'First Class Honor' },
    description: {
      zh: '系统研习现代主义排版美学、色彩学、造型雕塑、交互设计心理学与计算机多媒体艺术。毕业设计以《虚拟生命的数字拓扑》获学院卓越金奖。',
      en: 'Systematic study in modern typography, chromatic harmony, form sculpture, cognitive interaction psychology, and digital media art. Awarded Gold for Graduation Showcase.',
    },
    honors: [
      { zh: '国家奖学金 / 学院一等奖学金（连续3年）', en: 'National Scholarship & Dean Honor Roll (3 consecutive years)' },
      { zh: '全国大学生数字媒体科技与创意设计大赛 一等奖', en: '1st Prize, National Digital Media Creativity & Design Cup' },
      { zh: '毕业设计作品获学院美术馆永久收藏', en: 'Graduation thesis work collected by Academy Art Museum' },
    ],
    focusAreas: [
      { zh: '网格排版系统 (Grid Systems)', en: 'Grid Systems & Micro-typography' },
      { zh: '三维空间造型与光影构成', en: '3D Spatial Form & Lighting Composition' },
      { zh: '人机交互心理学与情感设计', en: 'HCI Psychology & Emotional Design' },
      { zh: '生成式代码与互动装置艺术', en: 'Generative Coding & Interactive Art' },
    ],
  },
];

export const skillDimensions: SkillDimension[] = [
  {
    id: 'ui-ux',
    title: { zh: 'UI/UX 体验与界面系统', en: 'UI/UX & Product Design Systems' },
    subtitle: { zh: '从0到1架构设计系统、微动效与复杂多端交互逻辑', en: 'Zero-to-one design systems, micro-interactions, and multi-platform logic' },
    icon: 'Layout',
    color: '#a855f7',
    skills: [
      { name: 'Design Tokens & Figma 组件库', level: 98, tag: { zh: '精通', en: 'Expert' } },
      { name: '复杂业务流与无限画布架构', level: 94, tag: { zh: '精通', en: 'Expert' } },
      { name: '暗黑质感与光晕弥散微交互', level: 96, tag: { zh: '前沿', en: 'Master' } },
      { name: '跨端响应式与无障碍 (WCAG AA)', level: 90, tag: { zh: '熟练', en: 'Advanced' } },
      { name: '高保真可交互动态原型 (Protopie)', level: 92, tag: { zh: '精通', en: 'Expert' } },
    ],
  },
  {
    id: 'ip-3d',
    title: { zh: 'IP 形象孵化与 3D 潮流视觉', en: '3D Character & Mascot IP Incubation' },
    subtitle: { zh: '世界观设定、高精度角色雕刻、骨骼动画与潮玩开模', en: 'World-building, organic high-poly sculpting, rigging, and physical toy molds' },
    icon: 'Boxes',
    color: '#c084fc',
    skills: [
      { name: 'Blender / C4D 3D资产与场景构建', level: 95, tag: { zh: '精通', en: 'Expert' } },
      { name: '角色高模雕刻与拓扑绑定 (ZBrush)', level: 88, tag: { zh: '熟练', en: 'Advanced' } },
      { name: '次表面散射 (SSS) 与材质着色器', level: 93, tag: { zh: '精通', en: 'Expert' } },
      { name: '实物潮玩盲盒拆件与工业开模防呆', level: 86, tag: { zh: '实战', en: 'Practical' } },
      { name: '动态表情包与 Web 3D (Spline)', level: 90, tag: { zh: '熟练', en: 'Advanced' } },
    ],
  },
  {
    id: 'aigc-workflow',
    title: { zh: 'AIGC 工业化落地与算法流', en: 'AIGC Workflows & Creative Tech' },
    subtitle: { zh: '深度融合 ComfyUI、LoRA 模型微调与商业视觉生成流', en: 'Bridging ComfyUI nodes, custom LoRA training, and commercial delivery' },
    icon: 'Sparkles',
    color: '#818cf8',
    skills: [
      { name: 'ComfyUI 高级模块化工作流编排', level: 95, tag: { zh: '专家', en: 'Expert' } },
      { name: 'ControlNet 精准构图/姿态与深度约束', level: 94, tag: { zh: '精通', en: 'Expert' } },
      { name: '专有风格 LoRA 模型训练与数据集清洗', level: 90, tag: { zh: '精通', en: 'Expert' } },
      { name: 'Midjourney v6 结构化 Prompt 工程', level: 98, tag: { zh: '专家', en: 'Master' } },
      { name: '3D底模 + AI重绘混合加速管线', level: 92, tag: { zh: '精通', en: 'Expert' } },
    ],
  },
  {
    id: 'brand-motion',
    title: { zh: '品牌视觉升级与动态叙事', en: 'Brand Visual Upgrade & Motion' },
    subtitle: { zh: '提炼超级符号、动态识别规范与全球化品牌手册体系', en: 'Super-sign distillation, kinetic brandmark systems, and global guidelines' },
    icon: 'Feather',
    color: '#e879f9',
    skills: [
      { name: '品牌核心定位与视觉识别系统 (VI)', level: 96, tag: { zh: '精通', en: 'Expert' } },
      { name: '动态 Logo 演绎与微动效规范', level: 92, tag: { zh: '精通', en: 'Expert' } },
      { name: '字体排版层级与专属定制西文字体', level: 88, tag: { zh: '熟练', en: 'Advanced' } },
      { name: '全链路落地物料与展会空间延展', level: 91, tag: { zh: '熟练', en: 'Advanced' } },
      { name: '商业提案叙事与高定 Keynote 演说', level: 95, tag: { zh: '精通', en: 'Expert' } },
    ],
  },
];

export const toolStacks: ToolStack[] = [
  { name: 'Figma', category: { zh: '界面与系统', en: 'UI & Systems' }, proficiency: 'Master' },
  { name: 'Blender', category: { zh: '3D与渲染', en: '3D & Shading' }, proficiency: 'Expert' },
  { name: 'ComfyUI', category: { zh: 'AIGC流水线', en: 'AIGC Pipelines' }, proficiency: 'Expert' },
  { name: 'Midjourney', category: { zh: '概念生成', en: 'Concept Art' }, proficiency: 'Master' },
  { name: 'Cinema 4D', category: { zh: '3D与动效', en: 'Motion & 3D' }, proficiency: 'Expert' },
  { name: 'After Effects', category: { zh: '动效合成', en: 'Motion VFX' }, proficiency: 'Expert' },
  { name: 'Protopie', category: { zh: '高保真原型', en: 'Prototyping' }, proficiency: 'Advanced' },
  { name: 'Spline 3D', category: { zh: 'Web 3D交互', en: 'Web 3D' }, proficiency: 'Advanced' },
  { name: 'Photoshop', category: { zh: '图像精修', en: 'Retouching' }, proficiency: 'Expert' },
  { name: 'Illustrator', category: { zh: '矢量与标牌', en: 'Vector & Brand' }, proficiency: 'Expert' },
  { name: 'ZBrush', category: { zh: '高模雕刻', en: 'Sculpting' }, proficiency: 'Advanced' },
  { name: 'Tailwind CSS', category: { zh: '前端协同', en: 'Design Code' }, proficiency: 'Intermediate' },
];
