export const profile = {
  name: 'Kurt Mansperger',
  tagline: 'Technology Leader · Digital Transformation, Data & AI',
  bio: 'Technology leader with 18+ years of experience leading high-impact digital transformations — from architecting a billion-dollar SaaS billing system to modernizing technology for a 500-person organization. I excel at managing distributed teams, streamlining operations, and aligning technology strategy with business goals to drive measurable growth.',
  location: 'Boston, MA',
  email: 'kurt.mansperger@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kurtmansperger',
  resumePdf: '/pdf/Kurt%20Mansperger%20Resume.pdf',
  avatar: '/images/profile.png',
  siteUrl: 'https://kurtmansperger.com',
};

export type Role = {
  title: string;
  org: string;
  dates: string;
  body: string[];
};

export const experience: Role[] = [
  {
    title: 'Delivery Manager',
    org: 'Techtorch',
    dates: 'May 2024 — Present',
    body: [
      'Directed technology transformations for PE-backed SaaS companies (500+ employees), improving data integrity, accelerating reporting cycles, and providing board-level visibility into ARR, renewals, and operational KPIs.',
      'Led data migration remediation for a billion-dollar SaaS company — identifying missed billings, consolidating duplicate subscriptions, correcting invalid pricing, and improving governance to support strong data quality ongoing.',
      'Managed multi-country offshore teams in the development of data warehouses, coaching engineers to understand the "why" behind their work and approach problems holistically — driving higher quality output and increased efficiency.',
      'Designed and implemented a scalable, repeatable system to identify and de-duplicate Salesforce accounts, executing a phased rollout with clear communication to minimize risk and proactively manage impacts to key metrics.',
      'Developed an AI-powered contract intelligence tool that transforms unstructured PDFs into structured contract terms to validate subscription and billing data, uncovering revenue leakage across multiple clients.',
    ],
  },
  {
    title: 'Principal Technology Consultant',
    org: 'Mansperger Makings',
    dates: 'Jul 2023 — May 2024',
    body: [
      'Acted as a fractional CTO for multiple clients, providing end-to-end technology strategy and operational leadership to drive growth, efficiency, and customer impact.',
      'Guided startups on product-market fit and technology feasibility, while advising established organizations on scaling operations and improving customer experience.',
      'Conducted enterprise-wide security assessments, improved configuration of core systems, and implemented targeted training programs — materially improving the security posture of a 30,000+ staffing organization.',
      'Designed and implemented core systems and cross-platform integrations for five organizations, standardizing processes, enhancing reporting, and saving hundreds of hours annually.',
      'Developed an AI-driven solution that analyzes public data to uncover strategic opportunities and flag potential risks for a top-tier international client.',
    ],
  },
  {
    title: 'Chief Technology Officer',
    org: 'Boston Public Library',
    dates: 'Mar 2019 — Jun 2023',
    body: [
      "Directed technology strategy and operations for 500 staff across 27 locations, led an IT department of 5 managers and 20 IT staff, and managed a $5M annual budget — enhancing service delivery to the organization's 4 million+ customers.",
      'Crafted and executed a forward-thinking technology strategy, enhancing both staff efficiency and customer service, and repositioning the IT department as a key business partner.',
      'Led the transition to remote work for 500+ staff during COVID-19 by procuring, architecting, and rolling out new systems and processes to ensure work continuity and long-term efficiencies.',
      'Secured $3.4M in federal funding and championed an effort to bridge the digital divide by deploying 6,200 computers and 3,000 routers in partnership with the Boston Housing Authority to reach those most in need.',
      'Led the recovery, communications, and security hardening effort in partnership with Microsoft DART and federal intelligence agencies following a ransomware attack.',
      'Led the development and rollout of an analytics platform (PowerBI via Azure Data Factory) saving 1,500+ hours of data collection and processing annually, improving accuracy and visibility, and fostering a culture of strategic decision-making.',
      'Designed and led the implementation of a shift-filling app to save supervisors ~30 hours a week while providing the structure to abide by union agreements (AirTable, Twilio, single-page Next.js app).',
      'Built a model-driven application to improve social worker data collection and analysis, providing a more holistic view of patron interactions and better metrics for funding reports and planning (MS Power Platform).',
      'Revitalized team dynamics by instilling a culture of empathy, accountability, results, and operational excellence — reducing meeting time by ~400 hours annually and boosting productivity and engagement.',
    ],
  },
  {
    title: 'Co-Founder & Chief Operating Officer',
    org: 'First Step Coding',
    dates: 'Nov 2016 — Mar 2019',
    body: [
      'Bootstrapped an educational startup to $400K+ in annual revenue while providing over 500 students with the core foundational skills needed for transitioning to a successful career in tech.',
      'Forged new partnerships with leading bootcamps, mentored students through career decisions, and taught 15+ cohorts for both our introductory coding and data analytics courses.',
      'Sourced, trained, and managed exceptional instructors and TAs to support courses across 4 cities and online while maintaining an overall NPS above 76.',
      'Refined and automated core parts of the curriculum and business operations to improve the customer experience and provide alternate learning methods to best suit student needs while minimizing operational overhead.',
    ],
  },
  {
    title: 'Senior Project Manager & Solution Architect',
    org: 'Intevity (formerly Twin Technologies)',
    dates: 'May 2013 — May 2017',
    body: [
      'Managed agile development teams, led requirements gathering, and owned strategic stakeholder relationships on custom development projects worth over $1.5M annually (financial services, technology, retail, and startup industries).',
      "Architected the overhaul of a $1B+ SaaS conglomerate's billing system post-acquisition — enhancing scalability, agility, and flexibility — generating over $10M in annual revenue growth, reducing technical debt, and supporting strategic growth.",
      'Developed a dashboard for improved visibility into KPIs and forecast projections of projects across the company.',
      "Launched regular 'lunch and learn' sessions to increase collaboration and knowledge sharing across the organization.",
    ],
  },
  {
    title: 'Senior Technology Consultant',
    org: 'Deloitte Consulting',
    dates: 'Jun 2007 — May 2013',
    body: [
      'Managed up to 8-person development teams and led requirements gathering in the implementation of state-wide eligibility systems (Medicaid, Unemployment, Nutritional Assistance, etc.) for various states.',
      'Led the development of an automated regression test suite, saving 400+ hours annually and elevating software quality.',
      'Created a new pricing strategy and tracking model for a network of hospitals, increasing annual profitability by $3.2M.',
      'Delivered dynamic productivity and design classes, enhancing the abilities of 200+ consultants across the firm.',
      'Advanced from Summer Scholar to Business Technology Analyst to Consultant to Senior Consultant.',
    ],
  },
];

