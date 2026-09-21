// Single source of truth for the website (index.astro), the printable
// résumé (resume.astro), and the PDF generated from it (npm run resume:pdf).
// Edit here, rebuild, and every surface stays in sync.

export const profile = {
  name: 'Kurt Mansperger',
  title: 'VP, Data & Reporting',
  org: 'TechTorch',
  tagline: 'VP, Data & Reporting at TechTorch · Data platforms, analytics, and applied AI',
  bio: 'I lead the Data & Reporting practice at TechTorch, where we fix the data problems that stop PE-backed companies from trusting their numbers: duplicate Salesforce records, broken billing migrations, and reporting that cannot survive a board meeting. Over 19 years I have architected a billion-dollar SaaS billing platform, run technology for a 500-person institution as CTO, and shipped LLM-based tools that turn thousands of contracts into structured, reconciled data. I do my best work where data engineering, AI, and real business stakes meet.',
  location: 'Boston, MA',
  email: 'kurt.mansperger@gmail.com',
  phone: '845-797-0506',
  linkedin: 'https://www.linkedin.com/in/kurtmansperger',
  github: 'https://github.com/kurtmansperger',
  resumePdf: '/pdf/Kurt%20Mansperger%20Resume.pdf',
  siteUrl: 'https://kurtmansperger.com',
};

/** Short summary used at the top of the printable résumé. */
export const summary =
  'Data and technology executive with 19+ years spanning consulting, startups, and public-sector leadership. Currently VP, Data & Reporting at TechTorch, leading data architecture, analytics, and applied-AI delivery for PE-backed SaaS companies. Track record includes architecting a $1B+ SaaS billing platform, serving as CTO for a 500-person organization, and building LLM-based tools that recover revenue from unstructured contracts. Hands-on with data modeling, Salesforce, subscription billing, and modern AI tooling; equally comfortable owning a P&L conversation with a board or a schema review with engineers.';

export type Highlight = {
  title: string;
  context: string;
  work: string;
  outcome: string;
  stack: string[];
};

/** Case studies surfaced on the website as "Selected Work". */
export const highlights: Highlight[] = [
  {
    title: 'Board-ready reporting for PE portfolio companies',
    context:
      'PE-backed SaaS companies (500+ employees) whose CRM, billing, and finance data disagreed on ARR, renewals, and operating KPIs.',
    work:
      'Led multi-country engineering teams to design and build governed data warehouses and reporting layers that reconcile Salesforce, billing, and finance sources into one set of numbers.',
    outcome:
      'Faster reporting cycles and board-level visibility that leadership and investors trust.',
    stack: ['Data warehousing', 'Dimensional modeling', 'ELT', 'Salesforce', 'Subscription billing'],
  },
  {
    title: 'Salesforce account de-duplication at scale',
    context:
      'Years of duplicate accounts were distorting pipeline, renewal, and customer-count metrics.',
    work:
      'Designed a repeatable matching and survivorship system, then ran a phased rollout that measured the impact on key metrics before each wave and communicated changes ahead of time.',
    outcome:
      'A clean, maintainable account hierarchy with no surprises in the metrics the business runs on.',
    stack: ['Salesforce', 'SQL', 'Data quality rules', 'Change management'],
  },
  {
    title: 'Billing migration remediation for a $1B SaaS company',
    context:
      'A post-acquisition data migration left missed billings, duplicate subscriptions, and invalid pricing across the customer base.',
    work:
      'Led the remediation: profiled the data, identified and recovered missed billings, consolidated duplicate subscriptions, corrected pricing, and put governance in place to keep quality high.',
    outcome:
      'Recovered revenue, a defensible subscription record, and durable data-quality controls.',
    stack: ['Subscription billing (Zuora, Aria)', 'Salesforce', 'SQL', 'Data governance'],
  },
  {
    title: 'AI contract intelligence',
    context:
      'Thousands of customer contracts sat in PDFs while billing systems carried terms nobody could verify.',
    work:
      'Built an LLM-based extraction pipeline that converts unstructured contracts into structured terms and reconciles them against subscription and billing data.',
    outcome:
      'Revenue leakage uncovered across multiple clients, with a reusable tool the practice now applies on new engagements.',
    stack: ['LLM extraction', 'Structured outputs', 'Billing reconciliation'],
  },
  {
    title: 'Enterprise analytics platform for a 27-location institution',
    context:
      'As CTO of the Boston Public Library, performance data was collected by hand across 27 branches and 500 staff.',
    work:
      'Led the design and rollout of an analytics platform on Power BI and Azure Data Factory, and paired it with operational apps for shift filling and social-work case data.',
    outcome:
      '1,500+ hours of manual collection saved annually and a measurable shift toward data-driven decisions.',
    stack: ['Power BI', 'Azure Data Factory', 'MS Power Platform', 'Next.js'],
  },
];

