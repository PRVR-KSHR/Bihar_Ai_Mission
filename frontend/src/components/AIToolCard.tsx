"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

interface AIToolCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  href?: string;
  externalLink?: string;
}

export default function AIToolCard({
  id,
  name,
  description,
  category,
  icon,
  href,
  externalLink,
}: AIToolCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-glass border border-ai-accent/30 h-full flex flex-col cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <span className="text-xs px-3 py-1 rounded-full bg-ai-primary/20 text-ai-glow font-medium">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-grotesk font-bold text-xl mb-2 text-white group-hover:text-ai-accent transition-colors">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-ai-accent/20">
        <span className="text-xs text-gray-500">Learn more</span>
        {externalLink ? (
          <ExternalLink size={16} className="text-ai-accent group-hover:translate-x-2 transition-transform" />
        ) : (
          <ArrowRight size={16} className="text-ai-accent group-hover:translate-x-2 transition-transform" />
        )}
      </div>
    </motion.div>
  );

  if (externalLink) {
    return (
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return href ? <Link href={href}>{content}</Link> : <div>{content}</div>;
}
