import { DesignerProfile, Project, Experience, Education, SkillDimension, ToolStack } from '../types';
import avatarImg from '../assets/images/avatar.jpg';
import card1Img from '../assets/images/regenerated_image_1790124919848.png';
import card2Img from '../assets/images/regenerated_image_1790124924991.png';
import card3Img from '../assets/images/regenerated_image_1790124922846.png';
import card4Img from '../assets/images/regenerated_image_1790124916164.png';
import card5Img from '../assets/images/regenerated_image_1790494753666.png';
import card6Img from '../assets/images/regenerated_image_1790124911271.png';
import qwenLongStripImg from '../assets/images/regenerated_image_1790127515360.webp';
import qwenLongStripPart2Img from '../assets/images/regenerated_image_1790130913808.webp';
import chicaltLongStripImg from '../assets/images/regenerated_image_1790496663518.webp';
import chicaltLongStripPart2Img from '../assets/images/regenerated_image_1790129044683.webp';
import chicaltLongStripPart3Img from '../assets/images/regenerated_image_1790495997684.webp';
import chicaltLongStripPart4Img from '../assets/images/chicalt_strip_part4_1790129397068.jpg';
import slinkLongStripImg from '../assets/images/slink_long_strip_1790129692731.jpg';
import slinkLongStripPart2Img from '../assets/images/slink_strip_part2_1790130059173.jpg';
import slinkLongStripPart3Img from '../assets/images/slink_strip_part3_1790130159294.jpg';
import slinkLongStripPart4Img from '../assets/images/slink_strip_part4_1790130597932.jpg';
import sisterLiuLongStripPart1Img from '../assets/images/regenerated_image_1790131459322.webp';
import sisterLiuLongStripPart2Img from '../assets/images/regenerated_image_1790131560093.webp';
import sisterLiuLongStripPart3Img from '../assets/images/regenerated_image_1790131692725.webp';
import neonNocturneLongStripImg from '../assets/images/regenerated_image_1790132076444.webp';
import nioLongStripPart1Img from '../assets/images/regenerated_image_1790132633705.webp';
import nioLongStripPart2Img from '../assets/images/regenerated_image_1790132804610.webp';
import nioLongStripPart3Img from '../assets/images/regenerated_image_1790132960822.webp';
import qwenDigitalAvatarVideo from '../assets/images/qwen_digital_avatar_motion.mp4';
import qwenDigitalAvatarPoster from '../assets/images/qwen_digital_avatar_1790142118046.jpg';

export const designerProfile: DesignerProfile = {
  avatar: avatarImg,
  name: {
    zh: '冯依然',
    en: 'Feng Yiran',
  },
  pinyin: 'Feng Yiran',
  title: {
    zh: 'UI设计师 / 视觉设计师',
    en: 'UI / Visual Designer',
  },
  headline: {
    zh: '冯依然 作品集 · UI与视觉设计精选 (2024-2026)',
    en: 'Feng Yiran Portfolio · UI & Visual Design (2024-2026)',
  },
  bio: {
    zh: '具备UI与视觉双栖背景的专业设计师。拥有3个独立UI项目及海量视觉物料设计经验。精通各类设计软件，并能深度运用AIGC工具实现商业化量产。擅长平衡设计美学与业务需求，具备极强的逻辑拆解能力与执行效率。能与产品及研发团队无缝对接，是一位懂产品逻辑、懂用户心理、且具备未来技术视野的协作伙伴。',
    en: 'Professional designer with dual UI & visual background. Experienced in 3 independent UI platforms and extensive commercial visuals. Highly proficient in design tools and advanced AIGC pipelines.',
  },
  status: {
    zh: '求职意向：UI设计师 / 视觉设计师',
    en: 'Target Role: UI / Visual Designer',
  },
  yearsOfExp: '2024-2026',
  stats: [
    {
      label: { zh: '独立UI项目', en: 'Independent UI Projects' },
      value: '3个',
      desc: { zh: '全链路B端与移动端体系', en: 'Full-stack B2B & Mobile' },
    },
    {
      label: { zh: '学术学业水平', en: 'Academic Standing' },
      value: '前 10%',
      desc: { zh: '武汉科技大学 绩点 3.5', en: 'GPA 3.5 Top 10%' },
    },
    {
      label: { zh: '行业与国家级奖项', en: 'Design Awards' },
      value: '6项',
      desc: { zh: '米兰设计周/华灿奖/大广赛', en: 'Milan Design Week / NCDA' },
    },
    {
      label: { zh: '工作流赋能', en: 'AIGC Production' },
      value: '音视全栖',
      desc: { zh: 'MJ/SD/Kling/Runway/Suno', en: 'Video, Music & Image Gen' },
    },
  ],
  contact: {
    phone: '15827658825',
    email: '3251908480@qq.com',
    wechat: 'Qwerndkljaol',
    zcool: 'https://www.zcool.com.cn/u/ZMTEyMjc4Mjg4',
    location: { zh: '湖北省武汉市', en: 'Wuhan, Hubei, China' },
    socials: [
      { platform: '站酷主页 (ZCOOL)', url: 'https://www.zcool.com.cn/u/ZMTEyMjc4Mjg4', handle: '个人站酷主页' },
    ],
  },
};

