"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface PromptExampleProps {
  title: string;
  description: string;
  prompt: string;
  category?: string;
}

export default function PromptExample({
  title,
  description,
  prompt,
  category = "Example",
}: PromptExampleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-glass border border-ai-accent/30">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-grotesk font-bold text-lg text-white">
            {title}
          </h4>
          <span className="text-xs px-2 py-1 rounded bg-ai-primary/20 text-ai-glow">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      {/* Prompt Box */}
      <div className="bg-ai-bg/50 border border-ai-accent/20 rounded-lg p-4 mb-4">
        <pre className="text-sm text-ai-glow font-mono whitespace-pre-wrap break-words">
          {prompt}
        </pre>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 bg-ai-primary/20 hover:bg-ai-primary/30 rounded-lg transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
}