export type Role = {
  title: string;
  org: string;
  dates: string;
  location?: string;
  /** Optional line under the title, e.g. to show a promotion path. */
  note?: string;
  body: string[];
};

export const experience: Role[] = [
  {
    title: 'VP, Data & Reporting',
    org: 'TechTorch',
    dates: 'May 2024 — Present',
    location: 'Boston, MA',
    note: 'Joined as Senior Data Architect; promoted to VP, Data & Reporting',
    body: [
      'Lead the Data & Reporting practice for PE-backed SaaS companies (500+ employees): own solution architecture, delivery standards, and multi-country engineering teams across concurrent engagements.',
      'Deliver board-level visibility into ARR, renewals, and operating KPIs by consolidating Salesforce, billing, and finance data into governed data warehouses and reporting layers.',
      'Led data migration remediation for a $1B SaaS company: recovered missed billings, consolidated duplicate subscriptions, corrected invalid pricing, and established ongoing data-quality governance.',
      'Designed a repeatable Salesforce account de-duplication system and ran a phased rollout that pre-measured and managed its impact on key business metrics.',
      'Built an AI contract-intelligence tool that turns unstructured contract PDFs into structured terms and reconciles them against subscription and billing data, uncovering revenue leakage across multiple clients.',
      'Introduced Claude-based agent workflows into delivery (requirements capture, user stories, UAT test cases, process and architecture diagrams), standardizing outputs across engagements.',
      'Coach offshore engineers to understand the "why" behind requirements and solve problems end to end, raising both quality and throughput.',
    ],
  },
  {
    title: 'Principal Technology Consultant',
    org: 'Mansperger Makings',
    dates: 'Jul 2023 — May 2024',
    location: 'Boston, MA',
    body: [
      'Served as fractional CTO for multiple clients, owning technology strategy and operational leadership end to end.',
      'Conducted enterprise-wide security assessments, hardened core system configurations, and ran targeted training that materially improved the security posture of a 30,000-person staffing organization.',
      'Designed and implemented core systems and cross-platform integrations for five organizations, standardizing processes and saving hundreds of hours annually.',
      'Built an AI-driven analysis of public data to surface strategic opportunities and flag risks for a top-tier international client.',
    ],
  },
  {
    title: 'Chief Technology Officer',
    org: 'Boston Public Library',
    dates: 'Mar 2019 — Jun 2023',
    location: 'Boston, MA',
    body: [
      'Directed technology strategy and operations for 500 staff across 27 locations; led 5 managers and 20 IT staff with a $5M annual budget, serving 4 million+ patrons.',
      'Led the rollout of an analytics platform (Power BI, Azure Data Factory) that saved 1,500+ hours of data collection annually and made performance metrics visible across the organization.',
      'Secured $3.4M in federal funding and deployed 6,200 computers and 3,000 routers with the Boston Housing Authority to bridge the digital divide.',
      'Led recovery, communications, and security hardening with Microsoft DART and federal agencies following a ransomware attack.',
      'Moved 500+ staff to remote work during COVID-19 by procuring, architecting, and rolling out new systems and processes.',
      'Shipped operational apps that saved supervisors ~30 hours a week (shift filling on Airtable, Twilio, and Next.js) and improved social-work case data (MS Power Platform).',
      'Rebuilt team culture around empathy, accountability, and results, cutting ~400 hours of meetings annually while raising engagement.',
    ],
  },
  {
    title: 'Co-Founder & Chief Operating Officer',
    org: 'First Step Coding',
    dates: 'Nov 2016 — Mar 2019',
    location: 'Boston, MA',
    body: [
      'Bootstrapped an education startup to $400K+ in annual revenue while preparing 500+ students for careers in tech.',
      'Taught 15+ cohorts of introductory coding and data analytics, and forged partnerships with leading bootcamps.',
      'Hired, trained, and managed instructors and TAs across 4 cities and online while maintaining an NPS above 76.',
    ],
  },
  {
    title: 'Senior Project Manager & Solution Architect',
    org: 'Intevity',
    dates: 'May 2013 — May 2017',
    location: 'Boston, MA',
    note: 'Formerly Twin Technologies',
    body: [
      "Architected the post-acquisition overhaul of a $1B+ SaaS conglomerate's billing system, generating $10M+ in annual revenue growth while reducing technical debt.",
      'Managed agile teams and owned stakeholder relationships on custom development projects worth $1.5M+ annually across financial services, technology, retail, and startups.',
      'Built a company-wide dashboard for project KPIs and forecast projections.',
    ],
  },
  {
    title: 'Senior Technology Consultant',
    org: 'Deloitte Consulting',
    dates: 'Jun 2007 — May 2013',
    location: 'Boston, MA',
    body: [
      'Managed up to 8-person development teams implementing state-wide eligibility systems (Medicaid, Unemployment, Nutritional Assistance).',
      'Led development of an automated regression test suite, saving 400+ hours annually.',
      'Created a pricing strategy and tracking model for a hospital network, increasing annual profitability by $3.2M.',
      'Advanced from Summer Scholar to Senior Consultant; taught productivity and design classes to 200+ consultants.',
    ],
  },
];

