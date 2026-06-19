export const profile = {
  name: 'Munazza Anwar',
  roles: ['Software Engineer', 'Frontend Developer', 'Python Developer', 'AI Enthusiast', 'Freelancer'],
  tagline: 'I build software that thinks, talks, and ships.',
  location: 'Lahore, Pakistan',
  email: 'hello@munazza.dev',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    upwork: 'https://upwork.com/',
  },
}

export const aboutTimeline = [
  {
    year: '2022',
    title: 'Started CS at UMT Lahore',
    text: 'Enrolled in Computer Science, drawn to the gap between elegant theory and messy, real-world software.',
  },
  {
    year: '2023',
    title: 'Python Intern — CodeAlpha',
    text: 'First taste of professional code: automation scripts, data pipelines, and the discipline of shipping working software on a deadline.',
  },
  {
    year: '2023',
    title: 'Web Developer Intern — OASIS Infobyte',
    text: 'Built and shipped client-facing React interfaces, learning how design decisions translate directly into business outcomes.',
  },
  {
    year: '2024',
    title: 'Business Development — CloviSol',
    text: 'Moved into client handling and operations, learning to translate technical capability into commercial language — a skill that now shapes every product I build.',
  },
  {
    year: '2025',
    title: 'Going deep on AI',
    text: 'Started building with LangChain, ChromaDB, and voice AI stacks — shifting from "developer who uses AI tools" to "engineer who builds AI products."',
  },
  {
    year: '2026',
    title: 'Final Year Project: AI Voice Agent',
    text: 'Building a production-grade AI voice agent platform — my thesis project and the seed of a SaaS company.',
  },
]

export const skills = {
  categories: [
    {
      label: 'Languages',
      items: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'C / C++', level: 75 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      label: 'Frontend',
      items: [
        { name: 'React.js', level: 88 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 75 },
        { name: 'Framer Motion / GSAP', level: 70 },
      ],
    },
    {
      label: 'Backend',
      items: [
        { name: 'Node.js / Express', level: 80 },
        { name: 'FastAPI', level: 82 },
        { name: 'Django', level: 75 },
        { name: 'PostgreSQL / MongoDB', level: 78 },
      ],
    },
    {
      label: 'AI / ML',
      items: [
        { name: 'LangChain', level: 85 },
        { name: 'TensorFlow / PyTorch', level: 72 },
        { name: 'ChromaDB / Vector Search', level: 80 },
        { name: 'Prompt Engineering', level: 88 },
      ],
    },
  ],
  core: [
    { name: 'Problem Solving', value: 92 },
    { name: 'System Design', value: 78 },
    { name: 'AI Integration', value: 85 },
    { name: 'Client Communication', value: 88 },
  ],
}

export const experience = [
  {
    role: 'AI Voice Agent — Founder & Engineer',
    org: 'Final Year Project / Independent',
    period: '2025 — Present',
    points: [
      'Architecting a voice-first AI agent platform using Vapi, Deepgram, ElevenLabs, GPT-4o, LangChain and ChromaDB.',
      'Designing a vertical SaaS go-to-market for Pakistani SMEs and government helplines.',
      'Owning the full stack: React frontend, PostgreSQL + Redis backend, WhatsApp Business API integration.',
    ],
  },
  {
    role: 'Business Development & Operations',
    org: 'CloviSol',
    period: '2024 — Present',
    points: [
      'Handle client communication, proposals, and account operations for an early-stage startup.',
      'Bridge technical delivery and commercial strategy across active client engagements.',
      'Built outbound lead-generation infrastructure using Apollo CRM and Apify scraping pipelines.',
    ],
  },
  {
    role: 'Web Developer Intern',
    org: 'OASIS Infobyte',
    period: '2023',
    points: [
      'Shipped responsive, production React interfaces for client projects.',
      'Collaborated in a remote team environment with code review and iteration cycles.',
    ],
  },
  {
    role: 'Python Developer Intern',
    org: 'CodeAlpha',
    period: '2023',
    points: [
      'Built automation scripts and data-processing tools in Python.',
      'Practiced clean, testable code under real delivery deadlines.',
    ],
  },
  {
    role: 'B.S. Computer Science',
    org: 'University of Management & Technology, Lahore',
    period: '2022 — 2026 (expected)',
    points: [
      'Coursework spanning compiler construction, AI, neural networks & deep learning, and HCI.',
      'Final-year thesis: production AI voice agent with commercial deployment plan.',
    ],
  },
]

