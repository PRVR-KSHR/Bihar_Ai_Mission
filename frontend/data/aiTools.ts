export interface AITool {
  id: number;
  name: string;
  category: string;
  icon: string;
  description: string;
  color: string;
  link?: string;
  slug?: string;
  fullDescription?: string;
  aboutTool?: string;
  features?: string[];
  screenshots?: string[];
  promptGuide?: string;
  useCases?: string[];
  pricingModel?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: "chat",
    name: "AI Chat Assistants",
    slug: "chat-assistants",
    icon: "💬",
    description: "Advanced conversational AI for research, analysis, and problem-solving",
    color: "#2563EB",
  },
  {
    id: "writing",
    name: "AI Writing & Communication Tools",
    slug: "writing-communication",
    icon: "✍️",
    description: "Enhance your writing and communication with AI-powered tools",
    color: "#06B6D4",
  },
  {
    id: "productivity",
    name: "AI Productivity & Office Tools",
    slug: "productivity-office",
    icon: "📊",
    description: "Streamline workflows with AI-enhanced productivity solutions",
    color: "#38BDF8",
  },
  {
    id: "media",
    name: "AI Content & Media Generation",
    slug: "media-generation",
    icon: "🎨",
    description: "Create stunning visual content and media with AI",
    color: "#10B981",
  },
  {
    id: "developer",
    name: "AI Developer Tools",
    slug: "developer-tools",
    icon: "⚙️",
    description: "Accelerate development with AI-powered coding assistants",
    color: "#8B5CF6",
  },
  {
    id: "resources",
    name: "Additional AI Resources",
    slug: "additional-resources",
    icon: "🔗",
    description: "Explore curated AI resources and learning materials",
    color: "#F59E0B",
  },
];