export const volunteer: Role[] = [
  {
    title: 'Co-Founder, Board Member, Treasurer',
    org: 'Human Connections',
    dates: 'Feb 2014 — Present',
    body: [
      'Human Connections is a non-profit doing community-driven work in Bucerías, Mexico. I provide general guidance to the organization and support the website and financials.',
    ],
  },
  {
    title: 'Co-Founder, Board Member, Advisor',
    org: 'Investours',
    dates: 'Jan 2008 — Feb 2015',
    body: [
      'Co-founded an international 501(c)(3) combining microfinance and tourism. Took a six-month sabbatical from Deloitte in 2011 to run operations on the ground in Mexico and manage five remote staff.',
      'Hosted 550+ people on tours and distributed 175+ micro-loans to small-business owners in Mexico and Tanzania. Investours Mexico evolved into Human Connections.',
    ],
  },
];

export type Education = {
  degree: string;
  org: string;
  body?: string;
};

export const education: Education[] = [
  {
    degree: 'B.S. Computer Engineering',
    org: 'University of Maryland, College Park',
    body: 'IEEE · Solar Decathlon (Smart Home Team)',
  },
  {
    degree: 'B.S. Finance',
    org: 'University of Maryland, College Park',
    body: 'QUEST Honors Program (Six Sigma) · Hinman CEOs (Center for Entrepreneurship)',
  },
];

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    name: 'Data & Analytics',
    items: [
      'Data architecture',
      'Data warehousing & ELT',
      'Dimensional modeling',
      'Data quality & deduplication',
      'Data governance',
      'SQL',
      'Power BI',
      'Azure Data Factory',
      'Salesforce data model',
      'Subscription billing (Zuora, Aria)',
    ],
  },
  {
    name: 'AI & Engineering',
    items: [
      'LLM extraction & structured outputs',
      'Claude & agentic workflows',
      'Solution architecture',
      'Systems integration',
      'Next.js / TypeScript',
      'MS Power Platform',
      'Airtable & Twilio automation',
    ],
  },
  {
    name: 'Leadership',
    items: [
      'Practice leadership',
      'PE portfolio-company advisory',
      'Board & executive reporting',
      'Offshore team management',
      'Program management',
      'Fractional CTO',
    ],
  },
  {
    name: 'Certifications',
    items: [
      'Leanstack Continuous Innovation Coach',
      'Agile Scrum Master',
      'ITIL Fundamentals',
      'Inquiry Method Life Coach',
    ],
  },
];

export const personal: string[] = [
  'Created memorable culinary experiences',
  'Refined negotiation tactics with my kindergartner',
  "Transformed a 1930's cottage into a home",
  'Reclaimed wood and gave it a new life',
  'Biked across New England',
  'Sailed our home from New York to Boston',
];