export const projectsData: Project[] = [
  {
    id: 's-link-pm',
    category: 'ui',
    categoryLabel: { zh: 'B端设计', en: 'B2B / Web' },
    title: {
      zh: '速合 (S-Link) 项目管理平台',
      en: 'S-Link Enterprise PM Platform',
    },
    subtitle: {
      zh: '速合，快速融合，让项目协作更高效。采用极客蓝克制调性，全平台同步与AI效率助手。',
      en: 'AI-driven agile collaboration platform with Geek Blue enterprise aesthetics.',
    },
    year: '2025-2026',
    role: { zh: 'UI / 交互设计师', en: 'UI / Interaction Designer' },
    tags: ['B端协同', '项目管理平台'],
    accentColor: '#4c71fe',
    featured: true,
    coverImage: card1Img,
    gallery: [
      card1Img,
      slinkLongStripImg,
      slinkLongStripPart2Img,
      slinkLongStripPart3Img,
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    ],
    longStripImage: slinkLongStripImg,
    longStripImages: [slinkLongStripImg, slinkLongStripPart2Img, slinkLongStripPart3Img],
    zcoolUrl: 'https://www.zcool.com.cn/work/ZNzM4NDA3MjQ=.html',
    summary: {
      zh: '速合 (S-Link)，一款 AI 驱动的高效协作平台 主打“快速融合”理念，通过 AI 赋能与多维度项目看板，解决跨部门协同痛点。设计风格冷静、克制，采用蓝色商务调性，旨在为现代企业提供极简、专业且全端覆盖的项目管理解决方案。',
      en: 'An AI-driven agile collaboration platform focusing on seamless fusion, multi-dimensional boards, and minimalist enterprise blue aesthetics.',
    },
    metrics: [],
    challenge: {
      zh: '解决跨部门协同沟通成本高、进度信息不透明与复杂业务场景下信息过载问题。',
      en: 'Addressing cross-department communication friction and cognitive data overload in enterprise workflows.',
    },
    solution: {
      zh: '采用经典侧边栏布局与极客蓝系统，建立多维度筛选（会议、待办、AI助手）与卡片式列表，强化状态外露与无缝流转。',
      en: 'Classic sidebar navigation with high-contrast data tables, card groupings, and predictive AI widgets.',
    },
    deliverables: [
      { zh: 'B端工作台、项目列表与甘特看板设计', en: 'Dashboard, task timeline, and kanban specs' },
      { zh: '个人主页、请假详情与消息通讯中心', en: 'User profiles, attendance approval, and IM modules' },
      { zh: '极客蓝设计系统规范与多状态组件库', en: 'Design system tokens and responsive component library' },
    ],
    tools: ['Figma', 'Photoshop', 'Illustrator'],
    designHighlights: [
      {
        title: { zh: '极客蓝视觉调性', en: 'Geek Blue Brand Tone' },
        desc: { zh: '冷静、克制、秩序，配合高对比中性色，让长流程操作不产生视觉疲劳。', en: 'Orderly chromatic harmony optimized for sustained deep work.' },
      },
      {
        title: { zh: '状态外露与即时反馈', en: 'Immediate State Visibility' },
        desc: { zh: '每个功能卡片下方清晰展示实时进度与负责人，管理者快速识别团队动态。', en: 'Explicit status chips and visual progress bars for instant operational insight.' },
      },
    ],
  },
  {
    id: 'tongyi-qwen-aios',
    category: 'ui',
    categoryLabel: { zh: '移动端 UI', en: 'Mobile AI' },
    title: {
      zh: '通义千问 APP 改版设计 (AIOS 转型)',
      en: 'Tongyi Qwen APP Redesign (AIOS)',
    },
    subtitle: {
      zh: '重塑为全场景 AI 智能体操作系统，立足“千人千面”，构建高度个性化全新中枢。',
      en: 'Transforming chat box into an omni-scenario AI Agent operating system.',
    },
    year: '2026',
    role: { zh: 'UI / 体验设计师', en: 'UI / UX Designer' },
    tags: ['移动端 AI', '全场景 AIOS'],
    accentColor: '#2938f5',
    featured: true,
    coverImage: card2Img,
    gallery: [
      card2Img,
      qwenLongStripImg,
      qwenLongStripPart2Img,
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    ],
    longStripImage: qwenLongStripImg,
    longStripImages: [qwenLongStripImg, qwenLongStripPart2Img],
    videoUrl: qwenDigitalAvatarVideo,
    videoPoster: qwenDigitalAvatarPoster,
    videoZcoolUrl: 'https://www.zcool.com.cn/work/ZNzM4ODExNTY=.html',
    videoTitle: {
      zh: '千问APP | 预设数字人动效展示 · 站酷推荐作品',
      en: 'Qwen APP | Digital Avatar Motion Showcase on ZCOOL',
    },
    zcoolUrl: 'https://www.zcool.com.cn/work/ZNzM4NDA1ODg=.html',
    summary: {
      zh: '本方案将千问 App 重塑为全场景 AI 智能体操作系统，深度打通生活服务与专业创作两大体系。设计立足“千人千面”逻辑，支持用户深度定制私有数字人。针对中国用户偏好，确立了以语音直达为核心的扁平化交互体系，构建起一个高度个性化、无缝流转的全时态 AI 智数中枢。',
      en: 'Evolving from chat-box into an omni-scenario AI Agent OS with multimodal hubs, visual memory timelines, and personalized digital companion avatars.',
    },
    metrics: [],
    challenge: {
      zh: 'AI 无法理解用户的长期意图导致交互效率随使用频率增加而边际递减，传统对话界面功能深度不足。',
      en: 'Single conversational interfaces lack functional depth and continuous long-term user context.',
    },
    solution: {
      zh: '构建可视化记忆链条，通过“偏好/习惯/事实”三维标签脱敏分类；打造沉浸式磨砂玻璃中枢与悬浮直达交互区。',
      en: 'Visual memory management timeline with frosted-glass hub, floating mic button, and customized digital avatars.',
    },
    deliverables: [
      { zh: '全场景 AIOS 移动端全链路页面架构与原型', en: 'Full mobile app architecture and responsive prototypes' },
      { zh: '数字人形象定制、音调语速与意图快键交互', en: 'Digital human personalization workflows and intent buttons' },
      { zh: 'AI 记忆时间轴与个人资产中枢界面设计', en: 'Visual memory timeline and digital asset drawer' },
    ],
    tools: ['Figma', 'AIGC', 'Photoshop', 'Illustrator'],
    designHighlights: [
      {
        title: { zh: '沉浸式互动中枢', en: 'Interactive Digital Hub' },
        desc: { zh: '通过数字人形象配合实时天气与任务指引，让 AI 摆脱冰冷工具感，更像贴心生活管家。', en: 'Companion avatar with ambient greeting, weather context, and intent quick keys.' },
      },
      {
        title: { zh: '可视化记忆时间轴', en: 'Visual Memory Codex' },
        desc: { zh: '清晰归纳饮食、习惯、办公偏好标签，用户可自主编辑删减，保障隐私与透明度。', en: 'Multi-tag memory timeline giving users full transparency and editing control.' },
      },
    ],
  },
  {
    id: 'chicalt-ecommerce',
    category: 'ui',
    categoryLabel: { zh: '跨境电商', en: 'E-Commerce' },
    title: {
      zh: 'ChicAlt 跨境电商 APP',
      en: 'ChicAlt Cross-Border Fashion E-Commerce',
    },
    subtitle: {
      zh: '聚焦18-35岁年轻女性，以“AI赋能个性时尚”为核心的云感极简跨境电商应用。',
      en: 'AI virtual styling and cloud-like minimalist e-commerce for global fashion shoppers.',
    },
    year: '2025',
    role: { zh: 'UI / 移动端设计师', en: 'Mobile Product Designer' },
    tags: ['跨境电商', 'AI虚拟试衣'],
    accentColor: '#ff7686',
    featured: false,
    coverImage: card3Img,
    gallery: [
      card3Img,
      chicaltLongStripImg,
      chicaltLongStripPart2Img,
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    ],
    longStripImage: chicaltLongStripImg,
    longStripImages: [chicaltLongStripImg, chicaltLongStripPart2Img],
    zcoolUrl: 'https://www.zcool.com.cn/work/ZNzM4MjQwNzI=.html',
    summary: {
      zh: 'ChicAlt 是聚焦 18-35 岁时尚女性的跨境电商 App，对标 Shein，覆盖服饰、箱包、美妆等品类，以“AI 赋能个性时尚”为核心。设计融合 AI 虚拟试衣、精准搭配推荐与云感极简设计，构建“发现 - 试穿 - 购买”的沉浸式时尚闭环。',
      en: 'Cross-border fashion app featuring 3D body scanning, AI virtual fitting rooms, and intuitive emotional navigation.',
    },
    metrics: [],
    challenge: {
      zh: '跨境网购中由于尺码不准、上身效果未知导致的退货率高以及海外用户审美多样性匹配问题。',
      en: 'High return rates from sizing guesswork and fragmented cross-border style discovery.',
    },
    solution: {
      zh: '搭建 AI 3D 虚拟试衣间、身材参数微调、意象流金刚区与去中心化非模态筛选，打造轻松流畅的“逛街感”。',
      en: 'AI 3D virtual try-on room, sensory mood boards, and non-modal facet filtering for smooth discovery.',
    },
    deliverables: [
      { zh: '首页、瀑布流、分类、商品详情与结算全链路', en: 'Homepage, discovery feeds, product details, and checkout flow' },
      { zh: 'AI 试衣间交互体系、身材校准与虚拟模特展示', en: 'Virtual fitting room, body scanner, and digital try-on specs' },
      { zh: '云感极简色彩规范、图标库与组件体系', en: 'Cloud-minimalism design system and icon library' },
    ],
    tools: ['Figma', 'Photoshop', 'Illustrator', 'AIGC 3D'],
    designHighlights: [
      {
        title: { zh: '云感极简美学', en: 'Cloud-like Minimalism' },
        desc: { zh: '采用纯净呼吸感粉白粉蓝渐变，将电商原本臃肿的视觉噪点转化为轻松高级的逛街感。', en: 'Airy pastel gradients and clean breathing room replacing visual clutter.' },
      },
      {
        title: { zh: '沉浸式意象导航', en: 'Sensory Visual Navigation' },
        desc: { zh: '不再让用户面对枯燥文字列表，而是用高清视觉缩略图作为分类入口，降低认知负担。', en: 'Visual-first catalog entry points lowering user cognitive load.' },
      },
    ],
  },
  {
    id: 'sister-liu-ip',
    category: 'ip',
    categoryLabel: { zh: 'IP 设计', en: 'IP & 3D' },
    title: {
      zh: '“刘姐·菜篮子” 品牌 IP 衍生与运营',
      en: "Sister Liu's Vegetable Stand - 3D IP Universe",
    },
    subtitle: {
      zh: '让数字化菜场有温度、有人味、有记忆，原创孵化“刘姐”与“小满”3D萌趣形象。',
      en: 'Warm human-centric 3D mascot universe and physical collectibles for digital agriculture.',
    },
    year: '2024-2025',
    role: { zh: 'IP 视觉设计 / 3D 造型', en: 'IP Designer & 3D Artist' },
    tags: ['3D潮玩 IP', '品牌全案衍生'],
    accentColor: '#f59e0b',
    featured: false,
    coverImage: card4Img,
    gallery: [
      card4Img,
      sisterLiuLongStripPart1Img,
      sisterLiuLongStripPart2Img,
      sisterLiuLongStripPart3Img,
    ],
    longStripImage: sisterLiuLongStripPart1Img,
    longStripImages: [sisterLiuLongStripPart1Img, sisterLiuLongStripPart2Img, sisterLiuLongStripPart3Img],
    zcoolUrl: 'https://www.zcool.com.cn/work/ZNzM4NDc5MDg=.html',
    summary: {
      zh: '“刘姐菜篮子”是一个扎根江苏、以温暖人情味为核心的数字菜场品牌。以“帮农·助农·惠市民”为使命，原创孵化品牌主理人“刘姐”与忠实伙伴“小满”两大3D角色，涵盖角色三视图、状态表情、季节场景换装、线上运营大促物料及文创插画。',
      en: 'Complete 3D mascot incubation for Sister Liu and Xiao Man, including turnaround blueprints, seasonal outfits, interactive emoji packs, and holiday promotional key art.',
    },
    metrics: [],
    challenge: {
      zh: '传统生鲜农贸数字化过程缺乏情感连接与品牌辨识度，生鲜电商同质化竞争严重。',
      en: 'Lack of emotional connection and unique identity in conventional digital agritech platforms.',
    },
    solution: {
      zh: '通过黏土潮玩与柔和光影塑造亲切朴素的形象，打造“春水煎茶·初新”、“青梅煮雨·映荷”、“麦浪翻金·食秋”等生活场景化延展。',
      en: 'Warm clay-like 3D rendering with narrative seasonal extensions conveying earthiness and trustworthiness.',
    },
    deliverables: [
      { zh: '“刘姐”与“小满”标准角色三视图与档案设定', en: 'Standard turnaround 3-view blueprints and character dossiers' },
      { zh: '3D 角色表情包与多场景换装视觉系统', en: '3D emoji states and seasonal lifestyle clothing variants' },
      { zh: '新春市集、西瓜节、春耕等大促运营主视觉及插画', en: 'E-commerce campaign posters, banners, and marketing illustrations' },
    ],
    tools: ['Blender', 'Cinema 4D', 'Photoshop', 'Illustrator'],
    designHighlights: [
      {
        title: { zh: '角色情感化档案', en: 'Emotional Character Lore' },
        desc: { zh: '亲切笃定、热心爽朗的刘姐与憨厚活泼的小满篮子，形成强互补记忆符号。', en: 'Affectionate rural steward paired with a lively vegetable basket companion.' },
      },
      {
        title: { zh: '全周期大促运营延展', en: 'Omni-Seasonal Campaign System' },
        desc: { zh: '新春市集、秋日囤货、蟹肥稻香等全套节气大促海报，让线上买菜充满烟火气。', en: 'Rich seasonal marketing key art connecting agricultural harvest with community warmth.' },
      },
    ],
  },
  {
    id: 'neon-nocturne-game',
    category: 'brand',
    categoryLabel: { zh: '网页设计', en: 'Web & KV' },
    title: {
      zh: '《Neon Nocturne 霓虹夜想曲》游戏官网与KV视觉',
      en: 'Neon Nocturne - Cyberpunk Game Web & KV',
    },
    subtitle: {
      zh: '赛博朋克科幻与节奏解谜游戏官网，高频感官刺激与霓虹荧光美学的先锋视觉探索。',
      en: 'Cyberpunk rhythm-puzzle game web portal with high-contrast neon luminescence.',
    },
    year: '2024',
    role: { zh: '主视觉设计 / 官网架构', en: 'KV Visual & Web Designer' },
    tags: ['赛博朋克', '游戏官网 KV'],
    accentColor: '#d946ef',
    featured: false,
    coverImage: card5Img,
    gallery: [
      card5Img,
      neonNocturneLongStripImg,
    ],
    longStripImage: neonNocturneLongStripImg,
    longStripImages: [neonNocturneLongStripImg],
    zcoolUrl: 'https://www.zcool.com.cn/work/ZNzM4NDEwNDA=.html',
    summary: {
      zh: '《Neon Nocturne 霓虹夜想曲》是一款结合赛博朋克科幻与音乐解谜冒险的节奏类游戏。视觉以“高频感官刺激 × 低生活高科技世界观”的瞬间浓缩为导向，完成主视觉 KV、定制字体设计、角色立绘展示、曲包交互与多端官网全景布局。',
      en: 'Immersive gaming portal combining cyber-visuals, bespoke typography, responsive web architecture, and dynamic hero KV art.',
    },
    metrics: [],
    challenge: {
      zh: '在浓郁暗黑霓虹赛博氛围中，既要保持视觉张力与反抗感，又要确保官网信息层级清晰、下载转化流畅。',
      en: 'Balancing aggressive neon street cyberpunk aesthetics with readable game portal information architecture.',
    },
    solution: {
      zh: '运用左右分割构图、荧光故障文字设计、机能卡片与发光控制面板风格，构筑极具沉浸感的游戏视窗。',
      en: 'Bespoke glitch typography, tactical UI panels, dynamic song pack sliders, and character spotlight showcases.',
    },
    deliverables: [
      { zh: '游戏官网首页、新闻资讯、核心角色与特色展示', en: 'Official portal homepage, news, characters, and features' },
      { zh: '“0 BPM 全员重启”主题定制字体与色彩规范', en: 'Bespoke cyber-typography system and neon color palettes' },
      { zh: '限时体验卡兑换营销弹窗与社交宣发物料', en: 'Event marketing popups and promotional social assets' },
    ],
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    designHighlights: [
      {
        title: { zh: '破裂故障字效设计', en: 'Glitch Typographic System' },
        desc: { zh: '定制倾斜、故障切角与荧光绿粉渐变字形，瞬间点燃电竞玩家的视听情绪。', en: 'Angular glitch typography reinforcing high-speed kinetic rhythm energy.' },
      },
      {
        title: { zh: '全景响应式官网排版', en: 'Responsive Web Experience' },
        desc: { zh: '多维曲包切换、角色动态档案与模块化下载入口，实现沉浸感与高转化的平衡。', en: 'Seamless transition across song previews, character stats, and instant download funnels.' },
      },
    ],
  },
  {
    id: 'nio-aigc-super-symbol',
    category: 'aigc',
    categoryLabel: { zh: 'AIGC 视觉', en: 'AIGC Posters' },
    title: {
      zh: '蔚来 NIO × AIGC 创作超级符号海报',
      en: 'NIO × AIGC Super Symbol Poster Series',
    },
    subtitle: {
      zh: '以生成式 AI 融合蔚来 ET5 Touring 车形美学、东方禅意与全球史诗地貌。',
      en: 'AI generative exploration blending NIO ET5 Touring with epic natural geology.',
    },
    year: '2024',
    role: { zh: 'AIGC 概念设计师', en: 'AIGC Visual Artist' },
    tags: ['AIGC视觉', '超级符号海报'],
    accentColor: '#38bdf8',
    featured: false,
    coverImage: card6Img,
    gallery: [
      card6Img,
      nioLongStripPart1Img,
      nioLongStripPart2Img,
      nioLongStripPart3Img,
    ],
    longStripImage: nioLongStripPart1Img,
    longStripImages: [nioLongStripPart1Img, nioLongStripPart2Img, nioLongStripPart3Img],
    zcoolUrl: 'https://www.zcool.com.cn/work/ZNzM4NDA5MDQ=.html',
    summary: {
      zh: '本系列通过 AIGC 技术，将蔚来 ET5 Touring 的车型美学与品牌色彩，分别融入“色境共生”东方禅意与“巡境四时·地貌史诗”两大主题，创作出系列视觉海报。旨在超越传统汽车广告，以数字艺术形式诠释蔚来品牌文化中“设计与环境共鸣”、“科技与人文共生”的核心精神。',
      en: 'Generative AI brand posters blending NIO ET5 Touring design with epic natural geology, exploring design-nature symbiosis.',
    },
    metrics: [],
    challenge: {
      zh: '如何让 AI 精确保持蔚来超级符号几何比例与车体特定光影，避免 AI 生成中的结构扭曲与机械感。',
      en: 'Preserving exact geometric brandmark fidelity and automotive specular highlights via AI pipelines.',
    },
    solution: {
      zh: '建立“黑白线稿 → Normal Map法线贴图 → Depth深度图 → LibLib/SD重绘 → 即梦AI合成”的高精度工作流。',
      en: 'Multi-pass ControlNet workflow leveraging depth maps, normal maps, and post-synthesis compositing.',
    },
    deliverables: [
      { zh: '蔚来 ET5 Touring「色境共生」4张系列主题海报', en: '4 "Symbiosis with Color" theme posters' },
      { zh: '蔚来「巡境四时·地貌史诗」雪山、沙漠与秘境海报', en: '"Epic Landscapes" seasonal terrain poster collection' },
      { zh: 'AIGC 品牌符号控形工作流与参数沉淀文档', en: 'Precision brandmark generative pipeline documentation' },
    ],
    tools: ['Midjourney', 'Stable Diffusion', 'Liblib', 'Photoshop'],
    designHighlights: [
      {
        title: { zh: '超级符号大地艺术化', en: 'Land-Art Brand Symbolism' },
        desc: { zh: '将蔚来车标转化为雪山积雪雕塑、透明悬浮水珠与巨型岩石，具有强烈史诗感。', en: 'Transforming the NIO symbol into monumental snow sculptures and ethereal liquid glass.' },
      },
      {
        title: { zh: '高精度工业流控形', en: 'Precision ControlNet Pipeline' },
        desc: { zh: '运用 Depth 与 Normal Map 严密约束车型线条与车标比例，实现商业级精细交付。', en: 'Rigorous control over vehicle reflections and geometric tolerances for production fidelity.' },
      },
    ],
  },
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-intern-1',
    type: 'internship',
    typeLabel: { zh: '实习经历', en: 'Internship' },
    company: { zh: '中国科学院软件研究所', en: 'Institute of Software, Chinese Academy of Sciences' },
    role: { zh: 'UI设计师 / 交互设计实习生', en: 'UI / UX Design Intern' },
    period: '2026.08 - 至今',
    location: { zh: '北京 / 远程', en: 'Beijing / Remote' },
    badge: { zh: '当前在任', en: 'Current' },
    description: {
      zh: '负责军工系统及数据中台产品的界面视觉与交互设计。深度参与需求梳理与原型评审，结合复杂业务场景优化界面布局与操作逻辑，输出高保真设计方案并跟进前端开发。参与产品视觉风格迭代与组件库搭建，统一多模块视觉体系以提升设计交付效率。与产品经理、前端工程师紧密协作，精准解决设计与开发过程中的适配及交互细节问题。',
      en: 'Responsible for military systems and data platform UI/UX design. Participating in requirement reviews, complex layout logic, high-fidelity prototypes, and component design systems.',
    },
    achievements: [
      { zh: '输出符合国家级与军工规格的数据中台高保真设计方案，并全流程跟进前端实现与还原走查', en: 'Delivered high-fidelity design specs for mission-critical enterprise platforms' },
      { zh: '搭建并统一多模块设计组件库，显著提高团队设计交付效率与多端适配一致性', en: 'Unified multi-module design system repository, enhancing developer handoff speed' },
    ],
    skills: ['军工与数据中台', '高保真原型', '组件库搭建', 'Figma', '多端适配与走查'],
  },
  {
    id: 'exp-intern-2',
    type: 'internship',
    typeLabel: { zh: '实习经历', en: 'Internship' },
    company: { zh: '武大数智教育有限公司', en: 'Wuda Shuzhi Education Co., Ltd.' },
    role: { zh: 'UI / 视觉设计实习生', en: 'UI / Visual Design Intern' },
    period: '2026.06 - 2026.08',
    location: { zh: '湖北武汉', en: 'Wuhan, Hubei' },
    description: {
      zh: '负责公司主要产品睿云（AI云端实验平台）页面的优化（如积分详情页，个人中心页，支付页面等），熟练复用组件库进行设计以及图标绘制，设计细节到位并精准切图交付研发团队，基本无返工，极大降低团队的沟通及走查成本；负责设计公司企业文化墙，产品发布大会ppt页面以及产品宣传手册等，排版设计与商务视觉输出符合政企高校规格，获得领导好评。',
      en: 'Optimized key pages of Ruiyun AI cloud experiment platform. Reused component libraries, drafted custom icons, produced high-standard PPT and corporate culture booklets with high leadership praise.',
    },
    achievements: [
      { zh: '熟练复用组件库完成核心高频页面迭代，细节精确切图标注，基本无返工，大幅缩短团队沟通走查成本', en: 'Zero rework on core page handoff with precise asset redlines' },
      { zh: '主导设计企业文化墙、发布会大会PPT及宣传手册，高品质商务排版获政企高校客户一致好评', en: 'Designed corporate wall, keynote decks, and booklets meeting enterprise standards' },
    ],
    skills: ['睿云AI云平台', '组件库复用', '图标与切图标注', '企业文化墙', '发布会PPT排版'],
  },
  {
    id: 'exp-proj-1',
    type: 'project',
    typeLabel: { zh: '项目经历', en: 'Project Experience' },
    company: { zh: '武大数智有限公司', en: 'Wuda Shuzhi Co., Ltd.' },
    role: { zh: '睿云云平台 (课程云实验网站) UI设计与迭代', en: 'Ruiyun Cloud Platform UI Design & Iteration' },
    period: '2026.05 - 2026.07',
    location: { zh: '湖北武汉', en: 'Wuhan, Hubei' },
    description: {
      zh: '包括【登录/注册页、积分充值、套餐详情、收银台/支付页面、个人中心】等核心高频页面的设计与改版；补充绘制产品统一的系统图标与业务场景插图；完成全量页面的精确切图与标注，制定动效及交互状态说明。UI界面设计推演严谨、细节到位，最终交付的页面均达到导师可直接复用的高标准，基本无返工，大幅缩短了设计走查周期。',
      en: 'Comprehensive redesign of core high-frequency flows: login/register, credits, pricing, checkout/payment, and user center. Standardized system icons, redline annotations, and interaction specs.',
    },
    achievements: [
      { zh: '覆盖收银台、积分充值与个人中心全量关键业务流，制定交互状态说明与动效规范', en: 'Covered full payment & user center journeys with comprehensive motion & state specs' },
      { zh: '交付标准达到导师直接复用的高水准，基本无返工，大幅缩短研发设计走查周期', en: 'Zero-rework handoff standard, significantly reducing QA and visual audit cycles' },
    ],
    skills: ['核心高频页面改版', '统一系统图标与插图', '收银台与支付流', '精确切图标注', 'Figma'],
  },
  {
    id: 'exp-proj-2',
    type: 'project',
    typeLabel: { zh: '项目经历', en: 'Project Experience' },
    company: { zh: '通义千问创新改版', en: 'Tongyi Qwen Design Project' },
    role: { zh: '通义千问 APP 改版设计 (AIOS 转型)', en: 'Tongyi Qwen APP Redesign (AIOS)' },
    period: '2026.03 - 2026.04',
    location: { zh: '个人项目 / 概念实践', en: 'Personal / Concept' },
    description: {
      zh: '主导从“对话框”向“AI 操作系统”升级，设计多协作系统和可视化“记忆管理系统”，运用动态反馈优化复杂认知的认知成本。制定 AI 组件规范，利用 AIGC 工作流实时生成 UI 材质与 IP 形象。成功打造“数字人伙伴”体系，实现品牌升维；缩短 25% 研发迭代周期，确保了视觉差异化竞争优势。',
      en: 'Led upgrade from chat box to AIOS, designing multi-agent workflows and visual memory timeline. Created digital companion system, reducing iteration cycle by 25% with unique visual differentiation.',
    },
    achievements: [
      { zh: '成功打造“数字人伙伴”体系，实现从单向工具向共情智能体系统的品牌升维', en: 'Built personalized digital companion system, elevating tool to emotional agent' },
      { zh: '制定 AI 组件规范并融合 AIGC 材质工作流，缩短 25% 研发迭代周期', en: 'Shortened development cycle by 25% through standardized AI components' },
    ],
    skills: ['全场景 AIOS', '多协作系统', '可视化记忆链条', '数字人伙伴', 'AIGC UI工作流'],
  },
  {
    id: 'exp-proj-3',
    type: 'project',
    typeLabel: { zh: '项目经历', en: 'Project Experience' },
    company: { zh: '电商大促设计专项', en: 'E-Commerce Campaign Design' },
    role: { zh: '淘宝情人节促销活动UI界面设计', en: 'Taobao Valentine Campaign UI Design' },
    period: '2025.11 - 2025.12',
    location: { zh: '大促专项 / 移动端', en: 'Campaign Special' },
    description: {
      zh: '搭建模块化组件库，实现 H5、小程序、App 多端视觉高度同步。引入 AIGC工作流替代传统绘图，高效产出高质量 3D 材质与复杂大促场景。优化瀑布流与金刚位逻辑。团队制图效率提升 40%，产出效率提升 30% 以上；通过设计手段有效缩短转化链路，提升了用户沉浸感。',
      en: 'Built modular component library across H5, Mini-program, and App. Integrated AIGC workflows for 3D textures and campaign scenes, boosting team drafting speed by 40% and output by 30%.',
    },
    achievements: [
      { zh: '引入 AIGC 工作流替代传统耗时绘图，团队制图效率提升 40%，产出效率提升 30% 以上', en: 'Boosted visual production efficiency by 40% using generative 3D workflows' },
      { zh: '优化金刚位与双列瀑布流排版逻辑，有效缩短转化链路，提升用户沉浸感与点击转化', en: 'Streamlined navigation and dual-column feeds, optimizing conversion funnels' },
    ],
    skills: ['多端模块化组件库', 'AIGC 3D大促材质', '瀑布流与金刚位', '电商转化链路', 'C4D / SD'],
  },
  {
    id: 'exp-campus-1',
    type: 'campus',
    typeLabel: { zh: '校园经历', en: 'Campus Leadership' },
    company: { zh: '武汉科技大学 艺术与设计学院', en: 'WUST School of Art and Design' },
    role: { zh: '艺术与设计学院新媒体中心主任', en: 'Director of New Media Center' },
    period: '2025.05 - 至今',
    location: { zh: '湖北武汉', en: 'Wuhan, Hubei' },
    description: {
      zh: '团队统筹与流程优化：负责学院全媒体矩阵(微信、抖音、视频号)的运营决策，主导建立了示范化的选题与作品产出流程，显著提升了学院特色辨识度，通过数据分析复盘点击率与转化率，通过内容调优实现流量增长，多个作品获得校级好评，锻炼了洞察力与运营思维。',
      en: 'Leading operational decisions across WeChat, Douyin, and video platforms. Standardized content pipelines, analyzed engagement metrics, achieving campus-wide acclaim and sharpening user empathy.',
    },
    achievements: [
      { zh: '主导建立规范化选题策划与视觉产出闭环，显著提高学院多媒体矩阵的辨识度与传播声量', en: 'Established standardized creative pipeline boosting college media visibility' },
      { zh: '通过数据分析复盘点击率与转化率，持续内容调优实现多篇推文阅读量与点赞新高', en: 'Drove audience engagement through data review and continuous creative tuning' },
    ],
    skills: ['全媒体矩阵运营', '团队统筹管理', '数据分析与复盘', '视觉传播与把控'],
  },
];

