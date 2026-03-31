import { Router, Request, Response } from "express";

const router = Router();

// Sample prompt examples
const promptExamples = [
  {
    id: "1",
    title: "Research Assistant",
    category: "Research",
    description: "Use ChatGPT to gather and summarize research information",
    prompt: `Role: You are an expert research assistant.
Task: Summarize the key findings about [TOPIC].
Context: Focus on recent developments and credible sources.
Format: Provide a 3-paragraph summary with key points highlighted.`,
  },
  {
    id: "2",
    title: "Government Communication",
    category: "Government",
    description: "Draft official communication and notices",
    prompt: `Role: You are a government communication specialist.
Task: Draft a formal notice regarding [TOPIC].
Context: This is for [DEPARTMENT/MINISTRY].
Format: Standard government notice format with proper headers and signatures.`,
  },
  {
    id: "3",
    title: "Educational Explanation",
    category: "Education",
    description: "Explain complex concepts for students",
    prompt: `Role: You are an educational expert.
Task: Explain [CONCEPT] to a [GRADE LEVEL] student.
Context: Make it engaging and relatable with real-world examples.
Format: Use simple language with analogies and illustrations.`,
  },
];

// Sample learning resources
const learningResources = [
  {
    id: "beginner-ai",
    title: "AI Basics for Beginners",
    level: "Beginner",
    duration: "2 weeks",
    description: "Learn the fundamentals of Artificial Intelligence",
    topics: [
      "What is AI?",
      "Types of AI",
      "Machine Learning basics",
      "Deep Learning introduction",
    ],
  },
  {
    id: "intermediate-llm",
    title: "Large Language Models (LLMs)",
    level: "Intermediate",
    duration: "3 weeks",
    description: "Deep dive into how Large Language Models work",
    topics: [
      "Transformer architecture",
      "How LLMs are trained",
      "Fine-tuning models",
      "Deployment strategies",
    ],
  },
  {
    id: "advanced-nlp",
    title: "Advanced NLP Techniques",
    level: "Advanced",
    duration: "4 weeks",
    description: "Master advanced Natural Language Processing",
    topics: [
      "Sequence-to-Sequence models",
      "Attention mechanisms",
      "BERT and GPT",
      "Multi-task learning",
    ],
  },
];

// GET prompt examples
router.get("/prompts", (req: Request, res: Response) => {
  res.json({
    success: true,
    count: promptExamples.length,
    data: promptExamples,
  });
});

// GET learning resources
router.get("/learning", (req: Request, res: Response) => {
  res.json({
    success: true,
    count: learningResources.length,
    data: learningResources,
  });
});

// GET learning resource by ID
router.get("/learning/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const resource = learningResources.find((r) => r.id === id);

  if (!resource) {
    return res.status(404).json({
      success: false,
      message: "Learning resource not found",
    });
  }

  res.json({
    success: true,
    data: resource,
  });
});

export default router;
