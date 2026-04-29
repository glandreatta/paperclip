import type { AgentRole, AgentIconName } from "@paperclipai/shared";

export type AgentTemplateAgent = {
  name: string;
  title: string;
  role: AgentRole;
  icon: AgentIconName;
  capabilities: string;
  /** skill slugs to attach if they exist in the company library */
  suggestedSkillSlugs: string[];
};

export type AgentTemplate = {
  id: string;
  name: string;
  description: string;
  /** Recommended source to install skills before using this template */
  recommendedSkillSource: string | null;
  agents: AgentTemplateAgent[];
  tags: string[];
};

export const AGENT_TEMPLATES: AgentTemplate[] = [
  {
    id: "three-man-team",
    name: "Three-Person Engineering Team",
    description:
      "Architect plans and owns deploys. Builder implements exactly the brief. Reviewer enforces quality. Structured handoff via BUILD-LOG and REVIEW-REQUEST files.",
    recommendedSkillSource: null,
    agents: [
      {
        name: "Architect",
        title: "Technical Lead",
        role: "cto",
        icon: "brain",
        capabilities:
          "Plans features, writes architect briefs, directs Builder and Reviewer, owns deploy gate. Decides technical questions alone; escalates product decisions to user. Anti-drift: one step at a time, scope locked.",
        suggestedSkillSlugs: [],
      },
      {
        name: "Builder",
        title: "Senior Developer",
        role: "engineer",
        icon: "code",
        capabilities:
          "Implements exactly what ARCHITECT-BRIEF.md says. No scope creep. Writes REVIEW-REQUEST.md when done. Halts until Reviewer clears. Follows stack conventions strictly.",
        suggestedSkillSlugs: [],
      },
      {
        name: "Reviewer",
        title: "Senior Code Reviewer",
        role: "qa",
        icon: "eye",
        capabilities:
          "Reviews only the files Builder listed. Checks spec compliance, security, logic, and standards. Writes REVIEW-FEEDBACK.md. Never approves work to move things along.",
        suggestedSkillSlugs: [],
      },
    ],
    tags: ["engineering", "three-man-team", "structured"],
  },
  {
    id: "sales-team",
    name: "B2B Sales Team",
    description:
      "Five specialized agents for the complete B2B sales pipeline: company research, contact mapping, opportunity qualification, competitor intel, and outreach strategy.",
    recommendedSkillSource: "https://github.com/zubair-trabzada/ai-sales-team-claude",
    agents: [
      {
        name: "Sales Researcher",
        title: "Company Research Analyst",
        role: "researcher",
        icon: "search",
        capabilities:
          "Deep-dives on target companies: tech stack, funding, headcount, pain points, recent news, and strategic direction. Builds prospect dossiers.",
        suggestedSkillSlugs: ["sales-company", "sales"],
      },
      {
        name: "Contact Mapper",
        title: "Decision-Maker Intelligence",
        role: "researcher",
        icon: "target",
        capabilities:
          "Maps org charts and identifies champions, economic buyers, and blockers. Profiles key contacts and recommends outreach order.",
        suggestedSkillSlugs: ["sales-contacts", "sales"],
      },
      {
        name: "Deal Qualifier",
        title: "Opportunity Analyst",
        role: "pm",
        icon: "gem",
        capabilities:
          "Runs BANT and MEDDIC qualification frameworks. Scores deal health, identifies red flags, and recommends next steps.",
        suggestedSkillSlugs: ["sales-opportunity", "sales"],
      },
      {
        name: "Competitive Intel",
        title: "Competitive Analyst",
        role: "researcher",
        icon: "radar",
        capabilities:
          "Builds battlecards: competitor positioning, pricing, weaknesses, win/loss patterns, and objection-handling guidance.",
        suggestedSkillSlugs: ["sales-competitive", "sales"],
      },
      {
        name: "Outreach Strategist",
        title: "Sales Strategist",
        role: "cmo",
        icon: "mail",
        capabilities:
          "Synthesizes research into outreach sequences: personalized messaging, timing recommendations, channel mix, and follow-up cadence.",
        suggestedSkillSlugs: ["sales-strategy", "sales"],
      },
    ],
    tags: ["sales", "b2b", "crm", "outreach"],
  },
  {
    id: "engineering-team",
    name: "Full Engineering Team",
    description:
      "CTO owns architecture and roadmap. Two engineers handle backend and frontend. QA owns test coverage. DevOps handles infra and deployments.",
    recommendedSkillSource: null,
    agents: [
      {
        name: "CTO",
        title: "Chief Technology Officer",
        role: "cto",
        icon: "crown",
        capabilities:
          "Owns architecture decisions, tech roadmap, and engineering culture. Reviews critical PRs. Escalates spend and timeline risks. Manages engineering team.",
        suggestedSkillSlugs: ["senior-architect", "architecture", "code-review-excellence"],
      },
      {
        name: "Backend Engineer",
        title: "Senior Backend Engineer",
        role: "engineer",
        icon: "database",
        capabilities:
          "Builds APIs, database models, and business logic. Owns performance, reliability, and security of server-side code. TypeScript/Node.js focus.",
        suggestedSkillSlugs: ["backend-development-feature-development", "typescript-pro", "nodejs-best-practices"],
      },
      {
        name: "Frontend Engineer",
        title: "Senior Frontend Engineer",
        role: "engineer",
        icon: "code",
        capabilities:
          "Builds React components, manages state, implements design system. Owns accessibility, performance, and cross-browser compatibility.",
        suggestedSkillSlugs: ["react-best-practices", "typescript-expert", "frontend-developer"],
      },
      {
        name: "QA Engineer",
        title: "QA & Testing Lead",
        role: "qa",
        icon: "bug",
        capabilities:
          "Writes unit, integration, and E2E tests. Maintains test coverage. Catches regressions before they hit production. Owns QA automation.",
        suggestedSkillSlugs: ["e2e-testing", "tdd-workflow", "test-automator"],
      },
      {
        name: "DevOps",
        title: "DevOps Engineer",
        role: "devops",
        icon: "cog",
        capabilities:
          "Manages CI/CD pipelines, infrastructure, deployments, and monitoring. Owns uptime, costs, and incident response.",
        suggestedSkillSlugs: ["kubernetes-deployment", "terraform-infrastructure", "cloud-devops"],
      },
    ],
    tags: ["engineering", "full-team", "product"],
  },
  {
    id: "marketing-team",
    name: "Digital Marketing Team",
    description:
      "CMO owns strategy. Content creates SEO-optimized articles and copy. SEO handles technical optimization. Social manages channels and community.",
    recommendedSkillSource: null,
    agents: [
      {
        name: "CMO",
        title: "Chief Marketing Officer",
        role: "cmo",
        icon: "sparkles",
        capabilities:
          "Owns brand strategy, messaging, ICP definition, and go-to-market. Coordinates content, SEO, and social. Approves campaigns.",
        suggestedSkillSlugs: ["product-marketing-context", "content-strategy", "kotler-macro-analyzer"],
      },
      {
        name: "Content Writer",
        title: "Content Marketing Specialist",
        role: "designer",
        icon: "file-code",
        capabilities:
          "Writes SEO-optimized blog posts, landing pages, case studies, and email sequences. Adapts tone for different audiences and channels.",
        suggestedSkillSlugs: ["seo-content-writer", "copywriting", "blog-writing-guide"],
      },
      {
        name: "SEO Specialist",
        title: "SEO & Technical SEO Lead",
        role: "engineer",
        icon: "globe",
        capabilities:
          "Keyword research, technical SEO audits, schema markup, internal linking, Core Web Vitals optimization, and rank tracking.",
        suggestedSkillSlugs: ["seo-audit", "seo-technical", "seo-fundamentals"],
      },
      {
        name: "Social Media Manager",
        title: "Social & Community Manager",
        role: "general",
        icon: "message-square",
        capabilities:
          "Creates and schedules social content, monitors engagement, manages community interactions, and reports on channel performance.",
        suggestedSkillSlugs: ["social-content", "social-orchestrator", "twitter-automation"],
      },
    ],
    tags: ["marketing", "content", "seo", "social"],
  },
];