export const educationData: Education[] = [
  {
    id: 'edu-1',
    institution: { zh: '武汉科技大学', en: 'Wuhan University of Science and Technology' },
    degree: { zh: '本科（23届本科生）', en: "Bachelor's Degree (Class of 2023)" },
    major: { zh: '视觉传达', en: 'Visual Communication Design' },
    period: '2023.09 - 至今 (在读)',
    gpa: '3.5 (专业前10%)',
    politics: { zh: '中共党员', en: 'CPC Member' },
    position: { zh: '学院新媒体中心主任', en: 'Director of New Media Center' },
    badge: { zh: '专业前 10% · 中共党员', en: 'Top 10% · Outstanding Standing' },
    description: {
      zh: '在校期间专业成绩优异（绩点 3.5，专业前10%），担任学院新媒体中心主任，政治面貌为中共党员。具备扎实的造型基础与系统性现代设计逻辑，熟练掌握各类设计与三维软件，并在AIGC音视频与商业视觉领域形成深厚积淀。',
      en: 'Top 10% academic standing (GPA 3.5), serving as Director of New Media Center. Solid foundation in UI/UX systems, 3D modeling, and production-ready AIGC pipelines.',
    },
    honors: [
      { zh: '米兰设计周高校设计展 国家级三等奖', en: 'Milan Design Week - National 3rd Prize' },
      { zh: '米兰设计周高校设计展 省级一等奖', en: 'Milan Design Week - Provincial 1st Prize' },
      { zh: '大广赛（全国大学生广告艺术大赛） 省级三等奖', en: 'National Advertising Art Festival - Provincial 3rd Prize' },
      { zh: 'NCDA 未来设计师全国高校艺术设计大赛 省级三等奖', en: 'NCDA Future Designer Competition - Provincial 3rd Prize' },
      { zh: '华灿奖海峡两岸青年设计大赛 省级三等奖', en: 'Huacan Design Award - Provincial 3rd Prize' },
      { zh: '“互联网+”大学生创新创业大赛 校级金奖', en: '"Internet+" Innovation & Entrepreneurship - Gold Medal' },
    ],
    focusAreas: [
      { zh: 'AIGC数字设计', en: 'AIGC Digital Design' },
      { zh: 'UI设计与多端规范', en: 'UI/UX & Platform Specs' },
      { zh: '品牌设计与超级符号', en: 'Brand Identity & Super-symbols' },
      { zh: '插画设计', en: 'Illustration Design' },
      { zh: 'IP形象设计', en: 'Mascot & IP Design' },
      { zh: 'C4D三维设计', en: 'C4D 3D Spatial Design' },
      { zh: '字体设计', en: 'Typography & Type Design' },
    ],
  },
];