export const projects = [
  {
    id: 'voice-agent',
    title: 'AI Voice Agent Platform',
    category: 'AI',
    year: '2025–26',
    summary: 'A voice-first AI agent for SME and government helplines, built on Vapi, GPT-4o, and LangChain.',
    description:
      'A full voice AI platform that answers calls, understands intent with retrieval-augmented context from ChromaDB, and books appointments via Cal.com — designed to replace or augment human call-center agents for Pakistani SMEs and helplines like Motorway Police 130.',
    stack: ['Vapi', 'Deepgram', 'ElevenLabs', 'GPT-4o', 'LangChain', 'ChromaDB', 'React', 'PostgreSQL'],
    link: '#',
    accent: 'cyan',
  },
  {
    id: 'unipath',
    title: 'UniPath Pakistan',
    category: 'AI',
    year: '2024',
    summary: 'AI-powered university admissions aggregator with a RAG chatbot and OCR merit predictor.',
    description:
      'A platform that helps Pakistani students navigate university admissions through a retrieval-augmented chatbot, an OCR-based merit calculator, a hybrid recommendation engine, and an NLP classifier for admission documents.',
    stack: ['React', 'Node.js', 'FastAPI', 'ChromaDB', 'LangChain'],
    link: '#',
    accent: 'violet',
  },
  {
    id: 'kidney-stone',
    title: 'Kidney Stone Detection System',
    category: 'AI',
    year: '2024',
    summary: 'CNN/YOLOv8 medical imaging model with a full doctor–patient management portal.',
    description:
      'A medical imaging pipeline that detects kidney stones from scans using a CNN/YOLOv8 model, wrapped in a complete doctor-patient management system with web and mobile portals.',
    stack: ['Python', 'TensorFlow', 'YOLOv8', 'Django', 'React', 'Flutter'],
    link: '#',
    accent: 'cyan',
  },
  {
    id: 'contract-scanner',
    title: 'Contract Clause Risk Scanner',
    category: 'SaaS',
    year: '2024',
    summary: 'AI SaaS that scores contract clauses by risk and suggests plain-English negotiation lines.',
    description:
      'A freelancer-focused SaaS tool: upload a contract and receive clause-level risk scoring (High/Medium/Low), plain-English explanations, and one-line negotiation suggestions — plus a browser extension for DocuSign and Google Docs.',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Stripe'],
    link: '#',
    accent: 'violet',
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation Pipeline',
    category: 'Automation',
    year: '2024',
    summary: 'Apify-based scraper sourcing qualified leads across LinkedIn, Google Maps, and Instagram.',
    description:
      'An automated lead-generation pipeline built on Apify, targeting coaches and founders across LinkedIn, Google Maps, and Instagram for outbound campaigns in the US, UK, AU, and CA markets.',
    stack: ['Python', 'Apify', 'Apollo API', 'PostgreSQL'],
    link: '#',
    accent: 'cyan',
  },
]

export const certifications = [
  {
    title: 'Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    year: '2025',
  },
  {
    title: 'LangChain for LLM Application Development',
    issuer: 'DeepLearning.AI',
    year: '2025',
  },
  {
    title: 'Building Systems with the ChatGPT API',
    issuer: 'DeepLearning.AI',
    year: '2025',
  },
  {
    title: 'Entrepreneurship Specialization',
    issuer: 'Wharton Online',
    year: '2025',
  },
  {
    title: 'Foundations of Digital Marketing',
    issuer: 'Google',
    year: '2024',
  },
  {
    title: 'Python for Everybody',
    issuer: 'University of Michigan (Coursera)',
    year: '2023',
  },
]

export const services = [
  {
    title: 'AI Voice & Chat Agents',
    desc: 'Custom voice and chat AI agents for support, sales, or internal operations — built on LangChain, RAG, and modern LLMs.',
    icon: 'bot',
  },
  {
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end React + Python applications, from database schema to production deployment.',
    icon: 'layout',
  },
  {
    title: 'Python Automation',
    desc: 'Scrapers, pipelines, and internal tools that remove repetitive work from your team\'s day.',
    icon: 'terminal',
  },
  {
    title: 'Technical Consulting',
    desc: 'Scoping, architecture review, and build-vs-buy guidance for teams adding AI to existing products.',
    icon: 'compass',
  },
]
