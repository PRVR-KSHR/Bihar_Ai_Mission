'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/aiTools';

export default function Home() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeGovIndex, setActiveGovIndex] = useState(0);

  const results = {
    revenue: {
      ias: ['ChatGPT for Policy Briefs', 'Gemini for District Analysis', 'AI RTI Response Drafting'],
      bpsc: ['Prompt Library – Revenue', 'AI Report Generator', 'Data Summarisation Tools'],
      district: ['Land Record Verification AI', 'Inspection Report Templates', 'Circle Office Dashboards'],
      block: ['Scheme Monitoring AI', 'Beneficiary Verification Tools', 'MGNREGA Data Analysis'],
      technical: ['GIS Analysis Tools', 'OCR for Legacy Records', 'Data Pipeline Automation'],
    },
    health: {
      ias: ['Health Dashboard AI', 'Epidemic Prediction Tools', 'HMIS Analysis with Gemini'],
      bpsc: ['District Health Report AI', 'Medicine Audit Tools', 'CMO Brief Generator'],
      district: ['Vaccination Coverage Analysis', 'ANM Performance Tracker', 'Health Scheme Monitor'],
      block: ['ASHA Worker Tools', 'PHC Data Analysis', 'Malnutrition Alert System'],
      technical: ['TB Screening AI', 'Diagnostic Support Tools', 'Health Data Pipelines'],
    },
    education: {
      ias: ['Dropout Prediction Dashboard', 'School Performance AI', 'DEO Brief Generator'],
      bpsc: ['Midday Meal Monitor', 'Teacher Attendance AI', 'District Education Metrics'],
      district: ['School Visit Report AI', 'Student Retention Tools', 'RTE Compliance Checker'],
      block: ['Attendance Tracking AI', 'Class Performance Analysis', 'Parent Communication AI'],
      technical: ['Learning Analytics Tools', 'Edtech Integration APIs', 'Assessment Data Analysis'],
    },
    agriculture: {
      ias: ['Crop Yield Forecasting', 'Market Price Monitoring', 'Kharif/Rabi Planning AI'],
      bpsc: ['Farmer Database Analysis', 'FPO Management Tools', 'Subsidy Disbursement AI'],
      district: ['Block-wise Crop Monitoring', 'Irrigation Data AI', 'Pest Alert Systems'],
      block: ['WhatsApp Advisory Bot', 'Soil Health Card AI', 'MSP Calculator Tools'],
      technical: ['Satellite Imagery Analysis', 'NDVI Monitoring Tools', 'Weather Integration APIs'],
    },
    police: {
      ias: ['Crime Analytics Dashboard', 'Predictive Policing Tools', 'Resource Allocation AI'],
      bpsc: ['Crime Pattern Analysis', 'Case Management AI', 'District Safety Reports'],
      district: ['FIR Classification AI', 'Hotspot Mapping Tools', 'Patrol Optimisation'],
      block: ['Community Policing AI', 'Beat Officer Tools', 'Event Security Planning'],
      technical: ['CCTV Analytics Integration', 'Facial Recognition Review', 'Data Security Tools'],
    },
    urban: {
      ias: ['City Dashboard AI', 'Grievance Analytics', 'Urban Planning Tools'],
      bpsc: ['Property Tax AI', 'License Management Tools', 'ULB Performance Analysis'],
      district: ['Ward-level Monitoring', 'Solid Waste AI', 'Water Supply Analytics'],
      block: ['Citizen App Integration', 'Grievance Resolution AI', 'Ward Office Tools'],
      technical: ['Smart City APIs', 'IoT Data Analysis', 'Urban GIS Tools'],
    },
  };

  const govData = [
    {
      tag: 'AI GOVERNANCE FRAMEWORK',
      title: 'Bihar AI Governance Framework 2024',
      desc: "Bihar's AI Governance Framework provides a comprehensive, structured approach to AI adoption across all government departments. It defines roles, responsibilities, approval processes, and monitoring mechanisms to ensure AI serves public interest, remains accountable, and delivers measurable outcomes.",
      principles: [
        'Mandatory AI Impact Assessment before deployment',
        'Departmental AI Oversight Committee at each level',
        'Quarterly AI Performance & Audit Review cycles',
        'Citizen Feedback Integration for all public AI systems',
        'Alignment with NITI Aayog National AI Strategy',
      ],
    },
    {
      tag: 'ETHICAL AI GUIDELINES',
      title: 'Principles of Ethical AI for Bihar',
      desc: 'Ethical AI guidelines for Bihar government ensure that all AI systems deployed in public service are fair, transparent, accountable, and non-discriminatory. These principles protect citizens\' rights while enabling government efficiency.',
      principles: [
        'Fairness: No algorithmic bias against any community',
        'Transparency: Explainable decisions for public-facing AI',
        'Accountability: Clear human-in-the-loop for critical decisions',
        'Inclusivity: AI systems accessible to all citizens equally',
        'Non-maleficence: No harm to individual or community rights',
      ],
    },
    {
      tag: 'DATA PRIVACY & SECURITY',
      title: 'Citizen Data Protection Standards',
      desc: 'Bihar AI Mission mandates strict data privacy and security standards for all AI systems handling citizen data. These standards align with India\'s Digital Personal Data Protection Act (DPDPA) 2023 and best-practice cybersecurity frameworks.',
      principles: [
        'Data minimisation: Collect only what is necessary',
        'Consent: Citizen consent for non-essential data use',
        'Storage: Sovereign data storage within India',
        'Encryption: End-to-end encryption for all PII data',
        'Breach Protocol: 72-hour mandatory breach notification',
      ],
    },
    {
      tag: 'RESPONSIBLE AI TOOLKIT',
      title: 'Responsible AI Deployment Checklist',
      desc: 'A practical toolkit for Bihar government departments to assess, approve, and monitor AI systems responsibly. Includes checklists, templates, vendor evaluation matrices, and ongoing monitoring frameworks.',
      principles: [
        'Pre-deployment AI Impact Assessment (template provided)',
        'Vendor AI Ethics Assessment Framework',
        'Data Audit Checklist for AI Projects',
        'Citizen Communication Template for AI Systems',
        'Quarterly AI System Performance Review Template',
      ],
    },
  ];

  const toolsList = [
    {
      icon: '🤖',
      name: 'ChatGPT / Claude',
      desc: 'General AI assistant for drafting reports, summarising documents, analysing data, and generating policy briefs for government use.',
      prompt: '"Draft a 1-page executive summary of this district inspection report highlighting key issues and recommended actions."',
      badge: 'Free',
    },
    {
      icon: '📊',
      name: 'Gemini for Data Analysis',
      desc: 'Upload spreadsheets and get instant analysis, trend identification, and actionable insights without any coding knowledge.',
      prompt: '"Analyse this MGNREGA data and identify which panchayats have the lowest wage disbursement efficiency in the last quarter."',
      badge: 'Free',
    },
    {
      icon: '📝',
      name: 'Notion AI',
      desc: 'AI-powered knowledge management for departments — create SOPs, meeting notes, project trackers, and policy documents with AI assistance.',
      prompt: '"Create an SOP for processing ration card applications with step-by-step checklist, responsible officers, and timeline for each stage."',
      badge: 'Free',
    },
    {
      icon: '🎤',
      name: 'Whisper / Otter.ai',
      desc: 'Transcribe public meetings, gram sabhas, and administrative hearings automatically. Supports Hindi and Bhojpuri transcription.',
      prompt: '"Transcribe this audio recording of the block development meeting and create action items with responsible officers and deadlines."',
      badge: 'Free',
    },
    {
      icon: '🗺️',
      name: 'AI GIS & Mapping Tools',
      desc: 'Analyse satellite imagery for flood mapping, agricultural land assessment, urban growth tracking, and infrastructure monitoring.',
      prompt: '"Identify flood-prone areas in Darbhanga district using satellite data from the last 5 years and generate a risk-zone map."',
      badge: 'Freemium',
      paid: true,
    },
    {
      icon: '🌐',
      name: 'AI Translation Tools',
      desc: 'Translate government orders, circulars, and communications between English, Hindi, Maithili, Bhojpuri, and other regional languages instantly.',
      prompt: '"Translate this government circular from English to simple Hindi that can be understood by village-level workers and paste on notice boards."',
      badge: 'Free',
    },
  ];

  const categoryCards = categories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    icon: category.icon,
    description: category.description,
  }));

  const caseStudies = [
    {
      sector: '🌾 Agriculture',
      color: 'cs2',
      title: 'AI-Powered Crop Advisory for 500,000 Smallholder Farmers',
      problem: 'Farmers in Muzaffarpur and Vaishali lacked timely, local-language advice on crop diseases, weather, and market prices.',
      solution: 'WhatsApp-based AI chatbot in Hindi and Bhojpuri providing personalised crop advisories, pest alerts, and MSP information.',
      impacts: [
        { num: '32', label: 'Crop yield increase', unit: '%' },
        { num: '5L', label: 'Farmers reached', unit: '+' },
      ],
    },
    {
      sector: '🏙️ Urban Development',
      color: 'cs1',
      title: 'Smart Grievance Resolution in Patna Municipal Corporation',
      problem: 'Thousands of citizen complaints were backlogged, with average resolution time exceeding 45 days and no tracking system.',
      solution: 'AI triage system that auto-classifies complaints, assigns to departments, sets SLAs, and sends automated status updates to citizens.',
      impacts: [
        { num: '78', label: 'Faster resolution', unit: '%' },
        { num: '40K', label: 'Complaints resolved', unit: '+' },
      ],
    },
    {
      sector: '📚 Education',
      color: 'cs3',
      title: 'AI Dropout Prediction & Retention in Government Schools',
      problem: 'High student dropout rates in Class 6-8 in rural Bihar, with no early warning system for teachers and BEOs.',
      solution: 'Predictive model using attendance, assessment, and socioeconomic data to identify at-risk students 3 months in advance.',
      impacts: [
        { num: '24', label: 'Dropout reduction', unit: '%' },
        { num: '1.2L', label: 'Students retained', unit: '' },
      ],
    },
    {
      sector: '👮 Policing',
      color: 'cs4',
      title: 'Predictive Crime Analytics for Bihar Police',
      problem: 'District SPs lacked data-driven insights for patrol allocation, crime hotspot identification, and resource deployment.',
      solution: 'Crime prediction dashboard analysing historical FIR data, time patterns, and geographic clustering to optimise patrolling.',
      impacts: [
        { num: '18', label: 'Crime reduction', unit: '%' },
        { num: '22', label: 'Districts covered', unit: '' },
      ],
    },
    {
      sector: '🏥 Health',
      color: 'cs5',
      title: 'AI-Assisted Tuberculosis Screening via Chest X-rays',
      problem: 'Shortage of radiologists in rural health centres delayed TB diagnosis by weeks, leading to community spread.',
      solution: 'AI model deployed on mobile devices that analyses chest X-rays and flags potential TB cases for follow-up within hours.',
      impacts: [
        { num: '91', label: 'Detection accuracy', unit: '%' },
        { num: '300', label: 'Health centres', unit: '+' },
      ],
    },
    {
      sector: '🏘️ District Administration',
      color: 'cs1',
      title: 'AI-Powered Land Records Verification in Gaya District',
      problem: 'Land record discrepancies caused 60% of civil disputes. Manual verification took weeks and was prone to manipulation.',
      solution: 'OCR + NLP system that digitises legacy land records, cross-verifies data, and flags inconsistencies for officer review.',
      impacts: [
        { num: '85', label: 'Faster verification', unit: '%' },
        { num: '2.5L', label: 'Records processed', unit: '' },
      ],
    },
  ];

  const prompts = [
    {
      dept: 'Revenue Department',
      title: 'Draft Inspection Report',
      code: 'Draft a formal inspection report for [Village Name], [Block], after visiting on [Date]. Key findings: [list observations]. Format as per Bihar Revenue Department standards with sections for ground conditions, compliance status, and recommended actions.',
    },
    {
      dept: 'Health Department',
      title: 'Monthly Health Summary',
      code: 'Analyse this month\'s health data for [District]. Identify: top 3 disease burdens, vaccination coverage gaps by block, maternal health indicators below target. Generate a 1-page summary with priority actions for the CMO.',
    },
    {
      dept: 'Education Department',
      title: 'School Visit Report Generator',
      code: 'I visited [School Name] in [District] today. Observations: teacher attendance [X/Y], student attendance [X/Y], midday meal status: [details], infrastructure issues: [list]. Generate an official DEO report with compliance checklist and follow-up actions.',
    },
    {
      dept: 'District Administration',
      title: 'RTI Response Drafting',
      code: 'Draft a formal RTI response for the following query: [paste RTI question]. Available information: [paste relevant data]. Ensure the response is compliant with RTI Act 2005, within word limits, and mentions appeal rights under Section 19 if any information is denied.',
    },
  ];

  const courses = [
    {
      duration: '⏱️ 3 Days · Workshop Format',
      title: 'AI Literacy for Senior Officers',
      desc: 'A residential workshop covering AI fundamentals, governance applications, hands-on tool demonstrations, and strategic AI adoption planning for IAS and senior BPSC officers.',
      audience: '🎯 Target: IAS, BPSC Grade I-II, DMs, SPs',
    },
    {
      duration: '⏱️ 5 Days · Intensive Program',
      title: 'Prompt Engineering Mastery for Officers',
      desc: 'Hands-on training on using AI tools effectively for report writing, data analysis, policy drafting, citizen communication, and departmental planning using prompt engineering techniques.',
      audience: '🎯 Target: Mid-level Officers, BDOs, Circle Officers',
    },
    {
      duration: '⏱️ Online · 6-Week Self-paced',
      title: 'A to Z AI Program – हिंदी में',
      desc: 'Comprehensive 26-module AI literacy program in Hindi, covering AI basics, tools, applications, and governance — designed for all government employees at any level.',
      audience: '🎯 Target: All Government Employees',
    },
    {
      duration: '⏱️ 2 Days · Department-specific',
      title: 'AI for District Administration',
      desc: 'Role-specific training covering AI use cases for district collectors: grievance management, scheme monitoring, public communication, data reporting, and press releases with AI.',
      audience: '🎯 Target: District Magistrates, ADMs, SDOs',
    },
    {
      duration: '⏱️ 1 Day · Awareness Session',
      title: 'AI Awareness for Panchayat Officials',
      desc: 'Introductory awareness session on AI, digital tools, and practical applications for Mukhiyas, Panchs, and Gram Panchayat secretaries — conducted in Hindi/local languages.',
      audience: '🎯 Target: Panchayat Raj Officials',
    },
    {
      duration: '⏱️ Online · Certificate Program',
      title: 'Certified AI Governance Professional',
      desc: 'Advanced certification covering AI policy, ethics, procurement, vendor assessment, impact evaluation, and strategic leadership for AI transformation in government contexts.',
      audience: '🎯 Target: IT Officials, Policy Planners, Dept Heads',
    },
  ];

  const startups = [
    {
      num: '01',
      title: 'Government Problem Statements',
      desc: 'Access 50+ real, validated problem statements from Bihar\'s departments across health, education, agriculture, and infrastructure. Build solutions with guaranteed market access.',
      tags: ['Open Tender', 'GovTech', 'AI Solutions'],
    },
    {
      num: '02',
      title: 'Bihar AI Innovation Challenge',
      desc: 'Annual hackathon and innovation challenge with ₹50 lakh prize pool, incubation support, and pilot deployment opportunity within Bihar\'s government ecosystem.',
      tags: ['₹50L Prize Pool', 'Pilot Deployment'],
    },
    {
      num: '03',
      title: 'Startup Incubation Support',
      desc: 'Access to government sandboxes, pilot environments, data partnerships, and mentorship from IAS officers and tech leaders to accelerate your AI product development.',
      tags: ['Sandbox Access', 'Mentorship', 'Data Partners'],
    },
    {
      num: '04',
      title: 'Investor Connect Program',
      desc: 'Bihar AI Mission facilitates connections between promising GovTech startups and tier-1 VCs, impact investors, and government innovation funds focused on AI for public good.',
      tags: ['VC Network', 'Impact Funds', 'SIDBI Connect'],
    },
    {
      num: '05',
      title: 'Government Procurement Fast-Track',
      desc: 'Dedicated procurement pathway for AI startups — reduced compliance burden, faster approvals, and transparent evaluation for startups solving priority government challenges.',
      tags: ['Procurement', 'GeM Integration'],
    },
    {
      num: '06',
      title: 'AI Talent & Hiring Pipeline',
      desc: 'Connect with Bihar\'s top AI talent from NIT Patna, IIT Patna, and premier engineering colleges — through joint job fairs, research partnerships, and fellowship programs.',
      tags: ['Campus Hiring', 'Research', 'Fellowship'],
    },
  ];

  const blogs = [
    {
      img: 'b1',
      tag: 'Governance',
      title: 'How AI Can Transform District Administration in Bihar: A Practical Roadmap',
      excerpt: 'A district collector has access to more data than ever before. The question is no longer whether AI can help — but how to make it work within Bihar\'s administrative reality.',
      date: '12 Jan 2025',
    },
    {
      img: 'b2',
      tag: 'Agriculture',
      tagBg: '#FFF4F0',
      tagColor: '#F4622A',
      title: 'WhatsApp AI for Farmers: Lessons from Bihar\'s 500,000-Farmer Pilot',
      excerpt: 'When we deployed a Hindi-language AI chatbot for smallholder farmers in Muzaffarpur, the results were surprising — and instructive for the rest of India.',
      date: '8 Jan 2025',
    },
    {
      img: 'b3',
      tag: 'AI Policy',
      tagBg: '#ECFDF5',
      tagColor: '#10B981',
      title: 'Responsible AI in Government: Bihar\'s Ethical Framework Explained',
      excerpt: 'What does responsible AI look like in a state government context? Bihar AI Mission\'s framework addresses this — going beyond abstract principles to operational checklists.',
      date: '2 Jan 2025',
    },
  ];

  const getToolResults = () => {
    if (!selectedDept || !selectedRole) return [];
    const toolList =
      (results[selectedDept as keyof typeof results] &&
        results[selectedDept as keyof typeof results][
          selectedRole as keyof (typeof results)[keyof typeof results]
        ]) ||
      ['ChatGPT for Documentation', 'Gemini for Analysis', 'AI Report Templates'];

    const extras = [
      {
        t: '📚 Relevant Courses',
        p: `AI for ${selectedDept.charAt(0).toUpperCase() + selectedDept.slice(1)} Department`,
      },
      { t: '✍️ Key Prompts', p: 'Access department-specific prompt library' },
      {
        t: '📊 Case Studies',
        p: `View ${selectedDept} AI implementations in Bihar`,
      },
    ];

    return [
      ...toolList.map((tool) => ({ t: '🔧 Recommended Tool', p: tool })),
      ...extras,
    ];
  };

  const copyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Official Government of Bihar Initiative
            </div>
            <h1 className="fade-in-up">
              Bihar AI Mission –<br />
              <span>Building AI-Ready</span>
              <br />
              Governance
            </h1>
            <div className="hero-hin fade-in-up delay-1">
              बिहार एआई मिशन – एक डिजिटल भविष्य की ओर
            </div>
            <p className="fade-in-up delay-2">
              Transforming Bihar's governance through Artificial Intelligence — empowering officers, enabling better services, and
              building a future-ready state for 130 million citizens.
            </p>
            <div className="hero-btns fade-in-up delay-3">
              <a href="#learning" className="btn-primary">
                🎓 Start Learning AI
              </a>
              <a href="#tools" className="btn-secondary">
                🔧 Explore Tools
              </a>
              <a href="#contact" className="btn-secondary">
                🤝 Partner with Us
              </a>
            </div>
            <div className="hero-stats fade-in-up delay-4">
              <div className="stat">
                <span className="stat-num">
                  2,<span>400</span>+
                </span>
                <div className="stat-label">Officers Trained</div>
              </div>
              <div className="stat">
                <span className="stat-num">
                  <span>38</span>
                </span>
                <div className="stat-label">Districts Covered</div>
              </div>
              <div className="stat">
                <span className="stat-num">
                  <span>50</span>+
                </span>
                <div className="stat-label">AI Use Cases</div>
              </div>
              <div className="stat">
                <span className="stat-num">
                  <span>12</span>
                </span>
                <div className="stat-label">Departments Active</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hcm-header">
                <div className="hcm-dot" style={{ background: '#FF5F57' }}></div>
                <div className="hcm-dot" style={{ background: '#FEBC2E' }}></div>
                <div className="hcm-dot" style={{ background: '#28C840' }}></div>
                <span className="hcm-title" style={{ marginLeft: '8px' }}>
                  AI Learning Dashboard
                </span>
              </div>
              <div className="hcm-modules">
                <div className="hcm-module">
                  <div className="hcm-mod-icon">🤖</div>
                  <div className="hcm-mod-name">AI Basics</div>
                  <div className="hcm-mod-count">12 Modules · Hindi + English</div>
                </div>
                <div className="hcm-module">
                  <div className="hcm-mod-icon">✍️</div>
                  <div className="hcm-mod-name">Prompt Engineering</div>
                  <div className="hcm-mod-count">8 Modules · For Officers</div>
                </div>
                <div className="hcm-module">
                  <div className="hcm-mod-icon">🏛️</div>
                  <div className="hcm-mod-name">AI for Governance</div>
                  <div className="hcm-mod-count">15 Modules · Dept-wise</div>
                </div>
                <div className="hcm-module">
                  <div className="hcm-mod-icon">🔬</div>
                  <div className="hcm-mod-name">AI Labs</div>
                  <div className="hcm-mod-count">6 Hands-on Labs</div>
                </div>
              </div>
              <div className="hcm-prog">
                <div className="prog-row">
                  <span className="prog-label">Your Progress – AI Basics</span>
                  <span className="prog-pct">68%</span>
                </div>
                <div className="prog-bar">
                  <div className="prog-fill" style={{ width: '68%' }}></div>
                </div>
                <div className="prog-row" style={{ marginTop: '12px' }}>
                  <span className="prog-label">Prompt Engineering</span>
                  <span className="prog-pct">34%</span>
                </div>
                <div className="prog-bar">
                  <div className="prog-fill" style={{ width: '34%' }}></div>
                </div>
              </div>
            </div>
            <div className="hero-float-card hfc-1">
              <div className="hfc-icon">🏆</div>
              <div className="hfc-text">
                <div className="hfc-title">Certificate Earned!</div>
                <div className="hfc-sub">AI Governance Fundamentals</div>
              </div>
            </div>
            <div className="hero-float-card hfc-2">
              <div className="hfc-icon">📍</div>
              <div className="hfc-text">
                <div className="hfc-title">38 Districts Active</div>
                <div className="hfc-sub">Bihar-wide Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAND ========== */}
      <div className="stats-band">
        <div className="container">
          <div className="stats-inner">
            <div className="sb-stat">
              <span className="sb-num">₹500Cr+</span>
              <div className="sb-label">AI Investment Pipeline</div>
            </div>
            <div className="sb-stat">
              <span className="sb-num">2,400+</span>
              <div className="sb-label">Government Officers Trained</div>
            </div>
            <div className="sb-stat">
              <span className="sb-num">50+</span>
              <div className="sb-label">AI Use Cases Deployed</div>
            </div>
            <div className="sb-stat">
              <span className="sb-num">130M</span>
              <div className="sb-label">Citizens Impacted</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== PILLARS ========== */}
      <section className="pillars" id="about">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Our Mission</div>
            <h2 className="section-title">Four Pillars of Bihar AI Mission</h2>
            <p className="section-subtitle">
              A comprehensive approach to AI adoption — transforming governance, empowering officers, serving citizens, and fostering
              innovation.
            </p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card p1">
              <div className="pillar-icon">🏛️</div>
              <h3>AI for Governance</h3>
              <p>
                Deploying AI to enhance decision-making, policy analysis, real-time monitoring, and administrative efficiency across
                all government departments in Bihar.
              </p>
              <a href="#" className="pillar-link">
                Explore Framework →
              </a>
            </div>
            <div className="pillar-card p2">
              <div className="pillar-icon">👔</div>
              <h3>AI for Officers</h3>
              <p>
                Structured training programs, prompt libraries, and hands-on AI tools specifically designed for IAS, BPSC,
                district-level, and departmental officers.
              </p>
              <a href="#learning" className="pillar-link">
                Start Learning →
              </a>
            </div>
            <div className="pillar-card p3">
              <div className="pillar-icon">👥</div>
              <h3>AI for Citizens</h3>
              <p>
                AI-powered public services, multilingual chatbots, grievance resolution systems, and welfare delivery platforms for
                Bihar's 130 million citizens.
              </p>
              <a href="#cases" className="pillar-link">
                View Impact →
              </a>
            </div>
            <div className="pillar-card p4">
              <div className="pillar-icon">🚀</div>
              <h3>AI for Startups</h3>
              <p>
                Government problem statements, innovation challenges, incubation support, and investor connections to build a
                thriving AI startup ecosystem in Bihar.
              </p>
              <a href="#startup" className="pillar-link">
                Join Ecosystem →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEARNING HUB ========== */}
      <section className="learning" id="learning">
        <div className="container">
          <div className="learning-grid">
            <div className="learning-visual">
              <div className="lv-tabs">
                <div className="lv-tab active">All Programs</div>
                <div className="lv-tab">For Officers</div>
                <div className="lv-tab">Hindi Medium</div>
              </div>
              <div className="lv-courses">
                <div className="lv-course">
                  <div className="lv-course-num c1">A→Z</div>
                  <div className="lv-course-info">
                    <div className="lv-course-title">A to Z AI Program</div>
                    <div className="lv-course-meta">26 Modules · English + Hindi · Self-paced</div>
                  </div>
                  <span className="lv-course-badge">Popular</span>
                </div>
                <div className="lv-course">
                  <div className="lv-course-num c2">✍️</div>
                  <div className="lv-course-info">
                    <div className="lv-course-title">Prompt Engineering for Officers</div>
                    <div className="lv-course-meta">8 Modules · Practical Focus · Beginner Friendly</div>
                  </div>
                  <span className="lv-course-badge">New</span>
                </div>
                <div className="lv-course">
                  <div className="lv-course-num c3">🤖</div>
                  <div className="lv-course-info">
                    <div className="lv-course-title">AI Basics – Hindi Medium</div>
                    <div className="lv-course-meta">12 Modules · हिंदी माध्यम · No Prerequisites</div>
                  </div>
                  <span className="lv-course-badge">Free</span>
                </div>
                <div className="lv-course">
                  <div className="lv-course-num c4">🏛️</div>
                  <div className="lv-course-info">
                    <div className="lv-course-title">AI for Governance – Dept-wise</div>
                    <div className="lv-course-meta">15 Modules · Revenue, Health, Education & more</div>
                  </div>
                  <span className="lv-course-badge">Free</span>
                </div>
                <div className="lv-course">
                  <div className="lv-course-num c5">🔬</div>
                  <div className="lv-course-info">
                    <div className="lv-course-title">Hands-on AI Labs</div>
                    <div className="lv-course-meta">6 Labs · Practical Exercises · Live Scenarios</div>
                  </div>
                  <span className="lv-course-badge">Live</span>
                </div>
              </div>
            </div>
            <div className="learning-content">
              <div className="section-tag">AI Learning Hub</div>
              <h2 className="section-title">
                Learn AI. Apply It.
                <br />
                Lead Your Department.
              </h2>
              <p className="section-subtitle">
                Bihar AI Mission's structured learning platform is designed for government officers at all levels — from basic literacy
                to advanced application.
              </p>
              <div className="learning-features">
                <div className="lf-item">
                  <div className="lf-icon">🌐</div>
                  <div className="lf-text">
                    <h4>Bilingual Content – English & Hindi</h4>
                    <p>
                      All learning materials available in both English and Hindi (हिंदी), with local governance examples relevant to
                      Bihar.
                    </p>
                  </div>
                </div>
                <div className="lf-item">
                  <div className="lf-icon">🎯</div>
                  <div className="lf-text">
                    <h4>Department-Specific Learning Paths</h4>
                    <p>
                      Customised modules for Revenue, Health, Education, Agriculture, Urban Development, and 8 more departments.
                    </p>
                  </div>
                </div>
                <div className="lf-item">
                  <div className="lf-icon">🏆</div>
                  <div className="lf-text">
                    <h4>Government-Recognised Certifications</h4>
                    <p>Earn certificates recognised by Government of Bihar for professional development and career advancement.</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '32px' }}>
                <a href="#courses" className="btn-primary" style={{ textDecoration: 'none' }}>
                  View All Courses →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TOOLS DIRECTORY ========== */}
      <section className="tools" id="tools">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <div className="section-tag">AI Tools Directory</div>
            <h2 className="section-title">
              Tools That Work for
              <br />
              Government Officers
            </h2>
            <p className="section-subtitle">
              Curated AI tools with officer-specific use cases, ready-to-use prompts, and practical guidance for daily government
              work.
            </p>
          </div>
          <div className="tools-grid">
            {categoryCards.map((category) => (
              <Link key={category.id} href={`/ai-tools/${category.slug}`} className="tool-card" style={{ textDecoration: 'none' }}>
                <div className="tool-header">
                  <div className="tool-icon">{category.icon}</div>
                  <span className="tool-badge">Category</span>
                </div>
                <div className="tool-name">{category.name}</div>
                <div className="tool-desc">{category.description}</div>
                <div className="tool-prompt">
                  <div className="tool-prompt-label">Explore</div>
                  <p>Open this category to view tools, screenshots, and prompt guides.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section className="cases" id="cases">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Use Cases & Case Studies</div>
            <h2 className="section-title">AI in Action Across Bihar</h2>
            <p className="section-subtitle">
              Real-world implementations showing how AI is transforming governance, services, and outcomes for Bihar's citizens.
            </p>
          </div>
          <div className="cases-grid">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="case-card">
                <div className="case-header">
                  <div className={`case-sector ${cs.color}`}>{cs.sector}</div>
                  <div className="case-title">{cs.title}</div>
                </div>
                <div className="case-body">
                  <div className="case-row">
                    <div className="case-row-label">Problem</div>
                    <p>{cs.problem}</p>
                  </div>
                  <div className="case-row">
                    <div className="case-row-label">AI Solution</div>
                    <p>{cs.solution}</p>
                  </div>
                  <div className="case-impact">
                    {cs.impacts.map((imp, iidx) => (
                      <div key={iidx}>
                        <span className="impact-num">
                          <span>{imp.num}</span>
                          {imp.unit}
                        </span>
                        <span className="impact-label">{imp.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AI FOR MY WORK ========== */}
      <section className="ai-tool" id="ai-tool">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header center">
            <div className="section-tag">Interactive Tool</div>
            <h2 className="section-title">
              "AI for My Work" — Find Your AI Path
            </h2>
            <p className="section-subtitle">
              Select your department and role to instantly discover the most relevant AI tools, prompts, and use cases for your work.
            </p>
          </div>
          <div className="ait-widget">
            <div className="ait-step">
              <div className="ait-step-label">Step 1 — Select Your Department</div>
              <div className="ait-options">
                {Object.keys(results).map((dept) => (
                  <button
                    key={dept}
                    className={`ait-option ${selectedDept === dept ? 'selected' : ''}`}
                    onClick={() => setSelectedDept(dept)}
                  >
                    {dept === 'revenue' && '🏛️ Revenue'}
                    {dept === 'health' && '🏥 Health'}
                    {dept === 'education' && '📚 Education'}
                    {dept === 'agriculture' && '🌾 Agriculture'}
                    {dept === 'police' && '👮 Police'}
                    {dept === 'urban' && '🏙️ Urban Dev'}
                  </button>
                ))}
              </div>
            </div>
            <div className="ait-step">
              <div className="ait-step-label">Step 2 — Select Your Role</div>
              <div className="ait-options">
                {['ias', 'bpsc', 'district', 'block', 'technical'].map((role) => (
                  <button
                    key={role}
                    className={`ait-option ${selectedRole === role ? 'selected' : ''}`}
                    onClick={() => setSelectedRole(role)}
                  >
                    {role === 'ias' && 'IAS / IPS Officer'}
                    {role === 'bpsc' && 'BPSC Officer'}
                    {role === 'district' && 'District Official'}
                    {role === 'block' && 'Block Level Officer'}
                    {role === 'technical' && 'Technical Staff'}
                  </button>
                ))}
              </div>
            </div>
            {selectedDept && selectedRole && (
              <div className="ait-result visible">
                <div className="ait-res-title">Recommended AI Toolkit for You</div>
                <div className="ait-res-grid">
                  {getToolResults().map((result, idx) => (
                    <div key={idx} className="ait-res-card">
                      <div className="ait-res-card-title">{result.t}</div>
                      <p>{result.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== GOVERNANCE ========== */}
      <section className="governance" id="governance">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">AI Governance & Policy</div>
            <h2 className="section-title">
              Bihar's Framework for
              <br />
              Responsible AI
            </h2>
            <p className="section-subtitle">
              A policy-grade framework ensuring AI deployment in Bihar is ethical, inclusive, secure, and aligned with national
              guidelines.
            </p>
          </div>
          <div className="gov-grid">
            <div className="gov-pillars">
              {govData.map((gov, idx) => (
                <div
                  key={idx}
                  className={`gov-pillar ${activeGovIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveGovIndex(idx)}
                >
                  <div className="gov-p-icon">
                    {idx === 0 && '⚖️'}
                    {idx === 1 && '🛡️'}
                    {idx === 2 && '🔒'}
                    {idx === 3 && '🧰'}
                  </div>
                  <div>
                    <div className="gov-p-title">{['AI Governance Framework', 'Ethical AI Guidelines', 'Data Privacy & Security', 'Responsible AI Toolkit'][idx]}</div>
                    {idx === 0 && (
                      <div className="gov-p-desc">End-to-end governance structure for AI adoption across Bihar's government departments.</div>
                    )}
                    {idx === 1 && (
                      <div className="gov-p-desc">Principles and guidelines ensuring fairness, transparency, and accountability in AI systems.</div>
                    )}
                    {idx === 2 && (
                      <div className="gov-p-desc">Standards for citizen data protection, data sovereignty, and cybersecurity in AI systems.</div>
                    )}
                    {idx === 3 && (
                      <div className="gov-p-desc">Practical tools and checklists for departments to assess and deploy AI responsibly.</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="gov-detail">
              <div className="gov-detail-tag">{govData[activeGovIndex].tag}</div>
              <h3>{govData[activeGovIndex].title}</h3>
              <p>{govData[activeGovIndex].desc}</p>
              <div className="gov-principles">
                {govData[activeGovIndex].principles.map((principle, idx) => (
                  <div key={idx} className="gov-principle">
                    <div className="gp-check">✓</div>
                    <span className="gp-text">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROMPT LIBRARY ========== */}
      <section className="prompts" id="prompts">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Prompt Library</div>
            <h2 className="section-title">
              Ready-to-Use AI Prompts
              <br />
              for Government Officers
            </h2>
            <p className="section-subtitle">
              Copy, paste, and modify these department-specific prompts to get instant AI assistance for your daily work.
            </p>
          </div>
          <div className="prompt-grid">
            {prompts.map((prompt, idx) => (
              <div key={idx} className="prompt-card">
                <div className="prompt-header">
                  <div className="ph-dept">{prompt.dept}</div>
                  <div className="ph-title">{prompt.title}</div>
                </div>
                <div className="prompt-body">
                  <div className="prompt-code">{prompt.code}</div>
                  <button className="prompt-copy" onClick={() => copyPrompt(prompt.code)}>
                    📋 Copy Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#" className="btn-primary" style={{ textDecoration: 'none' }}>
              View All 100+ Prompts →
            </a>
          </div>
        </div>
      </section>

      {/* ========== COURSES ========== */}
      <section className="courses" id="courses">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Courses & Training</div>
            <h2 className="section-title">Government Training Programs</h2>
            <p className="section-subtitle">
              Structured, outcome-driven training programs designed for government officers, with certification and real-world
              application.
            </p>
          </div>
          <div className="courses-grid">
            {courses.map((course, idx) => (
              <div key={idx} className="course-card">
                <div className="course-top">
                  <div className="course-duration">{course.duration}</div>
                  <div className="course-title">{course.title}</div>
                  <div className="course-desc">{course.desc}</div>
                </div>
                <div className="course-bottom">
                  <div className="course-audience">{course.audience}</div>
                  <button className="course-cta">Register for Next Batch →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STARTUP ECOSYSTEM ========== */}
      <section className="startup" id="startup">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Startup & Innovation Ecosystem</div>
            <h2 className="section-title">
              Build for Bihar.
              <br />
              Scale for India.
            </h2>
            <p className="section-subtitle">
              Bihar AI Mission connects startups with real government challenges, institutional support, and investment opportunities.
            </p>
          </div>
          <div className="startup-grid">
            {startups.map((startup, idx) => (
              <div key={idx} className="startup-card">
                <div className="sc-num">{startup.num}</div>
                <div className="sc-title">{startup.title}</div>
                <div className="sc-desc">{startup.desc}</div>
                <div className="sc-tags">
                  {startup.tags.map((tag, tidx) => (
                    <span key={tidx} className="sc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                textDecoration: 'none',
                background: 'linear-gradient(135deg,#1651C8,#2563EB)',
                boxShadow: '0 4px 20px rgba(22,81,200,0.35)',
              }}
            >
              Register Your Startup →
            </a>
          </div>
        </div>
      </section>

      {/* ========== BLOG ========== */}
      <section className="blog" id="blog">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Insights & Blog</div>
            <h2 className="section-title">
              Knowledge, Policy &<br />
              AI Perspectives
            </h2>
            <p className="section-subtitle">
              Thought leadership, case studies, and policy analysis from Bihar AI Mission and its ecosystem partners.
            </p>
          </div>
          <div className="blog-grid">
            {blogs.map((blog, idx) => (
              <div key={idx} className="blog-card">
                <div className={`blog-img ${blog.img}`}>
                  {blog.img === 'b1' && '🏛️'}
                  {blog.img === 'b2' && '🌾'}
                  {blog.img === 'b3' && '🤖'}
                </div>
                <div className="blog-body">
                  <span
                    className="blog-tag"
                    style={
                      blog.tagBg
                        ? { background: blog.tagBg, color: blog.tagColor }
                        : {}
                    }
                  >
                    {blog.tag}
                  </span>
                  <div className="blog-title">{blog.title}</div>
                  <div className="blog-excerpt">{blog.excerpt}</div>
                  <div className="blog-meta">
                    <span className="blog-meta-date">{blog.date}</span>
                    <span className="blog-read">Read Article →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#" className="btn-primary" style={{ textDecoration: 'none' }}>
              View All Articles →
            </a>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <div className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <h2>
              Bihar: A National Model
              <br />
              for AI in Governance
            </h2>
            <p>Join 2,400+ government officers, 50+ startups, and 12 departments already building AI-ready Bihar.</p>
            <div className="cta-btns">
              <a href="#learning" className="btn-primary" style={{ textDecoration: 'none' }}>
                🎓 Start Your AI Journey
              </a>
              <a href="#" className="btn-secondary" style={{ textDecoration: 'none' }}>
                📄 Download AI Policy Framework
              </a>
              <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
                🤝 Partner with Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========== CONTACT ========== */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-tag">Contact & Collaborate</div>
              <h2 className="section-title">Let's Build AI-Ready Bihar Together</h2>
              <p className="section-subtitle">
                Whether you're a government department, startup, research institution, or development partner — Bihar AI Mission is
                open to collaboration.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="ci-icon">📍</div>
                  <div>
                    <div className="ci-title">Office Address</div>
                    <div className="ci-val">Bihar AI Mission, IT Department, Government of Bihar, Secretariat, Patna – 800015</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">📧</div>
                  <div>
                    <div className="ci-title">Email</div>
                    <div className="ci-val">contact@biharaimission.org</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">📞</div>
                  <div>
                    <div className="ci-title">Phone</div>
                    <div className="ci-val">+91-612-2000-XXX (Patna HQ)</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">🌐</div>
                  <div>
                    <div className="ci-title">Website</div>
                    <div className="ci-val">www.biharaimission.org</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-title">Get in Touch</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label>Designation</label>
                  <input type="text" placeholder="Your designation / role" />
                </div>
              </div>
              <div className="form-group">
                <label>Organisation / Department</label>
                <input type="text" placeholder="Organisation or Department name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.gov.in" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91-XXXXX-XXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label>Purpose of Collaboration</label>
                <select>
                  <option>Select purpose</option>
                  <option>Training & Capacity Building</option>
                  <option>AI Project Collaboration</option>
                  <option>Startup Partnership</option>
                  <option>Policy Research</option>
                  <option>Media / Press Enquiry</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Describe your collaboration interest or query..."></textarea>
              </div>
              <button className="form-submit">Submit Collaboration Request →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo" style={{ marginBottom: '0' }}>
                <div className="logo-emblem">B</div>
                <div className="logo-text">
                  <span className="main">Bihar AI Mission</span>
                  <span className="sub">Government of Bihar</span>
                </div>
              </div>
              <p>
                Official platform for AI adoption in governance, capacity building, and ecosystem development in Bihar, India. A
                national model for AI in government.
              </p>
            </div>
            <div className="footer-col">
              <h4>Platform</h4>
              <ul className="footer-links">
                <li>
                  <a href="#learning">AI Learning Hub</a>
                </li>
                <li>
                  <a href="#tools">Tools Directory</a>
                </li>
                <li>
                  <a href="#prompts">Prompt Library</a>
                </li>
                <li>
                  <a href="#courses">Courses</a>
                </li>
                <li>
                  <a href="#ai-tool">AI for My Work</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul className="footer-links">
                <li>
                  <a href="#cases">Case Studies</a>
                </li>
                <li>
                  <a href="#governance">AI Policy</a>
                </li>
                <li>
                  <a href="#startup">Startup Ecosystem</a>
                </li>
                <li>
                  <a href="#blog">Insights Blog</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Government</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">About Bihar</a>
                </li>
                <li>
                  <a href="#">IT Department, Bihar</a>
                </li>
                <li>
                  <a href="#">Digital India</a>
                </li>
                <li>
                  <a href="#">NITI Aayog AI</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Bihar AI Mission, Government of Bihar. All rights reserved. | Last Updated: January 2025</p>
            <div className="footer-badge">
              <span>🇮🇳</span>
              Made with vision for <span>Digital Bihar</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
