export type Language = 'zh' | 'en';

export type ProjectCategory = 'all' | 'ui' | 'ip' | 'aigc' | 'brand';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface MetricItem {
  label: LocalizedString;
  value: string;
}

export interface DesignHighlight {
  title: LocalizedString;
  desc: LocalizedString;
}

export interface Project {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: 'ui' | 'ip' | 'aigc' | 'brand';
  categoryLabel: LocalizedString;
  year: string;
  role: LocalizedString;
  tags: string[];
  coverImage: string;
  gallery: string[];
  featured: boolean;
  accentColor: string; // hex or tailwind tone e.g. '#a855f7'
  summary: LocalizedString;
  metrics: MetricItem[];
  challenge: LocalizedString;
  solution: LocalizedString;
  deliverables: LocalizedString[];
  tools: string[];
  designHighlights: DesignHighlight[];
}

export interface Experience {
  id: string;
  company: LocalizedString;
  role: LocalizedString;
  period: string;
  location: LocalizedString;
  badge?: LocalizedString;
  description: LocalizedString;
  achievements: LocalizedString[];
  skills: string[];
}

export interface Education {
  id: string;
  institution: LocalizedString;
  degree: LocalizedString;
  major: LocalizedString;
  period: string;
  badge?: LocalizedString;
  description: LocalizedString;
  honors: LocalizedString[];
  focusAreas: LocalizedString[];
}

export interface SkillDimension {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  icon: string;
  color: string;
  skills: {
    name: string;
    level: number; // 0-100
    tag: LocalizedString;
  }[];
}

export interface ToolStack {
  name: string;
  category: LocalizedString;
  proficiency: string;
}

export interface DesignerProfile {
  name: LocalizedString;
  pinyin: string;
  title: LocalizedString;
  headline: LocalizedString;
  bio: LocalizedString;
  status: LocalizedString;
  yearsOfExp: string;
  stats: {
    label: LocalizedString;
    value: string;
    desc: LocalizedString;
  }[];
  contact: {
    email: string;
    wechat: string;
    location: LocalizedString;
    socials: {
      platform: string;
      url: string;
      handle: string;
    }[];
  };
}
