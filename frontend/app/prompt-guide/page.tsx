"use client";

import React from "react";
import { motion } from "framer-motion";
import PromptExample from "@/components/PromptExample";
import { promptGuide } from "@/data/content";

export default function PromptGuidePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const promptStructures = [
    {
      title: "Role-based Prompt",
      category: "Structure",
      description: "Define the AI's role",
      prompt: `Role: You are a [PROFESSION/EXPERT].
Task: [WHAT YOU WANT]
Context: [BACKGROUND INFO]`,
    },
    {
      title: "Task-focused Prompt",
      category: "Structure",
      description: "Focus on the specific task",
      prompt: `Task: [SPECIFIC ACTION]
Input: [WHAT TO WORK WITH]
Output: [DESIRED RESULT FORMAT]`,
    },
    {
      title: "Context-heavy Prompt",
      category: "Structure",
      description: "Provide extensive context",
      prompt: `Context: [SITUATION/BACKGROUND]
Requirement: [WHAT YOU NEED]
Constraints: [LIMITATIONS/GUIDELINES]`,
    },
  ];

  return (
    <div className="w-full pt-24">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-transparent to-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h1 className="font-grotesk text-5xl font-bold mb-4">
              Prompt Engineering Guide
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Master the art of writing effective prompts to get better results from AI models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="card-glass border border-ai-accent/30 p-8"
          >
            <h2 className="font-grotesk text-3xl font-bold mb-6">
              What is Prompt Engineering?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Prompt engineering is the practice of crafting carefully-designed inputs (prompts)
              to guide AI models toward producing specific, high-quality outputs. It's a skill that
              helps you communicate your intentions clearly to AI systems.
            </p>
            <p className="text-gray-400">
              Think of it as asking a question in the most effective way possible - the better
              your question, the better the answer you'll receive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prompt Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            The Anatomy of a Great Prompt
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card-glass border border-ai-accent/30"
            >
              <h3 className="font-grotesk text-2xl font-bold mb-6 text-ai-accent">
                Role
              </h3>
              <p className="text-gray-400 mb-4">
                Define who the AI should act as. This sets the context and expertise level.
              </p>
              <div className="bg-ai-bg/50 p-4 rounded border border-ai-accent/20 font-mono text-sm text-ai-glow">
                "Act as a data analyst..."
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card-glass border border-ai-accent/30"
            >
              <h3 className="font-grotesk text-2xl font-bold mb-6 text-ai-accent">
                Task
              </h3>
              <p className="text-gray-400 mb-4">
                Be specific about what you want the AI to do. Clarity here leads to better results.
              </p>
              <div className="bg-ai-bg/50 p-4 rounded border border-ai-accent/20 font-mono text-sm text-ai-glow">
                "Analyze this dataset and..."
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card-glass border border-ai-accent/30"
            >
              <h3 className="font-grotesk text-2xl font-bold mb-6 text-ai-accent">
                Context
              </h3>
              <p className="text-gray-400 mb-4">
                Provide background information that helps the AI understand the bigger picture.
              </p>
              <div className="bg-ai-bg/50 p-4 rounded border border-ai-accent/20 font-mono text-sm text-ai-glow">
                "For the Bihar government..."
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card-glass border border-ai-accent/30"
            >
              <h3 className="font-grotesk text-2xl font-bold mb-6 text-ai-accent">
                Format
              </h3>
              <p className="text-gray-400 mb-4">
                Specify how you want the output formatted for easier use and integration.
              </p>
              <div className="bg-ai-bg/50 p-4 rounded border border-ai-accent/20 font-mono text-sm text-ai-glow">
                "Format as bullet points..."
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prompt Structures */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Common Prompt Structures
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            {promptStructures.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PromptExample {...example} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Best Practices for Effective Prompts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Be Specific",
                description: "Avoid vague requests. The more specific you are, the better the output.",
                icon: "🎯",
              },
              {
                title: "Provide Examples",
                description: "Show examples of what you want. This guides the AI toward your desired output.",
                icon: "📚",
              },
              {
                title: "Use Clear Language",
                description: "Avoid jargon unless necessary. Clear communication is key.",
                icon: "💬",
              },
              {
                title: "Break Complex Tasks",
                description:
                  "Split large tasks into smaller, manageable steps for better results.",
                icon: "🔄",
              },
              {
                title: "Iterate and Refine",
                description: "Don't accept the first response. Refine and ask follow-up questions.",
                icon: "🔁",
              },
              {
                title: "Define Output Format",
                description: "Specify how you want the information formatted (bullets, tables, etc).",
                icon: "📋",
              },
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card-glass border border-ai-accent/30"
              >
                <div className="text-4xl mb-3">{practice.icon}</div>
                <h3 className="font-grotesk font-bold text-lg mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-400 text-sm">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Common Mistakes to Avoid
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                mistake: "Being Too Vague",
                solution:
                  "Instead of 'write me a story', try 'write me a 500-word sci-fi story about AI in rural India'",
              },
              {
                mistake: "Forgetting Context",
                solution:
                  "Include relevant background information so the AI understands your needs",
              },
              {
                mistake: "Overly Complex Prompts",
                solution:
                  "Keep it clear and simple. Break complex asks into multiple simpler prompts",
              },
              {
                mistake: "Not Specifying Output Format",
                solution:
                  "Always mention how you want the output (list, paragraph, table, code, etc)",
              },
              {
                mistake: "Accepting First Response",
                solution:
                  "Refine and iterate. Ask follow-ups to improve the output progressively",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card-glass border border-ai-accent/30"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">❌</div>
                  <div className="flex-grow">
                    <h4 className="font-grotesk font-bold text-lg mb-2 text-red-400">
                      {item.mistake}
                    </h4>
                    <p className="text-gray-400 mb-2">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