export const skillDimensions: SkillDimension[] = [
  {
    id: 'ui-ux',
    title: { zh: 'UI/UX 体验与界面系统', en: 'UI/UX & Interface Systems' },
    subtitle: { zh: '具备完整全流程设计经验，擅长B2B效率工具与移动端电商，熟悉多端规范', en: 'End-to-end UI/UX experience across B2B enterprise platforms and mobile e-commerce.' },
    icon: 'Layout',
    color: '#a855f7',
    skills: [
      { name: 'Figma (组件变体/Auto Layout/Design Tokens/高保真原型)', level: 98, tag: { zh: '精通', en: 'Expert' } },
      { name: 'stitch / canvas (交互逻辑推演与多端画布协同)', level: 92, tag: { zh: '熟练', en: 'Advanced' } },
      { name: 'Web / iOS / Android 设计规范与精准切图标注', level: 95, tag: { zh: '精通', en: 'Expert' } },
      { name: 'Axure / 高保真原型与交互动效状态说明', level: 90, tag: { zh: '熟练', en: 'Advanced' } },
    ],
  },
  {
    id: 'brand-visual',
    title: { zh: '视觉设计与数字物料', en: 'Visual Design & Digital Assets' },
    subtitle: { zh: '海量视觉物料与商业宣发设计经验，精通图像精修、矢量插画与排版', en: 'Extensive brand visuals, commercial marketing collaterals, and print-ready publishing.' },
    icon: 'Feather',
    color: '#e879f9',
    skills: [
      { name: 'Adobe Photoshop (商业大促海报/质感精修/复杂图像合成)', level: 98, tag: { zh: '精通', en: 'Expert' } },
      { name: 'Adobe Illustrator (矢量插画/品牌Logo/定制字体设计)', level: 96, tag: { zh: '精通', en: 'Expert' } },
      { name: 'Adobe After Effects (界面微交互动效/视频合成演示)', level: 88, tag: { zh: '熟练', en: 'Advanced' } },
      { name: 'InDesign / PPT商业排版 (企业文化墙/宣传手册/发布会Keynote)', level: 92, tag: { zh: '熟练', en: 'Advanced' } },
    ],
  },
  {
    id: 'aigc-audio-video',
    title: { zh: 'AIGC 视觉与音视频制作', en: 'AIGC, Video & Audio Production' },
    subtitle: { zh: '深度运用AIGC实现商业化量产，具备AI视频运镜与商业短视频配乐创作全流程', en: 'Industrial AIGC pipeline: text-to-image consistency, AI video generation, and commercial music scores.' },
    icon: 'Sparkles',
    color: '#818cf8',
    skills: [
      { name: 'Midjourney (提示词工程/风格一致性控制/质感探索)', level: 98, tag: { zh: '精通', en: 'Expert' } },
      { name: 'Stable Diffusion (ControlNet 构图控制/ LoRA 专属模型训练)', level: 95, tag: { zh: '精通', en: 'Expert' } },
      { name: 'Kling / Runway (AI 视频动态生成 / 商业运镜与镜头语言控制)', level: 92, tag: { zh: '熟练', en: 'Advanced' } },
      { name: 'Liblib / Pika (AI 短剧视觉探索 / 连续分镜与视觉资产输出)', level: 90, tag: { zh: '熟练', en: 'Advanced' } },
      { name: 'Suno (商业短视频配乐 / 场景氛围音乐创作 / AI MV制作)', level: 90, tag: { zh: '熟练', en: 'Advanced' } },
    ],
  },
  {
    id: 'c4d-3d',
    title: { zh: '3D 三维造型与 C4D', en: '3D Modeling, IP & C4D' },
    subtitle: { zh: '独立完成3D IP潮玩角色造型、电商三维质感场景与盲盒资产搭建', en: '3D character IP modeling, e-commerce promotional textures, and Octane rendering.' },
    icon: 'Boxes',
    color: '#c084fc',
    skills: [
      { name: 'Cinema 4D (电商3D质感物料/场景搭建/三维动态图形)', level: 92, tag: { zh: '精通', en: 'Expert' } },
      { name: 'Blender (3D IP角色三视图塑造/萌趣潮玩资产建模)', level: 90, tag: { zh: '熟练', en: 'Advanced' } },
      { name: 'Octane Render / 材质着色器 (次表面散射/玻璃流光/金属质感)', level: 88, tag: { zh: '熟练', en: 'Advanced' } },
      { name: 'ZBrush (角色高模泥塑雕刻与数字拓扑)', level: 85, tag: { zh: '熟练', en: 'Advanced' } },
    ],
  },
];

export const toolStacks: ToolStack[] = [];
