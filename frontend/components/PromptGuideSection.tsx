"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

export const PromptGuideSection = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const promptExamples = [
    {
      title: "Role + Task + Context + Format",
      description: "The key formula for effective AI prompts",
      prompt: `Role: You are an expert AI educator
Task: Explain artificial intelligence in simple terms
Context: For beginners with no technical background
Format: Use 3-4 paragraphs with real-world examples`,
    },
    {
      title: "Content Writing",
      description: "Generate engaging content for Bihar initiatives",
      prompt: `Act as a content writer. Write a blog post about AI in government.
Make it 500 words, engaging, and informative.
Target audience: Government officials and citizens.`,
    },
    {
      title: "Research Assistant",
      description: "Gather and summarize information",
      prompt: `Research and summarize the latest AI breakthroughs.
Format as bullet points.
Include: what it is, why it matters, and potential applications.`,
    },
  ];

  const handleCopy = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="prompt" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Prompt Engineering Guide
          </h2>
          <p className="text-gray-400 text-lg">Learn how to write effective AI prompts to get the best results</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }} className="space-y-6">
          {promptExamples.map((example, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="p-6 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-2">{example.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{example.description}</p>

              <div className="bg-slate-900/80 rounded p-4 mb-4 border border-cyan-500/20 relative">
                <pre className="text-sm text-cyan-300 font-mono whitespace-pre-wrap break-words">{example.prompt}</pre>
              </div>

              <button
                onClick={() => handleCopy(idx, example.prompt)}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded transition-colors text-sm font-medium"
              >
                {copied === idx ? (
                  <>
                    <Check size={16} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy Prompt
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12 p-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/40">
          <h3 className="text-2xl font-bold text-white mb-4">Key Tips for Better Prompts</h3>
          <ul className="space-y-2 text-gray-300">
            <li>✓ Be specific and clear about what you want</li>
            <li>✓ Provide context to help AI understand your needs</li>
            <li>✓ Define the format you want (bullet points, paragraphs, etc)</li>
            <li>✓ Ask follow-up questions to refine results</li>
            <li>✓ Use examples to show desired output</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptGuideSection;
