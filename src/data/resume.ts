export const profile = {
  name: 'Kurt Mansperger',
  tagline: 'Technology Executive & Digital Transformation Leader',
  bio: 'Architected a $1B+ SaaS billing system and modernized technology operations for organizations with over 500 staff. I drive measurable growth by aligning data-driven solutions with strategic business goals.',
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
    title: 'Chief Technology Officer',
    org: 'Boston Public Library',
    dates: 'Mar 2019 — Present',
    body: [
      'Libraries have always been much more than a place that lends books, they are community hubs that enable people to learn and create new ideas to further advance themselves and others. Today, technology is a crucial part of that mission of which I am proud to be a part of.',
      'The Boston Public Library has a collection of over 23.7 million items, which makes it one of the largest municipal public library systems in the United States. It is comprised of a Central Library, twenty-five branches, a map center, business library, archival center; extensive special collections of rare books, manuscripts, photographs, and prints; and rich digital content and online services. Established in 1848, the Boston Public Library is a pioneer of public library service in America.',
    ],
  },
  {
    title: 'Co-Founder, COO, Teacher and Mentor',
    org: 'First Step Coding',
    dates: 'Nov 2016 — Present',
    body: [
      "First Step Coding empowers individuals and teams to develop the skills needed to get into a top-tier bootcamp or excel in their current role's technical functions. The curriculum and 1-on-1 mentorship is designed to make learning engaging and impactful.",
      'My responsibilities range from determining new business to building marketing and course content to managing operations and developing partnerships. When I have the time, I love to teach individuals fundamental coding skills and give them the confidence to take their career to the next level.',
    ],
  },
  {
    title: 'Senior Business Architect',
    org: 'Twin Technologies',
    dates: 'Sep 2015 — May 2017',
    body: [
      'Operated at the intersection of business strategy, user experience, and solution architecture. Drove the product and development of large global systems that fueled company growth for clients and ensured continual improvement in the way they did business.',
      'Recent experience involved replacing a large, custom, cross-product, international billing system. Other experiences include managing and architecting an interactive media sharing Xamarin app, an Adobe Experience Manager and Live Cycle implementation, a media transformation and transmission service, and a secure document sharing platform.',
    ],
  },
  {
    title: 'Senior Project Manager',
    org: 'Twin Technologies',
    dates: 'May 2013 — Sep 2015',
    body: [
      'Twin Technologies is a technology consulting services firm with an experienced engineering team and deep sector expertise — delivering business optimization, e-Commerce, and systems integration solutions, with a UX team that designs rich, intuitive visual experiences.',
      "Clients included the US Department of Labor, L'Oreal, Victoria's Secret, Under Armour, Walmart, Sysco, FedEx, Fidelity, Citi, Allstate, Accenture, Adobe, and Brightcove.",
    ],
  },
  {
    title: 'Technology Consultant',
    org: 'Deloitte Consulting',
    dates: 'Jun 2008 — May 2013',
    body: [
      'Built large scale eligibility systems for states, including Medicaid, Long Term Care (LTC), Food Stamps (SNAP), Document Submission, and Unemployment Insurance. Managed teams of up to eight developers through the entire SDLC — the LTC project involved 100+ pages, 40 reports, 4 web services, and 3 batch jobs.',
      "Developed and executed 1,300+ test cases directing a team of six offshore resources, and increased the testing team's effectiveness by eliminating 8+ weekly hours of smoke testing through an automated regression framework. Pioneered the configuration management foundation for all Java projects for a large mid-western state — environment setup, build/deployment automation, and detailed documentation.",
      'Increased profitability for a hospital network by $3.2M by developing a new pricing model for all of their services, and authored and delivered productivity tool and UI design classes for 200+ colleagues.',
    ],
  },
  {
    title: 'Research Assistant and Web Developer',
    org: 'University of Maryland',
    dates: 'Sep 2003 — Jul 2008',
    body: [
      "Worked with two business school professors to analyze data on funding for startup organizations. Built an Adobe Flash campus-tour application for the University's web design group.",
    ],
  },
  {
    title: 'Summer Scholar',
    org: 'Deloitte Consulting',
    dates: 'Jun 2007 — Aug 2007',
    body: [
      'Summer scholar on a large government system implementation focused on building requirements for the contact management portion of the application, as well as technical requirements and documentation for an Enterprise Service Bus.',
    ],
  },
  {
    title: 'Threat and Vulnerability Management Intern',
    org: 'PricewaterhouseCoopers',
    dates: 'May 2006 — Aug 2006',
    body: [
      'Technical consulting intern for the threat and vulnerability management team. Worked on several ethical hacking projects from running assessments to reporting findings with the client.',
    ],
  },
];

export const volunteer: Role[] = [
  {
    title: 'Co-Founder, Board Member, Treasurer',
    org: 'Human Connections',
    dates: 'Feb 2014 — Present',
    body: [
      'Human Connections is a small non-profit doing great work in Bucerías, Mexico. I provide general guidance to the organization and add support managing the website and financials.',
    ],
  },
  {
    title: 'Co-Founder, Board Member, Advisor',
    org: 'Investours',
    dates: 'Jan 2008 — Feb 2015',
    body: [
      'Worked with Ashwin Kaja to build Investours, an international 501(c)(3) that combines the power of microfinance and tourism in the form of "microfinance tours." In 2011, I took a six-month sabbatical from Deloitte to focus full time on Investours, running operations on the ground in Mexico and managing five remote resources.',
      "Investours has had over 550 people on tours and distributed over 175 micro-loans, enabling some of Mexico and Tanzania's poorest citizens to access funding for their small businesses. Investours Mexico ultimately evolved into Human Connections.",
    ],
  },
];

export type Education = {
  degree: string;
  org: string;
  body: string;
};

export const education: Education[] = [
  {
    degree: 'B.S. Computer Engineering',
    org: 'University of Maryland — A. James Clark School of Engineering · 2003–2008',
    body: 'Activities: Solar Decathlon, Institute of Electrical and Electronic Engineers (IEEE), Intramural Soccer, Racquetball, Tennis.',
  },
  {
    degree: 'B.S. Finance',
    org: 'University of Maryland — Robert H. Smith School of Business · 2003–2007',
    body: 'Activities: QUEST Honors Fellows Program, Hinman CEOs, Research Fellows Program, Financial Services Fellows Program, College Park Environmental Group (CPEG), Finance, Banking & Investment Society (FBIS).',
  },
];

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    name: 'Leadership',
    items: [
      'Relationship Management',
      'Project Management',
      'Product Management',
      'Business Strategy',
      'Business Analysis',
      'Scrum Master',
    ],
  },
  {
    name: 'Technical',
    items: [
      'Solution Architecture',
      'User Experience',
      'Front-End Development',
      'Back-End Development',
    ],
  },
  {
    name: 'Interests',
    items: [
      'Cooking',
      'Home Improvement',
      'Travel',
      'Sailing',
      'Skiing',
      'Racquetball',
      'Video Editing',
    ],
  },
];
