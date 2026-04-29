export type SkillCatalogEntry = {
  id: string;
  name: string;
  description: string;
  author: string;
  source: string;
  /** Approximate number of skills in the source */
  skillCount: number;
  tags: string[];
  /** Stars or usage proxy — used for sorting */
  stars: number;
};

export const SKILL_CATALOG: SkillCatalogEntry[] = [
  {
    id: "antigravity-awesome-skills",
    name: "Antigravity Awesome Skills",
    description:
      "Curated collection of 1,400+ skills covering development, security, infra, product, marketing, AI engineering, and more. The largest community skill library.",
    author: "Antigravity / community",
    source: "https://github.com/sickn33/antigravity-awesome-skills",
    skillCount: 1436,
    tags: ["dev", "security", "infra", "product", "marketing", "ai"],
    stars: 35000,
  },
  {
    id: "gstack",
    name: "gstack — Engineering Methodology",
    description:
      "Complete dev-lifecycle methodology by Garry Tan (YC CEO): office-hours, planning, CEO review, QA, ship, deploy, canary, freeze, security officer, and more.",
    author: "Garry Tan",
    source: "https://github.com/garrytan/gstack",
    skillCount: 38,
    tags: ["dev", "methodology", "workflow", "ship"],
    stars: 2400,
  },
  {
    id: "mattpocock-skills",
    name: "Matt Pocock Skills",
    description:
      "12 opinionated engineering skills: /tdd, /to-prd, /triage, /zoom-out, /grill-me, /diagnose, and more. TypeScript & DX-focused.",
    author: "Matt Pocock",
    source: "https://github.com/mattpocock/skills",
    skillCount: 12,
    tags: ["dev", "typescript", "tdd", "workflow"],
    stars: 4100,
  },
  {
    id: "ai-sales-team",
    name: "AI Sales Team",
    description:
      "5 parallel B2B sales agents: company research, decision-maker mapping, BANT/MEDDIC qualification, competitor intel, and outreach sequences.",
    author: "zubair-trabzada",
    source: "https://github.com/zubair-trabzada/ai-sales-team-claude",
    skillCount: 14,
    tags: ["sales", "crm", "b2b", "outreach"],
    stars: 890,
  },
];