export const volunteer: Role[] = [
  {
    title: 'Co-Founder, Board Member, Treasurer',
    org: 'Human Connections',
    dates: 'Feb 2014 — Present',
    body: [
      'Human Connections is a non-profit doing community-driven work in Bucerías, Mexico. I provide general guidance to the organization and add support managing the website and financials.',
    ],
  },
  {
    title: 'Co-Founder, Board Member, Advisor',
    org: 'Investours',
    dates: 'Jan 2008 — Feb 2015',
    body: [
      'Co-founded Investours, an international 501(c)(3) that combines microfinance and tourism in the form of "microfinance tours." Took a six-month sabbatical from Deloitte in 2011 to focus full-time on Investours, running operations on the ground in Mexico and managing five remote resources.',
      "Investours hosted over 550 people on tours and distributed over 175 micro-loans, enabling some of Mexico and Tanzania's poorest citizens to access funding for their small businesses. Investours Mexico ultimately evolved into Human Connections.",
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
    body: 'Institute of Electrical and Electronic Engineers (IEEE) · Solar Decathlon (Smart Home Team)',
  },
  {
    degree: 'B.S. Finance',
    org: 'University of Maryland, College Park',
    body: 'QUEST Honors Program (Six Sigma Fundamentals) · Hinman CEOs (Center for Entrepreneurship)',
  },
];

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    name: 'Top Skills',
    items: ['Client Delivery', 'Salesforce Consulting', 'Strategic Data Analysis'],
  },
  {
    name: 'Focus Areas',
    items: [
      'Digital Transformation',
      'Data Strategy',
      'AI for Business Insights',
      'Solution Architecture',
      'Program & Project Management',
      'Process Improvement',
      'Subscription Billing (Aria, Zuora)',
    ],
  },
  {
    name: 'Certifications',
    items: [
      'Leanstack Continuous Innovation Coach',
      'Inquiry Method Life Coach',
      'Agile Scrum Master',
      'ITIL Fundamentals',
    ],
  },
  {
    name: 'Languages',
    items: ['English (Native)', 'Spanish (Limited Working)'],
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
