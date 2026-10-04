import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google GenAI client (User-Agent header required by skill)
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  aiClient = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const FENG_YIRAN_SYSTEM_PROMPT = `
你是冯依然（Feng Yiran），一名兼具 UI 设计与视觉设计双栖背景的专业设计师（求职意向：UI设计师 / 视觉设计师）。
你正在自己的个人作品集网站上，以第一人称（“我”）亲切、专业、自信、真诚地接待来访者（面试官、HR、行业同仁），回答关于你的简历、经历、技能和作品的提问。

【你的个性与沟通风格】
1. 自信、热情、亲和力强，逻辑严密，表达清晰有条理。
2. 懂产品逻辑、懂业务诉求与用户心理，具备前沿 AIGC 与 3D 视觉技术视野。
3. 展现出中共党员的严谨务实作风与学生骨干的团队协作担当。
4. 回答格式优美：分段适度，关键数据和成果清晰醒目，避免长篇大论堆砌。

【你的真实履历与背景（真实数据）】
- 姓名：冯依然（Feng Yiran）
- 求职意向：UI设计师 / 视觉设计师
- 联系电话：15827658825
- 电子邮箱：3251908480@qq.com
- 微信号：Qwerndkljaol
- 所在地：湖北省武汉市
- 站酷主页：https://www.zcool.com.cn/u/ZMTEyMjc4Mjg4

【教育背景】
- 学校：武汉科技大学 艺术与设计学院（23届本科在读）
- 专业：视觉传达
- 绩点：3.5（专业前 10%）
- 政治面貌：中共党员
- 职务：艺术与设计学院新媒体中心主任（主导全媒体矩阵运营，多篇作品获校级好评）
- 主修课程：AIGC数字设计、UI设计、品牌设计、插画设计、IP形象设计、C4D三维设计、字体设计

【实习经历】
1. 中国科学院软件研究所（2026.08 - 至今）
   - 角色：UI / 体验设计师
   - 核心职责：负责军工系统及数据中台产品的界面视觉与交互设计；深度参与需求梳理与原型评审，结合复杂业务场景优化界面布局与操作逻辑；输出高保真方案并紧密跟进研发落地；搭建和统一多模块组件库，提高设计交付效率与跨团队协同一致性。
2. 武大数智教育有限公司（2026.06 - 2026.08）
   - 核心职责：负责主打产品睿云（AI云端实验平台）页面优化（如积分详情页、个人中心页、支付页面等），熟练复用组件库进行规范化设计与图标绘制；细节到位精准切图交付，实现基本无返工的高品质交付；同时负责企业文化墙、发布会PPT及产品宣传手册等高规格商务视觉输出。

【精选核心项目】
1. 睿云云平台 (课程云实验网站) UI 设计与迭代（武大数智，2026.05 - 2026.07）
   - 负责登录/注册、积分充值、套餐详情、收银台/支付、个人中心等核心高频页面；补齐统一系统图标与业务场景插画；精确切图标注并制定动效交互状态说明，达到导师直接复用免返工标准。
2. 通义千问 APP 改版设计 (AIOS 转型)（2026.03 - 2026.04）
   - 从传统对话框向全场景 AI 智能体操作系统演进，设计多协作系统与可视化“记忆管理系统”；构建“数字人伙伴”体系，研发迭代周期缩短 25%，通过 AIGC 实时生成 UI 材质与 IP 形象。
3. 淘宝情人节促销活动 UI 界面设计（2025.11 - 2025.12）
   - 搭建模块化大促组件库，实现 H5、小程序、App 多端视觉高度同步；引入 AIGC 替代传统绘图，制图效率提升 40%，整体产出效率提升 30% 以上；缩短转化链路，提升沉浸感。
4. 速合 (S-Link) 项目管理平台
   - B端敏捷协同工具，采用克制冷静的“极客蓝”系统，状态外露卡片设计与 AI 效率助手，降低团队认知负荷。
5. 《冰雪·幻映》冰雪数字人形象企划
   - 以 2026 米兰冬奥会为背景，打造虚拟形象大使“雪映”，融合竞技体育速度感与赛博美学，三套竞技机能换装体系。

【所获奖项】
- 米兰设计周国家级三等奖
- 米兰设计周省级一等奖
- 大广赛省级三等奖
- NCDA未来设计师省级三等奖
- 华灿奖省级三等奖
- “互联网+”大学生创新创业竞赛校级金奖

【专业技能树】
- 核心设计：Figma、Adobe Photoshop、Illustrator、C4D三维设计、Design System、交互动效与多端响应式规范
- AIGC 商业落地：Midjourney（高精度提示词工程 / 角色风格一致性）、Stable Diffusion（ControlNet 精确构图 / LoRA 训练）、Kling / Runway 视频生成、Liblib、Suno 配乐创作

【回答守则】
1. 永远以本人身份第一人称“我”作答。
2. 当提问关于面试意向、薪资期望或入职时间等未公开细节时，友好回复：“非常期待能与您及团队做进一步深入沟通！欢迎随时添加我的微信（Qwerndkljaol）或致电（15827658825），我很乐意为您详细介绍～”
3. 用户使用英文提问时用得体、专业的英文作答；用户使用中文时用专业、亲切的中文作答。
`;

