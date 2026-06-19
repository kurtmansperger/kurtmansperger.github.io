export const profile = {
  name: 'Kurt Mansperger',
  tagline: 'Technology Leader · Digital Transformation, Data & AI',
  bio: "Technology leader with 18+ years of experience in program management, data strategy, and digital transformation. I lead projects to solve complex data challenges, optimize enterprise systems, and leverage AI for business insights — most recently at Private Equity–backed companies, and previously as CTO of the Boston Public Library.",
  location: 'Greater Boston',
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
    title: 'Data Architect',
    org: 'Techtorch',
    dates: 'May 2024 — Present',
    body: [
      'Lead Salesforce and data transformation initiatives for Private Equity–owned companies with 1,000+ employees — enhancing data integrity, automating workflows, and identifying revenue leakage to drive operational efficiency and growth.',
    ],
  },
  {
    title: 'Principal Technology Consultant',
    org: 'Independent Consulting',
    dates: 'Jun 2023 — May 2024',
    body: [
      'Founded and scaled a consulting practice focused on technology strategy, data transformation, and operational excellence across diverse industries — from improving critical sales data and processes to identifying contractual risks and revenue leakage with AI.',
      'Developed AI-driven solutions to analyze unstructured data and surface contractual risks and revenue leakage for clients.',
      'Architected and configured core systems for five organizations to optimize critical business processes, increasing efficiency, revenue capture, and reporting accuracy — saving one organization 300+ hours annually.',
      'Conducted a comprehensive security assessment and implemented improvements, significantly strengthening the security posture and compliance of a campaign organization with 30,000+ staff.',
    ],
  },
  {
    title: 'Chief Technology Officer',
    org: 'Boston Public Library',
    dates: 'Mar 2019 — Jun 2023',
    body: [
      'Drove strategy and operational oversight for both public and staff technology across 27 locations, ~500 staff, and several partner organizations. Oversaw 20+ staff positions and managed a ~$5M annual budget spanning federal, state, consortium, city, endowment, and donor funding sources.',
      'Established and implemented a new vision and strategic plan for the IT department, and led high-priority, cross-functional initiatives from planning through staff-wide communication and implementation.',
      'Led recovery, communications, and security hardening after a ransomware attack; led the staff transition to remote work during the COVID-19 pandemic (hardware deployment, collaboration tools, virtual phone system, and virtual programming tools).',
      'Maximized impact and funding efficiency through digital-equity initiatives — expanding the WiFi hotspot lending program, launching a Chromebook lending program, expanding exterior WiFi, and supporting virtual programming.',
      "Secured $3.4M in federal funding and developed a program to bridge Boston's digital divide in partnership with the Boston Housing Authority.",
      'Identified wasteful processes across the library and led teams in designing streamlined solutions that saved hundreds of hours monthly.',
      'Developed a transition plan and guided the incoming CTO after completing an executive search, enabling a seamless handoff.',
    ],
  },
  {
    title: 'Co-Founder & Chief Operating Officer',
    org: 'First Step Coding',
    dates: 'Nov 2016 — Mar 2019',
    body: [
      'Top-rated beginner-focused coding course that helped hundreds of individuals improve their technical skills and advance their careers. Refined customer experiences, streamlined operations, and mentored students.',
      'Grew First Step Coding to over $400K in annual revenue with 500+ graduates.',
      'Refined and automated parts of the curriculum and business to improve customer experience, providing alternate learning methods while minimizing operational overhead.',
      'Sourced, trained, and managed exceptional instructors across 4 cities and online while maintaining a Net Promoter Score above 76.',
      'Forged partnerships with leading bootcamps, mentored students through career decisions, and taught numerous cohorts for both our introductory coding and data analytics courses.',
    ],
  },
  {
    title: 'Senior Solution Architect',
    org: 'Intevity',
    dates: 'May 2015 — May 2017',
    body: [
      'Developed a new business line in subscription billing and revenue management by building key partner and client relationships.',
      'Architected a highly scalable subscription billing solution fulfilling complex requirements across global B2B and B2C businesses for a billion-dollar conglomerate.',
      'Led a platform assessment including a gap analysis of subscription billing solutions and a solution blueprint detailing how complex business needs would be addressed in Aria Systems and Zuora.',
      'Defined requirements for every interaction point with the billing system — from a custom Quote-to-Cash workflow in Salesforce to eCommerce, self-service, and provisioning across many products, and handling complex legal and accounting requirements in the US, Europe, and Latin America.',
      'Led 20+ consultants, partner, and client resources (onshore and offshore) through end-to-end solution architecture design and implementation with Aria Systems at the core.',
    ],
  },
  {
    title: 'Senior Project Manager',
    org: 'Intevity',
    dates: 'May 2013 — Apr 2015',
    body: [
      'Owned strategic client and partner relationships while coaching and managing agile teams on financial services, retail, and early-stage startup custom development projects worth over $1.5M annually.',
      'Managed multiple projects simultaneously — from creating work plans to staffing and managing development teams to tracking and reporting on engagement status, risks, and economics.',
    ],
  },
  {
    title: 'Technology Consultant',
    org: 'Deloitte Consulting',
    dates: 'Jun 2011 — May 2013',
    body: [
      'Managed teams of up to eight developers through the entire SDLC building large-scale eligibility systems for states — Medicaid, Long Term Care (LTC), Food Stamps (SNAP), and Unemployment Insurance.',
      'Managed a testing team of six offshore resources who developed and routinely executed 1,300+ test cases.',
      'Led the development of an automated regression test suite, saving 400+ hours annually and elevating software quality.',
    ],
  },
  {
    title: 'Business Technology Analyst',
    org: 'Deloitte Consulting',
    dates: 'Jun 2008 — Jun 2011',
    body: [
      'Analyzed pricing benchmarks and developed a new pricing model for all services across several hospitals, increasing profitability by $3.2 million.',
      'Pioneered the configuration management framework for all Java projects in a mid-western state — from environment setup to build and deployment automation — with detailed supporting documentation.',
      'Authored and delivered comprehensive productivity-tool and user-interface design classes for 200+ colleagues.',
    ],
  },
  {
    title: 'Summer Scholar',
    org: 'Deloitte Consulting',
    dates: 'Jun 2007 — Aug 2007',
    body: [
      'Developed business requirements and design for a contact-management solution within a large government implementation, and developed technical requirements and supporting documentation for an Enterprise Service Bus.',
    ],
  },
  {
    title: 'Threat and Vulnerability Management (Ethical Hacking)',
    org: 'PricewaterhouseCoopers',
    dates: 'May 2006 — Aug 2006',
    body: [
      'Assessed the security of systems for one of the largest credit unions in the United States and made recommendations to protect against future attacks.',
      'Completed a SOX assessment for a billion-dollar hospitality holding corporation.',
    ],
  },
  {
    title: 'Sales Representative',
    org: 'Vector Marketing',
    dates: 'May 2005 — Aug 2005',
    body: [
      'Streamlined the door-to-door cutlery sales process to optimize revenue and minimize lost opportunities. Achieved top office sales several weeks throughout the summer.',
    ],
  },
  {
    title: 'Financial Analyst',
    org: 'JetBlue Airways',
    dates: 'May 2004 — Aug 2004',
    body: [
      'Analyzed budgets across every department and identified opportunities for cost reduction. Reviewed findings and recommended improvements during multi-day meetings with the President, COO, and department VPs.',
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
    org: 'University of Maryland — A. James Clark School of Engineering · 2003–2008',
    body: 'Activities: Solar Decathlon, IEEE, Intramural Soccer, Racquetball, Tennis.',
  },
  {
    degree: 'B.S. Finance',
    org: 'University of Maryland — Robert H. Smith School of Business · 2003–2007',
    body: 'Activities: QUEST Honors Fellows Program, Hinman CEOs, Research Fellows Program, Financial Services Fellows Program, College Park Environmental Group, Finance, Banking & Investment Society.',
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
    items: ['ITIL v3 Foundation', 'Continuous Innovation Trainer'],
  },
  {
    name: 'Languages',
    items: ['English (Native)', 'Spanish (Limited Working)'],
  },
];