export const aiTools: AITool[] = [
  // AI Chat Assistants
  {
    id: 1,
    name: "ChatGPT",
    category: "AI Chat Assistants",
    icon: "💬",
    description: "Advanced conversational AI for research, writing, and problem-solving",
    color: "#2563EB",
    link: "https://chat.openai.com",
    slug: "chatgpt",
    useCases: ["Content creation", "Programming", "Learning & research", "Brainstorming"],
    pricingModel: "Free version available; ChatGPT Plus ($20/month) with GPT-4 access"
  },
  {
    id: 2,
    name: "Claude",
    category: "AI Chat Assistants",
    icon: "🧠",
    description: "AI assistant for deep analysis, coding, and creative tasks",
    color: "#06B6D4",
    link: "https://claude.ai",
    slug: "claude",
    useCases: ["Academic writing", "Code review", "Document analysis", "Problem solving"],
    pricingModel: "Free version available; Claude Pro ($20/month)"
  },
  {
    id: 3,
    name: "Bard",
    category: "AI Chat Assistants",
    icon: "✨",
    description: "Google's conversational AI with real-time information access",
    color: "#38BDF8",
    link: "https://bard.google.com",
    slug: "bard",
    useCases: ["Current events research", "Fact-checking", "Market analysis", "News summaries"],
    pricingModel: "Free to use"
  },
  {
    id: 4,
    name: "Microsoft Copilot",
    category: "AI Chat Assistants",
    icon: "🤖",
    description: "Integrated AI assistant across Microsoft products and web",
    color: "#2563EB",
    link: "https://copilot.microsoft.com",
    slug: "microsoft-copilot",
    useCases: ["Microsoft 365 integration", "Web search assistance", "Document analysis", "Presentations"],
    pricingModel: "Free basic version; Copilot Pro ($20/month)"
  },

  // AI Writing & Communication Tools
  {
    id: 5,
    name: "Jasper",
    category: "AI Writing & Communication Tools",
    icon: "✍️",
    description: "AI-powered content creation for marketing, blogs, and social media",
    color: "#06B6D4",
    link: "https://jasper.ai",
    slug: "jasper",
    useCases: ["Blog writing", "Social media content", "Email campaigns", "Marketing copy"],
    pricingModel: "Starter ($39/month) to Business ($125+/month)"
  },
  {
    id: 6,
    name: "Copy.ai",
    category: "AI Writing & Communication Tools",
    icon: "📝",
    description: "Generate marketing copy, product descriptions, and ad content instantly",
    color: "#38BDF8",
    link: "https://copy.ai",
    slug: "copyai",
    useCases: ["Email subject lines", "Landing pages", "Ad copy", "Product descriptions"],
    pricingModel: "Free plan available; Pro ($49/month)"
  },
  {
    id: 7,
    name: "Grammarly",
    category: "AI Writing & Communication Tools",
    icon: "📋",
    description: "AI writing assistant for grammar, tone, and clarity improvement",
    color: "#2563EB",
    link: "https://grammarly.com",
    slug: "grammarly",
    useCases: ["Grammar checking", "Tone detection", "Clarity improvement", "Professional writing"],
    pricingModel: "Free version available; Premium ($12/month)"
  },
  {
    id: 8,
    name: "QuillBot",
    category: "AI Writing & Communication Tools",
    icon: "🎯",
    description: "Smart paraphraser and writing enhancement tool powered by AI",
    color: "#06B6D4",
    link: "https://quillbot.com",
    slug: "quillbot",
    useCases: ["Paraphrasing", "Grammar checking", "Citation generation", "Academic writing"],
    pricingModel: "Free plan available; Premium ($9.99/month or annual)"
  },

  // AI Productivity & Office Tools
  {
    id: 9,
    name: "Notion AI",
    category: "AI Productivity & Office Tools",
    icon: "📊",
    description: "AI integration for note-taking, database management, and writing",
    color: "#38BDF8",
    link: "https://notion.so",
    slug: "notion-ai",
    useCases: ["Note organization", "Database management", "Document writing", "Team collaboration"],
    pricingModel: "Notion Plus ($10/month) includes AI features"
  },
  {
    id: 10,
    name: "Microsoft 365 Copilot",
    category: "AI Productivity & Office Tools",
    icon: "☁️",
    description: "AI assistant built into Word, Excel, PowerPoint, and Outlook",
    color: "#2563EB",
    link: "https://microsoft.com/365",
    slug: "microsoft-365-copilot",
    useCases: ["Document creation", "Data analysis", "Email automation", "Presentation design"],
    pricingModel: "Microsoft 365 Enterprise add-on (pricing varies)"
  },
  {
    id: 11,
    name: "Google Workspace AI",
    category: "AI Productivity & Office Tools",
    icon: "🔷",
    description: "AI features in Gmail, Docs, Sheets, and other Google apps",
    color: "#06B6D4",
    link: "https://workspace.google.com",
    slug: "google-workspace-ai",
    useCases: ["Email writing", "Document collaboration", "Data analysis", "Spreadsheet automation"],
    pricingModel: "Included with Google Workspace Business Standard ($18/user/month)"
  },
  {
    id: 12,
    name: "Zapier AI",
    category: "AI Productivity & Office Tools",
    icon: "⚡",
    description: "Automate workflows and integrate apps with AI assistance",
    color: "#38BDF8",
    link: "https://zapier.com",
    slug: "zapier-ai",
    useCases: ["Workflow automation", "App integration", "Data synchronization", "Process optimization"],
    pricingModel: "Free plan; Professional ($20+/month) with AI"
  },

  // AI Content & Media Generation
  {
    id: 13,
    name: "Midjourney",
    category: "AI Content & Media Generation",
    icon: "🎨",
    description: "Create stunning AI-generated artwork and digital images",
    color: "#10B981",
    link: "https://midjourney.com",
    slug: "midjourney",
    useCases: ["Digital art creation", "Concept visualization", "Marketing images", "Design inspiration"],
    pricingModel: "Basic ($10/month) to Pro ($30/month) subscription"
  },
  {
    id: 14,
    name: "DALL-E",
    category: "AI Content & Media Generation",
    icon: "🖼️",
    description: "Generate images from text descriptions with advanced AI",
    color: "#8B5CF6",
    link: "https://openai.com/dall-e",
    slug: "dalle",
    useCases: ["Image generation", "Photo editing", "Design mockups", "Creative visualization"],
    pricingModel: "Pay-per-use ($0.015-$0.12 per image)"
  },
  {
    id: 15,
    name: "Canva AI",
    category: "AI Content & Media Generation",
    icon: "🎭",
    description: "Design templates enhanced with AI suggestions and automation",
    color: "#F59E0B",
    link: "https://canva.com",
    slug: "canva-ai",
    useCases: ["Social media design", "Marketing materials", "Presentation creation", "Brand templates"],
    pricingModel: "Free plan available; Canva Pro ($168/year)"
  },
  {
    id: 16,
    name: "Adobe Firefly",
    category: "AI Content & Media Generation",
    icon: "🔥",
    description: "Generative AI features for creative design and content generation",
    color: "#10B981",
    link: "https://adobe.com/firefly",
    slug: "adobe-firefly",
    useCases: ["Image generation", "Vector art creation", "Photo editing", "Design expansion"],
    pricingModel: "Included in Creative Cloud subscription"
  },
  {
    id: 17,
    name: "Synthesia",
    category: "AI Content & Media Generation",
    icon: "🎬",
    description: "Create AI-powered videos with digital avatars and voiceovers",
    color: "#8B5CF6",
    link: "https://synthesia.io",
    slug: "synthesia",
    useCases: ["Video creation", "Avatar videos", "Corporate videos", "Multilingual content"],
    pricingModel: "Starter ($25/month) to Enterprise custom pricing"
  },
  {
    id: 18,
    name: "HeyGen",
    category: "AI Content & Media Generation",
    icon: "🎥",
    description: "Generate professional videos with AI avatars and voices",
    color: "#F59E0B",
    link: "https://heygen.com",
    slug: "heygen",
    useCases: ["Marketing videos", "Training content", "Social media videos", "Personalized messages"],
    pricingModel: "Creator ($0.05/min) to Enterprise custom pricing"
  },

  // AI Developer Tools
  {
    id: 19,
    name: "GitHub Copilot",
    category: "AI Developer Tools",
    icon: "⚙️",
    description: "AI code completion and generation for faster development",
    color: "#8B5CF6",
    link: "https://github.com/features/copilot",
    slug: "github-copilot",
    useCases: ["Code completion", "Function generation", "Test writing", "Documentation"],
    pricingModel: "Individual ($10/month) or Business ($19/user/month)"
  },
  {
    id: 20,
    name: "Tabnine",
    category: "AI Developer Tools",
    icon: "💻",
    description: "AI-powered code completion for multiple programming languages",
    color: "#2563EB",
    link: "https://tabnine.com",
    slug: "tabnine",
    useCases: ["Code completion", "Whole-line completion", "Full function generation", "Code search"],
    pricingModel: "Free version available; Pro ($12/month per developer)"
  },
  {
    id: 21,
    name: "CodeWhisperer",
    category: "AI Developer Tools",
    icon: "🗣️",
    description: "Amazon's code generation and suggestions for developers",
    color: "#06B6D4",
    link: "https://aws.amazon.com/codewhisperer",
    slug: "codewhisperer",
    useCases: ["Code generation", "Security scanning", "AWS integration", "Multi-language support"],
    pricingModel: "Free individual tier; Professional ($19/month)"
  },
  {
    id: 22,
    name: "Replit Ghostwriter",
    category: "AI Developer Tools",
    icon: "👻",
    description: "AI-powered coding assistance in Replit online IDE",
    color: "#38BDF8",
    link: "https://replit.com",
    slug: "replit-ghostwriter",
    useCases: ["Online coding", "Code completion", "Debugging assistance", "Learning to code"],
    pricingModel: "Free in Replit; Core subscription ($7/month) for more credits"
  },

  // Additional AI Resources
  {
    id: 23,
    name: "TensorFlow",
    category: "Additional AI Resources",
    icon: "🧬",
    description: "Open-source machine learning framework for building AI models",
    color: "#F59E0B",
    link: "https://tensorflow.org",
    slug: "tensorflow",
    useCases: ["Machine learning models", "Deep learning", "Neural networks", "Computer vision"],
    pricingModel: "Free and open-source"
  },
  {
    id: 24,
    name: "Hugging Face",
    category: "Additional AI Resources",
    icon: "🤗",
    description: "Community and resources for transformer models and NLP",
    color: "#10B981",
    link: "https://huggingface.co",
    slug: "hugging-face",
    useCases: ["NLP models", "Transformer architectures", "Model sharing", "Dataset repository"],
    pricingModel: "Free community access; Pro subscription ($9/month)"
  },
  {
    id: 25,
    name: "Twelve Labs",
    category: "Additional AI Resources",
    icon: "🔬",
    description: "API for multimodal video understanding and search",
    color: "#8B5CF6",
    link: "https://twelvelabs.io",
    slug: "twelve-labs",
    useCases: ["Video analysis", "Multimodal understanding", "Video search", "Content indexing"],
    pricingModel: "Free tier available; Pro pricing based on usage"
  },
  {
    id: 26,
    name: "Runway ML",
    category: "Additional AI Resources",
    icon: "🚀",
    description: "Creative tools powered by machine learning and AI",
    color: "#F59E0B",
    link: "https://runwayml.com",
    slug: "runway-ml",
    useCases: ["Video editing", "Image generation", "Motion graphics", "Creative effects"],
    pricingModel: "Free plan available; Standard ($35/month) to Pro ($91/month)"
  },
];