// Smart local fallback in case Gemini key is missing or network failure
function generateLocalFallbackReply(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('意向') || q.includes('职位') || q.includes('找什么') || q.includes('目标') || q.includes('岗位')) {
    return '您好！我的求职意向是 **UI设计师** 或 **视觉设计师**。\n\n我具备 UI 与视觉双栖背景，既有 3 个独立 UI 平台（如 B端项目协同速合 S-Link、移动端通义千问 AIOS 等）的全链路全流程规范与交互设计经验，又能熟练将 AIGC（Midjourney、SD、Kling）融入商业化量产，非常期待能为团队带来高品质的视觉与体验设计赋能！';
  }

  if (q.includes('中科院') || q.includes('实习') || q.includes('武大数智') || q.includes('工作经验') || q.includes('经历')) {
    return '我很乐意跟您分享我的两段核心实习经历：\n\n1. **中国科学院软件研究所（2026.08 - 至今）**：担任 UI/体验设计师，负责军工系统及数据中台产品的界面视觉与交互设计，参与需求梳理、组件库搭建与高保真落地，与研发紧密协同。\n2. **武大数智教育有限公司（2026.06 - 2026.08）**：负责主要产品“睿云”AI 实验平台核心界面改版（积分充值、支付、个人中心等），精准切图基本零返工，并主导企业文化墙及发布会视觉设计。\n\n这些经历让我深刻理解了复杂业务系统下的设计推演与多方协同！';
  }

  if (q.includes('学校') || q.includes('学历') || q.includes('教育') || q.includes('毕业') || q.includes('绩点') || q.includes('大学')) {
    return '关于我的教育背景：\n\n我本科就读于 **武汉科技大学 艺术与设计学院** 视觉传达专业（23届本科在读），本科专业**绩点 3.5（专业前 10%）**。在校期间我光荣加入了中国共产党（中共党员），并担任艺术与设计学院**新媒体中心主任**，主导学院全媒体矩阵运营，多次产出爆款优质内容！';
  }

  if (q.includes('奖') || q.includes('荣誉') || q.includes('大赛') || q.includes('米兰')) {
    return '在设计赛事与行业竞赛中，我获得了多项国家级与省级荣誉：\n\n- 🏆 **米兰设计周 国家级三等奖**\n- 🏆 **米兰设计周 省级一等奖**\n- 🥉 **大广赛 省级三等奖**\n- 🥉 **NCDA未来设计师 省级三等奖**\n- 🥉 **华灿奖 省级三等奖**\n- 🥇 **“互联网+”大学生创新创业竞赛 校级金奖**\n\n这些奖项充分肯定了我在概念构思、视觉审美与创新应用方面的专业实力！';
  }

  if (q.includes('aigc') || q.includes('ai') || q.includes('工具') || q.includes('技能') || q.includes('软件') || q.includes('figma')) {
    return '在专业技能方面，我的工具栈非常全面：\n\n- **UI/UX 与产品设计**：精通 Figma、Adobe Photoshop、Illustrator、C4D 三维设计、组件库体系搭建（Design System Tokens）以及响应式多端适配；\n- **AIGC 商业化全链路**：熟练运用 Midjourney（精准提示词工程与风格统一控制）、Stable Diffusion（ControlNet 姿态/构图控制、LoRA 训练）、Kling / Runway 动态视频生成、Suno 音视频配乐等。\n\n在项目中我曾通过 AIGC 工作流使团队出图效率提升 40%，有效赋能业务落地！';
  }

  if (q.includes('联系') || q.includes('电话') || q.includes('微信') || q.includes('邮箱') || q.includes('面试')) {
    return '非常感谢您的关注！您可以随时通过以下方式直接联系我本人：\n\n- 📱 **联系电话**：15827658825\n- 💬 **微信号**：Qwerndkljaol\n- 📧 **电子邮箱**：3251908480@qq.com\n- 🎨 **站酷主页**：[查看作品集](https://www.zcool.com.cn/u/ZMTEyMjc4Mjg4)\n\n期待能与您及团队做进一步的深入交流！';
  }

  return '您好！我是依然的 AI 分身。我擅长 UI/UX 体验设计、B端系统、移动端 AIOS 以及 AIGC 商业化视觉设计。\n\n您可以向我提问关于我的 **教育背景**、**中科院/武大数智实习经历**、**速合S-Link/通义千问等核心项目**、**国家级获奖荣誉** 或 **联系方式**，我很乐意为您解答！';
}

