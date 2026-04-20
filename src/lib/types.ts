export type Identity = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  timezone: string;
  email: string;
  phone: string;
  cv: string;
  availability: string;
  availableNow: boolean;
  photo: string;
};

export type Hero = {
  command: string;
  headlineBefore: string;
  headlineAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string; arrow?: string };
  secondaryCta: { label: string; href: string; arrow?: string };
  sidecard: { k: string; v: string }[];
};

export type About = {
  sectionNum: string;
  sectionTitle: string;
  sectionMeta: string;
  body: string[];
  meta: string[];
  stats: { n: string; suffix?: string; l: string }[];
};

export type Work = {
  sectionNum: string;
  sectionTitle: string;
  sectionMeta: string;
  footNote: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  label: string;
  description: string;
  role: string;
  year: string;
  client: string;
  stack: string[];
  liveUrl: string;
  thumbnail: string | null;
  kicker: string;
  summary: string;
  duration?: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
};

export type Skills = {
  sectionNum: string;
  sectionTitle: string;
  sectionMeta: string;
  rows: { n: string; items: string[]; context: string }[];
};

export type Experience = {
  sectionNum: string;
  sectionTitle: string;
  sectionMeta: string;
  rows: {
    current: boolean;
    date: string;
    role: string;
    org: string;
    desc: string;
    tag: string;
  }[];
};

export type Testimonials = {
  sectionNum: string;
  sectionTitle: string;
  sectionMeta: string;
  quotes: { quote: string; name: string; title: string; meta: string }[];
};

export type Contact = {
  sectionNum: string;
  headline: string;
  leadCopy: string;
  hours: string;
};

export type Social = { label: string; url: string };

export type Footer = {
  copyright: string;
  lastUpdated: string;
  colophon: string[];
};

export type Content = {
  identity: Identity;
  hero: Hero;
  marquee: string[];
  about: About;
  work: Work;
  projects: Project[];
  skills: Skills;
  experience: Experience;
  testimonials: Testimonials;
  contact: Contact;
  social: Social[];
  footer: Footer;
};