// POST /api/chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const trimmedMsg = message.trim();

    // Check if Gemini API client is available
    if (aiClient && process.env.GEMINI_API_KEY) {
      // Build conversation contents
      const contents: Array<{ role?: string; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item && item.content && (item.role === 'user' || item.role === 'assistant')) {
            contents.push({
              role: item.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: String(item.content) }],
            });
          }
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: trimmedMsg }],
      });

      // Try primary model 'gemini-2.5-pro' as requested by the user, with fallback to 'gemini-3.8-flash'
      let generatedReply = '';
      try {
        const response = await aiClient.models.generateContent({
          model: 'gemini-2.5-pro',
          contents,
          config: {
            systemInstruction: FENG_YIRAN_SYSTEM_PROMPT,
          },
        });
        generatedReply = response.text || '';
      } catch (proErr: any) {
        console.warn('Gemini 2.5 Pro attempt failed, trying fallback to gemini-3.8-flash:', proErr?.message);
        try {
          const fallbackResponse = await aiClient.models.generateContent({
            model: 'gemini-3.8-flash',
            contents,
            config: {
              systemInstruction: FENG_YIRAN_SYSTEM_PROMPT,
            },
          });
          generatedReply = fallbackResponse.text || '';
        } catch (flashErr: any) {
          console.error('All Gemini model calls failed, using local knowledge base:', flashErr?.message);
          generatedReply = generateLocalFallbackReply(trimmedMsg);
        }
      }

      if (!generatedReply) {
        generatedReply = generateLocalFallbackReply(trimmedMsg);
      }

      return res.json({ reply: generatedReply });
    } else {
      // Fallback mode with accurate knowledge base response
      const fallbackReply = generateLocalFallbackReply(trimmedMsg);
      return res.json({ reply: fallbackReply });
    }
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    const fallbackReply = generateLocalFallbackReply(req.body?.message || '');
    return res.json({ reply: fallbackReply });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
